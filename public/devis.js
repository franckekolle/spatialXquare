const form = document.querySelector("[data-quote-form]");
const modeButtons = document.querySelectorAll("[data-quote-mode]");
const detailedFields = document.querySelector("[data-detailed-fields]");
const serviceSelect = document.querySelector("[data-service-select]");
const servicePanels = document.querySelectorAll("[data-service-panel]");
const feedback = document.querySelector("[data-quote-feedback]");

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
    `Service: ${formData.get("service") || ""}`,
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
    service: formData.get("service") || "",
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
  const subject = encodeURIComponent(`Demande de devis ${requestId} - ${formData.get("project_name") || "Projet"}`);
  const body = encodeURIComponent(buildMessage(formData, requestId));

  window.location.href = `mailto:contact_devis@spatialxquare.com?subject=${subject}&body=${body}`;
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

    feedback.textContent = `Merci. Votre demande ${result.request_id} a bien été transmise.`;
    form.reset();
    setMode("quick");
    updateServicePanel();
  } catch (error) {
    feedback.textContent = `L’API n’est pas disponible. Ouverture de l’e-mail de secours ${requestId}.`;
    openMailFallback(formData, requestId);
  }
});

const params = new URLSearchParams(window.location.search);
const requestedService = params.get("service");

if (requestedService) {
  serviceSelect.value = requestedService;
  setMode("detailed");
} else {
  setMode("quick");
}

updateServicePanel();
