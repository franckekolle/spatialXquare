function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

function requestId(prefix = "REQ") {
  const year = new Date().getFullYear();
  const suffix = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `${prefix}-${year}-${suffix}`;
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload) {
  const errors = [];
  if (!clean(payload.service)) errors.push("Le type de prestation est obligatoire.");
  if (!clean(payload.project_name)) errors.push("Le nom du projet est obligatoire.");
  if (!clean(payload.need)) errors.push("La description du besoin est obligatoire.");
  if (!clean(payload.contact_name)) errors.push("Le nom du responsable est obligatoire.");
  if (!clean(payload.email)) errors.push("L'adresse e-mail est obligatoire.");
  return errors;
}

async function persistRequest(db, payload, ids) {
  const now = new Date().toISOString();
  const organization = clean(payload.organization);
  const contactName = clean(payload.contact_name);

  await db.batch([
    db.prepare(`
      INSERT INTO clients (id, organization_name, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `).bind(ids.client_id, organization || contactName || "Client non renseigné", now, now),
    db.prepare(`
      INSERT INTO contacts (id, client_id, name, email, phone, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(ids.contact_id, ids.client_id, contactName, clean(payload.email), clean(payload.phone), now, now),
    db.prepare(`
      INSERT INTO projects (
        id, request_id, client_id, contact_id, status, service_type, project_name,
        need, location, country, region, surface, access, custom_data, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      ids.project_id,
      ids.request_id,
      ids.client_id,
      ids.contact_id,
      "NOUVELLE_DEMANDE",
      clean(payload.service),
      clean(payload.project_name),
      clean(payload.need),
      clean(payload.location),
      clean(payload.country),
      clean(payload.region),
      clean(payload.surface),
      clean(payload.access),
      JSON.stringify(payload),
      now,
      now
    ),
    db.prepare(`
      INSERT INTO project_status_history (id, project_id, status, note, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(crypto.randomUUID(), ids.project_id, "NOUVELLE_DEMANDE", "Demande reçue depuis le formulaire du site.", now)
  ]);
}

export async function handleCreateRequest(request, env) {
  let payload;

  try {
    payload = await request.json();
  } catch (error) {
    return json({ ok: false, errors: ["Le corps de la requête doit être au format JSON."] }, { status: 400 });
  }

  const errors = validate(payload);
  if (errors.length) return json({ ok: false, errors }, { status: 422 });

  const ids = {
    request_id: requestId("REQ"),
    project_id: requestId("PROJ"),
    client_id: crypto.randomUUID(),
    contact_id: crypto.randomUUID()
  };

  let persisted = false;
  if (env.DB) {
    await persistRequest(env.DB, payload, ids);
    persisted = true;
  }

  return json({
    ok: true,
    persisted,
    ...ids,
    status: "NOUVELLE_DEMANDE",
    message: persisted
      ? "Votre demande a été enregistrée."
      : "Votre demande a été reçue par l’API. La base de données n’est pas encore connectée."
  }, { status: 201 });
}
