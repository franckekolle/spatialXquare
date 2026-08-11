const vulcanData = window.vulcanTrainingData;

function VulcanTags(items) {
  return `<div class="surpac-tags vulcan-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function VulcanImage(src, label = "") {
  return `
    <figure class="surpac-image vulcan-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = vulcanData;
  return `
    <section class="expertise-hero vulcan-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Parcours complet Vulcan</a>
          <a class="button button-secondary" href="#specialites">Choisir une spécialité</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Maptek Vulcan">
      <div class="container expertise-internal-nav__inner">
        ${vulcanData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Trois spécialités</p>
          <h2>Géologie, ressources et design minier dans une même chaîne</h2>
          <p>Vulcan se distingue par la continuité entre le géologue qui construit le modèle, l’ingénieur ressources qui estime, et l’ingénieur minier qui transforme le modèle en géométrie exploitable.</p>
        </div>
        ${VulcanImage(vulcanData.media.gateways, "Geological Modeling, Resource Estimation et Mine Design")}
      </div>
      <div class="expertise-section__inner vulcan-gateway-grid">
        ${vulcanData.gateways.map(([title, path, text]) => `
          <article>
            <span>${path}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/demande-devis.html?service=formation">Choisir cette spécialité</a>
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
        ${VulcanImage(vulcanData.media.path, "Parcours Vulcan complet 0 à 7")}
        <div>
          <p class="section-kicker">Parcours complet</p>
          <h2>Données → Géologie → Ressources → Design → Scénarios</h2>
          <p>Le package complet couvre les trois spécialités et aboutit à un projet intégré avec comparaison de scénarios miniers.</p>
        </div>
      </div>
      <div class="expertise-section__inner surpac-path vulcan-path">
        ${vulcanData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card vulcan-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${VulcanTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir cette formation</a>
        <a href="#projet">Voir le projet fil rouge</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules Vulcan</p>
        <h2>Huit modules pour couvrir la chaîne géologie, ressources et mine design</h2>
        <p>Le block modelling est séparé de l’estimation, et le mine design distingue clairement ciel ouvert et souterrain.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${VulcanImage(vulcanData.media.modules, "Modules Vulcan orientés workflow professionnel")}
        <div class="surpac-module-grid">
          ${vulcanData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = vulcanData;
  return `
    <section class="decision-band vulcan-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>De l’exploration à une première conception minière</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow vulcan-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function DesignSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Open pit & underground</p>
          <h2>Un même modèle peut conduire à plusieurs scénarios miniers</h2>
          <p>La page Vulcan montre explicitement la différence entre design à ciel ouvert, alternative souterraine, et analyse intégrée des scénarios.</p>
          ${VulcanTags(["Open Pit Design", "Underground Design", "Pushbacks", "Rampes", "Stopes", "Volumes", "Scénarios", "Recommandations"])}
        </div>
        <div class="vulcan-design-media">
          ${VulcanImage(vulcanData.media.openPit, "Design à ciel ouvert")}
          ${VulcanImage(vulcanData.media.underground, "Design souterrain")}
        </div>
      </div>
    </section>
  `;
}

function ValidationSection() {
  return `
    <section class="expertise-section" id="validation">
      <div class="expertise-section__inner surpac-split image-left">
        ${VulcanImage(vulcanData.media.assessment, "Validation des acquis et attestation SpatialXquare")}
        <div>
          <p class="section-kicker">Validation des acquis</p>
          <h2>Une attestation SpatialXquare, pas une certification Maptek officielle</h2>
          <p>Chaque module peut inclure cours, démonstration, exercice, quiz, projet et validation. Les supports, datasets et attestations sont ceux de SpatialXquare.</p>
          ${VulcanTags(vulcanData.validation)}
          ${VulcanTags(vulcanData.formats)}
        </div>
      </div>
    </section>
  `;
}

function PremiumSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Complete Professional Path</p>
          <h2>Un parcours complet pour relier géologues, ressources et ingénieurs miniers</h2>
          <p>Le package complet permet de monter progressivement vers un projet intégré et des recommandations techniques.</p>
          ${VulcanTags(vulcanData.completeOffer)}
        </div>
        ${VulcanImage(vulcanData.media.scenarios, "Scénarios et recommandations techniques")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = vulcanData;
  return `
    <section class="expertise-cta vulcan-cta" id="contact">
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

document.querySelector("#vulcan-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  DesignSection(),
  ValidationSection(),
  PremiumSection(),
  CtaSection()
].join("");
