const geodataBootcampsData = window.geodataBootcampsData;

function GeodataTags(items) {
  return `<div class="surpac-tags geodata-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function GeodataImage(src, label = "") {
  return `
    <figure class="surpac-image geodata-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = geodataBootcampsData;
  return `
    <section class="expertise-hero geodata-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Demander un bootcamp</a>
          <a class="button button-secondary" href="#bootcamps">Voir les bootcamps</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation bootcamps données géoscientifiques">
      <div class="container expertise-internal-nav__inner">
        ${geodataBootcampsData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function BootcampsSection() {
  return `
    <section class="expertise-section" id="bootcamps">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Bootcamps opérationnels</p>
          <h2>Des formats intensifs orientés livrables</h2>
          <p>Les formats s’inspirent des pratiques courantes : data management, QA/QC, Machine Learning pour l’exploration, mineral prospectivity mapping, SIG, Python et workflows personnalisés.</p>
        </div>
        ${GeodataImage(geodataBootcampsData.media.data, "Traitement, contrôle et structuration des données géoscientifiques")}
      </div>
      <div class="expertise-section__inner geodata-bootcamp-grid">
        ${geodataBootcampsData.bootcamps.map((bootcamp) => `
          <article>
            <span>${bootcamp.duration}</span>
            <h3>${bootcamp.title}</h3>
            <p>${bootcamp.text}</p>
            ${GeodataTags(bootcamp.tags)}
            <a class="training-card-link" href="/demande-devis.html?service=formation">En savoir plus</a>
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
        ${GeodataImage(geodataBootcampsData.media.ai, "Data Science, IA et géosciences")}
        <div>
          <p class="section-kicker">Parcours métiers</p>
          <h2>Du gestionnaire de données au spécialiste IA géoscientifique</h2>
          <p>Chaque organisation peut combiner les bootcamps selon les profils : data manager, analyste géoscientifique, spécialiste cartographie prédictive ou responsable automatisation.</p>
        </div>
      </div>
      <div class="expertise-section__inner geodata-path-grid">
        ${geodataBootcampsData.path.map(([number, title, text]) => `
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

function ProjectSection() {
  const { project } = geodataBootcampsData;
  return `
    <section class="decision-band geodata-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Données brutes, IA spatiale et carte prédictive</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow geodata-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function MappingSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Cartographie prédictive</p>
          <h2>Filtrer, pondérer et prédire les zones favorables</h2>
          <p>Le bootcamp combine données géologiques, géochimiques, géophysiques, télédétection, variables spatiales et modèles de Machine Learning pour produire des cartes de potentiel.</p>
          ${GeodataTags(["Mineral systems", "Feature engineering", "Random forest", "SOM", "Fuzzy logic", "Validation", "Targets", "Decision map"])}
        </div>
        ${GeodataImage(geodataBootcampsData.media.mapping, "Filtrage, ciblage et cartographie prédictive")}
      </div>
    </section>
  `;
}

function AutomationSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${GeodataImage(geodataBootcampsData.media.automation, "Python, automatisation et workflows reproductibles")}
        <div>
          <p class="section-kicker">Automatisation & reproductibilité</p>
          <h2>Passer des traitements manuels à des pipelines documentés</h2>
          <p>Les participants apprennent à automatiser les contrôles, les transformations, les graphiques, les cartes, les exports et les rapports techniques.</p>
          ${GeodataTags(["Python", "Pandas", "GeoPandas", "Batch", "Reports", "Dashboards", "Versioning", "Traceability"])}
        </div>
      </div>
    </section>
  `;
}

function LinksSection() {
  return `
    <section class="expertise-section expertise-muted" id="liens">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Académies liées</p>
          <h2>Des bootcamps connectés au reste du catalogue SpatialXquare</h2>
          <p>Le parcours Gestionnaire de données peut se prolonger vers SIG, géostatistique, Data Science, modélisation géologique ou solutions logicielles selon le besoin.</p>
        </div>
        ${GeodataImage(geodataBootcampsData.media.decision, "Données, modèles et décision")}
      </div>
      <div class="expertise-section__inner geodata-links-grid">
        ${geodataBootcampsData.links.map(([title, href]) => `
          <a class="training-linked-card" href="${href}">
            <article>
              <h3>${title}</h3>
              <span class="training-card-link">Ouvrir</span>
            </article>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = geodataBootcampsData;
  return `
    <section class="expertise-cta geodata-cta" id="contact">
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

document.querySelector("#geodata-bootcamps-root").innerHTML = [
  Hero(),
  InternalNav(),
  BootcampsSection(),
  PathSection(),
  ProjectSection(),
  MappingSection(),
  AutomationSection(),
  LinksSection(),
  CtaSection()
].join("");
