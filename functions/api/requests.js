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
  const requestType = cleanString(payload.request_type) || "quote";

  if (!cleanString(payload.need)) errors.push("La description du besoin est obligatoire.");
  if (!cleanString(payload.email)) errors.push("L'adresse e-mail est obligatoire.");

  if (requestType === "contact") {
    if (!cleanString(payload.phone)) errors.push("Le numéro WhatsApp est obligatoire.");
    return errors;
  }

  if (!cleanString(payload.service)) errors.push("Le type de prestation est obligatoire.");
  if (!cleanString(payload.domain)) errors.push("Le domaine d’activité est obligatoire.");
  if (!cleanString(payload.project_name)) errors.push("Le nom du projet est obligatoire.");
  if (!cleanString(payload.contact_name)) errors.push("Le nom du responsable est obligatoire.");

  return errors;
}

async function saveWithD1(db, payload, ids) {
  const now = new Date().toISOString();
  const organization = cleanString(payload.organization);
  const contactName = cleanString(payload.contact_name) || "Contact site web";
  const email = cleanString(payload.email);
  const phone = cleanString(payload.phone);
  const requestType = cleanString(payload.request_type) || "quote";
  const serviceType = requestType === "contact" ? "contact" : cleanString(payload.service);
  const projectName = requestType === "contact"
    ? `Contact - ${email}`
    : cleanString(payload.project_name);

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
      serviceType,
      projectName,
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

function emailSubject(payload, requestId) {
  const requestType = cleanString(payload.request_type) === "contact" ? "Contact" : "Demande de devis";
  const context = cleanString(payload.offer) || cleanString(payload.project_name) || cleanString(payload.service) || "SpatialXquare";
  return `${requestType} ${requestId} - ${context}`;
}

function emailText(payload, ids) {
  if (cleanString(payload.request_type) === "contact") {
    return [
      "Nouveau message depuis le site SpatialXquare",
      "",
      cleanString(payload.need),
      "",
      "Contact",
      `Email: ${cleanString(payload.email)}`,
      `WhatsApp: ${cleanString(payload.phone)}`,
      "",
      `Référence: ${ids.request_id}`,
      `Page: ${cleanString(payload.source_page) || cleanString(payload.page_url)}`
    ].join("\n");
  }

  return [
    `Identifiant: ${ids.request_id}`,
    `Type de demande: ${cleanString(payload.request_type) || "quote"}`,
    `Domaine d’activité: ${cleanString(payload.domain)}`,
    `Service: ${cleanString(payload.service)}`,
    `Offre / contexte: ${cleanString(payload.offer)}`,
    `Page d'origine: ${cleanString(payload.source_page)}`,
    `URL formulaire: ${cleanString(payload.page_url)}`,
    "",
    "Coordonnées",
    `Organisation: ${cleanString(payload.organization)}`,
    `Responsable: ${cleanString(payload.contact_name) || "Contact site web"}`,
    `Email: ${cleanString(payload.email)}`,
    `Téléphone / WhatsApp: ${cleanString(payload.phone)}`,
    "",
    "Projet / message",
    `Projet: ${cleanString(payload.project_name)}`,
    `Localisation: ${cleanString(payload.location)}`,
    `Besoin / message: ${cleanString(payload.need)}`
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
      reply_to: cleanString(payload.email),
      subject: emailSubject(payload, ids.request_id),
      text: emailText(payload, ids)
    })
  });

  if (!response.ok) {
    return { sent: false, reason: await response.text() };
  }

  return { sent: true };
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

  let email = { sent: false };
  try {
    email = await notifyByEmail(context.env, payload, ids);
  } catch (error) {
    email = { sent: false, reason: error.message };
  }

  return Response.json({
    ok: true,
    persisted,
    emailed: email.sent,
    email_reason: email.sent ? undefined : email.reason,
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
