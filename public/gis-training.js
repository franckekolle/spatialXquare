const gisData = window.gisTrainingData;

function GisTags(items) {
  return `<div class="surpac-tags gis-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function GisImage(src, label = "") {
  return `
    <figure class="surpac-image gis-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = gisData;
  return `
    <section class="expertise-hero gis-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Complete GIS Path</a>
          <a class="button button-secondary" href="#specialites">Choisir une porte</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation GIS & Geospatial Academy">
      <div class="container expertise-internal-nav__inner">
        ${gisData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Cinq portes commerciales</p>
          <h2>Du SIG fondamental à l’ingénierie de solutions spatiales</h2>
          <p>La formation ne s’arrête pas à QGIS ou ArcGIS Pro. Elle apprend à comprendre la problématique spatiale, construire la méthode, automatiser le workflow et développer une solution métier.</p>
        </div>
        ${GisImage(gisData.media.gateways, "GIS fundamentals, analysis, geosciences, professional tools et solution engineering")}
      </div>
      <div class="expertise-section__inner gis-gateway-grid">
        ${gisData.gateways.map(([title, path, text]) => `
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
        ${GisImage(gisData.media.path, "Progression GIS & Geospatial Academy")}
        <div>
          <p class="section-kicker">Progression 0 → 14</p>
          <h2>Comprendre, cartographier, analyser, automatiser, développer et déployer</h2>
          <p>Le parcours complet mène de l’information géographique à la conception de solutions géospatiales professionnelles.</p>
        </div>
      </div>
      <div class="expertise-section__inner gis-path">
        ${gisData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card gis-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${GisTags(module.content)}
      <div class="surpac-module-card__project">
        <strong>Projet pratique</strong>
        <p>${module.project}</p>
      </div>
      <div class="surpac-module-card__actions">
        <a href="/demande-devis.html?service=formation">Choisir ce module</a>
        <a href="#projet">Voir le projet GeoCam</a>
      </div>
    </article>
  `;
}

function ModulesSection() {
  return `
    <section class="expertise-section" id="modules">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Modules de l’académie</p>
        <h2>Quinze modules pour devenir autonome en géomatique appliquée</h2>
        <p>L’objectif est de former des utilisateurs capables de produire des cartes, mais aussi de concevoir, automatiser et déployer des solutions SIG métier.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${GisImage(gisData.media.modules, "Modules SIG, géomatique et solution engineering")}
        <div class="surpac-module-grid">
          ${gisData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = gisData;
  return `
    <section class="decision-band gis-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Des données éparpillées au système d’aide à la décision</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow gis-project-flow">
          ${project.steps.map((step) => `<span>${step}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function GeoscienceSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">SIG pour géosciences et exploration</p>
          <h2>Intégrer géologie, géophysique, géochimie, sondages et télédétection</h2>
          <p>La partie géosciences transforme le SIG en outil de ciblage, d’intégration des données et de construction de cartes de prospectivité.</p>
          ${GisTags(["Geology", "Drillholes", "Geochemistry", "Geophysics", "Remote sensing", "Structures", "Prospectivity", "Targets"])}
        </div>
        ${GisImage(gisData.media.geoscience, "SIG pour géosciences et exploration minière")}
      </div>
    </section>
  `;
}

function SolutionsSection() {
  return `
    <section class="expertise-section" id="solutions">
      <div class="expertise-section__inner surpac-split image-left">
        ${GisImage(gisData.media.automation, "Automatisation, Python spatial et développement SIG")}
        <div>
          <p class="section-kicker">Automatiser, développer, déployer</p>
          <h2>Passer de l’opérateur SIG au concepteur de solution géospatiale</h2>
          <p>La partie avancée relie ModelBuilder, QGIS Model Designer, Python spatial, plugins, outils métier, Web GIS et dashboards.</p>
          ${GisTags(["ModelBuilder", "QGIS Model Designer", "ArcPy", "PyQGIS", "GeoPandas", "Plugins", "Web GIS", "Dashboards"])}
        </div>
      </div>
    </section>
  `;
}

function EnterpriseSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Corporate GIS Academy</p>
          <h2>Votre problématique devient le projet de formation</h2>
          <p>SpatialXquare peut partir des métiers, données, logiciels, compétences et difficultés de l’organisation pour construire une matrice de compétences et un workflow réellement utilisable.</p>
          ${GisTags(gisData.validation)}
          ${GisTags(gisData.formats)}
        </div>
        ${GisImage(gisData.media.enterprise, "Enterprise GIS, bases spatiales et gouvernance")}
      </div>
    </section>
  `;
}

function ProfilesSection() {
  return `
    <section class="expertise-section" id="profils">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Parcours par profil</p>
        <h2>Construire le bon parcours selon le métier</h2>
      </div>
      <div class="expertise-section__inner gis-profile-grid">
        ${gisData.profiles.map(([title, path]) => `<article><h3>${title}</h3><p>${path}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function InnovationSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split image-left">
        ${GisImage(gisData.media.innovation, "SpatialXquare GIS Innovation Lab")}
        <div>
          <p class="section-kicker">SpatialXquare GIS Innovation Lab</p>
          <h2>Learn. Build. Automate. Deploy.</h2>
          <p>Le produit premium combine formation, construction guidée d’une solution et déploiement dans l’organisation.</p>
          ${GisTags(gisData.completeOffer)}
        </div>
      </div>
      <div class="expertise-section__inner gis-innovation-grid">
        ${gisData.innovationLab.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = gisData;
  return `
    <section class="expertise-cta gis-cta" id="contact">
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

document.querySelector("#gis-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  GeoscienceSection(),
  SolutionsSection(),
  EnterpriseSection(),
  ProfilesSection(),
  InnovationSection(),
  CtaSection()
].join("");
