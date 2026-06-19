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
  casUsage?: string[];
  metriques?: { valeur: string; label: string }[];
  stack?: string[];
  faq?: { question: string; reponse: string }[];
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
    casUsage: [
      "Generer un programme certifiant complet en moins d'une heure",
      "Adapter un parcours existant a un nouveau public ou secteur",
      "Produire les livrables exiges par les financeurs (OPCO, CPF)",
      "Structurer une academie interne multi-parcours",
    ],
    metriques: [
      { valeur: "80%", label: "de temps de conception economise" },
      { valeur: "4h", label: "pour un programme complet" },
      { valeur: "100%", label: "conforme aux cadres certifiants" },
    ],
    stack: ["GPT-4", "Claude", "Next.js", "Vercel"],
    faq: [
      { question: "FormIA remplace-t-il le formateur ?", reponse: "Non. FormIA genere une base structuree que le formateur valide, enrichit et personnalise. Le formateur reste le pilote." },
      { question: "Les programmes sont-ils conformes aux exigences Qualiopi ?", reponse: "Oui. La trame generee respecte les attendus des parcours certifiants : objectifs, prerequis, modalites, evaluation et durees." },
      { question: "Peut-on adapter un programme a un secteur specifique ?", reponse: "Oui. FormIA permet de specifier le secteur, le niveau du public et les contraintes metier pour generer un programme contextualise." },
    ],
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
    casUsage: [
      "Recherche dans une base documentaire juridique",
      "Preparation d'une note ou synthese juridique",
      "Qualification et classification de documents",
      "Assistance a l'analyse de dossiers complexes",
      "Exploration de contenus reglementaires",
    ],
    metriques: [
      { valeur: "70%", label: "de temps de recherche economise" },
      { valeur: "100%", label: "des reponses sourcees" },
      { valeur: "RGPD", label: "conforme par conception" },
    ],
    stack: ["LLM", "RAG", "Vector DB", "Next.js", "Sanity"],
    faq: [
      { question: "Les reponses sont-elles fiables ?", reponse: "Chaque reponse cite ses sources avec references precises. L'utilisateur peut verifier immediatement la base legale." },
      { question: "Mes donnees sont-elles protegees ?", reponse: "L'architecture est pensee pour la confidentialite : pas de partage de donnees entre utilisateurs, hebergement conforme RGPD." },
      { question: "Jurisis fonctionne-t-il avec le droit belge uniquement ?", reponse: "La version actuelle couvre le droit belge. L'architecture permet d'etendre a d'autres juridictions sur demande." },
    ],
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
    casUsage: [
      "Qualification de prospects sur un site web",
      "Accueil digital et orientation des visiteurs",
      "Support de premier niveau 24/7",
      "Collecte d'informations avant rendez-vous",
      "Assistance evenementielle ou formation",
    ],
    metriques: [
      { valeur: "60%", label: "des demandes qualifiees automatiquement" },
      { valeur: "24/7", label: "disponibilite sans intervention" },
      { valeur: "3x", label: "plus de leads qualifies" },
    ],
    stack: ["Next.js", "Sanity", "AI SDK", "Vercel"],
    faq: [
      { question: "Indibot peut-il etre personnalise a mon metier ?", reponse: "Oui. Les scenarios de conversation sont configures selon votre activite, vos services et votre ton de communication." },
      { question: "Que se passe-t-il si le bot ne sait pas repondre ?", reponse: "Indibot peut transferer la conversation vers un humain a tout moment, avec le contexte deja collecte." },
      { question: "Combien de temps pour le deployer ?", reponse: "Un premier bot fonctionnel peut etre deploye en quelques jours. Les scenarios avances prennent 2 a 4 semaines." },
    ],
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
    casUsage: [
      "Cartographie des initiatives IA par pays et secteur",
      "Analyse des conditions de deploiement IA en Afrique",
      "Ressources pour la formation et le transfert de competences",
      "Reference pour les politiques publiques et la gouvernance IA",
    ],
    metriques: [
      { valeur: "54", label: "pays africains couverts" },
      { valeur: "200+", label: "cas d'usage documentes" },
      { valeur: "2", label: "continents : Afrique & Europe" },
    ],
    stack: ["Next.js", "Sanity CMS", "Vercel"],
    faq: [
      { question: "ia4africa est-il un produit commercial ?", reponse: "C'est une plateforme de reference ouverte. Les prestations associees (formation, conseil, accompagnement) sont proposees par Digital House." },
      { question: "Le contenu est-il mis a jour ?", reponse: "Oui. Les analyses et cas d'usage sont actualises regulierement en fonction des evolutions du marche africain." },
    ],
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
    casUsage: [
      "Formation Figma pour equipes design et produit",
      "Structuration d'un UI kit reutilisable",
      "Creation de composants et variants",
      "Documentation de design system",
      "Amelioration de la collaboration design-developpement",
    ],
    stack: ["Figma", "Design tokens", "Storybook", "React"],
    faq: [
      { question: "Figmani propose-t-il des formations ?", reponse: "Oui. Des formations Figma sont disponibles via Digital House Academy, du niveau debutant a avance." },
      { question: "Les ressources sont-elles gratuites ?", reponse: "Le hub editorial est en acces libre. Les prestations de design system ou accompagnement UI sont sur devis." },
    ],
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
    casUsage: [
      "Formation et acculturation UX",
      "Veille design et produit",
      "Support pedagogique pour equipes numeriques",
      "Publication d'analyses UX",
      "Renforcement de l'autorite editoriale",
    ],
    stack: ["Next.js", "Sanity CMS", "Figma", "Vercel"],
    faq: [
      { question: "UXDesign.cm est-il reserve au marche africain ?", reponse: "Le contenu est adapte aux marches africains et francophones, mais les bonnes pratiques UX sont universelles." },
      { question: "Proposez-vous des audits UX ?", reponse: "Oui. Les audits UX sont realises par Digital House dans le cadre de missions de design et accompagnement produit." },
    ],
  },
];
