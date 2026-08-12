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
  const requestType = clean(payload.request_type) || "quote";

  if (!clean(payload.need)) errors.push("La description du besoin est obligatoire.");
  if (!clean(payload.email)) errors.push("L'adresse e-mail est obligatoire.");

  if (requestType === "contact") {
    if (!clean(payload.phone)) errors.push("Le numéro WhatsApp est obligatoire.");
    return errors;
  }

  if (!clean(payload.service)) errors.push("Le type de prestation est obligatoire.");
  if (!clean(payload.project_name)) errors.push("Le nom du projet est obligatoire.");
  if (!clean(payload.contact_name)) errors.push("Le nom du responsable est obligatoire.");

  return errors;
}

async function persistRequest(db, payload, ids) {
  const now = new Date().toISOString();
  const organization = clean(payload.organization);
  const contactName = clean(payload.contact_name) || "Contact site web";
  const requestType = clean(payload.request_type) || "quote";
  const serviceType = requestType === "contact" ? "contact" : clean(payload.service);
  const projectName = requestType === "contact"
    ? `Contact - ${clean(payload.email)}`
    : clean(payload.project_name);

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
      serviceType,
      projectName,
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

function emailSubject(payload, requestId) {
  const requestType = clean(payload.request_type) === "contact" ? "Contact" : "Demande de devis";
  const context = clean(payload.offer) || clean(payload.project_name) || clean(payload.service) || "SpatialXquare";
  return `${requestType} ${requestId} - ${context}`;
}

function emailText(payload, ids) {
  return [
    `Identifiant: ${ids.request_id}`,
    `Type de demande: ${clean(payload.request_type) || "quote"}`,
    `Service: ${clean(payload.service)}`,
    `Offre / contexte: ${clean(payload.offer)}`,
    `Page d'origine: ${clean(payload.source_page)}`,
    `URL formulaire: ${clean(payload.page_url)}`,
    "",
    "Coordonnées",
    `Organisation: ${clean(payload.organization)}`,
    `Responsable: ${clean(payload.contact_name) || "Contact site web"}`,
    `Email: ${clean(payload.email)}`,
    `Téléphone / WhatsApp: ${clean(payload.phone)}`,
    "",
    "Projet / message",
    `Projet: ${clean(payload.project_name)}`,
    `Localisation: ${clean(payload.location)}`,
    `Besoin / message: ${clean(payload.need)}`,
    "",
    "Données complètes JSON",
    JSON.stringify(payload, null, 2)
  ].join("\n");
}

async function notifyByEmail(env, payload, ids) {
  const to = env.MAIL_TO || "contact_devis@spatialxquare.com";
  const from = env.MAIL_FROM;
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey || !from) {
    return { sent: false, reason: "RESEND_API_KEY ou MAIL_FROM manquant." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: clean(payload.email),
      subject: emailSubject(payload, ids.request_id),
      text: emailText(payload, ids)
    })
  });

  if (!response.ok) {
    return { sent: false, reason: await response.text() };
  }

  return { sent: true };
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

  let email = { sent: false };
  try {
    email = await notifyByEmail(env, payload, ids);
  } catch (error) {
    email = { sent: false, reason: error.message };
  }

  return json({
    ok: true,
    persisted,
    emailed: email.sent,
    email_reason: email.sent ? undefined : email.reason,
    ...ids,
    status: "NOUVELLE_DEMANDE",
    message: persisted
      ? "Votre demande a été enregistrée."
      : "Votre demande a été reçue par l’API. La base de données n’est pas encore connectée."
  }, { status: 201 });
}
