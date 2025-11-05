
const translations = {
  "fr": {
    "hero_title": "Connectez-vous à la culture africaine <span class=\"muted\">avec des experts et linguistes</span>",
    "hero_lead": "Lingala, Kituba, Munukutuba, Laari, Mbochi, Téké — Cours particuliers, packs flexibles.",
    "btn_reserver": "Réserver un pack",
    "btn_essai": "Essai gratuit",
    "highlight1": "Cours en ligne flexibles",
    "highlight2": "Packs flexibles",
    "langues_title": "Langues proposées",
    "langues_sub": "Choisis la langue que tu souhaites apprendre ou pour laquelle tu veux un accompagnement.",
    "services_title": "Services",
    "services_sub": "Nous offrons des services adaptés pour entreprises et particuliers.",
    "service_course": "Cours particuliers",
    "service_course_desc": "Programme adapté à ton niveau.",
    "tarifs_title": "Tarifs simples",
    "tarifs_sub": "Choisis un pack adapté — réservez directement depuis le formulaire.",
    "pack5": "Pack 5 heures",
    "pack10": "Pack 10 heures",
    "reserver": "Réserver",
    "reserver2": "Réserver",
    "hour_price": "1 heure — 15€",
    "pack5_short": "Pack 5h — 75€",
    "pack10_short": "Pack 10h — 150€",
    "pourquoi_title": "Pourquoi nous choisir ?",
    "why1_title": "Expertise Linguistique",
    "why1_text": "Des cours donnés par un chercheur passionné et spécialisé dans les langues africaines.",
    "why2_title": "Méthode Scientifique",
    "why2_text": "Basée sur la recherche en linguistique appliquée et la pratique de terrain.",
    "why3_title": "Culture & Voyage",
    "why3_text": "Découvrez les langues et les cultures africaines à travers des exemples réels et vivants.",
    "recherche_title": "Recherche & Objectifs",
    "recherche_p1": "Raphaël Otho travaille sur le Laari, langue fille du Kikoongo, parlée dans le département du Pool en République du Congo. Il s'intéresse particulièrement aux verbes de mouvement et de déplacement, essentiels pour décrire nos actions quotidiennes.",
    "recherche_p2": "Son objectif : comprendre comment ces verbes fonctionnent, les classer en catégories et tester une nouvelle théorie linguistique. Pour cela, il se rend régulièrement au Congo pour discuter avec les locuteurs natifs, enregistrer leurs paroles et observer leur usage des verbes.",
    "recherche_li1": "Verbes de mouvement sur place (ex. zakalá = « s'asseoir »)",
    "recherche_li2": "Verbes de déplacement (ex. katuká = « quitter »)",
    "recherche_li3": "Verbes de déplacement d'objet (ex. boongá = « prendre »)",
    "bio_p1": "Apprentissage des langues africaines avec Raphaël Otho. Raphaël est chercheur en linguistique, spécialisé dans les langues du Congo. Il combine recherche de terrain et enseignement pour créer des cours adaptés et rigoureux.",
    "bio_p2": "Contact direct disponible dans le footer.",
    "res_title": "Réservation",
    "res_text": "Pour faire votre réservation, contactez :",
    "footer_desc": "Apprentissage des langues africaines avec Raphaël Otho.",
    "link_about": "À propos",
    "link_langues": "Langues",
    "link_tarifs": "Tarifs",
    "link_contact": "Contact",
    "contact_title": "Contact"
  },
  "en": {
    "hero_title": "Connect with African culture <span class=\"muted\">through expert linguists</span>",
    "hero_lead": "Lingala, Kituba, Munukutuba, Laari, Mbochi, Téké — Private lessons, flexible packs.",
    "btn_reserver": "Book a pack",
    "btn_essai": "Free trial",
    "highlight1": "Flexible online lessons",
    "highlight2": "Flexible packs",
    "langues_title": "Offered languages",
    "langues_sub": "Choose the language you want to learn or get support for.",
    "services_title": "Services",
    "services_sub": "We provide tailored services for businesses and individuals.",
    "service_course": "Private lessons",
    "service_course_desc": "Program adapted to your level.",
    "tarifs_title": "Simple pricing",
    "tarifs_sub": "Choose a suitable pack — book directly from the form.",
    "pack5": "5-hour pack",
    "pack10": "10-hour pack",
    "reserver": "Book",
    "reserver2": "Book",
    "hour_price": "1 hour — €15",
    "pack5_short": "Pack 5h — €75",
    "pack10_short": "Pack 10h — €150",
    "pourquoi_title": "Why choose us?",
    "why1_title": "Linguistic Expertise",
    "why1_text": "Lessons taught by a researcher passionate about African languages.",
    "why2_title": "Scientific Method",
    "why2_text": "Based on applied linguistics research and field practice.",
    "why3_title": "Culture & Travel",
    "why3_text": "Discover African languages and cultures through real, living examples.",
    "recherche_title": "Research & Objectives",
    "recherche_p1": "Raphaël Otho works on Laari, a Kikoongo daughter language spoken in the Pool department of the Republic of Congo. He focuses on motion and movement verbs, essential to describe everyday actions.",
    "recherche_p2": "His goal: understand how these verbs work, classify them into categories and test a new linguistic theory. For this, he regularly travels to Congo to talk with native speakers, record their speech and observe verb usage.",
    "recherche_li1": "Stationary movement verbs (e.g. zakalá = \"to sit\")",
    "recherche_li2": "Movement verbs (e.g. katuká = \"to leave\")",
    "recherche_li3": "Object displacement verbs (e.g. boongá = \"to take\")",
    "bio_p1": "Learn African languages with Raphaël Otho. Raphaël is a linguistics researcher specialized in the languages of Congo. He combines fieldwork and teaching to build adapted, rigorous courses.",
    "bio_p2": "Direct contact available in the footer.",
    "res_title": "Booking",
    "res_text": "To make your booking, contact:",
    "footer_desc": "Learn African languages with Raphaël Otho.",
    "link_about": "About",
    "link_langues": "Languages",
    "link_tarifs": "Pricing",
    "link_contact": "Contact",
    "contact_title": "Contact"
  }
};

let currentLang = 'fr'; // default

function applyTranslations(lang){
  const map = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(map[key]) el.innerHTML = map[key];
  });
  document.getElementById('langToggle').textContent = (lang === 'fr') ? 'EN' : 'FR';
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyTranslations(currentLang);
  const btn = document.getElementById('langToggle');
  btn.addEventListener('click', ()=>{
    const next = (currentLang === 'fr') ? 'en' : 'fr';
    applyTranslations(next);
  });
});
