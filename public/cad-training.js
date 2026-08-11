const cadData = window.cadTrainingData;

function CadTags(items) {
  return `<div class="surpac-tags cad-tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
}

function CadImage(src, label = "") {
  return `
    <figure class="surpac-image cad-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function Hero() {
  const { hero } = cadData;
  return `
    <section class="expertise-hero cad-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content surpac-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Complete CAD Path</a>
          <a class="button button-secondary" href="#specialites">Choisir un parcours</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation Engineering & CAD Academy">
      <div class="container expertise-internal-nav__inner">
        ${cadData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function GatewaysSection() {
  return `
    <section class="expertise-section" id="specialites">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Trois parcours commerciaux</p>
          <h2>AutoCAD, SOLIDWORKS ou chemin complet d’ingénierie CAD</h2>
          <p>L’académie forme à concevoir des solutions techniques cohérentes, paramétriques, vérifiables et prêtes à être documentées ou fabriquées.</p>
        </div>
        ${CadImage(cadData.media.gateways, "AutoCAD, SOLIDWORKS et Complete Engineering CAD Path")}
      </div>
      <div class="expertise-section__inner cad-gateway-grid">
        ${cadData.gateways.map(([title, path, text]) => `
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
        ${CadImage(cadData.media.path, "Progression Engineering & CAD Academy")}
        <div>
          <p class="section-kicker">Progression 0 → 13</p>
          <h2>Concevoir, modéliser, vérifier, documenter et automatiser</h2>
          <p>Le parcours part du dessin technique, passe par AutoCAD, puis SOLIDWORKS, la simulation, l’automatisation et un projet final de solution CAD.</p>
        </div>
      </div>
      <div class="expertise-section__inner cad-path">
        ${cadData.path.map(([number, title, level]) => `
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
    <article class="surpac-module-card cad-module-card" id="module-${module.number}">
      <div class="surpac-module-card__top">
        <span>Module ${module.number}</span>
        <strong>${module.level}</strong>
      </div>
      <h3>${module.title}</h3>
      <p>${module.objective}</p>
      ${CadTags(module.content)}
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
        <p class="section-kicker">Modules de l’académie</p>
        <h2>Quatorze modules pour passer du croquis au dossier technique</h2>
        <p>Chaque module peut être suivi seul, ou intégré dans un parcours AutoCAD, SOLIDWORKS ou CAD Solution Engineering.</p>
      </div>
      <div class="expertise-section__inner surpac-module-layout">
        ${CadImage(cadData.media.modules, "Modules CAO, conception mécanique et documentation")}
        <div class="surpac-module-grid">
          ${cadData.modules.map(ModuleCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function ProjectSection() {
  const { project } = cadData;
  return `
    <section class="decision-band cad-project-band" id="projet">
      <div class="container surpac-project-layout">
        <div>
          <p class="section-kicker">Projet fil rouge</p>
          <h2>Un équipement complet, de l’idée au dossier technique</h2>
          <p><strong>${project.title}</strong></p>
          <p>${project.text}</p>
        </div>
        <div class="surpac-project-flow cad-project-flow">
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
          <p class="section-kicker">AutoCAD vs SOLIDWORKS</p>
          <h2>Deux voies complémentaires dans une même logique d’ingénierie</h2>
          <p>AutoCAD structure les plans et la documentation 2D/3D. SOLIDWORKS construit les pièces, assemblages, configurations et validations mécaniques.</p>
        </div>
        ${CadImage(cadData.media.autocad, "AutoCAD pour dessin technique et documentation")}
      </div>
      <div class="expertise-section__inner cad-software-grid">
        ${cadData.softwareLogic.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function SolidworksSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner surpac-split image-left">
        ${CadImage(cadData.media.solidworks, "SOLIDWORKS pour conception paramétrique et assemblages")}
        <div>
          <p class="section-kicker">Conception mécanique paramétrique</p>
          <h2>Construire des modèles stables, configurables et validables</h2>
          <p>La formation insiste sur l’intention de conception, les configurations, les assemblages, les nomenclatures et la simulation avant fabrication.</p>
          ${CadTags(["Sketches", "Design intent", "Parts", "Assemblies", "Configurations", "BOM", "Simulation", "Drawings"])}
        </div>
      </div>
    </section>
  `;
}

function AutomationSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split">
        <div>
          <p class="section-kicker">Productivité CAD</p>
          <h2>Standardiser et automatiser les tâches répétitives</h2>
          <p>La partie avancée construit des standards, templates, bibliothèques, modèles paramétriques, macros et workflows documentés pour les bureaux d’études.</p>
          ${CadTags(cadData.validation)}
          ${CadTags(cadData.formats)}
        </div>
        ${CadImage(cadData.media.automation, "Automatisation CAD et productivité de conception")}
      </div>
    </section>
  `;
}

function ProfilesSection() {
  return `
    <section class="expertise-section" id="metiers">
      <div class="expertise-section__inner surpac-section-head">
        <p class="section-kicker">Parcours par métier</p>
        <h2>Adapter la formation au rôle réel de l’apprenant</h2>
      </div>
      <div class="expertise-section__inner cad-profile-grid">
        ${cadData.profiles.map(([title, path]) => `<article><h3>${title}</h3><p>${path}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function LabSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner surpac-split image-left">
        ${CadImage(cadData.media.lab, "SpatialXquare Engineering Design Lab")}
        <div>
          <p class="section-kicker">SpatialXquare Engineering Design Lab</p>
          <h2>Learn · Design · Validate · Automate</h2>
          <p>Le produit premium relie formation, conception guidée, validation technique et industrialisation du workflow CAD.</p>
          ${CadTags(cadData.completeOffer)}
        </div>
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = cadData;
  return `
    <section class="expertise-cta cad-cta" id="contact">
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

document.querySelector("#cad-training-root").innerHTML = [
  Hero(),
  InternalNav(),
  GatewaysSection(),
  PathSection(),
  ModulesSection(),
  ProjectSection(),
  SoftwareSection(),
  SolidworksSection(),
  AutomationSection(),
  ProfilesSection(),
  LabSection(),
  CtaSection()
].join("");
