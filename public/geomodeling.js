const geomodelingData = window.geomodelingPageData;

function Cards(items, className = "") {
  return items.map(([title, text]) => `<article class="${className}"><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function Tags(items) {
  return `<div class="data-tag-list geomodel-tag-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function Flow(items, className = "") {
  return `
    <div class="geo-flow geomodel-flow ${className}">
      ${items.map(([title, text], index) => `
        <article class="geo-flow__item">
          <span>${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function SimpleFlow(items, className = "") {
  return `
    <div class="geomodel-linear-flow ${className}">
      ${items.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;
}

function ImagePanel(src, label = "") {
  return `
    <figure class="geomodel-image-panel">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = geomodelingData;

  return `
    <section class="expertise-hero geo-hero geomodel-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content geo-hero__content geomodel-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="geomodel-hero__rail" aria-label="Fil conducteur">
          ${["Comprendre", "Corréler", "Modéliser", "Quantifier", "Décider"].map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=geomodelisation">Parler de mon projet</a>
          <a class="button button-secondary" href="#chaine">Découvrir notre approche</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation modélisation géologique">
      <div class="container expertise-internal-nav__inner">
        ${geomodelingData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function WhySection() {
  const { why, media } = geomodelingData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner geomodel-split">
        <div>
          <p class="section-kicker">Pourquoi modéliser le sous-sol ?</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        ${ImagePanel(media.overview, "Synthèse des observations vers une lecture 3D du sous-sol")}
      </div>
      <div class="expertise-section__inner geomodel-card-grid geomodel-card-grid--four">
        ${Cards(why.cards)}
      </div>
    </section>
  `;
}

function WorkflowSection() {
  const { media } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted" id="chaine">
      <div class="expertise-section__inner geomodel-section-head">
        <p class="section-kicker">Intégrer → Interpréter → Construire → Estimer → Tester → Actualiser → Décider</p>
        <h2>Une chaîne complète de la donnée au modèle</h2>
        <p>La page suit une logique de production : contrôler les données, interpréter, construire le modèle, quantifier ce qui peut l’être, puis expliciter les incertitudes avant de décider.</p>
      </div>
      <div class="expertise-section__inner geomodel-workflow-layout">
        ${ImagePanel(media.workflow, "Données intégrées et interprétation structurée")}
        ${Flow(geomodelingData.workflow)}
      </div>
    </section>
  `;
}

function SourcesSection() {
  const { media } = geomodelingData;

  return `
    <section class="expertise-section" id="donnees">
      <div class="expertise-section__inner geomodel-split image-left">
        ${ImagePanel(media.sources, "Forages, géologie, géophysique et données spatiales")}
        <div>
          <p class="section-kicker">Données multi-sources</p>
          <h2>Un modèle construit à partir de données multi-sources</h2>
          <p>L’objectif n’est pas simplement de superposer ces données mais de les intégrer dans une interprétation géologique cohérente.</p>
        </div>
      </div>
      <div class="expertise-section__inner geomodel-source-grid">
        ${geomodelingData.sources.map(([title, items]) => `
          <article>
            <h3>${title}</h3>
            ${Tags(items)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ConstructionSection() {
  const { construction, media } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted" id="construction">
      <div class="expertise-section__inner geomodel-stage">
        <div class="geomodel-stage__copy">
          <p class="section-kicker">Construction du modèle</p>
          <h2>Structures, lithologies, surfaces et volumes</h2>
          <p>Le choix de l’approche dépend de la densité des données, de la complexité structurale et du niveau de contrôle géologique recherché.</p>
          ${SimpleFlow(["Observations", "Contraintes géologiques", "Surfaces", "Volumes", "Modèle 3D"], "geomodel-linear-flow--compact")}
        </div>
        <div class="geomodel-stage__media">
          ${ImagePanel(construction.image)}
          ${ImagePanel(media.structural)}
        </div>
      </div>
      <div class="expertise-section__inner geomodel-card-grid">
        ${Cards(construction.cards)}
      </div>
    </section>
  `;
}

function QuantificationSection() {
  const { quantification, planning } = geomodelingData;

  return `
    <section class="expertise-section" id="quantification">
      <div class="expertise-section__inner geomodel-stage geomodel-stage--reverse">
        <div class="geomodel-stage__media">
          ${ImagePanel(quantification.image, "Discrétisation, attributs et estimation spatiale")}
        </div>
        <div class="geomodel-stage__copy">
          <p class="section-kicker">Quantification</p>
          <h2>Block models, estimation et continuité spatiale</h2>
          <p>Le modèle géologique peut devenir un support de quantification lorsque les données disponibles, les objectifs et les responsabilités du projet le permettent.</p>
          ${SimpleFlow(["Modèle géologique", "Discrétisation", "Block model", "Attributs"], "geomodel-linear-flow--compact")}
        </div>
      </div>
      <div class="expertise-section__inner geomodel-card-grid">
        ${Cards(quantification.cards)}
      </div>
      <div class="expertise-section__inner geomodel-planning">
        ${ImagePanel(geomodelingData.media.planning)}
        <div>
          <p class="section-kicker">${planning.title}</p>
          <h2>Un support pour comparer les scénarios</h2>
          <p>${planning.text}</p>
          ${SimpleFlow(planning.flow)}
        </div>
      </div>
    </section>
  `;
}

function UncertaintySection() {
  const { uncertainty, media } = geomodelingData;

  return `
    <section class="decision-band geomodel-decision-band" id="incertitudes">
      <div class="container geomodel-risk-layout">
        <div>
          <p class="section-kicker">Incertitudes & scénarios</p>
          <h2>${uncertainty.title}</h2>
          <p>${uncertainty.text}</p>
        </div>
        ${SimpleFlow(uncertainty.flow, "geomodel-linear-flow--light")}
      </div>
    </section>
    <section class="expertise-section">
      <div class="expertise-section__inner geomodel-split">
        <div>
          <p class="section-kicker">Scénarios, simulations et modèles évolutifs</p>
          <h2>Rendre les incertitudes visibles</h2>
          <p>Un modèle peut être actualisé, testé et comparé à d’autres hypothèses lorsque de nouvelles données deviennent disponibles.</p>
        </div>
        ${ImagePanel(media.uncertainty, "Scénarios et enveloppes d’incertitude")}
      </div>
      <div class="expertise-section__inner geomodel-card-grid">
        ${Cards(uncertainty.cards)}
      </div>
    </section>
  `;
}

function AdvancedSection() {
  const { advanced, media } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner geomodel-stage">
        <div class="geomodel-stage__copy">
          <p class="section-kicker">Modélisation avancée</p>
          <h2>IA, ciblage, modèles évolutifs et validation terrain</h2>
          <p>Les méthodes numériques renforcent la capacité d’intégration et d’analyse, mais la cohérence géologique reste contrôlée par l’expertise humaine.</p>
          ${SimpleFlow(["Données", "Connaissance géologique", "IA", "Hypothèses", "Validation géologue", "Modèle"], "geomodel-linear-flow--compact")}
        </div>
        <div class="geomodel-stage__media">
          ${ImagePanel(advanced.image)}
          ${ImagePanel(media.integration)}
        </div>
      </div>
      <div class="expertise-section__inner geomodel-card-grid">
        ${Cards(advanced.cards)}
      </div>
    </section>
  `;
}

function ApplicationsSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner geomodel-section-head">
        <p class="section-kicker">Applications</p>
        <h2>Applications de la modélisation géologique 3D</h2>
      </div>
      <div class="expertise-section__inner geomodel-card-grid geomodel-card-grid--five">
        ${Cards(geomodelingData.applications)}
      </div>
    </section>
  `;
}

function IntegrationSection() {
  const { integration, media } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner geomodel-split">
        <div>
          <p class="section-kicker">${integration.title}</p>
          <h2>Observations ponctuelles + informations continues + contraintes géologiques</h2>
          <p>${integration.text}</p>
          ${SimpleFlow(integration.flow, "geomodel-linear-flow--compact")}
        </div>
        ${ImagePanel(media.integration, "Interprétation intégrée du modèle 3D")}
      </div>
      <div class="expertise-section__inner geomodel-data-link">
        <div>
          <p class="section-kicker">Data Science appliquée au modèle géologique</p>
          <h2>Faire le lien entre géomodélisation et analyse avancée</h2>
        </div>
        ${Tags(geomodelingData.dataScience)}
      </div>
    </section>
  `;
}

function VisualizationSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner geomodel-split image-left">
        ${ImagePanel(geomodelingData.media.visualization, "Visualiser, interroger et communiquer le modèle")}
        <div>
          <p class="section-kicker">Voir et interroger le sous-sol</p>
          <h2>Des modèles utilisables par les géologues, ingénieurs et décideurs</h2>
          <p>Les modèles doivent aider à comprendre, discuter et décider. Ils ne doivent pas rester confinés dans les logiciels de modélisation.</p>
          ${Tags(geomodelingData.visualization)}
        </div>
      </div>
    </section>
  `;
}

function DemonstratorCard(item) {
  return `
    <article class="data-demo-card geomodel-demo-card">
      <img src="${item.image}" alt="" loading="lazy">
      <div>
        <span class="data-demo-badge">${item.badge}</span>
        <p class="section-kicker">${item.domain}</p>
        <h3>${item.title}</h3>
        <dl>
          <dt>Problème</dt>
          <dd>${item.problem}</dd>
          <dt>Données</dt>
          <dd>${item.data}</dd>
          <dt>Résultat</dt>
          <dd>${item.result}</dd>
        </dl>
        <a href="/demande-devis.html?service=geomodelisation">Voir le démonstrateur</a>
      </div>
    </article>
  `;
}

function DemonstratorsSection() {
  return `
    <section class="expertise-section expertise-muted" id="demonstrateurs">
      <div class="expertise-section__inner geomodel-section-head">
        <p class="section-kicker">Projets démonstrateurs</p>
        <h2>Des cas d’usage fictifs pour illustrer la méthode</h2>
        <p>Ces exemples sont explicitement présentés comme démonstrateurs et non comme des références clients réelles.</p>
      </div>
      <div class="expertise-section__inner data-demo-grid geomodel-demo-grid">
        ${geomodelingData.demonstrators.map(DemonstratorCard).join("")}
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner geomodel-split">
        <div>
          <p class="section-kicker">Des données brutes à un modèle exploitable</p>
          <h2>Ce que nous livrons</h2>
          <p>Un modèle exploitable doit être accompagné de ses données, hypothèses, limites et supports de lecture.</p>
        </div>
        ${ImagePanel(geomodelingData.media.deliverables, "Livrables, sections, vues 3D et rapport technique")}
      </div>
      <div class="expertise-section__inner deliverables-grid">
        ${Cards(geomodelingData.deliverables)}
      </div>
    </section>
  `;
}

function ReasonsSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner geomodel-section-head">
        <p class="section-kicker">Pourquoi SpatialXquare ?</p>
        <h2>Géologie d’abord. Outil ensuite.</h2>
      </div>
      <div class="expertise-section__inner geomodel-card-grid geomodel-card-grid--five">
        ${Cards(geomodelingData.reasons)}
      </div>
      <div class="expertise-section__inner geomodel-data-link">
        <div>
          <p class="section-kicker">Technologies mobilisées selon les projets</p>
          <h2>Des outils au service de la géologie</h2>
        </div>
        ${Tags(geomodelingData.technologies)}
      </div>
    </section>
  `;
}

function AudiencesSection() {
  return `
    <section class="audience-strip">
      <div class="container">
        ${geomodelingData.audiences.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = geomodelingData;

  return `
    <section class="expertise-cta" id="contact">
      <div class="container">
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        <div>
          <a class="button button-primary" href="/demande-devis.html?service=geomodelisation">${cta.buttons[0]}</a>
          <a class="button button-primary" href="/demande-devis.html?service=geomodelisation">${cta.buttons[1]}</a>
        </div>
      </div>
    </section>
  `;
}

document.querySelector("#geomodeling-root").innerHTML = [
  Hero(),
  InternalNav(),
  WhySection(),
  WorkflowSection(),
  SourcesSection(),
  ConstructionSection(),
  QuantificationSection(),
  UncertaintySection(),
  AdvancedSection(),
  ApplicationsSection(),
  IntegrationSection(),
  VisualizationSection(),
  DemonstratorsSection(),
  DeliverablesSection(),
  ReasonsSection(),
  AudiencesSection(),
  CtaSection()
].join("");
