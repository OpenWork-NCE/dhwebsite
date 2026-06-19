export interface CorporateService {
  slug: string;
  title: string;
  short: string;
  promise: string;
  href: string;
  offerings: string[];
}

export const corporateServices: CorporateService[] = [
  {
    slug: "ia-data",
    title: "IA, data & agents",
    short: "Transformer les donnees en decisions et les agents IA en productivite.",
    promise: "De la strategie data aux copilotes metier, nous concevons des systemes IA utiles, mesurables et gouvernes. Agents conversationnels, RAG sur bases documentaires, pipelines de donnees et evaluation des modeles.",
    href: "/expertises/construire",
    offerings: ["Strategie IA & data", "Agents IA, RAG et bases de connaissance", "BI executive et dashboards", "Gouvernance, qualite et catalogues de donnees", "Evaluation des modeles et observabilite IA"],
  },
  {
    slug: "cloud-plateformes",
    title: "Cloud & plateformes",
    short: "Moderniser le socle technique pour rendre l'entreprise plus rapide.",
    promise: "Nous arbitrons entre hyperscalers, cloud souverain et architectures hybrides selon vos contraintes metier. Migration, DevOps, observabilite et socles prets pour l'IA.",
    href: "/expertises/construire",
    offerings: ["Architecture cloud et hybride", "Modernisation applicative et migration", "APIs, integration et microservices", "DevOps, CI/CD et observabilite", "Infrastructure souveraine OVHcloud"],
  },
  {
    slug: "cyber-confiance",
    title: "Cybersecurite & confiance",
    short: "Reduire le risque tout en accelerant la transformation.",
    promise: "Nous integrons la cybersecurite, la conformite et la souverainete des le cadrage des projets. Audit, durcissement, formation et plans de resilience.",
    href: "/souverainete",
    offerings: ["Audit de maturite cyber et security audit", "NIS2 / RGPD / AI Act / compliance readiness", "Protection cloud, endpoints et durcissement", "Plan de resilience et gestion d'incidents", "Cyber awareness et formation securite"],
  },
  {
    slug: "strategie-reinvention",
    title: "Strategie & reinvention",
    short: "Passer d'une ambition numerique a une feuille de route executable.",
    promise: "Nous aidons les directions a choisir les bons paris, prioriser les cas d'usage et piloter la valeur.",
    href: "/expertises/conseiller",
    offerings: ["Diagnostic de maturite", "Operating model IA", "Business case et priorisation", "Gouvernance de transformation"],
  },
  {
    slug: "managed-services",
    title: "Managed services",
    short: "Operer les solutions critiques apres leur lancement.",
    promise: "Nous maintenons, supervisons et ameliorons les plateformes, agents et workflows dans la duree.",
    href: "/expertises/operer",
    offerings: ["IA as a Service", "Data as a Service", "Automation as a Service", "CIO / CDO as a Service"],
  },
  {
    slug: "learning-adoption",
    title: "Learning & adoption",
    short: "Faire monter les equipes en competence, pas seulement deployer des outils.",
    promise: "Notre Academy transforme l'IA en gestes professionnels, reflexes de securite et pratiques de management.",
    href: "/academy",
    offerings: ["Formations dirigeants", "Prompt engineering", "Parcours data et IA", "Conduite du changement"],
  },
  {
    slug: "customer-service",
    title: "Service client augmente",
    short: "Faire du support un moteur de satisfaction et de croissance.",
    promise: "Nous automatisons les demandes simples et outillons les equipes pour traiter les cas complexes plus vite.",
    href: "/expertises/construire",
    offerings: ["Chatbots et voicebots", "Base de connaissance RAG", "Routage et triage IA", "Tableaux de bord qualite"],
  },
  {
    slug: "marketing-experience",
    title: "Marketing & experience",
    short: "Creer des experiences digitales utiles, personnalisees et mesurables.",
    promise: "Nous connectons CRM, contenus, donnees et IA pour ameliorer acquisition, retention et experience client.",
    href: "/secteurs/pme-independants",
    offerings: ["CRM et marketing automation", "Personnalisation IA", "UX/UI et parcours client", "Mesure de performance"],
  },
  {
    slug: "sales-commerce",
    title: "Sales & commerce",
    short: "Digitaliser la vente, le e-commerce et les operations commerciales.",
    promise: "Nous alignons CRM, catalogue, paiement, automatisation et reporting pour vendre mieux et plus vite.",
    href: "/produits",
    offerings: ["E-commerce B2B/B2C", "CRM commercial", "Automatisation devis-factures", "Analytics de vente"],
  },
  {
    slug: "digital-engineering",
    title: "Digital engineering",
    short: "Concevoir, developper et integrer des produits numeriques robustes.",
    promise: "Nous construisons applications web et mobiles, portails et outils internes avec des cycles courts, code audit et architecture propre.",
    href: "/expertises/construire",
    offerings: ["Applications web et mobile", "Portails clients et outils internes", "Low-code et no-code", "Integration ERP/CRM", "Code audit et modernisation"],
  },
  {
    slug: "supply-chain",
    title: "Supply chain & operations",
    short: "Rendre les operations plus previsionnelles, automatisees et resilientes.",
    promise: "Nous appliquons data, IA et automatisation aux flux, stocks, achats, production et logistique.",
    href: "/secteurs/industrie",
    offerings: ["Prevision de demande", "Optimisation stocks", "Automatisation achats", "Pilotage production"],
  },
  {
    slug: "finance-risk",
    title: "Finance & risk management",
    short: "Outiller la finance pour piloter performance, risque et conformite.",
    promise: "Nous modernisons reporting, controle, previsions et processus financiers avec data et automatisation.",
    href: "/expertises/conseiller",
    offerings: ["Reporting financier", "Automatisation controle", "Previsions et scenarios", "Cartographie des risques"],
  },
  {
    slug: "talent-organisation",
    title: "Talent & organisation",
    short: "Adapter les roles, competences et modes de travail a l'IA.",
    promise: "Nous aidons RH et directions a redesigner les metiers, former les equipes et installer les nouveaux usages.",
    href: "/academy",
    offerings: ["Cartographie competences", "Plan d'adoption IA", "Redesign des roles", "Academies internes"],
  },
  {
    slug: "ecosystem-partners",
    title: "Ecosystem partners",
    short: "Assembler les meilleurs outils plutot que tout reconstruire.",
    promise: "Nous integrons OpenAI, Microsoft, Mistral, Odoo, n8n, Databricks, Snowflake, OVHcloud et autres plateformes.",
    href: "/a-propos",
    offerings: ["Selection fournisseurs", "Integration plateformes", "Revente et parametrage", "Architecture cible"],
  },
  {
    slug: "emerging-tech",
    title: "Emerging technology",
    short: "Explorer les technologies emergentes avec discipline et ROI.",
    promise: "Nous testons agents autonomes, open-weight models, interfaces multimodales et automatisations avancees.",
    href: "/ressources",
    offerings: ["Veille strategique", "POC rapide", "Evaluation risques", "Industrialisation progressive"],
  },
  {
    slug: "sustainability",
    title: "Sustainability & impact",
    short: "Mettre la data et le numerique au service d'une performance durable.",
    promise: "Nous aidons a mesurer, automatiser et piloter les indicateurs ESG, energie, achats et impact.",
    href: "/secteurs/secteur-public",
    offerings: ["Reporting ESG", "Pilotage energie", "Achats responsables", "Impact dashboards"],
  },
];
