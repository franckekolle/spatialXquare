const WHATSAPP_NUMBER = "330756910225";
const CONTACT_URL = "/demande-devis.html?type=contact&source=floating-contact";

function floatingIcon(name) {
  const icons = {
    whatsapp: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 3.5A8.36 8.36 0 0 0 4.8 16.05L4 20.5l4.56-1.19a8.36 8.36 0 1 0 3.48-15.81Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M8.9 8.24c.18-.39.37-.4.54-.4h.46c.14 0 .36.05.55.43.2.38.68 1.32.74 1.42.06.1.1.23.02.37-.08.15-.12.23-.24.36-.12.13-.25.29-.36.39-.12.12-.25.25-.1.49.15.25.65 1.07 1.4 1.73.96.86 1.78 1.13 2.03 1.25.25.13.4.11.55-.06.15-.18.63-.74.8-.99.16-.25.34-.21.57-.13.24.08 1.5.7 1.76.83.26.13.43.19.49.3.06.1.06.61-.14 1.2-.2.58-1.15 1.12-1.6 1.16-.42.04-.94.19-3.09-.65-2.6-1.02-4.24-3.66-4.36-3.83-.13-.17-1.04-1.39-1.04-2.65 0-1.26.66-1.88.9-2.14Z" fill="currentColor"/>
      </svg>
    `,
    contact: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5h16v11H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="m4.6 7.1 7.4 6 7.4-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  };

  return icons[name] || "";
}

function FloatingContact() {
  const wrapper = document.createElement("div");
  wrapper.className = "floating-contact";
  wrapper.setAttribute("aria-label", "Actions de contact rapides");

  if (WHATSAPP_NUMBER) {
    const whatsapp = document.createElement("a");
    whatsapp.className = "floating-contact__button floating-contact__button--whatsapp";
    whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour SpatialXquare, je souhaite échanger avec vous au sujet d’un projet.")}`;
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener";
    whatsapp.setAttribute("aria-label", "Contacter SpatialXquare sur WhatsApp");
    whatsapp.innerHTML = `${floatingIcon("whatsapp")}<span>WhatsApp</span>`;
    wrapper.appendChild(whatsapp);
  }

  const contact = document.createElement("a");
  contact.className = "floating-contact__button floating-contact__button--contact";
  contact.href = CONTACT_URL;
  contact.setAttribute("aria-label", "Envoyer un message à SpatialXquare");
  contact.innerHTML = `${floatingIcon("contact")}<span>Contacter</span>`;
  wrapper.appendChild(contact);

  document.body.appendChild(wrapper);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", FloatingContact);
} else {
  FloatingContact();
}
