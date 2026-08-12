const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

function requireBindings(env) {
  if (!env.DB || !env.SESSIONS) {
    return json({
      ok: false,
      error: "Les bindings DB et SESSIONS doivent être configurés dans Cloudflare."
    }, { status: 503 });
  }

  return null;
}

function sessionFromCookie(request) {
  const cookie = request.headers.get("Cookie") || "";
  return cookie.match(/(?:^|;\s*)session=([^;]+)/)?.[1] || "";
}

function sessionCookie(sessionId, maxAge = SESSION_MAX_AGE) {
  return `session=${sessionId}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

function clearSessionCookie() {
  return "session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0";
}

function b64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function fromB64(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" }, key, 256);
  return `${b64(salt)}:${b64(new Uint8Array(bits))}`;
}

export async function verifyPassword(password, stored) {
  const [saltB64, hashB64] = String(stored || "").split(":");
  if (!saltB64 || !hashB64) return false;

  const salt = fromB64(saltB64);
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" }, key, 256);
  return b64(new Uint8Array(bits)) === hashB64;
}

export async function currentUser(request, env) {
  if (!env.DB || !env.SESSIONS) return null;

  const sessionId = sessionFromCookie(request);
  if (!sessionId) return null;

  const session = await env.SESSIONS.get(sessionId, "json");
  if (!session?.userId) return null;

  return env.DB.prepare("SELECT id, email, name, created_at FROM users WHERE id = ?")
    .bind(session.userId)
    .first();
}

export async function handleSignup(request, env) {
  const bindingError = requireBindings(env);
  if (bindingError) return bindingError;

  const { email, password, name } = await request.json();
  if (!email || !password) {
    return json({ ok: false, error: "Email et mot de passe requis." }, { status: 400 });
  }

  const userCount = await env.DB.prepare("SELECT COUNT(*) AS total FROM users").first();
  if ((userCount?.total || 0) > 0) {
    return json({
      ok: false,
      error: "Un compte administrateur existe déjà. Utilisez la connexion."
    }, { status: 403 });
  }

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);

  try {
    await env.DB.prepare("INSERT INTO users (id, email, password_hash, name) VALUES (?, ?, ?, ?)")
      .bind(id, String(email).toLowerCase().trim(), passwordHash, name || null)
      .run();
  } catch (error) {
    return json({ ok: false, error: "Email déjà utilisé." }, { status: 409 });
  }

  return json({ ok: true, user: { id, email, name: name || null } }, { status: 201 });
}

export async function handleLogin(request, env) {
  const bindingError = requireBindings(env);
  if (bindingError) return bindingError;

  const { email, password } = await request.json();
  const user = await env.DB.prepare("SELECT * FROM users WHERE email = ?")
    .bind(String(email || "").toLowerCase().trim())
    .first();

  if (!user || !(await verifyPassword(password || "", user.password_hash))) {
    return json({ ok: false, error: "Identifiants invalides." }, { status: 401 });
  }

  const sessionId = crypto.randomUUID();
  await env.SESSIONS.put(sessionId, JSON.stringify({ userId: user.id }), {
    expirationTtl: SESSION_MAX_AGE
  });

  return json({
    ok: true,
    user: { id: user.id, email: user.email, name: user.name }
  }, {
    headers: {
      "Set-Cookie": sessionCookie(sessionId)
    }
  });
}

export async function handleLogout(request, env) {
  const sessionId = sessionFromCookie(request);
  if (sessionId && env.SESSIONS) {
    await env.SESSIONS.delete(sessionId);
  }

  return new Response(null, {
    status: 204,
    headers: {
      "Set-Cookie": clearSessionCookie()
    }
  });
}

export async function handleMe(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ ok: false, error: "Non authentifié." }, { status: 401 });
  return json({ ok: true, user });
}
