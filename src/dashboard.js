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

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function intParam(value, fallback, min, max) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

export async function handleDashboard(request, env) {
  const user = await currentUser(request, env);
  if (!user) return json({ ok: false, error: "Non authentifié." }, { status: 401 });

  if (!env.DB) {
    return json({ ok: false, error: "Binding DB manquant." }, { status: 503 });
  }

  const url = new URL(request.url);
  const page = intParam(url.searchParams.get("page"), 1, 1, 9999);
  const pageSize = intParam(url.searchParams.get("page_size"), 20, 5, 100);
  const offset = (page - 1) * pageSize;
  const query = clean(url.searchParams.get("q"));
  const status = clean(url.searchParams.get("status"));
  const service = clean(url.searchParams.get("service"));
  const sortMap = {
    created_at: "projects.created_at",
    request_id: "projects.request_id",
    service: "projects.service_type",
    status: "projects.status",
    client: "contacts.name"
  };
  const requestedSort = url.searchParams.get("sort");
  const sortKey = Object.prototype.hasOwnProperty.call(sortMap, requestedSort) ? requestedSort : "created_at";
  const direction = url.searchParams.get("direction") === "asc" ? "ASC" : "DESC";
  const where = [];
  const bindings = [];

  if (query) {
    where.push(`(
      projects.request_id LIKE ?
      OR projects.project_name LIKE ?
      OR projects.service_type LIKE ?
      OR projects.status LIKE ?
      OR projects.need LIKE ?
      OR contacts.name LIKE ?
      OR contacts.email LIKE ?
      OR contacts.phone LIKE ?
      OR clients.organization_name LIKE ?
    )`);
    const like = `%${query}%`;
    bindings.push(like, like, like, like, like, like, like, like, like);
  }

  if (status) {
    where.push("projects.status = ?");
    bindings.push(status);
  }

  if (service) {
    where.push("projects.service_type = ?");
    bindings.push(service);
  }

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const statuses = await env.DB.prepare(`
    SELECT status, COUNT(*) AS total
    FROM projects
    GROUP BY status
    ORDER BY total DESC
  `).all();

  const services = await env.DB.prepare(`
    SELECT service_type, COUNT(*) AS total
    FROM projects
    GROUP BY service_type
    ORDER BY service_type ASC
  `).all();

  const countResult = await env.DB.prepare(`
    SELECT COUNT(*) AS total
    FROM projects
    JOIN contacts ON contacts.id = projects.contact_id
    JOIN clients ON clients.id = projects.client_id
    ${whereSql}
  `).bind(...bindings).first();

  const recentProjects = await env.DB.prepare(`
    SELECT
      projects.id,
      projects.request_id,
      projects.project_name,
      projects.service_type,
      projects.status,
      projects.need,
      projects.location,
      projects.custom_data,
      projects.created_at,
      contacts.name AS contact_name,
      contacts.email AS contact_email,
      contacts.phone AS contact_phone,
      clients.organization_name
    FROM projects
    JOIN contacts ON contacts.id = projects.contact_id
    JOIN clients ON clients.id = projects.client_id
    ${whereSql}
    ORDER BY ${sortMap[sortKey]} ${direction}
    LIMIT ${pageSize}
    OFFSET ${offset}
  `).bind(...bindings).all();

  return json({
    ok: true,
    user,
    stats: statuses.results || [],
    services: services.results || [],
    projects: recentProjects.results || [],
    pagination: {
      page,
      page_size: pageSize,
      total: countResult?.total || 0,
      pages: Math.max(1, Math.ceil((countResult?.total || 0) / pageSize))
    },
    filters: {
      q: query,
      status,
      service,
      sort: sortKey,
      direction: direction.toLowerCase()
    }
  });
}
