import { currentUser } from "./auth.js";

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

export async function handleDashboard(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ ok: false, error: "Non authentifié." }, { status: 401 });

  if (!env.DB) {
    return json({ ok: false, error: "Binding DB manquant." }, { status: 503 });
  }

  const statuses = await env.DB.prepare(`
    SELECT status, COUNT(*) AS total
    FROM projects
    GROUP BY status
    ORDER BY total DESC
  `).all();

  const recentProjects = await env.DB.prepare(`
    SELECT id, request_id, project_name, service_type, status, location, created_at
    FROM projects
    ORDER BY created_at DESC
    LIMIT 20
  `).all();

  return json({
    ok: true,
    user,
    stats: statuses.results || [],
    projects: recentProjects.results || []
  });
}
