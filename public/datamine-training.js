const datamineData = window.datamineTrainingData;

function DatamineTags(items) {
  return `<div class="surpac-tags datamine-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function DatamineImage(src, label = "") {
  return `
    <figure class="surpac-image datamine-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = datamineData;
  return `
    <section class="expertise-hero datamine-hero">
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
          <a class="button button-secondary" href="#specialites">Choisir une spécialité</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation parcours Datamine Studio RM">
      <div class="container expertise-internal-nav__inner">
        ${datamineData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Quatre portes d’entrée</p>
          <h2>Données, géométrie, géostatistique et spécialisation open pit</h2>
          <p>La page Datamine est construite autour de la qualité du modèle de ressources. Studio OP est présenté comme une passerelle mine design, distincte du parcours Studio RM.</p>
        </div>
        ${DatamineImage(datamineData.media.gateways, "Geological Data, Geological Modeling, Resource Modeling et Studio OP")}
      </div>
      <div class="expertise-section__inner datamine-gateway-grid">
        ${datamineData.gateways.map(([title, path, text]) => `
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
        ${DatamineImage(datamineData.media.path, "Parcours Datamine Studio RM 0 à 7 et passerelle Studio OP")}
        <div>
          <p class="section-kicker">Progression pédagogique</p>
          <h2>Geological Data → Geological Modeling → Block Model → Resource Estimation</h2>
          <p>Chaque étape produit un livrable vérifiable. Le parcours complet conduit à un modèle de ressources estimé, validé et documenté.</p>
        </div>
      </div>
      <div class="expertise-section__inner surpac-path datamine-path">
        ${datamineData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card datamine-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${DatamineTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir ce module</a>
        <a href="#projet">Voir le projet Ntem Gold</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules Studio RM</p>
        <h2>Un parcours centré sur le Resource Modeling et la géostatistique</h2>
        <p>Le parcours distingue clairement la gestion des données, la modélisation géologique, le block modelling, l’estimation et les techniques avancées.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${DatamineImage(datamineData.media.modules, "Modules Datamine Studio RM orientés livrables")}
        <div class="surpac-module-grid">
          ${datamineData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = datamineData;
  return `
    <section class="decision-band datamine-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Un dataset africain réaliste, du forage au Resource Model</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow datamine-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function ResourceSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Cœur du parcours</p>
          <h2>Contrôler, estimer et défendre techniquement le modèle</h2>
          <p>La particularité Datamine est mise sur la discipline de l’estimation : populations, composites, variographie, voisinage, passes, validation spatiale et documentation.</p>
          ${DatamineTags(["Resource Modeling", "Compositage", "Variographie", "KNA", "Kriging", "Validation", "Classification", "Reporting"])}
        </div>
        ${DatamineImage(datamineData.media.estimation, "Estimation des ressources et validation")}
      </div>
    </section>
  `;
}

function BridgesSection() {
  return `
    <section class="expertise-section" id="passerelles">
      <div class="expertise-section__inner surpac-split image-left">
        ${DatamineImage(datamineData.media.bridges, "Passerelles vers Supervisor, Isatis.neo et Studio OP")}
        <div>
          <p class="section-kicker">Poursuivre la spécialisation</p>
          <h2>Supervisor, Isatis.neo et Studio OP prolongent le parcours</h2>
          <p>Après Studio RM Advanced, l’apprenant peut aller vers la variographie avancée, l’incertitude géostatistique ou la conception minière à ciel ouvert.</p>
        </div>
      </div>
      <div class="expertise-section__inner datamine-bridge-grid">
        ${datamineData.bridges.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function ValidationSection() {
  return `
    <section class="expertise-section expertise-muted" id="validation">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Formats & validation</p>
          <h2>Des modules indépendants ou un package complet</h2>
          <p>Chaque module peut être suivi seul. Le parcours complet aboutit à une présentation technique du modèle final et à une attestation SpatialXquare.</p>
          ${DatamineTags(datamineData.validation)}
          ${DatamineTags(datamineData.formats)}
        </div>
        ${DatamineImage(datamineData.media.validation, "Validation technique du parcours Datamine")}
      </div>
    </section>
  `;
}

function PremiumSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${DatamineImage(datamineData.media.op, "Studio OP comme spécialisation complémentaire open pit")}
        <div>
          <p class="section-kicker">Complete Resource Modeling Path</p>
          <h2>Le package complet Studio RM, avec passerelle Studio OP</h2>
          <p>Le parcours premium rassemble les bases Studio, la donnée géologique, le modèle 3D, le block model, l’estimation, la géostatistique et le reporting.</p>
          ${DatamineTags(datamineData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = datamineData;
  return `
    <section class="expertise-cta datamine-cta" id="contact">
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

document.querySelector("#datamine-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  ResourceSection(),
  BridgesSection(),
  ValidationSection(),
  PremiumSection(),
  CtaSection()
].join("");
