const loginSection = document.querySelector("[data-admin-login]");
const dashboardSection = document.querySelector("[data-admin-dashboard]");
const authForm = document.querySelector("[data-auth-form]");
const loginFeedback = document.querySelector("[data-login-feedback]");
const authButtons = document.querySelectorAll("[data-auth-mode]");
const signupOnlyFields = document.querySelectorAll("[data-signup-only]");
const authSubmit = document.querySelector("[data-auth-submit]");
const adminIntro = document.querySelector("[data-admin-intro]");
const adminUser = document.querySelector("[data-admin-user]");
const statsRoot = document.querySelector("[data-admin-stats]");
const listRoot = document.querySelector("[data-admin-list]");
const logoutButton = document.querySelector("[data-logout]");
const searchInput = document.querySelector("[data-admin-search]");
const statusFilter = document.querySelector("[data-admin-status-filter]");
const serviceFilter = document.querySelector("[data-admin-service-filter]");
const sortSelect = document.querySelector("[data-admin-sort]");
const directionSelect = document.querySelector("[data-admin-direction]");
const paginationRoot = document.querySelector("[data-admin-pagination]");
const detailPanel = document.querySelector("[data-detail-panel]");
const detailTitle = document.querySelector("[data-detail-title]");
const detailContent = document.querySelector("[data-detail-content]");
const detailClose = document.querySelector("[data-detail-close]");
const replyPanel = document.querySelector("[data-reply-panel]");
const replyForm = document.querySelector("[data-reply-form]");
const replyTitle = document.querySelector("[data-reply-title]");
const replyRecipient = document.querySelector("[data-reply-recipient]");
const replyFeedback = document.querySelector("[data-reply-feedback]");
const replyClose = document.querySelector("[data-reply-close]");
const usersSection = document.querySelector("[data-admin-users-section]");
const usersForm = document.querySelector("[data-admin-user-form]");
const usersList = document.querySelector("[data-admin-users-list]");
const usersFeedback = document.querySelector("[data-admin-user-feedback]");

let authMode = "login";
let projects = [];
let currentUser = null;
let pagination = { page: 1, pages: 1, total: 0, page_size: 20 };
let searchTimer = null;

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    const text = await response.text();
    let result = {};

    try {
      result = text ? JSON.parse(text) : {};
    } catch (error) {
      result = {
        ok: false,
        error: text ? text.slice(0, 280) : "Réponse serveur non JSON."
      };
    }

    return { response, result };
  } finally {
    clearTimeout(timeout);
  }
}

function showDashboard(isVisible) {
  loginSection.hidden = isVisible;
  dashboardSection.hidden = !isVisible;
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";

  authButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authMode === mode);
  });
  signupOnlyFields.forEach((field) => {
    field.hidden = !isSignup;
  });
  authSubmit.textContent = isSignup ? "Créer le compte admin" : "Se connecter";
  adminIntro.textContent = isSignup
    ? "Créez un compte administrateur. Après le premier compte, le code d’inscription admin est obligatoire."
    : "Connectez-vous pour consulter les formulaires reçus depuis le site.";
  loginFeedback.textContent = "";
}

function parseCustomData(project) {
  try {
    return JSON.parse(project.custom_data || "{}");
  } catch (error) {
    return {};
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function optionList(items, valueKey, labelKey, fallbackLabel) {
  const current = valueKey === "status" ? statusFilter.value : serviceFilter.value;
  const options = items.map((item) => {
    const value = item[valueKey] || "";
    const label = item[labelKey] || value || "-";
    const total = item.total ? ` (${item.total})` : "";
    return `<option value="${escapeHtml(value)}">${escapeHtml(label)}${escapeHtml(total)}</option>`;
  }).join("");
  return {
    html: `<option value="">${fallbackLabel}</option>${options}`,
    current
  };
}

function renderStats(stats) {
  statsRoot.innerHTML = stats.length
    ? stats.map((item) => `
      <article>
        <strong>${escapeHtml(item.total)}</strong>
        <span>${escapeHtml(item.status)}</span>
      </article>
    `).join("")
    : "<p>Aucune demande enregistrée.</p>";
}

function renderFilters(result) {
  const statusOptions = optionList(result.stats || [], "status", "status", "Tous les statuts");
  statusFilter.innerHTML = statusOptions.html;
  statusFilter.value = [...statusFilter.options].some((option) => option.value === statusOptions.current) ? statusOptions.current : "";

  const serviceOptions = optionList(result.services || [], "service_type", "service_type", "Tous les services");
  serviceFilter.innerHTML = serviceOptions.html;
  serviceFilter.value = [...serviceFilter.options].some((option) => option.value === serviceOptions.current) ? serviceOptions.current : "";
}

function renderProjects(items) {
  listRoot.innerHTML = items.length
    ? `
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Référence</th>
              <th>Date</th>
              <th>Client</th>
              <th>Service</th>
              <th>Statut</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((project) => {
      const data = parseCustomData(project);
      return `
        <tr>
          <td><strong>${escapeHtml(project.request_id)}</strong></td>
          <td>${escapeHtml(new Date(project.created_at).toLocaleString("fr-FR"))}</td>
          <td>
            <strong>${escapeHtml(project.contact_name || "Contact site web")}</strong>
            <a href="mailto:${escapeHtml(project.contact_email)}">${escapeHtml(project.contact_email)}</a>
            <span>${escapeHtml(project.contact_phone || "-")}</span>
          </td>
          <td>
            <strong>${escapeHtml(project.service_type)}</strong>
            <span>${escapeHtml(data.offer || project.project_name || "-")}</span>
          </td>
          <td><span class="admin-status">${escapeHtml(project.status)}</span></td>
          <td>${escapeHtml(project.need)}</td>
          <td>
            <div class="admin-row-actions">
              <button type="button" data-view-request="${escapeHtml(project.request_id)}">Voir</button>
              <button type="button" data-reply-request="${escapeHtml(project.request_id)}">Répondre</button>
              <button type="button" class="danger" data-delete-request="${escapeHtml(project.request_id)}">Supprimer</button>
            </div>
          </td>
        </tr>
      `;
    }).join("")}
          </tbody>
        </table>
      </div>
    `
    : "<p>Aucune demande reçue pour ces critères.</p>";
}

function renderPagination() {
  paginationRoot.innerHTML = `
    <span>${escapeHtml(pagination.total)} demande(s) · page ${escapeHtml(pagination.page)} / ${escapeHtml(pagination.pages)}</span>
    <div>
      <button type="button" data-page-prev ${pagination.page <= 1 ? "disabled" : ""}>Précédent</button>
      <button type="button" data-page-next ${pagination.page >= pagination.pages ? "disabled" : ""}>Suivant</button>
    </div>
  `;
}

function dashboardUrl(page = 1) {
  const params = new URLSearchParams({
    page: String(page),
    page_size: String(pagination.page_size || 20),
    sort: sortSelect.value,
    direction: directionSelect.value
  });

  if (searchInput.value.trim()) params.set("q", searchInput.value.trim());
  if (statusFilter.value) params.set("status", statusFilter.value);
  if (serviceFilter.value) params.set("service", serviceFilter.value);
  return `/api/dashboard?${params.toString()}`;
}

async function loadDashboard(page = 1) {
  let response;
  let result;

  try {
    ({ response, result } = await fetchJson(dashboardUrl(page)));
  } catch (error) {
    showDashboard(false);
    loginFeedback.textContent = "Impossible de joindre le tableau de bord pour le moment.";
    return;
  }

  if (!response.ok || !result.ok) {
    showDashboard(false);
    loginFeedback.textContent = result.error || "Connexion requise.";
    return;
  }

  currentUser = result.user;
  projects = result.projects || [];
  pagination = result.pagination || pagination;

  showDashboard(true);
  adminUser.textContent = `Connecté : ${result.user.email} · ${result.user.role || "admin"}`;
  renderStats(result.stats || []);
  renderFilters(result);
  renderProjects(projects);
  renderPagination();
  await loadAdminUsers();
}

function openDetail(requestId) {
  const project = projects.find((item) => item.request_id === requestId);
  if (!project) return;

  const data = parseCustomData(project);
  detailTitle.textContent = project.request_id;
  detailContent.innerHTML = `
    <dl>
      <dt>Client</dt><dd>${escapeHtml(project.contact_name || "Contact site web")}</dd>
      <dt>Organisation</dt><dd>${escapeHtml(project.organization_name || "-")}</dd>
      <dt>Email</dt><dd><a href="mailto:${escapeHtml(project.contact_email)}">${escapeHtml(project.contact_email)}</a></dd>
      <dt>Téléphone / WhatsApp</dt><dd>${escapeHtml(project.contact_phone || "-")}</dd>
      <dt>Service</dt><dd>${escapeHtml(project.service_type || "-")}</dd>
      <dt>Offre / contexte</dt><dd>${escapeHtml(data.offer || project.project_name || "-")}</dd>
      <dt>Localisation</dt><dd>${escapeHtml(project.location || "-")}</dd>
      <dt>Statut</dt><dd>${escapeHtml(project.status || "-")}</dd>
      <dt>Date</dt><dd>${escapeHtml(new Date(project.created_at).toLocaleString("fr-FR"))}</dd>
      <dt>Message</dt><dd>${escapeHtml(project.need || "-")}</dd>
      <dt>Page source</dt><dd>${escapeHtml(data.source_page || data.page_url || "-")}</dd>
    </dl>
  `;
  detailPanel.hidden = false;
}

async function loadAdminUsers() {
  if (!currentUser || currentUser.role !== "super_admin") {
    usersSection.hidden = true;
    return;
  }

  usersSection.hidden = false;
  const { response, result } = await fetchJson("/api/admin/users");
  if (!response.ok || !result.ok) {
    usersList.innerHTML = "<p>Impossible de charger les administrateurs.</p>";
    return;
  }

  usersList.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table admin-users-table">
        <thead>
          <tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Statut</th><th>Créé le</th><th>Actions</th></tr>
        </thead>
        <tbody>
          ${result.users.map((user) => `
            <tr>
              <td>${escapeHtml(user.name || "-")}</td>
              <td>${escapeHtml(user.email)}</td>
              <td>${escapeHtml(user.role)}</td>
              <td>${user.active ? "Actif" : "Désactivé"}</td>
              <td>${escapeHtml(new Date(user.created_at).toLocaleString("fr-FR"))}</td>
              <td>${user.active ? `
                <div class="admin-row-actions">
                  <button type="button" data-user-role="${escapeHtml(user.id)}" data-next-role="${user.role === "super_admin" ? "admin" : "super_admin"}">
                    ${user.role === "super_admin" ? "Rétrograder" : "Promouvoir"}
                  </button>
                  <button type="button" class="danger" data-delete-user="${escapeHtml(user.id)}" data-user-email="${escapeHtml(user.email)}">Supprimer</button>
                </div>
              ` : "—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

authButtons.forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginFeedback.textContent = authMode === "signup" ? "Création du compte..." : "Connexion...";
  authSubmit.disabled = true;

  const formData = new FormData(authForm);
  let response;
  let result;

  try {
    ({ response, result } = await fetchJson(authMode === "signup" ? "/api/auth/signup" : "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        signup_code: formData.get("signup_code")
      })
    }));
  } catch (error) {
    loginFeedback.textContent = error.name === "AbortError"
      ? "Le serveur met trop de temps à répondre. Redéployez avec la dernière version puis réessayez."
      : "Le serveur ne répond pas. Vérifiez que DB, SESSIONS et les migrations D1 sont bien déployés.";
    authSubmit.disabled = false;
    return;
  }

  authSubmit.disabled = false;

  if (!response.ok || !result.ok) {
    loginFeedback.textContent = result.error || "Action impossible.";
    return;
  }

  authForm.reset();

  if (authMode === "signup") {
    setAuthMode("login");
    loginFeedback.textContent = "Compte créé. Vous pouvez maintenant vous connecter.";
    return;
  }

  loginFeedback.textContent = "";
  await loadDashboard();
});

logoutButton.addEventListener("click", async () => {
  await fetch("/api/auth/logout", { method: "POST" });
  showDashboard(false);
});

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => loadDashboard(1), 260);
});

[statusFilter, serviceFilter, sortSelect, directionSelect].forEach((control) => {
  control.addEventListener("change", () => loadDashboard(1));
});

paginationRoot.addEventListener("click", (event) => {
  if (event.target.closest("[data-page-prev]")) loadDashboard(Math.max(1, pagination.page - 1));
  if (event.target.closest("[data-page-next]")) loadDashboard(Math.min(pagination.pages, pagination.page + 1));
});

listRoot.addEventListener("click", async (event) => {
  const viewButton = event.target.closest("[data-view-request]");
  const replyButton = event.target.closest("[data-reply-request]");
  const deleteButton = event.target.closest("[data-delete-request]");

  if (viewButton) {
    openDetail(viewButton.dataset.viewRequest);
  }

  if (replyButton) {
    const requestId = replyButton.dataset.replyRequest;
    const project = projects.find((item) => item.request_id === requestId);
    replyForm.elements.request_id.value = requestId;
    replyTitle.textContent = `Répondre à ${requestId}`;
    replyRecipient.textContent = project ? `${project.contact_email} · ${project.contact_phone || "WhatsApp non renseigné"}` : "";
    replyFeedback.textContent = "";
    replyPanel.hidden = false;
    replyForm.elements.message.focus();
  }

  if (deleteButton) {
    const requestId = deleteButton.dataset.deleteRequest;
    if (!confirm(`Supprimer définitivement la demande ${requestId} ?`)) return;

    deleteButton.disabled = true;
    let response;
    let result;

    try {
      ({ response, result } = await fetchJson("/api/admin/delete-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ request_id: requestId })
      }));
    } catch (error) {
      alert("Le serveur ne répond pas. Suppression impossible pour le moment.");
      deleteButton.disabled = false;
      return;
    }

    if (!response.ok || !result.ok) {
      alert(result.error || "Suppression impossible.");
      deleteButton.disabled = false;
      return;
    }

    await loadDashboard(pagination.page);
  }
});

detailClose.addEventListener("click", () => {
  detailPanel.hidden = true;
});

detailPanel.addEventListener("pointerdown", (event) => {
  if (event.target === detailPanel) detailPanel.hidden = true;
});

replyClose.addEventListener("click", () => {
  replyPanel.hidden = true;
});

replyPanel.addEventListener("pointerdown", (event) => {
  if (event.target === replyPanel) replyPanel.hidden = true;
});

replyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  replyFeedback.textContent = "Envoi de la réponse...";

  const formData = new FormData(replyForm);
  let response;
  let result;

  try {
    ({ response, result } = await fetchJson("/api/admin/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        request_id: formData.get("request_id"),
        message: formData.get("message")
      })
    }));
  } catch (error) {
    replyFeedback.textContent = "Le serveur ne répond pas. Réponse impossible pour le moment.";
    return;
  }

  if (!response.ok || !result.ok) {
    replyFeedback.textContent = result.error || "Réponse impossible.";
    return;
  }

  replyFeedback.textContent = "Réponse envoyée.";
  replyForm.reset();
  await loadDashboard(pagination.page);
  replyPanel.hidden = true;
});

usersForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  usersFeedback.textContent = "Création de l’administrateur...";

  const formData = new FormData(usersForm);
  const { response, result } = await fetchJson("/api/admin/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    })
  });

  if (!response.ok || !result.ok) {
    usersFeedback.textContent = result.error || "Création impossible.";
    return;
  }

  usersForm.reset();
  usersFeedback.textContent = "Administrateur ajouté.";
  await loadAdminUsers();
});

usersList.addEventListener("click", async (event) => {
  const roleButton = event.target.closest("[data-user-role]");
  const deleteButton = event.target.closest("[data-delete-user]");
  if (!roleButton && !deleteButton) return;

  const button = roleButton || deleteButton;
  const userId = roleButton ? roleButton.dataset.userRole : deleteButton.dataset.deleteUser;
  const isDelete = Boolean(deleteButton);
  const actionLabel = isDelete
    ? `supprimer le compte ${deleteButton.dataset.userEmail}`
    : `${roleButton.dataset.nextRole === "super_admin" ? "promouvoir" : "rétrograder"} ce compte`;
  if (!confirm(`Voulez-vous vraiment ${actionLabel} ?`)) return;

  button.disabled = true;
  usersFeedback.textContent = "Mise à jour du compte...";

  try {
    const { response, result } = await fetchJson("/api/admin/users", {
      method: isDelete ? "DELETE" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        ...(isDelete ? {} : { role: roleButton.dataset.nextRole })
      })
    });

    if (!response.ok || !result.ok) {
      usersFeedback.textContent = result.error || "Mise à jour impossible.";
      button.disabled = false;
      return;
    }

    usersFeedback.textContent = isDelete ? "Compte supprimé." : "Rôle mis à jour.";
    if (isDelete && userId === currentUser.id) {
      currentUser = null;
      showDashboard(false);
      return;
    }
    if (!isDelete && userId === currentUser.id && roleButton.dataset.nextRole === "admin") {
      currentUser.role = "admin";
      usersSection.hidden = true;
      adminUser.textContent = `Connecté : ${currentUser.email} · admin`;
      return;
    }
    await loadAdminUsers();
  } catch (error) {
    usersFeedback.textContent = "Le serveur ne répond pas. Mise à jour impossible.";
    button.disabled = false;
  }
});

loadDashboard();
setAuthMode("login");
