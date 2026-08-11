const resourceData = window.resourceGeologistTrainingData;

function ResourceTags(items) {
  return `<div class="surpac-tags resource-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function ResourceImage(src, label = "") {
  return `
    <figure class="surpac-image resource-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = resourceData;
  return `
    <section class="expertise-hero resource-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Demander ce parcours</a>
          <a class="button button-secondary" href="#logiciels">Voir les logiciels</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Géologue ressources">
      <div class="container expertise-internal-nav__inner">
        ${resourceData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function SkillsSection() {
  return `
    <section class="expertise-section" id="competences">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Compétences ressources</p>
          <h2>Modéliser, estimer, quantifier et documenter</h2>
          <p>Le parcours rassemble les compétences nécessaires pour passer d’un modèle géologique à un modèle de ressources interprétable, contrôlé et techniquement défendable.</p>
        </div>
        ${ResourceImage(resourceData.media.modeling, "Modélisation géologique et ressources")}
      </div>
      <div class="expertise-section__inner resource-card-grid">
        ${resourceData.skills.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function SoftwareSection() {
  return `
    <section class="expertise-section expertise-muted" id="logiciels">
      <div class="expertise-section__inner surpac-split image-left">
        ${ResourceImage(resourceData.media.software, "Logiciels miniers pour géologues ressources")}
        <div>
          <p class="section-kicker">Logiciels miniers</p>
          <h2>Choisir le bon outil selon l’étape du workflow ressources</h2>
          <p>Surpac, Leapfrog, Vulcan, Datamine, Micromine, Supervisor et Isatis.neo sont reliés au parcours métier, au lieu d’être présentés comme des formations isolées.</p>
        </div>
      </div>
      <div class="expertise-section__inner resource-software-grid">
        ${resourceData.software.map(([title, href, text]) => `
          <a class="training-linked-card" href="${href}">
            <article>
              <h3>${title}</h3>
              <p>${text}</p>
              <span class="training-card-link">Ouvrir la formation</span>
            </article>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function PathSection() {
  return `
    <section class="expertise-section" id="parcours">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Progression métier</p>
          <h2>De la base géologique au calcul des réserves</h2>
          <p>Le prospect peut suivre le parcours complet ou choisir uniquement l’étape qui correspond à son besoin opérationnel.</p>
        </div>
        ${ResourceImage(resourceData.media.estimation, "Estimation des ressources et block modelling")}
      </div>
      <div class="expertise-section__inner resource-path-grid">
        ${resourceData.path.map(([number, title, text]) => `
          <article>
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function UncertaintySection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split image-left">
        ${ResourceImage(resourceData.media.uncertainty, "Incertitudes, simulations et classification")}
        <div>
          <p class="section-kicker">Incertitudes & classification</p>
          <h2>Ne pas seulement estimer : mesurer la confiance dans le modèle</h2>
          <p>Le parcours oriente vers les modules de simulation, probabilités, KNA, validation, classification des ressources et risque géologique.</p>
          ${ResourceTags(["Variographie", "KNA", "Simulation", "Uncertainty", "Classification", "Risk", "Validation", "Reporting"])}
        </div>
      </div>
    </section>
  `;
}

function ReservesSection() {
  const { reserves } = resourceData;
  return `
    <section class="decision-band resource-project-band" id="reserves">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Réserves & planification</p>
          <h2>${reserves.title}</h2>
          <p>${reserves.text}</p>
        </div>
        <div class="resource-link-stack">
          ${reserves.links.map(([title, href]) => `<a class="training-card-link" href="${href}">${title}</a>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = resourceData;
  return `
    <section class="expertise-cta resource-cta" id="contact">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          ${cta.buttons.map((button) => `<a class="button button-primary" href="/demande-devis.html?service=formation">${button}</a>`).join("")}
        </div>
      </div>
    </section>
  `;
}

document.querySelector("#resource-geologist-root").innerHTML = [
  Hero(),
  InternalNav(),
  SkillsSection(),
  SoftwareSection(),
  PathSection(),
  UncertaintySection(),
  ReservesSection(),
  CtaSection()
].join("");
