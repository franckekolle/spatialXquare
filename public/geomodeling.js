const geomodelingData = window.geomodelingPageData;

function GeoModelCards(items) {
  return items.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function GeoModelTags(items) {
  return `<div class="data-tag-list geomodel-tag-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function GeoModelFlow(items, className = "") {
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

function GeomodelHero() {
  const { hero } = geomodelingData;

  return `
    <section class="expertise-hero geo-hero geomodel-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content geo-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
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
  const { why } = geomodelingData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Pourquoi modéliser le sous-sol ?</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        <div class="overview-grid">${GeoModelCards(why.cards)}</div>
      </div>
    </section>
  `;
}

function WorkflowSection() {
  return `
    <section class="expertise-section expertise-muted" id="chaine">
      <div class="expertise-section__inner">
        <p class="section-kicker">Intégrer → Interpréter → Construire → Estimer → Tester → Actualiser → Décider</p>
        <h2>Une chaîne complète de la donnée au modèle</h2>
        ${GeoModelFlow(geomodelingData.workflow)}
      </div>
    </section>
  `;
}

function SourcesSection() {
  return `
    <section class="expertise-section" id="donnees">
      <div class="expertise-section__inner">
        <p class="section-kicker">Données multi-sources</p>
        <h2>Un modèle construit à partir de données multi-sources</h2>
        <p class="data-section-intro">L’objectif n’est pas simplement de superposer ces données mais de les intégrer dans une interprétation géologique cohérente.</p>
        <div class="geomodel-source-grid">
          ${geomodelingData.sources.map(([title, items]) => `
            <article>
              <h3>${title}</h3>
              ${GeoModelTags(items)}
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function ConstructionSection() {
  const { construction } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted" id="construction">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">Construction du modèle</p>
          <h2>Structures, lithologies, surfaces et volumes</h2>
          <p>Le choix de l’approche dépend de la densité des données, de la complexité structurale et du niveau de contrôle géologique recherché.</p>
        </div>
        <figure class="service-split__image">
          <img src="${construction.image}" alt="" loading="lazy">
        </figure>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${GeoModelCards(construction.cards)}
      </div>
    </section>
  `;
}

function QuantificationSection() {
  const { quantification } = geomodelingData;

  return `
    <section class="expertise-section" id="quantification">
      <div class="expertise-section__inner service-split image-left">
        <figure class="service-split__image">
          <img src="${quantification.image}" alt="" loading="lazy">
        </figure>
        <div class="service-split__content">
          <p class="section-kicker">Quantification</p>
          <h2>Block models, estimation et continuité spatiale</h2>
          <p>Le modèle géologique peut devenir un support de quantification lorsque les données disponibles, les objectifs et les responsabilités du projet le permettent.</p>
        </div>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${GeoModelCards(quantification.cards)}
      </div>
    </section>
  `;
}

function UncertaintySection() {
  const { uncertainty } = geomodelingData;

  return `
    <section class="decision-band geomodel-decision-band" id="incertitudes">
      <div class="container data-decision-layout">
        <div>
          <p class="section-kicker">Incertitudes & scénarios</p>
          <h2>${uncertainty.title}</h2>
          <p>${uncertainty.text}</p>
        </div>
        <div class="data-score-flow">
          ${uncertainty.flow.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>
    <section class="expertise-section">
      <div class="expertise-section__inner overview-grid">
        ${GeoModelCards(uncertainty.cards)}
      </div>
    </section>
  `;
}

function AdvancedSection() {
  const { advanced } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner service-split">
        <div class="service-split__content">
          <p class="section-kicker">Modélisation avancée</p>
          <h2>IA, ciblage, modèles évolutifs et validation terrain</h2>
          <p>Les méthodes numériques renforcent la capacité d’intégration et d’analyse, mais la cohérence géologique reste contrôlée par l’expertise humaine.</p>
        </div>
        <figure class="service-split__image">
          <img src="${advanced.image}" alt="" loading="lazy">
        </figure>
      </div>
      <div class="expertise-section__inner energy-card-grid">
        ${GeoModelCards(advanced.cards)}
      </div>
    </section>
  `;
}

function ApplicationsSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner">
        <p class="section-kicker">Applications</p>
        <h2>Applications de la modélisation géologique 3D</h2>
        <div class="overview-grid">${GeoModelCards(geomodelingData.applications)}</div>
      </div>
    </section>
  `;
}

function IntegrationSection() {
  const { integration } = geomodelingData;

  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">${integration.title}</p>
          <h2>Observations ponctuelles + informations continues + contraintes géologiques</h2>
          <p>${integration.text}</p>
          ${GeoModelTags(geomodelingData.dataScience)}
        </div>
        <div class="data-score-flow geomodel-integrated-flow">
          ${integration.flow.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function VisualizationSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner overview-layout">
        <div>
          <p class="section-kicker">Voir et interroger le sous-sol</p>
          <h2>Des modèles utilisables par les géologues, ingénieurs et décideurs</h2>
          <p>Les modèles doivent aider à comprendre, discuter et décider. Ils ne doivent pas rester confinés dans les logiciels de modélisation.</p>
        </div>
        ${GeoModelTags(geomodelingData.visualization)}
      </div>
    </section>
  `;
}

function DemonstratorCard(item) {
  return `
    <article class="data-demo-card">
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
      <div class="expertise-section__inner">
        <p class="section-kicker">Projets démonstrateurs</p>
        <h2>Des cas d’usage fictifs pour illustrer la méthode</h2>
        <p class="data-section-intro">Ces exemples sont explicitement présentés comme démonstrateurs et non comme des références clients réelles.</p>
        <div class="data-demo-grid geomodel-demo-grid">
          ${geomodelingData.demonstrators.map(DemonstratorCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner deliverables-layout">
        <div>
          <p class="section-kicker">Des données brutes à un modèle exploitable</p>
          <h2>Ce que nous livrons</h2>
          <p>Un modèle exploitable doit être accompagné de ses données, hypothèses, limites et supports de lecture.</p>
        </div>
        <div class="deliverables-grid">${GeoModelCards(geomodelingData.deliverables)}</div>
      </div>
    </section>
  `;
}

function ReasonsSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner">
        <p class="section-kicker">Pourquoi SpatialXquare ?</p>
        <h2>Géologie d’abord. Outil ensuite.</h2>
        <div class="overview-grid">${GeoModelCards(geomodelingData.reasons)}</div>
        <div class="data-compact-tags">
          <h2>Technologies mobilisées selon les projets</h2>
          ${GeoModelTags(geomodelingData.technologies)}
        </div>
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
  GeomodelHero(),
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
