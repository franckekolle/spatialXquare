// À intégrer dans ton routeur, aux côtés de handleSignup/handleLogin (import depuis auth.js)
// import { currentUser, hashPassword } from "./auth.js";

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

async function requireSuperAdmin(request, env) {
  const user = await currentUser(request, env);
  if (!user) {
    return { error: json({ ok: false, error: "Non authentifié." }, { status: 401 }) };
  }
  if (user.role !== "super_admin") {
    return { error: json({ ok: false, error: "Réservé aux super administrateurs." }, { status: 403 }) };
  }
  return { user };
}

// GET /api/admin/users — lister tous les comptes
export async function handleAdminUsersList(request, env) {
  const { error } = await requireSuperAdmin(request, env);
  if (error) return error;

  const { results } = await env.DB
    .prepare("SELECT id, email, name, role, active, created_at FROM users ORDER BY created_at ASC")
    .all();

  return json({ ok: true, users: results });
}

// POST /api/admin/users — créer un nouvel admin (depuis le tableau de bord, déjà connecté)
export async function handleAdminUsersCreate(request, env) {
  const { error } = await requireSuperAdmin(request, env);
  if (error) return error;

  const { name, email, password } = await request.json();
  if (!email || !password) {
    return json({ ok: false, error: "Email et mot de passe requis." }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);

  try {
    await env.DB.prepare(
      "INSERT INTO users (id, email, password_hash, name, role, active) VALUES (?, ?, ?, ?, 'admin', 1)"
    )
      .bind(id, String(email).toLowerCase().trim(), passwordHash, name || null)
      .run();
  } catch (err) {
    return json({ ok: false, error: "Email déjà utilisé." }, { status: 409 });
  }

  return json({ ok: true, user: { id, email, name: name || null, role: "admin" } }, { status: 201 });
}

// PATCH /api/admin/users — changer le rôle d'un compte (promouvoir/rétrograder)
export async function handleAdminUsersUpdate(request, env) {
  const { error } = await requireSuperAdmin(request, env);
  if (error) return error;

  const { user_id: userId, role } = await request.json();
  if (!userId || !["admin", "super_admin"].includes(role)) {
    return json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  await env.DB.prepare("UPDATE users SET role = ? WHERE id = ?").bind(role, userId).run();
  return json({ ok: true });
}

// DELETE /api/admin/users — supprimer un compte (y compris soi-même)
export async function handleAdminUsersDelete(request, env) {
  const { error } = await requireSuperAdmin(request, env);
  if (error) return error;

  const { user_id: userId } = await request.json();
  if (!userId) {
    return json({ ok: false, error: "user_id requis." }, { status: 400 });
  }

  // Les réponses envoyées par ce compte restent en base (historique préservé),
  // seul le compte utilisateur est supprimé.
  await env.DB.prepare("DELETE FROM users WHERE id = ?").bind(userId).run();

  // Si la base ne contient plus aucun utilisateur, la prochaine inscription
  // redevient libre (premier compte = super_admin automatique, sans code).
  return json({ ok: true });
}