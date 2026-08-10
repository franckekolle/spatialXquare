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

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.quoteMode));
});

serviceSelect.addEventListener("change", updateServicePanel);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const requestId = buildRequestId();
  const subject = encodeURIComponent(`Demande de devis ${requestId} - ${formData.get("project_name") || "Projet"}`);
  const body = encodeURIComponent(buildMessage(formData, requestId));

  feedback.textContent = `Merci. Votre demande ${requestId} est prête à être transmise à notre équipe.`;
  window.location.href = `mailto:contact_devis@spatialxquare.com?subject=${subject}&body=${body}`;
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
