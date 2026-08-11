const surpacData = window.surpacTrainingData;

function Tags(items) {
  return `<div class="surpac-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function ImagePanel(src, label = "") {
  return `
    <figure class="surpac-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = surpacData;
  return `
    <section class="expertise-hero surpac-hero">
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
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Surpac">
      <div class="container expertise-internal-nav__inner">
        ${surpacData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function PathSection() {
  return `
    <section class="expertise-section" id="parcours">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Le parcours complet</p>
          <h2>Une progression pédagogique 0 → 5</h2>
          <p>Le visiteur peut sélectionner un module à la carte ou suivre l’ensemble du parcours jusqu’au projet final.</p>
        </div>
        ${ImagePanel(surpacData.media.path, "Progression Surpac de la donnée au modèle final")}
      </div>
      <div class="expertise-section__inner surpac-path">
        ${surpacData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${Tags(module.content)}
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
        <h2>Six modules, un seul fil conducteur</h2>
        <p>Chaque module peut être suivi indépendamment, mais le parcours complet conserve une continuité pédagogique forte.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${ImagePanel(surpacData.media.modules, "Modules Surpac organisés autour d’un projet fil rouge")}
        <div class="surpac-module-grid">
          ${surpacData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = surpacData;
  return `
    <section class="decision-band surpac-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Le projet fil rouge</p>
          <h2>Un même projet du premier jour au modèle final</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow">
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
        ${ImagePanel(surpacData.media.assessment, "Évaluation de positionnement avant l’entrée dans le parcours")}
        <div>
          <p class="section-kicker">Vous utilisez déjà Surpac ?</p>
          <h2>Entrer au bon niveau</h2>
          <p>Un utilisateur expérimenté ne doit pas obligatoirement commencer au module 0. Une courte évaluation permet d’identifier le niveau adapté.</p>
          <div class="surpac-position-grid">
            ${surpacData.positioning.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
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
          <h2>Chaque formation doit indiquer ce que le participant saura faire</h2>
          <p>La formulation reste orientée résultat : à la fin, vous saurez produire un livrable technique, pas seulement retrouver une commande dans un menu.</p>
          ${Tags(surpacData.moduleSheet)}
        </div>
        ${ImagePanel(surpacData.media.modulePage, "Structure d’une fiche module Surpac")}
      </div>
    </section>
  `;
}

function PremiumOfferSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${ImagePanel(surpacData.media.premium, "Parcours complet Surpac avec projet final et attestation")}
        <div>
          <p class="section-kicker">Offre premium</p>
          <h2>Parcours complet GEOVIA Surpac 0 → 5</h2>
          <p>Le package complet transforme la formation en spécialisation professionnelle progressive, avec exercices, datasets, évaluations et projet final.</p>
          ${Tags(surpacData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = surpacData;
  return `
    <section class="expertise-cta surpac-cta" id="contact">
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

document.querySelector("#surpac-training-root").innerHTML = [
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
