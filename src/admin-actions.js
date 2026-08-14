import { currentUser, hashPassword } from "./auth.js";

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function requireAdmin(request, env) {
  const user = await currentUser(request, env);
  if (!user) return { error: json({ ok: false, error: "Non authentifié." }, { status: 401 }) };
  if (!env.DB) return { error: json({ ok: false, error: "Binding DB manquant." }, { status: 503 }) };
  return { user };
}

async function requireSuperAdmin(request, env) {
  const auth = await requireAdmin(request, env);
  if (auth.error) return auth;
  if (auth.user.role !== "super_admin") {
    return { error: json({ ok: false, error: "Action réservée au super administrateur." }, { status: 403 }) };
  }
  return auth;
}

async function projectByRequestId(db, requestId) {
  return db.prepare(`
    SELECT
      projects.id,
      projects.request_id,
      projects.project_name,
      projects.service_type,
      projects.need,
      projects.client_id,
      projects.contact_id,
      contacts.name AS contact_name,
      contacts.email AS contact_email,
      contacts.phone AS contact_phone
    FROM projects
    JOIN contacts ON contacts.id = projects.contact_id
    WHERE projects.request_id = ?
  `).bind(requestId).first();
}

export async function handleDeleteRequest(request, env) {
  const auth = await requireAdmin(request, env);
  if (auth.error) return auth.error;

  const { request_id: requestId } = await request.json();
  if (!clean(requestId)) return json({ ok: false, error: "request_id requis." }, { status: 400 });

  const project = await projectByRequestId(env.DB, clean(requestId));
  if (!project) return json({ ok: false, error: "Demande introuvable." }, { status: 404 });

  await env.DB.batch([
    env.DB.prepare("DELETE FROM request_replies WHERE project_id = ?").bind(project.id),
    env.DB.prepare("DELETE FROM quote_items WHERE quote_id IN (SELECT id FROM quotes WHERE project_id = ?)").bind(project.id),
    env.DB.prepare("DELETE FROM quotes WHERE project_id = ?").bind(project.id),
    env.DB.prepare("DELETE FROM documents WHERE project_id = ?").bind(project.id),
    env.DB.prepare("DELETE FROM project_status_history WHERE project_id = ?").bind(project.id),
    env.DB.prepare("DELETE FROM projects WHERE id = ?").bind(project.id),
    env.DB.prepare("DELETE FROM contacts WHERE id = ?").bind(project.contact_id),
    env.DB.prepare("DELETE FROM clients WHERE id = ?").bind(project.client_id)
  ]);

  return json({ ok: true, deleted: requestId });
}

export async function handleReplyRequest(request, env) {
  const auth = await requireAdmin(request, env);
  if (auth.error) return auth.error;

  const payload = await request.json();
  const requestId = clean(payload.request_id);
  const message = clean(payload.message);

  if (!requestId) return json({ ok: false, error: "request_id requis." }, { status: 400 });
  if (!message) return json({ ok: false, error: "Message de réponse requis." }, { status: 400 });
  if (!env.RESEND_API_KEY || !env.MAIL_FROM) {
    return json({ ok: false, error: "RESEND_API_KEY ou MAIL_FROM manquant." }, { status: 503 });
  }

  const project = await projectByRequestId(env.DB, requestId);
  if (!project) return json({ ok: false, error: "Demande introuvable." }, { status: 404 });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [project.contact_email],
      reply_to: env.MAIL_TO || "contact_devis@spatialxquare.com",
      subject: `Réponse SpatialXquare - ${project.request_id}`,
      text: [
        message,
        "",
        "----",
        "Votre demande initiale",
        `Référence: ${project.request_id}`,
        `Projet: ${project.project_name}`,
        `Message: ${project.need}`
      ].join("\n")
    })
  });

  if (!response.ok) {
    return json({ ok: false, error: await response.text() }, { status: 502 });
  }

  let resendResult = {};
  try {
    resendResult = await response.json();
  } catch (error) {
    resendResult = {};
  }

  const now = new Date().toISOString();
  const subject = `Réponse SpatialXquare - ${project.request_id}`;
  await env.DB.batch([
    env.DB.prepare(`
      INSERT INTO request_replies (id, project_id, user_id, subject, message, recipient_email, resend_id, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(),
      project.id,
      auth.user.id,
      subject,
      message,
      project.contact_email,
      resendResult.id || null,
      now
    ),
    env.DB.prepare("UPDATE projects SET status = ?, updated_at = ? WHERE id = ?")
      .bind("REPONSE_ENVOYEE", now, project.id),
    env.DB.prepare("INSERT INTO project_status_history (id, project_id, status, note, created_at) VALUES (?, ?, ?, ?, ?)")
      .bind(crypto.randomUUID(), project.id, "REPONSE_ENVOYEE", `Réponse envoyée par ${auth.user.email}.`, now)
  ]);

  return json({ ok: true, emailed: true, request_id: project.request_id });
}

export async function handleListAdmins(request, env) {
  const auth = await requireSuperAdmin(request, env);
  if (auth.error) return auth.error;

  const users = await env.DB.prepare(`
    SELECT id, email, name, role, active, created_at
    FROM users
    ORDER BY created_at ASC
  `).all();

  return json({ ok: true, users: users.results || [] });
}

export async function handleCreateAdmin(request, env) {
  const auth = await requireSuperAdmin(request, env);
  if (auth.error) return auth.error;

  const payload = await request.json();
  const email = clean(payload.email).toLowerCase();
  const password = String(payload.password || "");
  const name = clean(payload.name);

  if (!email || !password) {
    return json({ ok: false, error: "Email et mot de passe requis." }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);

  try {
    await env.DB.prepare("INSERT INTO users (id, email, password_hash, name, role, active) VALUES (?, ?, ?, ?, ?, ?)")
      .bind(id, email, passwordHash, name || null, "admin", 1)
      .run();
  } catch (error) {
    return json({ ok: false, error: "Email déjà utilisé." }, { status: 409 });
  }

  return json({ ok: true, user: { id, email, name: name || null, role: "admin", active: 1 } }, { status: 201 });
}

export async function handleUpdateAdmin(request, env) {
  const auth = await requireSuperAdmin(request, env);
  if (auth.error) return auth.error;

  const payload = await request.json();
  const userId = clean(payload.user_id);
  const role = clean(payload.role);
  if (!userId) return json({ ok: false, error: "user_id requis." }, { status: 400 });
  if (!["admin", "super_admin"].includes(role)) {
    return json({ ok: false, error: "Rôle invalide." }, { status: 400 });
  }

  const target = await env.DB.prepare("SELECT id, role, active FROM users WHERE id = ?").bind(userId).first();
  if (!target) return json({ ok: false, error: "Administrateur introuvable." }, { status: 404 });
  if (!target.active) return json({ ok: false, error: "Ce compte est désactivé." }, { status: 409 });

  if (target.role === "super_admin" && role === "admin") {
    const result = await env.DB.prepare(`
      UPDATE users SET role = 'admin'
      WHERE id = ? AND role = 'super_admin' AND active = 1
        AND (SELECT COUNT(*) FROM users WHERE role = 'super_admin' AND active = 1) > 1
    `).bind(userId).run();
    if (!result.meta?.changes) {
      return json({ ok: false, error: "Impossible de rétrograder le dernier super administrateur." }, { status: 409 });
    }
  } else {
    await env.DB.prepare("UPDATE users SET role = ? WHERE id = ? AND active = 1").bind(role, userId).run();
  }

  return json({ ok: true, user_id: userId, role });
}

export async function handleDeleteAdmin(request, env) {
  const auth = await requireSuperAdmin(request, env);
  if (auth.error) return auth.error;

  const { user_id: rawUserId } = await request.json();
  const userId = clean(rawUserId);
  if (!userId) return json({ ok: false, error: "user_id requis." }, { status: 400 });

  const target = await env.DB.prepare("SELECT id, role, active FROM users WHERE id = ?").bind(userId).first();
  if (!target) return json({ ok: false, error: "Administrateur introuvable." }, { status: 404 });
  if (!target.active) return json({ ok: false, error: "Ce compte est déjà supprimé." }, { status: 409 });

  const result = await env.DB.prepare(`
    UPDATE users SET active = 0
    WHERE id = ? AND active = 1
      AND (role != 'super_admin' OR (SELECT COUNT(*) FROM users WHERE role = 'super_admin' AND active = 1) > 1)
      AND (id != ? OR (SELECT COUNT(*) FROM users WHERE active = 1) > 1)
  `).bind(userId, auth.user.id).run();

  if (!result.meta?.changes) {
    if (target.role === "super_admin") {
      return json({ ok: false, error: "Impossible de supprimer le dernier super administrateur. Promouvez d’abord un autre compte." }, { status: 409 });
    }
    return json({ ok: false, error: "Impossible de supprimer votre compte lorsqu’il est le seul compte actif." }, { status: 409 });
  }

  return json({ ok: true, deleted: userId });
}
