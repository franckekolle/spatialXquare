const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8"
};

function requestId(prefix = "REQ") {
  const year = new Date().getFullYear();
  const suffix = crypto.randomUUID().slice(0, 8).toUpperCase();
  return `${prefix}-${year}-${suffix}`;
}

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload) {
  const errors = [];

  if (!cleanString(payload.service)) errors.push("Le type de prestation est obligatoire.");
  if (!cleanString(payload.project_name)) errors.push("Le nom du projet est obligatoire.");
  if (!cleanString(payload.need)) errors.push("La description du besoin est obligatoire.");
  if (!cleanString(payload.contact_name)) errors.push("Le nom du responsable est obligatoire.");
  if (!cleanString(payload.email)) errors.push("L'adresse e-mail est obligatoire.");

  return errors;
}

async function saveWithD1(db, payload, ids) {
  const now = new Date().toISOString();
  const organization = cleanString(payload.organization);
  const contactName = cleanString(payload.contact_name);
  const email = cleanString(payload.email);
  const phone = cleanString(payload.phone);

  await db.batch([
    db.prepare(`
      INSERT INTO clients (id, organization_name, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `).bind(ids.client_id, organization || contactName || "Client non renseigné", now, now),
    db.prepare(`
      INSERT INTO contacts (id, client_id, name, email, phone, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(ids.contact_id, ids.client_id, contactName, email, phone, now, now),
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
      cleanString(payload.service),
      cleanString(payload.project_name),
      cleanString(payload.need),
      cleanString(payload.location),
      cleanString(payload.country),
      cleanString(payload.region),
      cleanString(payload.surface),
      cleanString(payload.access),
      JSON.stringify(payload),
      now,
      now
    ),
    db.prepare(`
      INSERT INTO project_status_history (id, project_id, status, note, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(),
      ids.project_id,
      "NOUVELLE_DEMANDE",
      "Demande reçue depuis le formulaire du site.",
      now
    )
  ]);
}

export async function onRequestPost(context) {
  let payload;

  try {
    payload = await context.request.json();
  } catch (error) {
    return Response.json({ ok: false, errors: ["Le corps de la requête doit être au format JSON."] }, {
      status: 400,
      headers: jsonHeaders
    });
  }

  const errors = validatePayload(payload);

  if (errors.length) {
    return Response.json({ ok: false, errors }, {
      status: 422,
      headers: jsonHeaders
    });
  }

  const ids = {
    request_id: requestId("REQ"),
    project_id: requestId("PROJ"),
    client_id: crypto.randomUUID(),
    contact_id: crypto.randomUUID()
  };

  let persisted = false;

  if (context.env.DB) {
    await saveWithD1(context.env.DB, payload, ids);
    persisted = true;
  }

  return Response.json({
    ok: true,
    persisted,
    ...ids,
    status: "NOUVELLE_DEMANDE",
    message: persisted
      ? "Votre demande a été enregistrée."
      : "Votre demande a été reçue par l’API. La base de données n’est pas encore connectée."
  }, {
    status: 201,
    headers: jsonHeaders
  });
}
