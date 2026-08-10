const iconSearch = `
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="m21 21-4.35-4.35" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
  </svg>
`;

const icons = {
  waves: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M5 17c7-6 13 6 20 0s12 6 18 0M5 27c7-6 13 6 20 0s12 6 18 0M5 37c7-6 13 6 20 0s12 6 18 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  flask: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M18 5h12M21 5v13L10 38c-1 2 .4 5 3 5h22c2.6 0 4-3 3-5L27 18V5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 32h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  cube: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="m24 4 17 10v20L24 44 7 34V14L24 4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <path d="M7 14l17 10 17-10M24 24v20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
  drill: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M18 5h12l-3 8h-6l-3-8ZM24 13v30M18 21h12M19 28h10M20 35h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  sunWater: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="16" cy="15" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M16 3v4M16 23v4M4 15h4M24 15h4M7.5 6.5l3 3M21.5 20.5l3 3M24.5 6.5l-3 3M10.5 20.5l-3 3M7 38c5-5 9 5 14 0s9 5 14 0 6 0 6 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  data: `
    <svg class="expertise-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 36V18M18 36V10M28 36V23M38 36V14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M5 39h38" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="18" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="38" cy="14" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`
};

const expertiseData = [
  {
    title: "Géophysique, exploration et cartographie",
    icon: icons.waves,
    description: "Explorer et caractériser le sous-sol",
    accentClass: "accent-blue",
    cta: "En savoir plus",
    link: "expertises/geophysique-exploration-miniere/index.html"
  },
  {
    title: "Geochimie et caracterisation des materiaux",
    icon: icons.flask,
    accentClass: "accent-teal",
    link: "#geochimie"
  },
  {
    title: "Modelisation geologique 3D",
    icon: icons.cube,
    accentClass: "accent-green",
    link: "#modelisation"
  },
  {
    title: "Sondages et ressources minerales",
    icon: icons.drill,
    accentClass: "accent-orange",
    link: "#sondages"
  },
  {
    title: "Énergies renouvelables et eau",
    icon: icons.sunWater,
    description: "Des solutions autonomes, dimensionnées pour les usages réels et les conditions locales : solaire, pompage, accès à l’eau, traitement et maintenance.",
    accentClass: "accent-gold",
    link: "/expertises/energies-renouvelables-eau/"
  },
  {
    title: "Data Science et solutions logicielles",
    icon: icons.data,
    accentClass: "accent-sky",
    link: "#logiciels"
  }
];

const newsData = [
  {
    image: "icons_image/geophysique/geophysique1.png",
    alt: "Equipe geophysique en intervention terrain",
    category: "Geophysique",
    date: "05 aout 2026",
    title: "Mieux cibler les zones d'exploration par l'acquisition integree",
    summary: "SpatialXquare combine mesures terrain, interpretation geologique et donnees spatiales pour prioriser les zones a fort potentiel.",
    link: "#"
  },
  {
    image: "icons_image/geologie/Modélisationgeologique3D1.png",
    alt: "Modele geologique 3D et interpretation spatiale",
    category: "Modelisation",
    date: "05 aout 2026",
    title: "La modelisation 3D au service des decisions rapides",
    summary: "Les donnees de sondage, de surface et de geophysique sont converties en modeles lisibles pour les equipes projet.",
    link: "#"
  },
  {
    image: "icons_image/energiesolaire/energieSolaire3.png",
    alt: "Infrastructure solaire et eau en contexte africain",
    category: "Energie",
    date: "05 aout 2026",
    title: "Relier energie solaire, eau et developpement local",
    summary: "L'approche SpatialXquare integre les contraintes terrain pour concevoir des solutions energetiques utiles et durables.",
    link: "#"
  }
];

const videoData = [
  {
    video: "icons_image/video_1.mp4",
    poster: "icons_image/geophysique/geophysique.png",
    category: "Terrain",
    date: "2026",
    title: "Campagne geophysique sur le terrain",
    summary: "Decouvrez les principales etapes d'une campagne d'acquisition et de controle des donnees geophysiques.",
    link: "#projets",
    available: true
  },
  {
    video: "icons_image/video_2.mp4",
    poster: "icons_image/traitement_eau_forage.png",
    category: "Energie et eau",
    date: "2026",
    title: "Solutions energetiques et acces a l'eau",
    summary: "Presentation de solutions solaires, de pompage et de traitement de l'eau adaptees aux realites locales.",
    link: "#projets",
    available: true
  },
  {
    video: "icons_image/video_3.mp4",
    poster: "icons_image/geologie/Modélisationgeologique3D2.png",
    category: "Data Science",
    date: "A venir",
    title: "Data Science et modelisation geologique",
    summary: "Analyse, traitement et valorisation des donnees geoscientifiques pour ameliorer la prise de decision.",
    link: "#projets",
    available: false
  }
];

const projectImages = [
  {
    src: "icons_image/geophysique/geophysique.png",
    alt: "Acquisition geophysique"
  },
  {
    src: "icons_image/geologie/forages.png",
    alt: "Campagne de sondage"
  },
  {
    src: "icons_image/energiesolaire/energie_solaire1.png",
    alt: "Installation solaire"
  }
];

function Header() {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#main-content" aria-label="SpatialXquare accueil">
          <img class="brand-logo" src="icons_image/ima_spatialXquare1.png" alt="" width="48" height="48">
          <span class="brand-text">
            <span class="brand-name">SpatialXquare</span>
            <span class="brand-signature">Earth Intelligence, Data Science & Sustainable Energy</span>
          </span>
        </a>
        <div class="header-actions">
          <button class="icon-button" type="button" data-search-open aria-label="Rechercher">${iconSearch}</button>
          ${LanguageSelector()}
          <a class="nav-link" href="#expertises">Nos expertises</a>
          <button class="menu-button" type="button" data-menu-open aria-label="Ouvrir le menu" aria-expanded="false">
            <strong>MENU</strong>
            <span class="hamburger" aria-hidden="true"><span></span><span></span><span></span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function LanguageSelector() {
  return `
    <div class="language-selector" aria-label="Choix de langue">
      <button class="language-button is-active" type="button">FR</button>
      <span aria-hidden="true">|</span>
      <button class="language-button" type="button">EN</button>
    </div>
  `;
}

function HeroSection() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-inner">
        <div class="hero-content">
          <p class="eyebrow">Afrique • Geosciences • Data Science • Energie durable</p>
          <h1 id="hero-title">Penser et concevoir l'avenir<br>avec l'intelligence humaine,<br>les data et les energies renouvelables</h1>
          <p class="hero-subtitle">Geosciences, Data Science & IA et solutions energetiques pour un developpement durable.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="decouvrir-spatialxquare.html">Decouvrir SpatialXquare</a>
            <a class="button button-secondary" href="#expertises">Explorer nos expertises</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function ExpertiseGrid() {
  return `
    <section class="expertise-wrap" id="expertises" aria-label="Domaines d'expertise">
      <div class="container expertise-grid">
        ${expertiseData.map(ExpertiseCard).join("")}
      </div>
    </section>
  `;
}

function ExpertiseCard(item, index) {
  return `
    <a class="expertise-card ${item.accentClass} delay-${index}" href="${item.link}">
      <span class="expertise-card-content">
        ${item.icon}
        <h2>${item.title}</h2>
        ${item.description ? `<p>${item.description}</p>` : ""}
        <span>${item.cta || "En savoir plus"}</span>
      </span>
    </a>
  `;
}

function NewsSection() {
  return `
    <section class="news-media-section" id="actualites">
      <div class="news-section__background" aria-hidden="true"></div>
      <div class="news-section__overlay" aria-hidden="true"></div>
      <div class="section-container news-section__content">
        <header class="section-heading">
          <p class="section-kicker">Veille et terrain</p>
          <h2 class="news-title">Actualites</h2>
        </header>

        <div class="news-grid">
          ${newsData.map(NewsCard).join("")}
        </div>

        <div class="media-heading">
          <p class="section-kicker">SpatialXquare en action</p>
          <h3>Videos et realisations</h3>
        </div>

        <div class="video-grid">
          ${videoData.map(VideoCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function NewsCard(item) {
  return `
    <article class="news-card">
      <div class="news-card__image">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
      </div>
      <div class="news-card__content">
        <div class="news-meta">
          <span>${item.category}</span>
          <time>${item.date}</time>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <a class="read-more" href="${item.link}">Lire la suite</a>
      </div>
    </article>
  `;
}

function VideoCard(item) {
  const media = item.available
    ? `
      <video controls preload="metadata" poster="${item.poster}">
        <source src="${item.video}" type="video/mp4">
        Votre navigateur ne prend pas en charge la lecture video.
      </video>
    `
    : `
      <div class="video-placeholder">
        <img src="${item.poster}" alt="" loading="lazy">
        <span>Video a venir</span>
      </div>
    `;

  return `
    <article class="video-card">
      <div class="video-card__media">
        ${media}
      </div>
      <div class="video-card__content">
        <div class="video-card__meta">
          <span>${item.category}</span>
          <time>${item.date}</time>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <a href="${item.link}">Decouvrir le projet</a>
      </div>
    </article>
  `;
}

function AboutSection() {
  return `
    <section class="section about" id="presentation">
      <div class="container split">
        <div class="about-visual">
          <img src="icons_image/traitement_eau_forage.png" alt="Representation institutionnelle des activites SpatialXquare" loading="lazy">
        </div>
        <div class="text-stack">
          <p class="section-kicker">Presentation de SpatialXquare</p>
          <h2>Une lecture scientifique des territoires, du sous-sol aux infrastructures durables.</h2>
          <p>
            SpatialXquare aide les organisations a comprendre leurs ressources, a structurer leurs donnees et a deployer des solutions utiles sur le terrain. Notre approche relie geosciences, intelligence artificielle, energie et impact local.
          </p>
          <div class="metrics">
            <div class="metric"><strong>3D</strong><span>Modeles geologiques</span></div>
            <div class="metric"><strong>IA</strong><span>Prediction spatiale</span></div>
            <div class="metric"><strong>ENR</strong><span>Solaire et eau</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function ProjectsSection() {
  return `
    <section class="section projects" id="projets">
      <div class="container projects-layout">
        <div class="projects-copy">
          <p class="section-kicker">Projets et realisations</p>
          <h2>Des donnees terrain converties en scenarios exploitables.</h2>
          <p>
            Exploration miniere, sondages, cartographie, solaire et eau peuvent etre presentes sous forme de fiches projets avec cartes, resultats, livrables et indicateurs de performance.
          </p>
        </div>
        <div class="projects-gallery">
          ${projectImages.map((image) => `<img src="${image.src}" alt="${image.alt}" loading="lazy">`).join("")}
        </div>
      </div>
    </section>
  `;
}

function PartnersSection() {
  const partners = ["Institutions", "Mines", "Energie", "Recherche"];
  return `
    <section class="section partners" id="partenaires">
      <div class="container">
        <p class="section-kicker">Partenaires</p>
        <h2>Collaborer avec les acteurs publics, industriels et scientifiques.</h2>
        <p>Cette zone accueillera vos logos partenaires lorsque les autorisations de publication seront confirmees.</p>
        <div class="partner-grid">
          ${partners.map((partner) => `<div class="partner-card">${partner}</div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <a class="brand" href="#main-content" aria-label="Retour accueil SpatialXquare">
          <img class="brand-logo" src="icons_image/ima_spatialXquare1.png" alt="" width="48" height="48">
          <span class="brand-text">
            <span class="brand-name">SpatialXquare</span>
            <span class="brand-signature">Earth Intelligence, Data Science & Sustainable Energy</span>
          </span>
        </a>
        <nav class="footer-links" aria-label="Navigation pied de page">
          <a href="#expertises">Expertises</a>
          <a href="#actualites">Actualites</a>
          <a href="#presentation">Presentation</a>
          <a href="#projets">Projets</a>
        </nav>
        <p>© 2026 SpatialXquare</p>
      </div>
    </footer>
  `;
}

function MobileMenu() {
  return `
    <div class="menu-overlay" data-menu-overlay></div>
    <aside class="menu-panel" data-mobile-menu aria-hidden="true" aria-label="Menu principal">
      <div class="menu-panel-header">
        <div>
          <span class="menu-kicker">SpatialXquare</span>
          <strong>Menu</strong>
        </div>
        <button class="close-button" type="button" data-menu-close aria-label="Fermer le menu">×</button>
      </div>
      <nav class="menu-panel-links" aria-label="Menu principal">
        <a href="#expertises">Nos expertises</a>
        <a href="#actualites">Actualites</a>
        <a href="#presentation">Presentation</a>
        <a href="#projets">Projets et realisations</a>
        <a href="#partenaires">Partenaires</a>
      </nav>
    </aside>
  `;
}

function SearchOverlay() {
  return `
    <aside class="search-overlay" data-search-overlay hidden>
      <div class="container overlay-header">
        <strong>Recherche</strong>
        <button class="close-button" type="button" data-search-close aria-label="Fermer la recherche">×</button>
      </div>
      <div class="container search-box">
        <label for="site-search">Rechercher sur SpatialXquare</label>
        <input id="site-search" type="search" placeholder="Geophysique, solaire, forage, data science...">
      </div>
    </aside>
  `;
}

function render() {
  document.querySelector("#site-header").innerHTML = Header();
  document.querySelector("#hero-section").innerHTML = HeroSection();
  document.querySelector("#expertise-grid").innerHTML = ExpertiseGrid();
  document.querySelector("#news-section").innerHTML = NewsSection();
  document.querySelector("#about-section").innerHTML = AboutSection();
  document.querySelector("#projects-section").innerHTML = ProjectsSection();
  document.querySelector("#partners-section").innerHTML = PartnersSection();
  document.querySelector("#site-footer").innerHTML = Footer();
  document.querySelector("#mobile-menu-root").innerHTML = MobileMenu();
  document.querySelector("#search-overlay-root").innerHTML = SearchOverlay();
}

function bindInteractions() {
  const menu = document.querySelector("[data-mobile-menu]");
  const menuOverlay = document.querySelector("[data-menu-overlay]");
  const search = document.querySelector("[data-search-overlay]");
  const searchInput = document.querySelector("#site-search");
  const menuOpenButton = document.querySelector("[data-menu-open]");

  const openMenu = () => {
    menu?.classList.add("is-open");
    menuOverlay?.classList.add("is-open");
    menu?.setAttribute("aria-hidden", "false");
    menuOpenButton?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-is-open");
  };

  const closeMenu = () => {
    menu?.classList.remove("is-open");
    menuOverlay?.classList.remove("is-open");
    menu?.setAttribute("aria-hidden", "true");
    menuOpenButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-is-open");
  };

  document.querySelector("[data-menu-open]")?.addEventListener("click", () => {
    openMenu();
  });

  document.querySelector("[data-menu-close]")?.addEventListener("click", () => {
    closeMenu();
  });

  menuOverlay?.addEventListener("click", () => {
    closeMenu();
  });

  menu?.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  document.querySelector("[data-search-open]")?.addEventListener("click", () => {
    search.hidden = false;
    searchInput?.focus();
  });

  document.querySelector("[data-search-close]")?.addEventListener("click", () => {
    search.hidden = true;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      if (search) search.hidden = true;
    }
  });

  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      video.dataset.autoPaused = "false";
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.dataset.autoPaused = "false";
        }
      });
    });
  });

  const pauseVideoOutsideViewport = (video) => {
    if (!video.paused) {
      video.pause();
      video.dataset.autoPaused = "true";
    }
  };

  const resumeAutoPausedVideo = (video) => {
    if (video.dataset.autoPaused === "true") {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.dataset.autoPaused = "false";
        }
      });

      video.play().then(() => {
        video.dataset.autoPaused = "false";
      }).catch(() => {
        video.dataset.autoPaused = "true";
      });
    }
  };

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35) {
          pauseVideoOutsideViewport(entry.target);
        }
      });
    }, { threshold: [0, 0.35, 0.75] });

    videos.forEach((video) => {
      videoObserver.observe(video);
    });
  } else {
    window.addEventListener("scroll", () => {
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (!isVisible) {
          pauseVideoOutsideViewport(video);
        }
      });
    }, { passive: true });
  }

  document.querySelectorAll(".video-card").forEach((card) => {
    const video = card.querySelector("video");

    if (!video) return;

    card.addEventListener("mouseenter", () => resumeAutoPausedVideo(video));
    card.addEventListener("focusin", () => resumeAutoPausedVideo(video));
    card.addEventListener("touchstart", () => resumeAutoPausedVideo(video), { passive: true });
  });

  const newsBackground = document.querySelector(".news-section__background");
  const newsSection = document.querySelector(".news-media-section");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 1025px)").matches;

  if (newsBackground && newsSection && desktop && !reducedMotion) {
    let ticking = false;

    const updateNewsParallax = () => {
      const rect = newsSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const offset = (progress - 0.5) * 46;

        newsBackground.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      }

      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateNewsParallax);
        ticking = true;
      }
    }, { passive: true });

    updateNewsParallax();
  }
}

render();
bindInteractions();
