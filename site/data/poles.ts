import type { Scene } from "@/components/visuals/SceneIllustration";

export interface Practice {
  titre: string;
  points: string[];
}

export interface Pole {
  slug: string;
  numero: string;
  nom: string;
  sous: string;
  promesse: string;
  description: string;
  practices: Practice[];
  technologies: string[];
  formats: string[];
  scene: Scene;
}

export const poles: Pole[] = [
  {
    slug: "conseiller",
    numero: "01",
    nom: "Conseiller",
    sous: "Advisory",
    promesse: "Transformer l'ambition IA en feuille de route executable.",
    description:
      "Le pole strategique de Digital House aide les directions a choisir les bons paris : strategie, gouvernance, architecture, risques, souverainete, valeur et adoption.",
    practices: [
      {
        titre: "Strategie & reinvention numerique",
        points: [
          "Strategie IA, data, cloud et cyber alignee sur les objectifs de direction",
          "Business case, priorisation et portefeuille de cas d'usage",
          "Operating model, gouvernance de transformation et trajectoire 12-36 mois",
          "Cartographie des dependances technologiques et arbitrage build/buy/partner",
        ],
      },
      {
        titre: "Finance, risque & conformite",
        points: [
          "Cartographie des risques IA, data, cyber et operationnels",
          "AI Act, RGPD, NIS2, politiques internes et controles",
          "Reporting executif, previsions, scenarios et tableaux de bord de performance",
          "Modeles de decision pour investissements technologiques",
        ],
      },
      {
        titre: "Talent, organisation & adoption",
        points: [
          "Cartographie des competences et des roles impactes par l'IA",
          "Plan d'adoption par metier, sponsors, rituels et indicateurs",
          "Redesign de processus et modes de travail augmentes",
          "Accompagnement dirigeants, RH et managers",
        ],
      },
      {
        titre: "Sustainability & impact",
        points: [
          "Pilotage des indicateurs ESG, energie, achats et impact",
          "Usage responsable de l'IA et sobriete des architectures",
          "Dashboards d'impact pour directions et institutions",
          "Feuilles de route numerique responsable",
        ],
      },
    ],
    technologies: ["AI Act", "RGPD", "NIS2", "BPMN", "ESG", "Risk management"],
    formats: [
      "Diagnostic flash",
      "Sprint de cadrage",
      "Schema directeur IA / data / cloud",
      "Accompagnement de direction",
    ],
    scene: "ai",
  },
  {
    slug: "construire",
    numero: "02",
    nom: "Construire",
    sous: "Build & Integrate",
    promesse: "La ou la strategie devient systeme.",
    description:
      "Le pole execution integre les meilleures plateformes et construit ce qui manque : agents IA, applications metier, data products, CRM, e-commerce, portails et automatisations.",
    practices: [
      {
        titre: "IA, data & agents",
        points: [
          "Copilotes metier, agents IA, RAG et bases de connaissance",
          "Pipelines data, qualite, gouvernance et catalogues",
          "BI executive, Power BI, Tableau, Databricks, Snowflake, Microsoft Fabric",
          "Evaluation des modeles, securite des prompts et observabilite IA",
        ],
      },
      {
        titre: "Cloud, plateformes & digital engineering",
        points: [
          "Architecture cloud, hybride et souveraine",
          "Modernisation applicative, APIs, DevOps et observabilite",
          "Applications metier, portails clients et outils internes",
          "Low-code / no-code lorsque cela accelere sans fragiliser",
        ],
      },
      {
        titre: "Customer service, sales & commerce",
        points: [
          "Chatbots, voicebots, triage IA et support augmente",
          "CRM, marketing automation, parcours client et personnalisation IA",
          "E-commerce B2B/B2C, catalogues, devis, paiement et reporting",
          "Integration HubSpot, Salesforce, Odoo, Shopify, WooCommerce",
        ],
      },
      {
        titre: "Supply chain & operations",
        points: [
          "Prevision de demande, optimisation stocks et pilotage production",
          "Automatisation achats, logistique et workflows operationnels",
          "ERP, GED, signatures, workplace et integrations documentaires",
          "Dashboards operations pour sites, equipes et directions",
        ],
      },
    ],
    technologies: [
      "OpenAI",
      "Mistral",
      "n8n",
      "Databricks",
      "Odoo",
      "Power BI",
      "Azure",
      "OVHcloud",
      "Shopify",
    ],
    formats: ["Projet au forfait", "Integration & revente", "Build sur mesure", "POC agent IA"],
    scene: "code",
  },
  {
    slug: "operer",
    numero: "03",
    nom: "Operer",
    sous: "Managed Services",
    promesse: "Vos systemes critiques, operes et ameliores en continu.",
    description:
      "Le pole run transforme les projets en capacites durables : supervision, support, optimisation, securite, gouvernance et amelioration continue.",
    practices: [
      {
        titre: "Managed services IA, data et automation",
        points: [
          "IA as a Service : monitoring, evaluation, prompt ops et amelioration",
          "Data as a Service : dashboards, pipelines et qualite en continu",
          "Automation as a Service : workflows, agents et integrations maintenus",
          "Runbooks, SLA, support et comites de pilotage",
        ],
      },
      {
        titre: "Cyber, cloud & resilience",
        points: [
          "Surveillance des dependances, couts cloud et performance",
          "Mises a jour, sauvegardes, controles et plans de reprise",
          "Supervision cyber, alerting et durcissement progressif",
          "Gestion des incidents et boucle d'amelioration",
        ],
      },
      {
        titre: "CIO / CDO / AI Officer as a Service",
        points: [
          "Direction informatique externalisee pour PME et organisations",
          "Direction data externalisee, gouvernance et qualite",
          "AI Officer : portefeuille de cas d'usage, risques et conformite",
          "Reporting mensuel a la direction",
        ],
      },
    ],
    technologies: ["Monitoring", "SLA", "MLOps", "FinOps", "Observabilite", "Runbooks"],
    formats: ["Abonnement mensuel", "Forfait de run", "Astreinte et support", "Direction externalisee"],
    scene: "signal",
  },
  {
    slug: "former",
    numero: "04",
    nom: "Former",
    sous: "Academy",
    promesse: "L'adoption ne se decrete pas, elle se forme.",
    description:
      "Le pole Academy fait monter en competence dirigeants et equipes sur l'IA, la data, la cyber, les outils et les nouveaux modes de travail.",
    practices: [
      {
        titre: "Learning IA, data & cyber",
        points: [
          "ChatGPT, Claude, Copilot, agents, prompt engineering et automatisation",
          "SQL, Python, Databricks, Power BI, dashboards et culture data",
          "Cyber hygiene, RGPD, NIS2, protection des donnees et reflexes securite",
          "Formations metier pour finance, RH, marketing, operations et direction",
        ],
      },
      {
        titre: "Adoption & change management",
        points: [
          "Programmes intra-entreprise adaptes aux roles",
          "Keynotes, workshops dirigeants et formats courts de 4 heures",
          "Parcours certifiants et academies internes",
          "Mesure d'adoption, coaching et communaute d'ambassadeurs",
        ],
      },
    ],
    technologies: ["Certifiant", "Intra & inter", "En ligne", "Presentiel", "Executive workshops"],
    formats: ["Formation sur catalogue", "Programme sur mesure", "Conference / keynote", "Academie interne"],
    scene: "learn",
  },
  {
    slug: "investir",
    numero: "05",
    nom: "Investir",
    sous: "Ventures",
    promesse: "Du marche a nos propres actifs technologiques.",
    description:
      "Le pole Ventures capitalise sur les besoins terrain pour creer des produits, extensions et accelerateurs reutilisables dans nos missions.",
    practices: [
      {
        titre: "Ecosystem partners",
        points: [
          "Selection, revente et integration des meilleures plateformes du marche",
          "Partenariats OpenAI, Microsoft, Mistral, Odoo, n8n, Databricks, Snowflake, OVHcloud",
          "Architecture cible et trajectoire de migration",
          "Extensions et connecteurs lorsque le standard ne suffit pas",
        ],
      },
      {
        titre: "Emerging technology",
        points: [
          "Veille sur agents autonomes, modeles open-weight, multimodal et MCP",
          "POC rapides avec evaluation valeur / risque / souverainete",
          "Industrialisation progressive des technologies matures",
          "Capitalisation en accelerateurs reutilisables",
        ],
      },
      {
        titre: "Nos produits",
        points: [
          "FormIA : copilote IA des formateurs",
          "Jurisis : assistant juridique IA",
          "Indibot : assistant IA d'interaction et qualification",
          "ia4africa.org : reference sur l'IA en Afrique",
          "Figmani.be : hub de ressources design et Figma",
          "UXDesign.cm : hub editorial UX pour l'Afrique francophone",
        ],
      },
    ],
    technologies: ["SaaS", "Licences", "R&D", "Open-weight", "MCP", "Partenariats"],
    formats: ["Licence produit", "SaaS", "Partenariat de distribution", "POC emergent"],
    scene: "spark",
  },
];
