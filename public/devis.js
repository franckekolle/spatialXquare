const form = document.querySelector("[data-quote-form]");
const modeButtons = document.querySelectorAll("[data-quote-mode]");
const detailedFields = document.querySelector("[data-detailed-fields]");
const serviceSelect = document.querySelector("[data-service-select]");
const servicePanels = document.querySelectorAll("[data-service-panel]");
const feedback = document.querySelector("[data-quote-feedback]");
const requestTypeInput = document.querySelector("[data-request-type]");
const offerInput = document.querySelector("[data-offer-input]");
const sourcePageInput = document.querySelector("[data-source-page-input]");
const quoteContext = document.querySelector("[data-quote-context]");
const quoteMode = document.querySelector(".quote-mode");
const projectLegend = document.querySelector("[data-project-legend]");
const needLabel = document.querySelector("[data-need-label]");
const heroTitle = document.querySelector(".quote-hero h1");
const heroText = document.querySelector(".quote-hero p:last-child");
const panelTitle = document.querySelector(".quote-panel strong");
const panelText = document.querySelector(".quote-panel p");

const serviceLabels = {
  contact: "Contact général",
  geophysique: "Géophysique appliquée",
  exploration: "Exploration minière",
  eau: "Recherche d’eau souterraine",
  sig: "Cartographie / SIG",
  formation: "Formation / renforcement des capacités",
  geomodelisation: "Géomodélisation 3D",
  geologie: "Géologie / études minières",
  forage: "Gestion de campagne de forage",
  data: "Data Science / IA",
  energie: "Énergies renouvelables",
  autre: "Autre"
};

const params = new URLSearchParams(window.location.search);

function getParam(...names) {
  for (const name of names) {
    const value = params.get(name);
    if (value) return value.trim();
  }
  return "";
}

function field(name) {
  return form.querySelector(`[name="${name}"]`);
}

function quoteField(name) {
  return form.querySelector(`[data-quote-field="${name}"]`);
}

function setFieldVisible(name, isVisible) {
  const wrapper = quoteField(name);
  if (wrapper) wrapper.hidden = !isVisible;
}

function setRequired(name, isRequired) {
  const element = field(name);
  if (element) element.required = isRequired;
}

function serviceLabel(value) {
  return serviceLabels[value] || value || "Demande générale";
}

function inferOfferFromSource(sourcePage) {
  const source = String(sourcePage || "").toLowerCase();
  const offers = [
    ["/geovia-surpac/", "GEOVIA Surpac"],
    ["/leapfrog-geo/", "Leapfrog Geo"],
    ["/maptek-vulcan/", "Maptek Vulcan"],
    ["/datamine-studio-rm/", "Datamine Studio RM"],
    ["/micromine-origin-beyond/", "Micromine Origin & Beyond"],
    ["/geostatistique-data-science/", "Géostatistique & Data Science"],
    ["/planification-optimisation-miniere/", "Planification & Optimisation Minière"],
    ["/gis-geospatial-academy/", "GIS & Geospatial Academy"],
    ["/engineering-cad-academy/", "Engineering & CAD Academy"],
    ["/bootcamps-donnees-geosciences/", "Bootcamps Données & IA"],
    ["/parcours-geologue-ressources/", "Parcours Géologue ressources"],
    ["/iogas-geochemical-bootcamps/", "Bootcamps ioGAS"],
    ["/manager-technique-decision/", "Manager technique & décision"],
    ["/formations-operationnelles/", "Formations opérationnelles"],
    ["/modelisation-geologique-3d/", "Modélisation géologique 3D"],
    ["/geophysique-exploration-miniere/", "Géophysique, exploration et cartographie"],
    ["/energies-renouvelables-eau/", "Énergies renouvelables & eau"],
    ["/data-science-solutions-logicielles/", "Data Science & solutions logicielles"]
  ];

  return offers.find(([path]) => source.includes(path))?.[1] || "";
}

function setMode(mode) {
  const isDetailed = mode === "detailed";

  detailedFields.hidden = !isDetailed;
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.quoteMode === mode);
  });
}

function updateServicePanel() {
  const selectedService = serviceSelect.value;

  servicePanels.forEach((panel) => {
    const isVisible = panel.dataset.servicePanel === selectedService;
    panel.hidden = !isVisible;
  });
}

function valuesFor(formData, name) {
  return formData.getAll(name).filter(Boolean).join(", ");
}

function arrayFor(formData, name) {
  return formData.getAll(name).filter(Boolean);
}

function buildRequestId() {
  const year = new Date().getFullYear();
  const suffix = String(Date.now()).slice(-5);
  return `REQ-${year}-${suffix}`;
}

function buildMessage(formData, requestId) {
  const lines = [
    `Identifiant: ${requestId}`,
    `Type de demande: ${formData.get("request_type") || "quote"}`,
    `Service: ${formData.get("service") || ""}`,
    `Offre / contexte: ${formData.get("offer") || ""}`,
    `Page d'origine: ${formData.get("source_page") || ""}`,
    `Projet: ${formData.get("project_name") || ""}`,
    `Besoin: ${formData.get("need") || ""}`,
    `Localisation: ${formData.get("location") || ""}`,
    "",
    "Coordonnées",
    `Organisation: ${formData.get("organization") || ""}`,
    `Responsable: ${formData.get("contact_name") || ""}`,
    `Email: ${formData.get("email") || ""}`,
    `Téléphone: ${formData.get("phone") || ""}`,
    "",
    "Informations techniques",
    `Objectifs géophysiques: ${valuesFor(formData, "geo_objective")}`,
    `Description géophysique: ${formData.get("geo_problem") || ""}`,
    `Méthode: ${formData.get("geo_method") || ""}`,
    `Profondeur: ${formData.get("depth") || ""}`,
    `Profils / sondages: ${formData.get("profiles") || ""}`,
    `Substance recherchée: ${formData.get("substance") || ""}`,
    `Objectifs exploration: ${formData.get("exploration_objectives") || ""}`,
    `Données modèle: ${formData.get("model_data") || ""}`,
    `Objectif Data/IA: ${formData.get("analysis_goal") || ""}`,
    `Sorties SIG: ${formData.get("map_outputs") || ""}`,
    `Besoins énergie/eau: ${valuesFor(formData, "energy_need")}`,
    `Consommation ou puissance estimée: ${formData.get("energy_consumption") || ""}`,
    `Besoin en eau estimé: ${formData.get("water_need") || ""}`,
    `Description énergie/eau: ${formData.get("energy_description") || ""}`,
    "",
    "Site, données et livrables",
    `Pays: ${formData.get("country") || ""}`,
    `Région: ${formData.get("region") || ""}`,
    `Surface: ${formData.get("surface") || ""}`,
    `Accessibilité: ${formData.get("access") || ""}`,
    `Données disponibles: ${valuesFor(formData, "available_data")}`,
    `Livrables: ${valuesFor(formData, "deliverables")}`,
    `Planning: ${formData.get("timeline") || ""}`,
    `Budget: ${formData.get("budget") || ""}`,
    `Contraintes: ${formData.get("constraints") || ""}`,
    "",
    "Pièces jointes",
    "Les fichiers sélectionnés devront être transmis par e-mail ou via un lien de partage."
  ];

  return lines.join("\n");
}

function payloadFromForm(formData) {
  return {
    request_type: formData.get("request_type") || "quote",
    service: formData.get("service") || "",
    offer: formData.get("offer") || "",
    source_page: formData.get("source_page") || "",
    page_url: window.location.href,
    project_name: formData.get("project_name") || "",
    location: formData.get("location") || "",
    need: formData.get("need") || "",
    organization: formData.get("organization") || "",
    contact_name: formData.get("contact_name") || "",
    email: formData.get("email") || "",
    phone: formData.get("phone") || "",
    country: formData.get("country") || "",
    region: formData.get("region") || "",
    surface: formData.get("surface") || "",
    access: formData.get("access") || "",
    geo_objective: arrayFor(formData, "geo_objective"),
    geo_problem: formData.get("geo_problem") || "",
    geo_method: formData.get("geo_method") || "",
    depth: formData.get("depth") || "",
    profiles: formData.get("profiles") || "",
    substance: formData.get("substance") || "",
    exploration_history: formData.get("exploration_history") || "",
    exploration_objectives: formData.get("exploration_objectives") || "",
    boreholes_count: formData.get("boreholes_count") || "",
    model_type: formData.get("model_type") || "",
    model_data: formData.get("model_data") || "",
    data_type: formData.get("data_type") || "",
    data_volume: formData.get("data_volume") || "",
    analysis_goal: formData.get("analysis_goal") || "",
    map_scale: formData.get("map_scale") || "",
    coordinate_system: formData.get("coordinate_system") || "",
    map_outputs: formData.get("map_outputs") || "",
    energy_need: arrayFor(formData, "energy_need"),
    energy_consumption: formData.get("energy_consumption") || "",
    water_need: formData.get("water_need") || "",
    energy_description: formData.get("energy_description") || "",
    available_data: arrayFor(formData, "available_data"),
    deliverables: arrayFor(formData, "deliverables"),
    timeline: formData.get("timeline") || "",
    budget: formData.get("budget") || "",
    constraints: formData.get("constraints") || "",
    files: arrayFor(formData, "files").map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size
    }))
  };
}

function openMailFallback(formData, requestId) {
  const requestType = formData.get("request_type") === "contact" ? "Contact" : "Demande de devis";
  const subject = encodeURIComponent(`${requestType} ${requestId} - ${formData.get("offer") || formData.get("project_name") || serviceLabel(formData.get("service"))}`);
  const body = encodeURIComponent(buildMessage(formData, requestId));

  window.location.href = `mailto:contact_devis@spatialxquare.com?subject=${subject}&body=${body}`;
}

function setContextBanner(service, offer, sourcePage, requestType) {
  if (!quoteContext) return;

  const contextLines = [];
  if (requestType === "contact") contextLines.push("Contact simple");
  if (service) contextLines.push(serviceLabel(service));
  if (offer) contextLines.push(offer);

  if (!contextLines.length) {
    quoteContext.hidden = true;
    quoteContext.innerHTML = "";
    return;
  }

  quoteContext.hidden = false;
  quoteContext.innerHTML = `
    <strong>${contextLines.join(" · ")}</strong>
    ${sourcePage ? `<span>Origine : ${sourcePage}</span>` : ""}
  `;
}

function applyRequestContext() {
  const requestType = getParam("type", "request_type", "mode") === "contact" ? "contact" : "quote";
  const requestedService = getParam("service") || (requestType === "contact" ? "contact" : "");
  const sourcePage = getParam("source", "from") || document.referrer || "";
  const offer = getParam("offer", "offre", "formation", "module", "parcours") || inferOfferFromSource(sourcePage);
  const isContact = requestType === "contact";

  requestTypeInput.value = requestType;
  offerInput.value = offer;
  sourcePageInput.value = sourcePage;

  if (requestedService) serviceSelect.value = requestedService;

  setFieldVisible("service", !isContact);
  setFieldVisible("project_name", !isContact);
  setFieldVisible("location", !isContact);
  setFieldVisible("organization", !isContact);
  setFieldVisible("contact_name", !isContact);

  setRequired("service", !isContact);
  setRequired("project_name", !isContact);
  setRequired("location", !isContact);
  setRequired("contact_name", !isContact);
  setRequired("phone", isContact);

  if (isContact) {
    serviceSelect.value = "contact";
    field("project_name").value = "Contact général";
    field("location").value = "";
    field("contact_name").value = "Contact site web";
    quoteMode.hidden = true;
    detailedFields.hidden = true;
    projectLegend.textContent = "Votre message";
    needLabel.textContent = "Message à envoyer";
    heroTitle.textContent = "Contactez SpatialXquare.";
    heroText.textContent = "Laissez votre e-mail, votre numéro WhatsApp et votre message. Nous recevrons votre demande à l’adresse contact_devis@spatialxquare.com.";
    panelTitle.textContent = "Contact simple";
    panelText.textContent = "Ce formulaire est volontairement court pour les demandes générales.";
  } else {
    quoteMode.hidden = false;
    projectLegend.textContent = "Votre projet";
    needLabel.textContent = "Quel est votre besoin ?";
    heroTitle.textContent = "Parlez-nous de votre projet.";
    heroText.textContent = "Quelques informations nous permettront de comprendre votre besoin et de vous proposer une solution technique et financière adaptée.";
    panelTitle.textContent = "Votre demande";
    panelText.textContent = "Un identifiant sera généré à l’envoi pour faciliter le suivi interne de votre projet.";
    setMode(requestedService ? "detailed" : "quick");
  }

  setContextBanner(serviceSelect.value, offer, sourcePage, requestType);
  updateServicePanel();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.quoteMode));
});

serviceSelect.addEventListener("change", updateServicePanel);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const requestId = buildRequestId();

  feedback.textContent = "Transmission de votre demande...";

  try {
    const response = await fetch("/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payloadFromForm(formData))
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.errors?.join(" ") || "La demande n’a pas pu être enregistrée.");
    }

    feedback.textContent = result.emailed
      ? `Merci. Votre demande ${result.request_id} a bien été transmise par e-mail.`
      : `Merci. Votre demande ${result.request_id} a bien été reçue. L’envoi e-mail serveur doit encore être configuré dans Cloudflare.`;
    form.reset();
    applyRequestContext();
  } catch (error) {
    feedback.textContent = `L’API n’est pas disponible. Ouverture de l’e-mail de secours ${requestId}.`;
    openMailFallback(formData, requestId);
  }
});

applyRequestContext();
