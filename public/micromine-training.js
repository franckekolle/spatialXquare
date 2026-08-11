const micromineData = window.micromineTrainingData;

function MicromineTags(items) {
  return `<div class="surpac-tags micromine-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function MicromineImage(src, label = "") {
  return `
    <figure class="surpac-image micromine-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = micromineData;
  return `
    <section class="expertise-hero micromine-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Suivre le parcours complet</a>
          <a class="button button-secondary" href="#specialites">Choisir une spécialisation</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Micromine">
      <div class="container expertise-internal-nav__inner">
        ${micromineData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Quatre spécialisations</p>
          <h2>Exploration, modélisation, ressources et stratigraphie</h2>
          <p>Micromine est présenté comme une chaîne complète d’exploration et de modélisation, avec une branche stratigraphique distincte pour les gisements tabulaires.</p>
        </div>
        ${MicromineImage(micromineData.media.gateways, "Exploration, Geological Modeling, Resource Modeling et Stratigraphic Modeling")}
      </div>
      <div class="expertise-section__inner micromine-gateway-grid">
        ${micromineData.gateways.map(([title, path, text]) => `
          <article>
            <span>${path}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/demande-devis.html?service=formation">Choisir cette spécialisation</a>
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
        ${MicromineImage(micromineData.media.path, "Parcours Micromine complet 0 à 8")}
        <div>
          <p class="section-kicker">Progression 0 → 8</p>
          <h2>Débutant → intermédiaire → avancé → expert → projet professionnel</h2>
          <p>Le visiteur peut choisir un module isolé ou suivre le Complete Exploration & Resource Path, depuis les données jusqu’au modèle de ressources validé.</p>
        </div>
      </div>
      <div class="expertise-section__inner surpac-path micromine-path">
        ${micromineData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card micromine-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${MicromineTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir ce module</a>
        <a href="#projet">Voir le projet fil rouge</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules Micromine</p>
        <h2>Explorer, interpréter, construire, estimer et décider</h2>
        <p>Le parcours suit une progression métier et conserve la stratigraphie comme une branche spécialisée avec son propre mini-projet.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${MicromineImage(micromineData.media.modules, "Modules Micromine Origin & Beyond")}
        <div class="surpac-module-grid">
          ${micromineData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = micromineData;
  return `
    <section class="decision-band micromine-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>De l’exploration polymétallique au Resource Model</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow micromine-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function ModelingSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Explicite + implicite</p>
          <h2>Deux manières de construire le modèle géologique</h2>
          <p>La page Micromine met en scène la différence entre wireframing explicite, contrôle géologique manuel et modélisation implicite plus dynamique.</p>
          ${MicromineTags(["Sections", "Strings", "Wireframes", "Surfaces", "Solides", "Implicit model", "Domaines", "Comparaison"])}
        </div>
        ${MicromineImage(micromineData.media.wireframes, "Wireframing explicite et modélisation implicite")}
      </div>
    </section>
  `;
}

function StratigraphicSection() {
  const { stratigraphic } = micromineData;
  return `
    <section class="expertise-section" id="stratigraphie">
      <div class="expertise-section__inner surpac-split image-left">
        ${MicromineImage(micromineData.media.stratigraphic, "Branche Stratigraphic Modeling")}
        <div>
          <p class="section-kicker">Branche spécialisée</p>
          <h2>${stratigraphic.title}</h2>
          <p>${stratigraphic.text}</p>
          ${MicromineTags(stratigraphic.tags)}
        </div>
      </div>
    </section>
  `;
}

function ResourceSection() {
  return `
    <section class="expertise-section expertise-muted" id="validation">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Resource Modeling</p>
          <h2>Du block model au kriging, puis à la validation</h2>
          <p>Le parcours ressources met l’accent sur les populations, les composites, la variographie, le kriging, le contrôle spatial et la présentation technique.</p>
          ${MicromineTags(micromineData.validation)}
          ${MicromineTags(micromineData.formats)}
        </div>
        ${MicromineImage(micromineData.media.resource, "Géostatistique, kriging et validation")}
      </div>
    </section>
  `;
}

function PremiumSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${MicromineImage(micromineData.media.validation, "Projet final et validation SpatialXquare")}
        <div>
          <p class="section-kicker">Complete Exploration & Resource Path</p>
          <h2>Un parcours complet, ou des modules suivis indépendamment</h2>
          <p>La formation peut utiliser un dataset SpatialXquare ou être adaptée aux données de l’entreprise, selon leur qualité, disponibilité et confidentialité.</p>
          ${MicromineTags(micromineData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = micromineData;
  return `
    <section class="expertise-cta micromine-cta" id="contact">
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

document.querySelector("#micromine-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  ModelingSection(),
  StratigraphicSection(),
  ResourceSection(),
  PremiumSection(),
  CtaSection()
].join("");
