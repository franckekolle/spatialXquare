const trainingData = window.trainingPageData;
const surpacPath = "/expertises/formations-operationnelles/geovia-surpac/";
const leapfrogPath = "/expertises/formations-operationnelles/leapfrog-geo/";
const vulcanPath = "/expertises/formations-operationnelles/maptek-vulcan/";
const dataminePath = "/expertises/formations-operationnelles/datamine-studio-rm/";
const microminePath = "/expertises/formations-operationnelles/micromine-origin-beyond/";
const geostatPath = "/expertises/formations-operationnelles/geostatistique-data-science/";
const planningPath = "/expertises/formations-operationnelles/planification-optimisation-miniere/";
const gisPath = "/expertises/formations-operationnelles/gis-geospatial-academy/";
const cadPath = "/expertises/formations-operationnelles/engineering-cad-academy/";

function TrainingCards(items, className = "") {
  return items.map(([title, text]) => `<article class="${className}"><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function TrainingFlow(items) {
  return `
    <div class="training-flow">
      ${items.map(([title, text], index) => `
        <article>
          <span>${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function TrainingImage(src, label = "") {
  return `
    <figure class="training-image">
      <img src="${src}" alt="" loading="lazy">
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function TrainingHero() {
  const { hero } = trainingData;

  return `
    <section class="expertise-hero training-hero">
      <img src="${hero.image}" alt="">
      <div class="expertise-hero__overlay"></div>
      <div class="container expertise-hero__content training-hero__content">
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="geo-hero__subtitle">${hero.subtitle}</p>
        <p class="geo-hero__intro">${hero.intro}</p>
        <strong>${hero.statement}</strong>
        <div class="training-hero__rail">
          ${["Comprendre", "Pratiquer", "Produire", "Maîtriser", "Transmettre"].map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="/demande-devis.html?service=formation">Construire un programme de formation</a>
          <a class="button button-secondary" href="#academies">Découvrir les parcours</a>
        </div>
      </div>
    </section>
  `;
}

function InternalNav() {
  return `
    <nav class="expertise-internal-nav" aria-label="Navigation formations">
      <div class="container expertise-internal-nav__inner">
        ${trainingData.nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </nav>
  `;
}

function WhySection() {
  const { why, media } = trainingData;

  return `
    <section class="expertise-section" id="pourquoi">
      <div class="expertise-section__inner training-split">
        <div>
          <p class="section-kicker">Pourquoi SpatialXquare Formation ?</p>
          <h2>${why.title}</h2>
          <p>${why.text}</p>
        </div>
        ${TrainingImage(media.why, "Formation technique orientée livrables et autonomie")}
      </div>
      <div class="expertise-section__inner training-card-grid training-card-grid--four">
        ${TrainingCards(why.cards)}
      </div>
    </section>
  `;
}

function WorkflowSection() {
  return `
    <section class="expertise-section expertise-muted" id="chaine">
      <div class="expertise-section__inner training-section-head">
        <p class="section-kicker">Évaluer → Former → Pratiquer → Appliquer → Évaluer → Accompagner</p>
        <h2>De l’identification du besoin à l’autonomie des équipes</h2>
      </div>
      <div class="expertise-section__inner training-workflow-layout">
        ${TrainingImage(trainingData.media.workflow, "Montée en compétence progressive des équipes")}
        ${TrainingFlow(trainingData.workflow)}
      </div>
    </section>
  `;
}

function AcademiesSection() {
  return `
    <section class="expertise-section" id="academies">
      <div class="expertise-section__inner training-split image-left">
        ${TrainingImage(trainingData.media.academies, "Académies techniques SpatialXquare")}
        <div>
          <p class="section-kicker">Nos académies</p>
          <h2>Organiser l’offre par familles de compétences</h2>
          <p>Les logiciels sont des moyens. L’offre est structurée autour des compétences que les équipes doivent réellement maîtriser.</p>
        </div>
      </div>
      <div class="expertise-section__inner training-academy-grid">
        ${trainingData.academies.map(([number, title, text], index) => `
          <article>
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
            ${index === 0 ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${surpacPath}">Parcours Surpac</a>
                <a class="training-card-link" href="${leapfrogPath}">Parcours Leapfrog</a>
                <a class="training-card-link" href="${vulcanPath}">Parcours Vulcan</a>
                <a class="training-card-link" href="${dataminePath}">Parcours Datamine</a>
                <a class="training-card-link" href="${microminePath}">Parcours Micromine</a>
              </div>
            ` : ""}
            ${title === "Data Science for Geosciences" ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${geostatPath}">Académie Géostatistique & Data Science</a>
              </div>
            ` : ""}
            ${title === "Geostatistics & Resource Estimation" ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${geostatPath}">Académie Géostatistique & Data Science</a>
              </div>
            ` : ""}
            ${title === "Mining Engineering Academy" ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${planningPath}">Académie Planification & Optimisation</a>
              </div>
            ` : ""}
            ${title === "GIS & Geospatial Academy" ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${gisPath}">Académie GIS & Geospatial</a>
              </div>
            ` : ""}
            ${title === "Engineering & CAD" ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${cadPath}">Académie Engineering & CAD</a>
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function SoftwareTracksSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner training-section-head">
        <p class="section-kicker">Parcours par logiciel</p>
        <h2>Des logiciels enseignés à travers des workflows métier</h2>
        <p>La disponibilité d’une formation dépend du niveau demandé, de la version du logiciel et des compétences formateurs mobilisables pour la session.</p>
      </div>
      <div class="expertise-section__inner training-card-grid">
        ${trainingData.softwareTracks.map(([title, text]) => {
          if (title === "ArcGIS Pro & QGIS") {
            return `
              <a class="training-linked-card" href="${gisPath}">
                <article>
                  <h3>${title}</h3>
                  <p>${text}</p>
                  <span class="training-card-link">Ouvrir l’académie GIS & Geospatial</span>
                </article>
              </a>
            `;
          }

          if (title === "Datamine") {
            return `
              <a class="training-linked-card" href="${dataminePath}">
                <article>
                  <h3>${title}</h3>
                  <p>${text}</p>
                  <span class="training-card-link">Ouvrir le parcours Datamine Studio RM</span>
                </article>
              </a>
            `;
          }

          return `
            <article>
              <h3>${title}</h3>
              <p>${text}</p>
              ${title === "GEOVIA Surpac" ? `<a class="training-card-link" href="${surpacPath}">Ouvrir le parcours GEOVIA Surpac</a>` : ""}
              ${title === "Leapfrog Geo" ? `<a class="training-card-link" href="${leapfrogPath}">Ouvrir le parcours Leapfrog Geo</a>` : ""}
              ${title === "Maptek Vulcan" ? `<a class="training-card-link" href="${vulcanPath}">Ouvrir le parcours Maptek Vulcan</a>` : ""}
              ${title === "Micromine" ? `<a class="training-card-link" href="${microminePath}">Ouvrir le parcours Micromine</a>` : ""}
              ${title === "Supervisor & Isatis.neo" ? `<a class="training-card-link" href="${geostatPath}">Ouvrir l’académie Géostatistique & Data Science</a>` : ""}
              ${title === "Whittle & MineSched" ? `<a class="training-card-link" href="${planningPath}">Ouvrir l’académie Planification & Optimisation</a>` : ""}
              ${title === "AutoCAD & SolidWorks" ? `<a class="training-card-link" href="${cadPath}">Ouvrir l’académie Engineering & CAD</a>` : ""}
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function JobTracksSection() {
  return `
    <section class="expertise-section" id="parcours">
      <div class="expertise-section__inner training-split">
        <div>
          <p class="section-kicker">Parcours par métier</p>
          <h2>Choisissez un parcours selon votre métier</h2>
          <p>Un géologue d’exploration, un ingénieur minier, un analyste SIG et un manager technique n’ont pas besoin du même niveau de détail logiciel.</p>
        </div>
        ${TrainingImage(trainingData.media.jobs, "Parcours adaptés aux fonctions techniques")}
      </div>
      <div class="expertise-section__inner training-card-grid">
        ${TrainingCards(trainingData.jobTracks)}
      </div>
    </section>
  `;
}

function ProjectBasedSection() {
  return `
    <section class="decision-band training-decision-band">
      <div class="container training-decision-layout">
        <div>
          <p class="section-kicker">Project-Based Training</p>
          <h2>Vos données. Vos problèmes. Votre formation.</h2>
          <p>Au lieu de demander quel logiciel apprendre, nous demandons quel résultat votre équipe doit savoir produire. Pour les formations intra-entreprise, les workflows peuvent être adaptés aux données de l’organisation lorsque les conditions de confidentialité et de disponibilité le permettent.</p>
        </div>
        <div class="training-day-plan">
          ${["Méthode", "Démonstration", "Exercices", "Données de l’entreprise", "Projet opérationnel"].map((item, index) => `<span>Jour ${index + 1}<strong>${item}</strong></span>`).join("")}
        </div>
      </div>
    </section>
    <section class="expertise-section">
      <div class="expertise-section__inner training-project-grid">
        ${trainingData.projectBased.map(([title, duration, flow], index) => `
          <article>
            <span>${duration}</span>
            <h3>${title}</h3>
            <p>${flow}</p>
            ${index === 0 ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${surpacPath}">Architecture Surpac</a>
                <a class="training-card-link" href="${leapfrogPath}">Architecture Leapfrog</a>
                <a class="training-card-link" href="${vulcanPath}">Architecture Vulcan</a>
                <a class="training-card-link" href="${dataminePath}">Architecture Datamine</a>
                <a class="training-card-link" href="${microminePath}">Architecture Micromine</a>
              </div>
            ` : ""}
            ${index === 1 ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${geostatPath}">Architecture Géostatistique & Data Science</a>
              </div>
            ` : ""}
            ${index === 3 ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${planningPath}">Architecture Planification & Optimisation</a>
              </div>
            ` : ""}
            ${index === 2 ? `
              <div class="training-card-actions">
                <a class="training-card-link" href="${gisPath}">Architecture GIS & Geospatial</a>
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function AfricaSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner training-split image-left">
        ${TrainingImage(trainingData.media.africa, "Former les équipes là où les projets se réalisent")}
        <div>
          <p class="section-kicker">La plus-value africaine</p>
          <h2>Une formation conçue pour les réalités africaines</h2>
          <p>SpatialXquare se distingue par des formations adaptées aux données, aux logiciels, aux contraintes opérationnelles et aux projets des organisations africaines.</p>
        </div>
      </div>
      <div class="expertise-section__inner training-card-grid">
        ${TrainingCards(trainingData.africa)}
      </div>
    </section>
  `;
}

function FormatsSection() {
  return `
    <section class="expertise-section" id="formats">
      <div class="expertise-section__inner training-split">
        <div>
          <p class="section-kicker">Formats & niveaux</p>
          <h2>Des formats adaptés au contexte de l’équipe</h2>
          <p>Chaque formation précise le niveau, la durée, le format, le public, les prérequis, les objectifs, le programme, le projet pratique et l’évaluation.</p>
        </div>
        ${TrainingImage(trainingData.media.formats, "Présentiel, live, hybride ou parcours entreprise")}
      </div>
      <div class="expertise-section__inner training-card-grid training-card-grid--four">
        ${TrainingCards(trainingData.formats)}
      </div>
      <div class="expertise-section__inner training-levels">
        ${TrainingCards(trainingData.levels)}
      </div>
    </section>
  `;
}

function SpecialProgramsSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner training-section-head">
        <p class="section-kicker">Programmes spécifiques</p>
        <h2>Former une personne, une équipe ou toute une organisation</h2>
      </div>
      <div class="expertise-section__inner training-special-grid">
        ${trainingData.specialPrograms.map(([title, text], index) => `
          <article>
            <img src="${index < 2 ? trainingData.media.public : trainingData.media.university}" alt="" loading="lazy">
            <div>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function CatalogSection() {
  return `
    <section class="expertise-section" id="catalogue">
      <div class="expertise-section__inner training-split image-left">
        ${TrainingImage(trainingData.media.catalog, "Catalogue logiciels et technologies")}
        <div>
          <p class="section-kicker">Logiciels & technologies</p>
          <h2>Un catalogue secondaire, toujours relié aux métiers</h2>
          <p>Nos formations ne sont pas construites autour des boutons d’un logiciel, mais autour des décisions et livrables que les professionnels doivent produire avec cet outil.</p>
        </div>
      </div>
      <div class="expertise-section__inner training-catalog-grid">
        ${trainingData.catalog.map(([title, text]) => `
          <article>
            <h3>${title}</h3>
            <p>${text}</p>
            ${title === "Planification minière" ? `<a class="training-card-link" href="${planningPath}">Ouvrir l’académie Planification & Optimisation</a>` : ""}
            ${title === "SIG & données spatiales" ? `<a class="training-card-link" href="${gisPath}">Ouvrir l’académie GIS & Geospatial</a>` : ""}
            ${title === "CAO & ingénierie" ? `<a class="training-card-link" href="${cadPath}">Ouvrir l’académie Engineering & CAD</a>` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function DeliverablesSection() {
  return `
    <section class="expertise-section expertise-muted">
      <div class="expertise-section__inner training-section-head">
        <p class="section-kicker">Plus qu’une formation</p>
        <h2>Ce que reçoit l’entreprise</h2>
      </div>
      <div class="expertise-section__inner deliverables-grid">
        ${TrainingCards(trainingData.deliverables)}
      </div>
    </section>
  `;
}

function ReasonsSection() {
  return `
    <section class="expertise-section">
      <div class="expertise-section__inner training-split">
        <div>
          <p class="section-kicker">Pourquoi former vos équipes avec SpatialXquare ?</p>
          <h2>Développer les compétences là où les projets se réalisent</h2>
          <p>L’Afrique dispose de professionnels, d’universités, d’entreprises minières et d’institutions confrontés à des problématiques techniques complexes. Notre ambition est de rendre les compétences numériques et géoscientifiques avancées plus accessibles aux équipes locales.</p>
        </div>
        ${TrainingImage(trainingData.media.value, "Expertise métier, proximité africaine et cas pratiques locaux")}
      </div>
      <div class="expertise-section__inner training-card-grid">
        ${TrainingCards(trainingData.reasons)}
      </div>
    </section>
  `;
}

function AudiencesSection() {
  return `
    <section class="audience-strip">
      <div class="container">
        ${trainingData.audiences.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function CtaSection() {
  const { cta } = trainingData;

  return `
    <section class="expertise-cta training-cta" id="contact">
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

document.querySelector("#training-root").innerHTML = [
  TrainingHero(),
  InternalNav(),
  WhySection(),
  WorkflowSection(),
  AcademiesSection(),
  SoftwareTracksSection(),
  JobTracksSection(),
  ProjectBasedSection(),
  AfricaSection(),
  FormatsSection(),
  SpecialProgramsSection(),
  CatalogSection(),
  DeliverablesSection(),
  ReasonsSection(),
  AudiencesSection(),
  CtaSection()
].join("");
