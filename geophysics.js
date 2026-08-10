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
          <a class="button button-secondary" href="#devis">Discuter d’un projet</a>
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
        <h2>Une chaîne complète, orientée décision</h2>
        ${StepFlow(geophysicsData.workflow)}
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
  return items.map(([title, text]) => `<article><span aria-hidden="true">+</span><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function MethodsSection() {
  const { methods } = geophysicsData;

  return `
    <section class="expertise-section expertise-muted" id="methodes">
      <div class="expertise-section__inner">
        <p class="section-kicker">Méthodes géophysiques</p>
        <h2>Des méthodes adaptées à chaque problématique</h2>
        <p class="expertise-lead">${methods.text}</p>
        <h3 class="method-group-title">Méthodes actuellement opérationnelles</h3>
        <div class="method-grid method-grid--operational">${MethodsGrid(methods.operational)}</div>
        <h3 class="method-group-title">Méthodes mobilisables selon le projet</h3>
        <div class="method-grid">${MethodsGrid(methods.mobilisable)}</div>
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section" id="livrables">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">Des données terrain aux résultats exploitables</p>
          <h2>Ce que nous livrons</h2>
          <p>Les livrables traduisent les mesures en supports lisibles pour les equipes terrain, les responsables techniques et les decideurs.</p>
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
  return `
    <section class="expertise-section" id="references">
      <div class="expertise-section__inner">
          <p class="section-kicker">Références et expérience</p>
          <h2>Expériences avec composante géophysique explicite</h2>
        <div class="reference-grid">
          ${geophysicsData.references.map((reference) => `
            <article>
              <h3>${reference.title}</h3>
              <strong>${reference.meta}</strong>
              <p>${reference.text}</p>
            </article>
          `).join("")}
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
          ${cta.buttons.map((button) => `<a class="button button-primary" href="mailto:contact@spatialxquare.com">${button}</a>`).join("")}
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
    ApplicationsSection(),
    MethodsSection(),
    DeliverablesSection(),
    DecisionSection(),
    ReferencesSection(),
    ProjectCallToAction()
  ].join("");
}

renderGeophysicsPage();
