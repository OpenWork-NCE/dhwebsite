import type { Secteur } from "./types";

export const secteurs: Secteur[] = [
  {
    slug: "sante",
    titre: "Sante",
    enjeux:
      "Hopitaux, cabinets medicaux et maisons de repos doivent gagner du temps clinique et administratif sans compromettre la confidentialite des donnees patients.",
    casUsage: [
      "Agents IA et RAG sur documentation medicale et protocoles",
      "Analyse documentaire et synthese de dossiers",
      "Tableaux de bord d'activite, qualite et pilotage",
    ],
    technologies: ["Claude", "RAG", "Power BI", "Databricks"],
    scene: "heart",
    image: "/domains/User research.png",
  },
  {
    slug: "industrie",
    titre: "Industrie 4.0",
    enjeux:
      "Les industriels digitalisent production, maintenance et supervision. L'enjeu est de connecter l'atelier au systeme d'information et d'anticiper plutot que subir.",
    casUsage: [
      "ERP de production : Odoo Manufacturing, ERPNext",
      "Supervision, maintenance, SCADA et GMAO",
      "Analytics industriel, prevision et pilotage operations",
    ],
    technologies: ["Odoo", "ERPNext", "SCADA", "Power BI"],
    scene: "transform",
    image: "/domains/Sector-specific AI.png",
  },
  {
    slug: "secteur-public",
    titre: "Secteur public & institutionnel",
    enjeux:
      "Administrations, ambassades et organismes doivent offrir des services accessibles tout en garantissant souverainete, securite et information verifiee.",
    casUsage: [
      "Souverainete et conformite AI Act, RGPD, NIS2 / CyFun",
      "Dematerialisation et workflows documentaires",
      "Portails citoyens, information verifiee et support augmente",
    ],
    technologies: ["OVHcloud", "Mistral", "SharePoint", "CyFun"],
    scene: "building",
    image: "/domains/Compliance readiness.png",
  },
  {
    slug: "pme-independants",
    titre: "PME & independants",
    enjeux:
      "PME et independants ont besoin d'une digitalisation accessible, d'automatisations qui liberent du temps et d'outils IA utilisables sans equipe technique.",
    casUsage: [
      "Automatisation des taches administratives et commerciales",
      "Assistant IA des independants avec Indibot",
      "CRM, facturation, marketing automation et reporting",
    ],
    technologies: ["Indibot", "n8n", "Odoo", "HubSpot"],
    scene: "spark",
    image: "/domains/Cognitive automation.png",
  },
  {
    slug: "droit",
    titre: "Droit & professions reglementees",
    enjeux:
      "Cabinets et professions reglementees font face a la pression sur les delais et les couts, avec des exigences fortes de confidentialite et de sources verifiables.",
    casUsage: [
      "Assistant juridique IA source avec Jurisis",
      "Automatisation documentaire et workflows",
      "Recherche augmentee sur fonds documentaires internes",
    ],
    technologies: ["Jurisis", "RAG", "Agents IA"],
    scene: "scale",
    image: "/domains/Cyber awareness.png",
  },
  {
    slug: "education",
    titre: "Education & formation",
    enjeux:
      "Ecoles, centres de formation et universites integrent l'IA dans leurs pratiques, pour leurs equipes comme pour leurs apprenants.",
    casUsage: [
      "LMS : Moodle, TalentLMS, LearnDash",
      "Production pedagogique avec Articulate 360 et FormIA",
      "Formation des formateurs a l'IA generative",
    ],
    technologies: ["FormIA", "Moodle", "Articulate 360"],
    scene: "book",
    image: "/domains/Service design.png",
  },
  {
    slug: "finance",
    titre: "Finance & FinTech",
    enjeux:
      "Les acteurs financiers concoivent des interfaces transactionnelles, plateformes metier et systemes numeriques securises, avec attention a la conformite, la fiabilite et l'experience client.",
    casUsage: [
      "Sites institutionnels securises et conformes",
      "Interfaces transactionnelles et portails clients",
      "Automatisation des processus de conformite et reporting",
    ],
    technologies: ["Security", "Compliance", "UX", "Cloud"],
    scene: "chart",
    image: "/domains/Enterprise architecture.png",
  },
  {
    slug: "communication",
    titre: "Communication & Evenementiel",
    enjeux:
      "Marques, medias et organisations culturelles concoivent des experiences editoriales, campagnes numeriques, plateformes evenementielles et dispositifs de mesure.",
    casUsage: [
      "Plateformes evenementielles et communautaires",
      "Campagnes digitales et generation de leads",
      "Sites editoriaux et newsletters",
    ],
    technologies: ["CMS", "Newsletter", "SEO", "Analytics"],
    scene: "signal",
    image: "/domains/UX analysis.png",
  },
];
