const geophysicsData = window.geophysicsPageData;

function cardList(items) {
  return items.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function StepFlow(items, className = "") {
  return `
    <div class="geo-flow ${className}">
      ${items.map((item, index) => {
        const title = Array.isArray(item) ? item[0] : item;
        const text = Array.isArray(item) ? item[1] : "";
        return `
          <article class="geo-flow__item">
            <span>${index + 1}</span>
            <h3>${title}</h3>
            ${text ? `<p>${text}</p>` : ""}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function GeophysicsHero() {
  const { hero } = geophysicsData;

  return `
    <section class="expertise-hero geo-hero">
      <img src="${hero.image}" alt="${hero.imageAlt}">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content geo-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="#applications">Explorer les applications</a>
          <a class="button button-secondary" href="/demande-devis.html?service=geophysique">Discuter d’un projet</a>
        </div>
      </div>
    </section>
  `;
}

function InternalExpertiseNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation geophysique">
      <div class="container expertise-internal-nav__inner">
        ${geophysicsData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function WhySection() {
  const { why } = geophysicsData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner overview-layout">
        <div>
        <p class="section-kicker">Problématique</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        <div class="overview-grid">
          ${cardList(why.cards)}
        </div>
      </div>
    </section>
  `;
}

function WorkflowSection() {
  return `
    <section class="expertise-section expertise-muted" id="workflow">
      <div class="expertise-section__inner">
        <p class="section-kicker">De la mesure au résultat</p>
        <h2>Mesurer, traiter, interpréter, modéliser</h2>
        ${StepFlow(geophysicsData.workflow)}
      </div>
    </section>
  `;
}

function AdvancedValueSection() {
  const { advanced } = geophysicsData;

  return `
    <section class="expertise-section" id="valorisation">
      <div class="expertise-section__inner">
        <p class="section-kicker">Valorisation avancée des données</p>
        <h2>${advanced.title}</h2>
        <p class="expertise-lead">${advanced.text}</p>
        <div class="advanced-grid">
          ${cardList(advanced.cards)}
        </div>
      </div>
    </section>
  `;
}

function ApplicationsSection() {
  return `
    <section class="expertise-section" id="applications">
      <div class="expertise-section__inner">
        <p class="section-kicker">Applications de la géophysique</p>
        <h2>Une même logique d’investigation, adaptée aux enjeux de chaque projet.</h2>
        <div class="application-grid">
          ${geophysicsData.applications.map((application) => `
            <article class="application-card">
              <h3>${application.title}</h3>
              <p>${application.text}</p>
              <div class="application-card__points">
                ${application.points.map(([label, text]) => `<div><strong>${label}</strong><span>${text}</span></div>`).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function MethodsGrid(items) {
  return items.map((method) => `
    <article>
      <button
        class="method-image-button"
        type="button"
        aria-label="Voir l’appareil pour ${method.title}"
        data-method-image="${method.image}"
        data-method-title="${method.title}"
      >+</button>
      <h3>${method.title}</h3>
      <p>${method.text}</p>
    </article>
  `).join("");
}

function MethodsSection() {
  const { methods } = geophysicsData;

  return `
    <section class="expertise-section expertise-muted" id="methodes">
      <div class="expertise-section__inner">
        <p class="section-kicker">Méthodes géophysiques</p>
        <h2>Des méthodes adaptées à chaque problématique</h2>
        <p class="expertise-lead">${methods.text}</p>
        <h3 class="method-group-title">Méthodes mobilisables selon le projet</h3>
        <div class="method-grid">${MethodsGrid(methods.mobilisable)}</div>
      </div>
    </section>
  `;
}

function MethodImageDialog() {
  return `
    <div class="method-dialog" data-method-dialog hidden>
      <button class="method-dialog__backdrop" type="button" data-method-close aria-label="Fermer l’aperçu"></button>
      <div class="method-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="method-dialog-title">
        <button class="method-dialog__close" type="button" data-method-close aria-label="Fermer">×</button>
        <h2 id="method-dialog-title"></h2>
        <img src="" alt="" data-method-dialog-image>
      </div>
    </div>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section" id="livrables">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">Des données terrain aux résultats exploitables</p>
          <h2>Ce que nous livrons</h2>
          <p>Les livrables traduisent les mesures en supports lisibles pour les équipes terrain, les responsables techniques et les décideurs.</p>
        </div>
        <div class="deliverables-grid">
          ${geophysicsData.deliverables.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function DecisionSection() {
  const { decision } = geophysicsData;

  return `
    <section class="decision-band">
      <div class="container">
        <h2>${decision.title}</h2>
        <p>${decision.text}</p>
        ${StepFlow(decision.steps, "geo-flow--compact")}
      </div>
    </section>
  `;
}

function ReferencesSection() {
  const { references } = geophysicsData;

  return `
    <section class="expertise-section" id="references">
      <div class="expertise-section__inner">
        <p class="section-kicker">Références et expérience</p>
        <h2>Expériences avec composante géophysique explicite</h2>
        <p class="expertise-lead">${references.intro}</p>

        <h3 class="reference-group-title">${references.ownedTitle}</h3>
        <div class="reference-grid reference-grid--featured">
          ${references.owned.map((reference) => `
            <article class="reference-card">
              <img src="${reference.image}" alt="" loading="lazy">
              <div>
                <h3>${reference.title}</h3>
                <strong>${reference.meta}</strong>
                <p>${reference.text}</p>
                <span>${reference.result}</span>
              </div>
            </article>
          `).join("")}
        </div>

        <div class="documented-projects">
          <h3 class="reference-group-title">${references.documentedTitle}</h3>
          <p>${references.documentedNote}</p>
          <div class="documented-grid">
            ${references.documented.map(([domain, zone, method, result]) => `
              <article>
                <span>${domain}</span>
                <h4>${zone}</h4>
                <strong>${method}</strong>
                <p>${result}</p>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="reference-offer">
          <h3 class="reference-group-title">${references.offerTitle}</h3>
          <div class="overview-grid">
            ${cardList(references.offer)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function ProjectCallToAction() {
  const { cta } = geophysicsData;

  return `
    <section class="expertise-cta" id="devis">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          <a class="button button-primary" href="/demande-devis.html?service=geophysique">${cta.buttons[0]}</a>
          <a class="button button-primary" href="/demande-devis.html?service=geophysique">${cta.buttons[1]}</a>
        </div>
      </div>
    </section>
  `;
}

function renderGeophysicsPage() {
  document.querySelector("#geophysics-root").innerHTML = [
    GeophysicsHero(),
    InternalExpertiseNav(),
    WhySection(),
    WorkflowSection(),
    AdvancedValueSection(),
    ApplicationsSection(),
    MethodsSection(),
    DeliverablesSection(),
    DecisionSection(),
    ReferencesSection(),
    ProjectCallToAction(),
    MethodImageDialog()
  ].join("");
}

renderGeophysicsPage();

const methodDialog = document.querySelector("[data-method-dialog]");
const methodDialogTitle = document.querySelector("#method-dialog-title");
const methodDialogImage = document.querySelector("[data-method-dialog-image]");

function closeMethodDialog() {
  methodDialog.hidden = true;
  document.body.classList.remove("method-dialog-is-open");
}

document.querySelectorAll("[data-method-image]").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.methodTitle;

    methodDialogTitle.textContent = title;
    methodDialogImage.src = button.dataset.methodImage;
    methodDialogImage.alt = `Appareil utilisé pour ${title}`;
    methodDialog.hidden = false;
    document.body.classList.add("method-dialog-is-open");
  });
});

document.querySelectorAll("[data-method-close]").forEach((button) => {
  button.addEventListener("click", closeMethodDialog);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !methodDialog.hidden) {
    closeMethodDialog();
  }
});
