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
let authMode = "login";

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    const text = await response.text();
    const result = text ? JSON.parse(text) : {};
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
    ? "Créez le premier compte administrateur. Cette inscription sera bloquée dès qu’un compte existe."
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

function renderStats(stats) {
  statsRoot.innerHTML = stats.length
    ? stats.map((item) => `
      <article>
        <strong>${item.total}</strong>
        <span>${item.status}</span>
      </article>
    `).join("")
    : "<p>Aucune demande enregistrée.</p>";
}

function renderProjects(projects) {
  listRoot.innerHTML = projects.length
    ? projects.map((project) => {
      const data = parseCustomData(project);
      return `
        <article class="admin-request-card">
          <header>
            <div>
              <strong>${project.request_id}</strong>
              <h2>${project.project_name}</h2>
            </div>
            <span>${project.service_type}</span>
          </header>
          <dl>
            <div><dt>Statut</dt><dd>${project.status}</dd></div>
            <div><dt>Date</dt><dd>${new Date(project.created_at).toLocaleString("fr-FR")}</dd></div>
            <div><dt>Nom</dt><dd>${project.contact_name || "Contact site web"}</dd></div>
            <div><dt>E-mail</dt><dd><a href="mailto:${project.contact_email}">${project.contact_email}</a></dd></div>
            <div><dt>WhatsApp</dt><dd>${project.contact_phone || "-"}</dd></div>
            <div><dt>Lieu</dt><dd>${project.location || "-"}</dd></div>
            <div><dt>Offre</dt><dd>${data.offer || "-"}</dd></div>
          </dl>
          <p>${project.need}</p>
        </article>
      `;
    }).join("")
    : "<p>Aucune demande reçue pour le moment.</p>";
}

async function loadDashboard() {
  let response;
  let result;

  try {
    ({ response, result } = await fetchJson("/api/dashboard"));
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

  showDashboard(true);
  adminUser.textContent = `Connecté : ${result.user.email}`;
  renderStats(result.stats || []);
  renderProjects(result.projects || []);
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
        name: formData.get("name")
      })
    }));
  } catch (error) {
    loginFeedback.textContent = "Le serveur ne répond pas. Vérifiez que DB, SESSIONS et les migrations D1 sont bien déployés.";
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

loadDashboard();
setAuthMode("login");
