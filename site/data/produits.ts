import type { Scene } from "@/components/visuals/SceneIllustration";

export interface Produit {
  slug: string;
  nom: string;
  categorie: string;
  accroche: string;
  probleme: string;
  solution: string;
  fonctionnalites: { titre: string; texte: string }[];
  pour: string[];
  cta: { label: string; href: string };
  scene: Scene;
  image?: string;
}

export const produits: Produit[] = [
  {
    slug: "formia",
    nom: "FormIA",
    categorie: "Copilote des formateurs",
    accroche: "Le copilote IA qui accelere la conception de formations.",
    probleme:
      "Concevoir un programme de formation certifiant prend du temps : objectifs, sequences, supports, evaluations et adaptation au public.",
    solution:
      "FormIA genere des programmes structures a partir de vos objectifs. Le formateur garde la main : il pilote, ajuste et valide.",
    fonctionnalites: [
      { titre: "Programmes structures", texte: "Objectifs, sequences, durees et evaluations generes en coherence." },
      { titre: "Conformite", texte: "Trame compatible avec les exigences des parcours certifiants." },
      { titre: "Personnalisation", texte: "Adaptation au public, au secteur, au niveau et a la duree." },
      { titre: "Gain de temps", texte: "Des heures de preparation economisees par session." },
    ],
    pour: ["Organismes de formation", "Formateurs independants", "Services RH et L&D"],
    cta: { label: "Demander une demo", href: "/contact" },
    scene: "learn",
  },
  {
    slug: "jurisis",
    nom: "Jurisis",
    categorie: "LegalTech",
    accroche: "Assistant juridique IA pour la recherche, l'analyse et la structuration documentaire.",
    probleme:
      "Les professionnels du droit passent un temps considerable a rechercher, analyser et organiser des contenus juridiques. Les outils generiques manquent de sources verifiables et de garanties de confidentialite.",
    solution:
      "Jurisis est une solution LegalTech concue pour aider les professionnels du droit a rechercher, analyser, organiser et exploiter plus efficacement leurs contenus juridiques grace a l'intelligence artificielle.",
    fonctionnalites: [
      { titre: "Recherche juridique augmentee", texte: "Exploration rapide d'une base documentaire juridique avec reponses sourcees." },
      { titre: "Analyse et structuration documentaire", texte: "Qualification de documents, preparation de notes et syntheses." },
      { titre: "Assistance IA metiers du droit", texte: "Assistance a l'analyse de dossiers et exploration de contenus reglementaires." },
      { titre: "Tracabilite et confidentialite", texte: "Gouvernance des reponses et approche centree sur la confidentialite des donnees." },
    ],
    pour: ["Cabinets d'avocats et etudes", "Directions juridiques", "Professions reglementees"],
    cta: { label: "Demander une demo", href: "/contact" },
    scene: "scale",
    image: "/products/jurisis.webp",
  },
  {
    slug: "indibot",
    nom: "Indibot",
    categorie: "Assistant IA d'interaction",
    accroche: "Assistant IA oriente interaction, qualification et automatisation des echanges.",
    probleme:
      "Les organisations perdent du temps a qualifier manuellement les demandes, a repeter les memes echanges et a router les conversations vers les bons interlocuteurs.",
    solution:
      "Indibot est un assistant IA concu pour fluidifier les echanges, qualifier les demandes, automatiser les interactions repetitives et aider les organisations a mieux structurer leurs conversations avec clients, prospects ou usagers.",
    fonctionnalites: [
      { titre: "Qualification automatique", texte: "Qualification des demandes et collecte structuree d'informations." },
      { titre: "Conversation guidee", texte: "Echanges fluides avec orientation vers le bon service ou canal." },
      { titre: "Automatisation", texte: "Automatisation des interactions repetitives avec possibilite de transfert humain." },
      { titre: "Multi-usage", texte: "Accueil digital, support premier niveau, assistance evenementielle ou formation." },
    ],
    pour: ["PME et organisations", "Sites web et portails", "Equipes commerciales et support"],
    cta: { label: "Decouvrir Indibot", href: "/contact" },
    scene: "spark",
    image: "/products/indibot.webp",
  },
  {
    slug: "ia4africa",
    nom: "ia4africa.org",
    categorie: "Plateforme & ouvrage de reference",
    accroche: "La reference sur l'IA, les usages et la souverainete numerique en Afrique.",
    probleme:
      "L'IA en Afrique manque de reperes pratiques et fiables : usages, souverainete, donnees, competences, infrastructures et conditions reelles de deploiement.",
    solution:
      "ia4africa.org rassemble analyses, cas d'usage et ressources pour accompagner les institutions et entreprises africaines.",
    fonctionnalites: [
      { titre: "Analyses de reference", texte: "Un regard operationnel sur l'IA, les usages et la souverainete en Afrique." },
      { titre: "Cas d'usage", texte: "Exemples concrets, secteur par secteur." },
      { titre: "Transfert de competences", texte: "Formation et accompagnement des institutions." },
      { titre: "Souverainete des donnees", texte: "Vers la maitrise des infrastructures et des donnees." },
    ],
    pour: ["Institutions africaines", "Entreprises panafricaines", "Acteurs de la formation"],
    cta: { label: "En savoir plus", href: "/contact" },
    scene: "book",
  },
  {
    slug: "figmani",
    nom: "Figmani.be",
    categorie: "Hub design & prototypage",
    accroche: "Hub de ressources et pratiques autour du design d'interface et de Figma.",
    probleme:
      "Les equipes produit et design manquent de ressources structurees pour collaborer efficacement entre designers et developpeurs, structurer des UI kits et documenter leurs design systems.",
    solution:
      "Figmani.be est un hub de ressources consacre au design d'interface, a Figma, aux composants, aux systemes de design et aux pratiques de collaboration entre designers, developpeurs et equipes produit.",
    fonctionnalites: [
      { titre: "Ressources Figma", texte: "Templates, composants et variants prets a l'emploi." },
      { titre: "Design systems et tokens", texte: "Documentation et structuration de systemes de design." },
      { titre: "Workflow design-developpement", texte: "Bonnes pratiques de collaboration entre designers et devs." },
      { titre: "Documentation d'interface", texte: "Guides et conventions pour des interfaces coherentes." },
    ],
    pour: ["Designers UI/UX", "Equipes produit", "Developpeurs front-end"],
    cta: { label: "Visiter Figmani.be", href: "/contact" },
    scene: "code",
    image: "/products/LOGO-FIGMANI.png",
  },
  {
    slug: "uxdesign-cm",
    nom: "UXDesign.cm",
    categorie: "Hub editorial UX",
    accroche: "Hub editorial dedie a la culture UX et design en Afrique centrale.",
    probleme:
      "Les professionnels du numerique en Afrique francophone manquent de contenus pedagogiques adaptes a leur contexte pour monter en competence sur le design d'experience et les pratiques UX.",
    solution:
      "UXDesign.cm est un hub editorial et pedagogique consacre a la culture UX, au design d'experience, aux bonnes pratiques d'interface et a la montee en competence des professionnels du numerique.",
    fonctionnalites: [
      { titre: "Articles UX et design", texte: "Contenus editoriaux sur la strategie UX et les bonnes pratiques." },
      { titre: "Ressources pedagogiques", texte: "Support pour la formation et l'acculturation des equipes." },
      { titre: "Culture design francophone", texte: "Contenus adaptes aux marches africains et francophones." },
      { titre: "Acculturation produit", texte: "Design systems, veille et analyses pour les equipes numeriques." },
    ],
    pour: ["Professionnels du numerique", "Equipes design en Afrique", "Ecoles et centres de formation"],
    cta: { label: "Visiter UXDesign.cm", href: "/contact" },
    scene: "learn",
    image: "/products/uxdesign.png",
  },
];
