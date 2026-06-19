import type { Realisation } from "./types";

export const realisations: Realisation[] = [
  // — Droit & LegalTech —
  {
    slug: "jurisis",
    titre: "Jurisis — plateforme IA LegalTech",
    secteur: "droit",
    resume: "Conception d'une plateforme IA LegalTech destinee a rendre l'information juridique belge plus accessible, plus claire et plus exploitable pour les citoyens et les professionnels du droit.",
    resultat: "Recherche juridique augmentee, structuration documentaire et assistance IA pour les metiers du droit.",
    image: "/realisations/jurisis.jpg",
    stack: ["AI", "LLM", "LegalTech", "RAG", "UX strategy", "Web platform"],
  },

  // — PME & independants —
  {
    slug: "indibot",
    titre: "Indibot — assistant IA d'interaction",
    secteur: "pme-independants",
    resume: "Conception d'un assistant IA pour fluidifier les echanges, qualifier les demandes et automatiser les interactions repetitives avec clients, prospects ou usagers.",
    resultat: "Qualification automatique des demandes, conversations guidees et routage intelligent vers le bon service.",
    image: "/realisations/hyla-shop.jpg",
    stack: ["Next.js", "Sanity", "Design system"],
  },
  {
    slug: "les-ecuadors",
    titre: "Transformation numerique de Les Ecuadors",
    secteur: "pme-independants",
    resume: "Transformation numerique d'une entreprise belge de parfums haut de gamme et decoration pop art : e-commerce, CRM, comptabilite, cloud, securite, marketing digital et formation interne.",
    resultat: "Ecosysteme digital complet avec vente en ligne, gestion client, reporting et montee en competence de l'equipe.",
    image: "/realisations/lesecuadors.webp",
    stack: ["E-commerce", "CRM", "Cloud", "Cybersecurity", "SEO", "AI", "Digital training"],
  },
  {
    slug: "be-cosmetik",
    titre: "Transformation numerique de Be Cosmetik",
    secteur: "pme-independants",
    resume: "Creation d'une boutique e-commerce pour parfums, cosmetiques et idees cadeaux, avec parcours d'achat clair et mecaniques de conversion.",
    resultat: "Boutique en ligne performante avec experience d'achat optimisee et taux de conversion ameliore.",
    image: "/realisations/cosmetik.jpg",
    stack: ["E-commerce", "WooCommerce", "UX", "Conversion", "Retail"],
  },
  {
    slug: "hyla-shop",
    titre: "Transformation numerique de Hyla Shop",
    secteur: "pme-independants",
    resume: "Creation d'une plateforme e-commerce et informative pour les produits Hyla de purification de l'air et nettoyage des surfaces en Belgique.",
    resultat: "E-commerce allie a un contenu educatif sur les produits, generant confiance et conversion.",
    image: "/realisations/hyla-shop.jpg",
    stack: ["E-commerce", "Product education", "UX", "Conversion", "Retail"],
  },

  // — Education & formation —
  {
    slug: "figmani",
    titre: "Conception du site Figmani.be",
    secteur: "education",
    resume: "Creation d'un hub de prototypage rapide pour transformer des idees d'applications en wireframes, maquettes haute fidelite et prototypes interactifs.",
    resultat: "Plateforme de ressources Figma, composants, design systems et workflows design-developpement.",
    image: "/realisations/figmani.jpg",
    stack: ["Figma", "Prototyping", "UX/UI", "Wireframes", "Design systems"],
  },
  {
    slug: "uxdesign-cm",
    titre: "Conception du site UXDesign.cm",
    secteur: "education",
    resume: "Creation d'un hub editorial et pedagogique dedie a la strategie UX, aux audits, au design d'interface et a la culture design adaptee aux marches africains et francophones.",
    resultat: "Hub de reference pour la culture UX en Afrique centrale et les professionnels du numerique.",
    image: "/realisations/uxdesign.jpg",
    stack: ["UX strategy", "Editorial platform", "CRO", "Design system", "Content"],
  },
  {
    slug: "ecole-du-numerique",
    titre: "Creation de la plateforme Ecole du Numerique",
    secteur: "education",
    resume: "Creation d'une plateforme de formation intensive en technologie, IA, cybersecurite, no-code, data et marketing digital.",
    resultat: "Plateforme EdTech complete avec parcours de formation structures et accessibles.",
    image: "/realisations/edn.jpg",
    stack: ["EdTech", "Training platform", "Web", "UX", "Content"],
  },

  // — Secteur public & institutionnel —
  {
    slug: "adna",
    titre: "Transformation numerique de ADNA Association",
    secteur: "secteur-public",
    resume: "Creation d'un site institutionnel pour une organisation de migrants axee sur l'integration intergenerationnelle, la protection de l'enfance et le developpement personnel.",
    resultat: "Site institutionnel clair, accessible et valorisant les missions de l'association.",
    image: "/realisations/adna.jpg",
    stack: ["Institutional website", "Association", "UX", "Content architecture"],
  },
  {
    slug: "apatasacam",
    titre: "Transformation numerique de APATASACAM",
    secteur: "secteur-public",
    resume: "Creation d'un site pour promouvoir le bien-etre des personnes autistes et Asperger au Cameroun, en Afrique et dans le monde.",
    resultat: "Visibilite accrue pour l'association et meilleur acces a l'information pour les familles.",
    image: "/realisations/apatasacam.jpg",
    stack: ["Nonprofit website", "Accessibility", "Donations", "UX", "Content"],
  },
  {
    slug: "bgv-ev",
    titre: "Conception du site web pour l'association BGV-eV",
    secteur: "secteur-public",
    resume: "Creation d'un site associatif pour une organisation engagee dans l'education, la sante, l'inclusion et l'accompagnement de familles vulnerables en Allemagne.",
    resultat: "Plateforme digitale renforçant la visibilite et la credibilite de l'association.",
    image: "/realisations/bgvev.jpg",
    stack: ["Association website", "Content architecture", "UX", "Accessibility"],
  },
  {
    slug: "ngonda-ev",
    titre: "Transformation numerique de Ngonda-eV",
    secteur: "secteur-public",
    resume: "Creation d'un site communautaire pour accompagner les femmes migrantes en Allemagne dans l'integration, la sante, la langue, le mentorat et l'autonomisation.",
    resultat: "Plateforme communautaire facilitant l'acces aux ressources et le lien entre les membres.",
    image: "/realisations/ngonda.jpg",
    stack: ["Community website", "Association", "UX", "Content", "Accessibility"],
  },
  {
    slug: "ngo-bigda",
    titre: "Ngo Bigda — plateforme de marque personnelle",
    secteur: "secteur-public",
    resume: "Creation d'une plateforme de marque personnelle pour un professionnel polyvalent en education, communication, developpement de projets, interpretation et gastronomie.",
    resultat: "Presence en ligne structuree valorisant un parcours multidisciplinaire.",
    image: "/realisations/ngobigda.png",
    stack: ["Personal brand", "Services website", "UX", "Content architecture"],
  },

  // — Industrie 4.0 —
  {
    slug: "homasys",
    titre: "Transformation digitale de Homasys",
    secteur: "industrie",
    resume: "Creation d'un site pour presenter des solutions de maison connectee, domotique, sonorisation, eclairage LED, installation et maintenance au Cameroun.",
    resultat: "Vitrine digitale professionnelle pour un acteur de la domotique en Afrique centrale.",
    image: "/realisations/homasys.jpg",
    stack: ["Smart home", "Web", "UX", "Content", "Services"],
  },

  // — Finance & FinTech —
  {
    slug: "first-credit",
    titre: "Transformation digitale de First Credit",
    secteur: "finance",
    resume: "Creation d'un site institutionnel pour une institution de microfinance dediee a l'inclusion financiere au Cameroun.",
    resultat: "Presence digitale securisee et conforme pour un acteur financier en Afrique centrale.",
    image: "/realisations/firstcredit.jpg",
    stack: ["Financial services", "Institutional website", "UX", "Security", "Compliance"],
  },

  // — Communication & Evenementiel —
  {
    slug: "black-history-month",
    titre: "Transformation numerique de Black History Month",
    secteur: "communication",
    resume: "Creation d'une plateforme dediee a la promotion, l'organisation et la valorisation des evenements du Mois de l'histoire des Noirs a Aix-la-Chapelle.",
    resultat: "Plateforme evenementielle federant la communaute avec newsletter et programmation.",
    image: "/realisations/backhistorymonth.jpg",
    stack: ["Event platform", "Editorial website", "Newsletter", "Community"],
  },
  {
    slug: "masterleads",
    titre: "Masterleads — generation de leads IA",
    secteur: "communication",
    resume: "Creation d'une plateforme de presentation pour un specialiste de la generation de leads combinant IA, prospection optimisee et promesse de resultats mesurables.",
    resultat: "Landing page a forte conversion avec proposition de valeur claire et mecaniques d'engagement.",
    image: "/realisations/masterleadss.jpg",
    stack: ["Lead generation", "AI", "Landing page", "Marketing", "UX"],
  },
];
