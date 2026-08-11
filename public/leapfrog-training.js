const leapfrogData = window.leapfrogTrainingData;

function LeapfrogTags(items) {
  return `<div class="surpac-tags leapfrog-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function LeapfrogImage(src, label = "") {
  return `
    <figure class="surpac-image leapfrog-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = leapfrogData;
  return `
    <section class="expertise-hero leapfrog-hero">
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
          <a class="button button-secondary" href="#modules">Choisir un module</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Leapfrog Geo">
      <div class="container expertise-internal-nav__inner">
        ${leapfrogData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function PathSection() {
  return `
    <section class="expertise-section" id="parcours">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Parcours complet Leapfrog Geo</p>
          <h2>Une progression pédagogique 0 → 6</h2>
          <p>Le parcours complet met l’accent sur le modèle implicite dynamique, les structures, l’exploration, l’actualisation et le ciblage.</p>
        </div>
        ${LeapfrogImage(leapfrogData.media.path, "Progression Leapfrog de la donnée au ciblage")}
      </div>
      <div class="expertise-section__inner surpac-path leapfrog-path">
        ${leapfrogData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card leapfrog-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${LeapfrogTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
        <strong>Résultat</strong>
        <p>${module.result}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir cette formation</a>
        <a href="#fiche">Voir la fiche type</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section expertise-muted" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules à la carte</p>
        <h2>Sept modules pour construire, actualiser et exploiter un modèle dynamique</h2>
        <p>Chaque module peut être choisi seul, mais le parcours complet permet une montée en compétence cohérente autour d’un même projet.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${LeapfrogImage(leapfrogData.media.modules, "Modules Leapfrog organisés autour d’un modèle dynamique")}
        <div class="surpac-module-grid">
          ${leapfrogData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = leapfrogData;
  return `
    <section class="decision-band leapfrog-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge Leapfrog</p>
          <h2>Un modèle qui s’enrichit et s’actualise pendant tout le parcours</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow leapfrog-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function PositioningSection() {
  return `
    <section class="expertise-section" id="positionnement">
      <div class="expertise-section__inner surpac-split image-left">
        ${LeapfrogImage(leapfrogData.media.assessment, "Évaluation de positionnement Leapfrog Geo")}
        <div>
          <p class="section-kicker">Entrer au bon niveau</p>
          <h2>Nouveaux utilisateurs, utilisateurs existants ou géologues expérimentés</h2>
          <p>Le parcours complet reste disponible, mais un test de positionnement permet d’identifier un point d’entrée adapté.</p>
          <div class="surpac-position-grid leapfrog-position-grid">
            ${leapfrogData.positioning.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function ModuleSheetSection() {
  return `
    <section class="expertise-section expertise-muted" id="fiche">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Fiche détaillée de chaque module</p>
          <h2>Chaque module indique les compétences réellement acquises</h2>
          <p>Le participant doit savoir importer, contrôler, modéliser, actualiser, interroger et présenter un modèle selon le niveau du module suivi.</p>
          ${LeapfrogTags(leapfrogData.moduleSheet)}
        </div>
        ${LeapfrogImage(leapfrogData.media.modulePage, "Structure d’une fiche module Leapfrog Geo")}
      </div>
    </section>
  `;
}

function PremiumOfferSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${LeapfrogImage(leapfrogData.media.premium, "Parcours complet Leapfrog Geo avec projet final")}
        <div>
          <p class="section-kicker">Offre premium</p>
          <h2>Parcours complet Leapfrog Geo 0 → 6</h2>
          <p>Une spécialisation professionnelle orientée modèle dynamique, exploration, sections, drillhole planning et présentation finale.</p>
          ${LeapfrogTags(leapfrogData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = leapfrogData;
  return `
    <section class="expertise-cta leapfrog-cta" id="contact">
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

document.querySelector("#leapfrog-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  PositioningSection(),
  ModuleSheetSection(),
  PremiumOfferSection(),
  CtaSection()
].join("");
