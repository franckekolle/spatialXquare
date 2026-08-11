const geostatData = window.geostatTrainingData;

function GeostatTags(items) {
  return `<div class="surpac-tags geostat-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function GeostatImage(src, label = "") {
  return `
    <figure class="surpac-image geostat-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = geostatData;
  return `
    <section class="expertise-hero geostat-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Complete Professional Path</a>
          <a class="button button-secondary" href="#specialites">Choisir une porte d’entrée</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation académie géostatistique">
      <div class="container expertise-internal-nav__inner">
        ${geostatData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Quatre portes principales</p>
          <h2>Du socle statistique à la décision spatiale</h2>
          <p>L’académie est organisée par logique métier : géostatistique appliquée, optimisation Supervisor, méthodes avancées Isatis.neo et Data Science géoscientifique.</p>
        </div>
        ${GeostatImage(geostatData.media.gateways, "Applied Geostatistics, Supervisor, Isatis.neo et Geoscience Data Science")}
      </div>
      <div class="expertise-section__inner geostat-gateway-grid">
        ${geostatData.gateways.map(([title, path, text]) => `
          <article>
            <span>${path}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/demande-devis.html?service=formation">Choisir ce parcours</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function PathSection() {
  return `
    <section class="expertise-section expertise-muted" id="parcours">
      <div class="expertise-section__inner surpac-split image-left">
        ${GeostatImage(geostatData.media.path, "Progression Geostatistics & Geoscience Data Science")}
        <div>
          <p class="section-kicker">From Samples to Spatial Intelligence</p>
          <h2>Une progression complète jusqu’à la décision</h2>
          <p>Le parcours part des statistiques et de la préparation des données, puis avance vers variographie, kriging, KNA, simulation, classification, Machine Learning spatial et automatisation.</p>
        </div>
      </div>
      <div class="expertise-section__inner geostat-path">
        ${geostatData.path.map(([number, title, level]) => `
          <article>
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${level}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ModuleCard(module) {
  return `
    <article class="surpac-module-card geostat-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${GeostatTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Application</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir ce module</a>
        <a href="#projet">Voir le projet Batouri Gold</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules de l’académie</p>
        <h2>Dix-sept modules pour relier théorie, logiciel, incertitude et Data Science</h2>
        <p>Chaque module peut être suivi indépendamment, mais le parcours complet donne une vision cohérente de la décision géoscientifique sous incertitude.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${GeostatImage(geostatData.media.modules, "Modules géostatistique, incertitude et Data Science")}
        <div class="surpac-module-grid">
          ${geostatData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = geostatData;
  return `
    <section class="decision-band geostat-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Des données géoscientifiques à la décision</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow geostat-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function SoftwareSection() {
  return `
    <section class="expertise-section expertise-muted" id="logiciels">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Différence entre les outils</p>
          <h2>Supervisor optimise l’estimation, Isatis.neo quantifie l’incertitude avancée</h2>
          <p>SpatialXquare n’enseigne pas seulement un logiciel. L’objectif est de savoir choisir, justifier, comparer et valider une méthode géostatistique.</p>
        </div>
        ${GeostatImage(geostatData.media.supervisor, "Supervisor pour variographie, KNA et validation")}
      </div>
      <div class="expertise-section__inner geostat-software-grid">
        ${geostatData.softwareLogic.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function AdvancedSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${GeostatImage(geostatData.media.isatis, "Isatis.neo pour simulations, incertitudes et risque")}
        <div>
          <p class="section-kicker">Géostatistique avancée</p>
          <h2>Simulation, non-linéaire, classification et risque</h2>
          <p>La partie avancée apprend à dépasser une estimation unique lissée pour analyser plusieurs réalisations, probabilités, percentiles et scénarios de risque.</p>
          ${GeostatTags(["Simulation conditionnelle", "SGS", "Turning Bands", "Uniform Conditioning", "MIK", "Classification", "Risk", "Uncertainty"])}
        </div>
      </div>
    </section>
  `;
}

function DataScienceSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Géostatistique + Machine Learning</p>
          <h2>Utiliser les deux approches de manière complémentaire</h2>
          <p>Machine Learning apprend des relations dans les données ; la géostatistique modélise explicitement la continuité et l’incertitude spatiales. L’académie relie les deux sans les confondre.</p>
          ${GeostatTags(["Spatial split", "Block cross-validation", "Residual kriging", "Regression kriging", "Spatial features", "Python", "Automation", "Reproducibility"])}
        </div>
        ${GeostatImage(geostatData.media.dataScience, "Data Science, Spatial ML et workflows reproductibles")}
      </div>
    </section>
  `;
}

function ValidationSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${GeostatImage(geostatData.media.validation, "Validation, classification et rapport technique")}
        <div>
          <p class="section-kicker">Formats & validation</p>
          <h2>Des modules séparés ou un Complete Professional Path</h2>
          <p>Les standards internationaux sont présentés comme cadres à comprendre. Une formation SpatialXquare ne confère pas, à elle seule, un statut réglementaire ou de Competent Person.</p>
          ${GeostatTags(geostatData.validation)}
          ${GeostatTags(geostatData.formats)}
          ${GeostatTags(geostatData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = geostatData;
  return `
    <section class="expertise-cta geostat-cta" id="contact">
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

document.querySelector("#geostat-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  SoftwareSection(),
  AdvancedSection(),
  DataScienceSection(),
  ValidationSection(),
  CtaSection()
].join("");
