# Site Digital House — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire le nouveau site complet de Digital House — cabinet de transformation numérique — avec la structure d'Agoria et l'esthétique de Sanity.io, prêt à déployer sur Vercel.

**Architecture:** Next.js 15 App Router. Le contenu structuré (domaines, services, secteurs, solutions, réalisations) vit dans des fichiers de données TypeScript ; 5 gabarits de routes dynamiques rendent ~25 pages. Les actualités sont des fichiers MDX. Spec : `docs/superpowers/specs/2026-06-13-site-digital-house-design.md`.

**Tech Stack:** Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + gray-matter/next-mdx-remote (MDX) + Vitest (tests d'intégrité des données).

**Design tokens:** fond `#ffffff`, texte `#111111`, accent `#f03e2f`, fond doux `#f7f7f8`, bandes sombres `#111111`. Police : Inter (next/font/google).

**Convention :** le site est généré dans le sous-dossier `site/` du repo (le repo contient déjà `docs/`). Toutes les commandes `npm` se lancent depuis `site/`.

---

### Task 1: Scaffold du projet Next.js

**Files:**
- Create: `site/` (via create-next-app)
- Modify: `.gitignore` (racine)

- [ ] **Step 1: Générer le projet**

```bash
npx create-next-app@latest site --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm --yes
```

- [ ] **Step 2: Installer les dépendances**

```bash
cd site
npm install framer-motion gray-matter next-mdx-remote
npm install -D vitest
```

- [ ] **Step 3: Vérifier que le build passe**

Run: `npm run build` (dans `site/`)
Expected: `✓ Compiled successfully`

- [ ] **Step 4: Ajouter le script de test dans `site/package.json`**

Dans `"scripts"`, ajouter : `"test": "vitest run"`

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 15 + deps (framer-motion, mdx, vitest)"
```

---

### Task 2: Design tokens, layout racine et composants UI de base

**Files:**
- Modify: `site/app/globals.css`
- Modify: `site/app/layout.tsx`
- Create: `site/components/ui/Container.tsx`
- Create: `site/components/ui/SectionHeading.tsx`
- Create: `site/components/ui/Button.tsx`
- Create: `site/components/ui/Reveal.tsx`

- [ ] **Step 1: Écrire `site/app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-ink: #111111;
  --color-accent: #f03e2f;
  --color-soft: #f7f7f8;
  --color-muted: #555555;
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #ffffff;
  color: var(--color-ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Écrire `site/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dhcompany.pro"),
  title: {
    default: "Digital House — Cabinet de transformation numérique",
    template: "%s | Digital House",
  },
  description:
    "IA, digitalisation, cybersécurité, formations : Digital House accompagne les entreprises et organisations dans toute leur transformation numérique.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Digital House",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
```

(Le Header/Footer seront ajoutés au layout en Task 3.)

- [ ] **Step 3: Écrire `site/components/ui/Container.tsx`**

```tsx
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}
```

- [ ] **Step 4: Écrire `site/components/ui/SectionHeading.tsx`**

```tsx
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  dark = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">{kicker}</p>
      <h2 className={`mt-2 text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base ${dark ? "text-neutral-400" : "text-muted"}`}>{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Écrire `site/components/ui/Button.tsx`**

```tsx
import Link from "next/link";

const styles = {
  primary: "bg-accent text-white hover:bg-[#d8341f]",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-neutral-300 text-ink hover:border-ink",
  white: "bg-white text-accent hover:bg-neutral-100",
} as const;

export default function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-5 py-3 text-sm font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 6: Écrire `site/components/ui/Reveal.tsx`** (apparition au scroll, style Sanity sobre)

```tsx
"use client";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 7: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `✓ Compiled successfully`

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: design tokens, layout racine et composants UI de base"
```

---

### Task 3: Types et fichiers de données (tout le contenu structuré)

**Files:**
- Create: `site/data/types.ts`
- Create: `site/data/domaines.ts`
- Create: `site/data/services.ts`
- Create: `site/data/secteurs.ts`
- Create: `site/data/solutions.ts`
- Create: `site/data/realisations.ts`
- Create: `site/data/site.ts`
- Test: `site/tests/data.test.ts`

- [ ] **Step 1: Écrire `site/data/types.ts`**

```ts
export interface Domaine {
  slug: string;
  titre: string;
  accroche: string;
  vision: string;
  servicesLies: string[]; // slugs de services
  chiffres: { valeur: string; label: string }[];
}

export interface ServiceCategorie {
  slug: string;
  titre: string;
  description: string;
}

export interface Service {
  slug: string;
  categorie: string; // slug de ServiceCategorie
  titre: string;
  accroche: string;
  description: string;
  benefices: { titre: string; texte: string }[];
  etapes: { titre: string; texte: string }[];
  faq: { question: string; reponse: string }[];
}

export interface Secteur {
  slug: string;
  titre: string;
  enjeux: string;
  servicesPertinents: string[]; // slugs de services
  etudeDeCas: { titre: string; texte: string };
  temoignage: { citation: string; auteur: string };
}

export interface Solution {
  slug: string;
  nom: string;
  accroche: string;
  description: string;
  fonctionnalites: { titre: string; texte: string }[];
  tarification: { plan: string; prix: string; inclus: string[] }[];
  cta: { label: string; href: string };
}

export interface Realisation {
  slug: string;
  titre: string;
  secteur: string; // slug de Secteur
  resume: string;
  resultat: string;
}
```

- [ ] **Step 2: Écrire `site/data/site.ts`** (constantes globales)

```ts
export const SITE = {
  nom: "Digital House",
  slogan: "Embrasser la technologie. Embrasser l'ambition.",
  sousSlogan:
    "IA, digitalisation, cybersécurité, formations : nous accompagnons les entreprises et organisations dans toute leur transformation numérique.",
  email: "contact@dhcompany.pro",
  rdvUrl: "https://meet.brevo.com/digital-house", // à remplacer par le vrai lien Brevo
  linkedin: "https://www.linkedin.com/company/digital-house",
  facebook: "https://www.facebook.com/dhcompany",
  partenaires: ["Brevo", "Monica", "AIOSEO", "TL;DV", "Vercel", "OpenAI"],
  stats: [
    { valeur: "15+", label: "projets réalisés" },
    { valeur: "7", label: "domaines d'expertise" },
    { valeur: "3", label: "programmes de formation" },
    { valeur: "2", label: "solutions IA propriétaires" },
  ],
};
```

- [ ] **Step 3: Écrire `site/data/domaines.ts`** — 5 entrées complètes

```ts
import type { Domaine } from "./types";

export const domaines: Domaine[] = [
  {
    slug: "ia-competitivite",
    titre: "Accélérer la compétitivité par l'IA",
    accroche: "L'intelligence artificielle n'est plus une option : c'est le levier de productivité de la décennie.",
    vision:
      "Nous aidons les organisations à identifier, déployer et gouverner des solutions d'IA qui créent un avantage compétitif mesurable — de l'automatisation des tâches répétitives aux assistants métiers sur mesure. Notre conviction : l'IA doit servir votre stratégie, pas l'inverse.",
    servicesLies: ["intelligence-artificielle", "data-analyse", "formation-ia"],
    chiffres: [
      { valeur: "x3", label: "de productivité sur les tâches automatisées" },
      { valeur: "10 000", label: "prompts prêts à l'emploi avec Indibot" },
    ],
  },
  {
    slug: "transformation-digitale",
    titre: "Réussir la transformation digitale",
    accroche: "Du site vitrine à la plateforme métier, nous transformons vos processus en expériences numériques.",
    vision:
      "La transformation digitale réussie commence par l'expérience utilisateur. Nous concevons des parcours, des interfaces et des outils qui font gagner du temps à vos équipes et fidélisent vos clients — avec une exigence de qualité digne des plus grands acteurs technologiques.",
    servicesLies: ["digitalisation-ux", "software-developpement", "developpement-marches"],
    chiffres: [
      { valeur: "15+", label: "projets de digitalisation livrés" },
      { valeur: "6", label: "secteurs accompagnés" },
    ],
  },
  {
    slug: "cybersecurite",
    titre: "Sécuriser les organisations",
    accroche: "La confiance numérique se construit : audits, bonnes pratiques et protection continue.",
    vision:
      "Chaque organisation, quelle que soit sa taille, est exposée aux risques cyber. Nous rendons la cybersécurité accessible : audits de code et d'infrastructure, sensibilisation des équipes, et mise en place de protections proportionnées à vos enjeux réels.",
    servicesLies: ["cybersecurite-service", "data-analyse"],
    chiffres: [
      { valeur: "100%", label: "des audits suivis d'un plan d'action concret" },
      { valeur: "0", label: "jargon inutile dans nos rapports" },
    ],
  },
  {
    slug: "formation-talents",
    titre: "Former les talents de demain",
    accroche: "La technologie ne vaut que par les personnes qui la maîtrisent.",
    vision:
      "Notre Academy forme dirigeants, équipes et indépendants aux compétences numériques qui comptent : IA générative, productivité digitale, sécurité. Sessions d'info gratuites, ateliers pratiques et réseaux d'apprentissage entre pairs.",
    servicesLies: ["formation-ia", "documents-outils-service"],
    chiffres: [
      { valeur: "3", label: "programmes de formation" },
      { valeur: "100%", label: "de cas pratiques issus du terrain" },
    ],
  },
  {
    slug: "connectivite",
    titre: "Connecter les territoires",
    accroche: "Une connexion fiable est le prérequis de toute ambition numérique.",
    vision:
      "Avec nos solutions hardware et nos installations Starlink, nous garantissons aux organisations — même dans les zones les moins desservies — une connectivité qui maintient leurs équipes productives et leurs services disponibles.",
    servicesLies: ["hardware-connectivite"],
    chiffres: [
      { valeur: "99,9%", label: "de disponibilité visée" },
      { valeur: "48h", label: "délai moyen d'installation" },
    ],
  },
];
```

- [ ] **Step 4: Écrire `site/data/services.ts`** — 6 catégories + 11 services complets

Catégories (slugs) : `expertise`, `documents-outils`, `developpement-de-marches`, `donnees-analyse`, `formations`, `avantages`.

```ts
import type { Service, ServiceCategorie } from "./types";

export const categories: ServiceCategorie[] = [
  { slug: "expertise", titre: "Expertise", description: "Sept domaines de conseil et de réalisation, du diagnostic au déploiement." },
  { slug: "documents-outils", titre: "Documents & Outils", description: "Guides pratiques, livres blancs et outils prêts à l'emploi pour avancer en autonomie." },
  { slug: "developpement-de-marches", titre: "Développement de marchés", description: "Accompagnement e-commerce, mise en réseau et stratégie go-to-market digitale." },
  { slug: "donnees-analyse", titre: "Données & Analyse", description: "Audits, benchmarks et veille technologique pour décider sur des faits." },
  { slug: "formations", titre: "Formations", description: "Academy, sessions d'info et réseaux d'apprentissage pour monter en compétence." },
  { slug: "avantages", titre: "Avantages", description: "Smart Deals : des conditions préférentielles chez nos partenaires technologiques." },
];

export const services: Service[] = [
  {
    slug: "intelligence-artificielle",
    categorie: "expertise",
    titre: "Intelligence Artificielle",
    accroche: "Des solutions IA personnalisées qui augmentent votre productivité.",
    description:
      "Nous concevons et déployons des solutions d'intelligence artificielle adaptées à votre métier : assistants conversationnels, automatisation de processus, analyse de documents, génération de contenu. De l'idée au déploiement, avec gouvernance et formation des équipes.",
    benefices: [
      { titre: "Productivité mesurable", texte: "Automatisez les tâches répétitives et libérez du temps pour la valeur ajoutée." },
      { titre: "Sur mesure", texte: "Chaque solution est conçue pour vos données, vos processus et vos contraintes." },
      { titre: "Adoption garantie", texte: "Formation et accompagnement des équipes inclus dans chaque déploiement." },
    ],
    etapes: [
      { titre: "Diagnostic", texte: "Cartographie de vos processus et identification des cas d'usage à fort impact." },
      { titre: "Prototype", texte: "Démonstration concrète sur vos données réelles en quelques semaines." },
      { titre: "Déploiement", texte: "Mise en production, intégration à vos outils et formation des utilisateurs." },
    ],
    faq: [
      { question: "Faut-il des données parfaites pour commencer ?", reponse: "Non. Le diagnostic identifie précisément ce qui est exploitable aujourd'hui et ce qui doit être structuré." },
      { question: "Quels modèles utilisez-vous ?", reponse: "Les meilleurs modèles du marché (Claude, GPT…) choisis selon votre cas d'usage, vos coûts et vos exigences de confidentialité." },
    ],
  },
  {
    slug: "digitalisation-ux",
    categorie: "expertise",
    titre: "Digitalisation & UX",
    accroche: "Transformer chaque interaction en expérience mémorable.",
    description:
      "Analyse approfondie de vos interfaces et parcours utilisateurs, refonte UX/UI, conception de produits digitaux. Nous transformons vos points de contact numériques en avantages compétitifs.",
    benefices: [
      { titre: "Conversion en hausse", texte: "Des parcours fluides qui transforment les visiteurs en clients." },
      { titre: "Décisions fondées", texte: "Chaque recommandation s'appuie sur l'analyse de données d'usage réelles." },
      { titre: "Image renforcée", texte: "Une interface soignée est votre première preuve de sérieux." },
    ],
    etapes: [
      { titre: "Audit UX", texte: "Analyse heuristique, parcours critiques et points de friction." },
      { titre: "Conception", texte: "Maquettes et prototypes validés avec vos utilisateurs." },
      { titre: "Mise en œuvre", texte: "Développement ou accompagnement de vos équipes jusqu'à la mise en ligne." },
    ],
    faq: [
      { question: "Travaillez-vous sur l'existant ?", reponse: "Oui — l'audit UX d'une interface existante est souvent le meilleur point de départ." },
    ],
  },
  {
    slug: "software-developpement",
    categorie: "expertise",
    titre: "Software & Développement",
    accroche: "Sites, e-commerce et applications web sur mesure.",
    description:
      "Création et refonte de sites web, boutiques e-commerce, applications web et mobiles personnalisées. Des technologies modernes, un code maintenable, des performances au rendez-vous.",
    benefices: [
      { titre: "Technologies modernes", texte: "Next.js, React et les standards actuels du web pour des sites rapides et durables." },
      { titre: "SEO natif", texte: "Performance et référencement intégrés dès la conception." },
      { titre: "Évolutif", texte: "Une base de code propre qui grandit avec votre activité." },
    ],
    etapes: [
      { titre: "Cadrage", texte: "Objectifs, contenus, arborescence et maquettes." },
      { titre: "Développement", texte: "Itérations courtes avec démonstrations régulières." },
      { titre: "Lancement", texte: "Mise en ligne, formation à l'administration et suivi." },
    ],
    faq: [
      { question: "Proposez-vous la maintenance ?", reponse: "Oui, des forfaits de maintenance et d'évolution adaptés à chaque projet." },
    ],
  },
  {
    slug: "cybersecurite-service",
    categorie: "expertise",
    titre: "Cybersécurité",
    accroche: "Protéger vos données, vos clients et votre réputation.",
    description:
      "Audits de sécurité, durcissement d'infrastructures, sensibilisation des équipes et plans de réponse aux incidents. Une approche pragmatique, proportionnée à vos enjeux réels.",
    benefices: [
      { titre: "Risques maîtrisés", texte: "Identification et priorisation des vulnérabilités réelles de votre organisation." },
      { titre: "Équipes sensibilisées", texte: "Le facteur humain est la première ligne de défense : nous le formons." },
      { titre: "Conformité", texte: "Accompagnement vers les bonnes pratiques et exigences réglementaires." },
    ],
    etapes: [
      { titre: "Audit", texte: "Revue de code, d'infrastructure et de pratiques." },
      { titre: "Plan d'action", texte: "Priorisation des corrections selon l'impact et l'effort." },
      { titre: "Accompagnement", texte: "Mise en œuvre des protections et suivi dans la durée." },
    ],
    faq: [
      { question: "Est-ce réservé aux grandes entreprises ?", reponse: "Non — les PME et associations sont les premières cibles des attaques, et nos offres leur sont adaptées." },
    ],
  },
  {
    slug: "legaltech",
    categorie: "expertise",
    titre: "LegalTech",
    accroche: "La technologie au service des professionnels du droit.",
    description:
      "Forts du développement de Jurisis, notre IA juridique, nous accompagnons cabinets et directions juridiques dans leur digitalisation : automatisation documentaire, recherche augmentée, outils métiers.",
    benefices: [
      { titre: "Expertise éprouvée", texte: "Jurisis, notre solution propriétaire, répond déjà aux questions juridiques par IA." },
      { titre: "Gain de temps", texte: "Automatisez la recherche et la production documentaire répétitive." },
      { titre: "Confidentialité", texte: "Des architectures pensées pour la sensibilité des données juridiques." },
    ],
    etapes: [
      { titre: "Découverte", texte: "Analyse de vos flux documentaires et de recherche." },
      { titre: "Pilote", texte: "Déploiement de Jurisis ou d'un outil sur mesure sur un périmètre test." },
      { titre: "Généralisation", texte: "Extension à l'ensemble du cabinet avec formation." },
    ],
    faq: [
      { question: "Jurisis remplace-t-il le juriste ?", reponse: "Non — il accélère la recherche et la préparation ; la décision reste humaine." },
    ],
  },
  {
    slug: "hardware-connectivite",
    categorie: "expertise",
    titre: "Hardware & Connectivité",
    accroche: "Starlink et équipements : vos équipes connectées partout.",
    description:
      "Fourniture et installation de connexions Starlink et d'équipements réseau pour garantir une connectivité fiable, y compris dans les zones mal desservies. Étude, installation et support.",
    benefices: [
      { titre: "Partout", texte: "La connectivité satellite affranchit vos sites des limites de l'infrastructure locale." },
      { titre: "Clé en main", texte: "Étude, matériel, installation et configuration par nos équipes." },
      { titre: "Support", texte: "Assistance et maintenance pour une disponibilité maximale." },
    ],
    etapes: [
      { titre: "Étude", texte: "Analyse du site, des besoins en débit et des contraintes." },
      { titre: "Installation", texte: "Pose, configuration et tests de performance." },
      { titre: "Suivi", texte: "Supervision et intervention en cas d'incident." },
    ],
    faq: [
      { question: "Quel délai d'installation ?", reponse: "En moyenne 48h après réception du matériel." },
    ],
  },
  {
    slug: "documents-outils-service",
    categorie: "documents-outils",
    titre: "Guides, livres blancs & templates",
    accroche: "Des ressources concrètes pour avancer en autonomie.",
    description:
      "Bibliothèque de guides pratiques, livres blancs et modèles prêts à l'emploi : checklist de refonte de site, guide d'adoption de l'IA, modèles de cahier des charges. Sans oublier Indibot et ses 10 000 prompts.",
    benefices: [
      { titre: "Opérationnel", texte: "Des documents conçus pour être utilisés, pas seulement lus." },
      { titre: "À jour", texte: "Mis à jour au rythme des évolutions technologiques." },
      { titre: "Gratuit ou accessible", texte: "Une large part des ressources est en accès libre." },
    ],
    etapes: [
      { titre: "Parcourir", texte: "Trouvez la ressource adaptée à votre étape." },
      { titre: "Appliquer", texte: "Suivez les checklists et modèles pas à pas." },
      { titre: "Approfondir", texte: "Prolongez avec une formation ou un accompagnement." },
    ],
    faq: [],
  },
  {
    slug: "developpement-marches",
    categorie: "developpement-de-marches",
    titre: "Accompagnement e-commerce & go-to-market",
    accroche: "Vendre en ligne et conquérir de nouveaux marchés.",
    description:
      "De la création de votre boutique à la stratégie d'acquisition : nous accompagnons commerçants et marques dans leur développement digital — e-commerce, marketplaces, campagnes et mise en réseau avec nos partenaires.",
    benefices: [
      { titre: "De bout en bout", texte: "Boutique, paiement, logistique, acquisition : une vision complète." },
      { titre: "Réseau", texte: "Accédez à notre écosystème de partenaires technologiques et commerciaux." },
      { titre: "Pragmatique", texte: "Des plans d'action dimensionnés à vos moyens réels." },
    ],
    etapes: [
      { titre: "Stratégie", texte: "Positionnement, canaux et objectifs chiffrés." },
      { titre: "Lancement", texte: "Mise en place de la boutique et des premiers leviers d'acquisition." },
      { titre: "Croissance", texte: "Optimisation continue : conversion, panier moyen, fidélisation." },
    ],
    faq: [],
  },
  {
    slug: "data-analyse",
    categorie: "donnees-analyse",
    titre: "Audits, benchmarks & veille",
    accroche: "Décider sur des faits, pas des intuitions.",
    description:
      "Audit de code, audit UX, audit de sécurité, benchmarks concurrentiels et veille technologique : nous produisons les analyses qui éclairent vos décisions d'investissement numérique.",
    benefices: [
      { titre: "Indépendant", texte: "Des constats objectifs, sans intérêt à vous vendre une solution particulière." },
      { titre: "Actionnable", texte: "Chaque audit débouche sur un plan d'action priorisé." },
      { titre: "Comparé", texte: "Vos performances situées par rapport à votre marché." },
    ],
    etapes: [
      { titre: "Collecte", texte: "Accès au code, aux outils analytics et entretiens avec les équipes." },
      { titre: "Analyse", texte: "Revue systématique selon nos grilles d'évaluation." },
      { titre: "Restitution", texte: "Rapport clair, sans jargon, avec plan d'action priorisé." },
    ],
    faq: [],
  },
  {
    slug: "formation-ia",
    categorie: "formations",
    titre: "Academy & formations IA",
    accroche: "Maîtriser l'IA générative et la productivité numérique.",
    description:
      "Trois programmes : initiation à l'IA générative pour dirigeants, ateliers pratiques pour les équipes (prompting, automatisation), et réseaux d'apprentissage entre pairs. Sessions d'info gratuites chaque mois.",
    benefices: [
      { titre: "Pratique", texte: "Chaque session travaille sur vos cas réels, pas des exemples théoriques." },
      { titre: "Progressif", texte: "De la découverte à l'autonomie complète, à votre rythme." },
      { titre: "Entre pairs", texte: "Les réseaux d'apprentissage croisent les expériences de plusieurs organisations." },
    ],
    etapes: [
      { titre: "Session d'info", texte: "Découvrez gratuitement le programme et posez vos questions." },
      { titre: "Formation", texte: "Ateliers pratiques en présentiel ou à distance." },
      { titre: "Suivi", texte: "Accès au réseau d'apprentissage et aux ressources de l'Academy." },
    ],
    faq: [
      { question: "Faut-il des prérequis techniques ?", reponse: "Aucun pour l'initiation. Les ateliers avancés supposent une pratique régulière des outils bureautiques." },
    ],
  },
  {
    slug: "avantages-partenaires",
    categorie: "avantages",
    titre: "Smart Deals partenaires",
    accroche: "Des conditions préférentielles chez nos partenaires.",
    description:
      "Nos clients bénéficient de réductions et d'offres négociées chez nos partenaires technologiques : Brevo (emailing et CRM), Monica (assistant IA), AIOSEO (référencement), TL;DV (comptes-rendus de réunion) et d'autres.",
    benefices: [
      { titre: "Économies directes", texte: "Des remises négociées sur les outils que vous utilisez déjà." },
      { titre: "Sélection exigeante", texte: "Nous ne référençons que des outils éprouvés sur nos propres projets." },
      { titre: "Mise en route incluse", texte: "Accompagnement à la prise en main de chaque outil partenaire." },
    ],
    etapes: [
      { titre: "Choisir", texte: "Identifiez les outils utiles à votre activité." },
      { titre: "Activer", texte: "Nous activons l'offre préférentielle avec le partenaire." },
      { titre: "Adopter", texte: "Prise en main accompagnée par nos équipes." },
    ],
    faq: [],
  },
];
```

- [ ] **Step 5: Écrire `site/data/secteurs.ts`** — 6 entrées complètes

```ts
import type { Secteur } from "./types";

export const secteurs: Secteur[] = [
  {
    slug: "juridique",
    titre: "Juridique",
    enjeux:
      "Cabinets d'avocats et directions juridiques font face à une pression croissante sur les délais et les coûts, tandis que la recherche et la production documentaire restent chronophages. L'IA change la donne — à condition d'être déployée avec rigueur et confidentialité.",
    servicesPertinents: ["legaltech", "intelligence-artificielle", "cybersecurite-service"],
    etudeDeCas: {
      titre: "Jurisis : l'IA qui répond aux questions juridiques",
      texte: "Développée par Digital House, Jurisis permet aux professionnels du droit d'obtenir des réponses sourcées en quelques secondes, réduisant drastiquement le temps de recherche préliminaire.",
    },
    temoignage: {
      citation: "Jurisis nous fait gagner des heures de recherche chaque semaine, avec des réponses sourcées.",
      auteur: "Associé, cabinet d'avocats",
    },
  },
  {
    slug: "ecommerce-retail",
    titre: "E-commerce & Retail",
    enjeux:
      "Concurrence des marketplaces, coûts d'acquisition en hausse, attentes clients toujours plus élevées : le commerce a besoin d'expériences en ligne irréprochables et d'une exécution data-driven.",
    servicesPertinents: ["software-developpement", "developpement-marches", "digitalisation-ux"],
    etudeDeCas: {
      titre: "Refonte e-commerce d'une marque de cosmétiques",
      texte: "Refonte complète de la boutique en ligne : parcours d'achat simplifié, performances optimisées et hausse mesurable de la conversion dès le premier mois.",
    },
    temoignage: {
      citation: "Notre nouvelle boutique est plus rapide, plus belle, et surtout elle vend mieux.",
      auteur: "Fondatrice, marque de cosmétiques",
    },
  },
  {
    slug: "finance",
    titre: "Finance",
    enjeux:
      "Les services financiers conjuguent exigence réglementaire, sécurité des données et besoin d'innovation. La digitalisation doit y être à la fois ambitieuse et irréprochable.",
    servicesPertinents: ["cybersecurite-service", "intelligence-artificielle", "data-analyse"],
    etudeDeCas: {
      titre: "Automatisation du traitement documentaire",
      texte: "Mise en place d'un pipeline IA d'extraction et de classification de documents financiers, réduisant le traitement manuel de plusieurs heures par jour.",
    },
    temoignage: {
      citation: "Un partenaire qui comprend à la fois la technologie et nos contraintes de conformité.",
      auteur: "Directeur des opérations, services financiers",
    },
  },
  {
    slug: "associations-ong",
    titre: "Associations & ONG",
    enjeux:
      "Avec des moyens limités et des missions essentielles, les associations ont besoin d'outils numériques efficaces, économiques et simples à maintenir — du site web à la collecte de dons.",
    servicesPertinents: ["software-developpement", "formation-ia", "avantages-partenaires"],
    etudeDeCas: {
      titre: "Digitalisation d'une association",
      texte: "Site web moderne, outils collaboratifs et formation des bénévoles : une présence numérique professionnelle pour un budget maîtrisé.",
    },
    temoignage: {
      citation: "Nous avons enfin un site à la hauteur de notre mission, et l'équipe sait le faire vivre.",
      auteur: "Présidente d'association",
    },
  },
  {
    slug: "secteur-public",
    titre: "Secteur public",
    enjeux:
      "Les administrations et collectivités doivent offrir des services numériques accessibles à tous, tout en garantissant la souveraineté et la sécurité des données des citoyens.",
    servicesPertinents: ["digitalisation-ux", "cybersecurite-service", "formation-ia"],
    etudeDeCas: {
      titre: "Modernisation d'un service aux citoyens",
      texte: "Refonte UX d'un téléservice : démarches simplifiées, accessibilité renforcée et baisse significative des demandes d'assistance.",
    },
    temoignage: {
      citation: "Une approche pédagogue qui a embarqué nos agents du début à la fin.",
      auteur: "Responsable de service public",
    },
  },
  {
    slug: "education",
    titre: "Éducation",
    enjeux:
      "Écoles, centres de formation et universités doivent intégrer l'IA et les outils numériques dans leurs pratiques — pour leurs équipes comme pour leurs apprenants.",
    servicesPertinents: ["formation-ia", "software-developpement", "hardware-connectivite"],
    etudeDeCas: {
      titre: "Programme IA pour un centre de formation",
      texte: "Conception d'un parcours d'initiation à l'IA générative pour les formateurs, déployé ensuite auprès de l'ensemble des apprenants.",
    },
    temoignage: {
      citation: "Nos formateurs sont passés de la méfiance à la maîtrise en quelques semaines.",
      auteur: "Directeur de centre de formation",
    },
  },
];
```

- [ ] **Step 6: Écrire `site/data/solutions.ts`** — 2 entrées complètes

```ts
import type { Solution } from "./types";

export const solutions: Solution[] = [
  {
    slug: "jurisis",
    nom: "Jurisis",
    accroche: "L'IA qui répond aux questions juridiques.",
    description:
      "Jurisis est l'assistant IA des professionnels du droit : posez une question juridique, obtenez une réponse claire et sourcée en quelques secondes. Conçu avec des juristes, pour des juristes.",
    fonctionnalites: [
      { titre: "Réponses sourcées", texte: "Chaque réponse cite ses sources pour une vérification immédiate." },
      { titre: "Langage naturel", texte: "Posez vos questions comme à un confrère, sans syntaxe particulière." },
      { titre: "Confidentialité", texte: "Vos questions et documents restent confidentiels." },
      { titre: "Toujours à jour", texte: "Une base de connaissances maintenue en continu." },
    ],
    tarification: [
      { plan: "Découverte", prix: "Gratuit", inclus: ["10 questions/mois", "Réponses sourcées"] },
      { plan: "Professionnel", prix: "Sur devis", inclus: ["Questions illimitées", "Documents personnalisés", "Support prioritaire"] },
    ],
    cta: { label: "Demander une démo", href: "/contact" },
  },
  {
    slug: "indibot",
    nom: "Indibot",
    accroche: "10 000 prompts pour gagner en productivité.",
    description:
      "Indibot met à votre disposition une bibliothèque de 10 000 prompts professionnels, organisés par métier et par tâche, pour exploiter pleinement l'IA générative au quotidien — marketing, vente, RH, juridique, finance…",
    fonctionnalites: [
      { titre: "10 000 prompts", texte: "Une bibliothèque organisée par métier, tâche et niveau." },
      { titre: "Prêts à l'emploi", texte: "Copiez, adaptez, utilisez — aucune expertise technique requise." },
      { titre: "Multi-outils", texte: "Compatibles avec Claude, ChatGPT et les principaux assistants IA." },
      { titre: "Mises à jour", texte: "De nouveaux prompts ajoutés chaque mois." },
    ],
    tarification: [
      { plan: "Accès complet", prix: "Sur devis", inclus: ["10 000 prompts", "Mises à jour mensuelles", "Guide de prise en main"] },
    ],
    cta: { label: "Découvrir Indibot", href: "/contact" },
  },
];
```

- [ ] **Step 7: Écrire `site/data/realisations.ts`** — 9 entrées (reconstruites depuis l'ancien site, titres génériques)

```ts
import type { Realisation } from "./types";

export const realisations: Realisation[] = [
  { slug: "jurisis-legaltech", titre: "Jurisis — IA juridique", secteur: "juridique", resume: "Conception et développement d'une IA qui répond aux questions juridiques avec sources.", resultat: "Des heures de recherche économisées chaque semaine par les utilisateurs." },
  { slug: "indibot-productivite", titre: "Indibot — bibliothèque de prompts", secteur: "education", resume: "Création d'une bibliothèque de 10 000 prompts professionnels organisés par métier.", resultat: "Un raccourci d'adoption de l'IA pour des centaines d'utilisateurs." },
  { slug: "ecommerce-cosmetiques", titre: "Refonte e-commerce cosmétiques", secteur: "ecommerce-retail", resume: "Refonte complète d'une boutique en ligne : UX, performance, tunnel d'achat.", resultat: "Hausse de conversion mesurable dès le premier mois." },
  { slug: "site-association", titre: "Site web d'association", secteur: "associations-ong", resume: "Création d'un site moderne avec gestion autonome des contenus et formation des bénévoles.", resultat: "Une présence numérique professionnelle pour un budget maîtrisé." },
  { slug: "audit-code-fintech", titre: "Audit de code — fintech", secteur: "finance", resume: "Revue complète d'une base de code : sécurité, qualité, dette technique.", resultat: "Plan d'action priorisé adopté par l'équipe de développement." },
  { slug: "automatisation-ia-finance", titre: "Automatisation documentaire IA", secteur: "finance", resume: "Pipeline d'extraction et de classification de documents financiers par IA.", resultat: "Plusieurs heures de traitement manuel économisées chaque jour." },
  { slug: "formation-ia-equipe", titre: "Formation IA d'une équipe", secteur: "education", resume: "Programme d'ateliers pratiques d'IA générative pour une équipe de 20 personnes.", resultat: "Adoption quotidienne des outils IA par l'ensemble de l'équipe." },
  { slug: "starlink-site-isole", titre: "Connectivité Starlink — site isolé", secteur: "secteur-public", resume: "Étude et installation d'une connexion Starlink pour un site mal desservi.", resultat: "Connectivité fiable opérationnelle en 48 heures." },
  { slug: "refonte-ux-teleservice", titre: "Refonte UX d'un téléservice", secteur: "secteur-public", resume: "Simplification des démarches en ligne d'un service public.", resultat: "Baisse significative des demandes d'assistance." },
];
```

- [ ] **Step 8: Écrire le test d'intégrité `site/tests/data.test.ts`**

```ts
import { describe, expect, it } from "vitest";
import { domaines } from "../data/domaines";
import { categories, services } from "../data/services";
import { secteurs } from "../data/secteurs";
import { solutions } from "../data/solutions";
import { realisations } from "../data/realisations";

const serviceSlugs = new Set(services.map((s) => s.slug));
const categorieSlugs = new Set(categories.map((c) => c.slug));
const secteurSlugs = new Set(secteurs.map((s) => s.slug));

function uniques(slugs: string[]) {
  return new Set(slugs).size === slugs.length;
}

describe("intégrité des données", () => {
  it("slugs uniques dans chaque collection", () => {
    expect(uniques(domaines.map((d) => d.slug))).toBe(true);
    expect(uniques(services.map((s) => s.slug))).toBe(true);
    expect(uniques(secteurs.map((s) => s.slug))).toBe(true);
    expect(uniques(solutions.map((s) => s.slug))).toBe(true);
    expect(uniques(realisations.map((r) => r.slug))).toBe(true);
  });

  it("chaque service référence une catégorie existante", () => {
    for (const s of services) expect(categorieSlugs.has(s.categorie), s.slug).toBe(true);
  });

  it("les servicesLies des domaines existent", () => {
    for (const d of domaines) for (const ref of d.servicesLies) expect(serviceSlugs.has(ref), `${d.slug} -> ${ref}`).toBe(true);
  });

  it("les servicesPertinents des secteurs existent", () => {
    for (const s of secteurs) for (const ref of s.servicesPertinents) expect(serviceSlugs.has(ref), `${s.slug} -> ${ref}`).toBe(true);
  });

  it("le secteur de chaque réalisation existe", () => {
    for (const r of realisations) expect(secteurSlugs.has(r.secteur), r.slug).toBe(true);
  });

  it("comptes attendus", () => {
    expect(domaines).toHaveLength(5);
    expect(categories).toHaveLength(6);
    expect(secteurs).toHaveLength(6);
    expect(solutions).toHaveLength(2);
  });
});
```

- [ ] **Step 9: Lancer les tests**

Run: `npm test` (dans `site/`)
Expected: tous les tests PASS (6 passed)

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: types et données complètes (domaines, services, secteurs, solutions, réalisations)"
```

---

### Task 4: Header (nav avec dropdowns) et Footer

**Files:**
- Create: `site/components/layout/Header.tsx`
- Create: `site/components/layout/Footer.tsx`
- Modify: `site/app/layout.tsx` (insérer Header/Footer)
- Create: `site/app/not-found.tsx`

- [ ] **Step 1: Écrire `site/components/layout/Header.tsx`**

Composant client : barre fixe blanche, logo texte "Digital House", menus déroulants au survol (desktop) / accordéon (mobile burger). Items :

```tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/data/site";

const NAV = [
  {
    label: "Domaines d'action",
    href: "/domaines",
    children: [
      { label: "Accélérer la compétitivité par l'IA", href: "/domaines/ia-competitivite" },
      { label: "Réussir la transformation digitale", href: "/domaines/transformation-digitale" },
      { label: "Sécuriser les organisations", href: "/domaines/cybersecurite" },
      { label: "Former les talents de demain", href: "/domaines/formation-talents" },
      { label: "Connecter les territoires", href: "/domaines/connectivite" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Expertise", href: "/services/expertise" },
      { label: "Documents & Outils", href: "/services/documents-outils" },
      { label: "Développement de marchés", href: "/services/developpement-de-marches" },
      { label: "Données & Analyse", href: "/services/donnees-analyse" },
      { label: "Formations", href: "/services/formations" },
      { label: "Avantages", href: "/services/avantages" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Jurisis — IA juridique", href: "/solutions/jurisis" },
      { label: "Indibot — 10 000 prompts", href: "/solutions/indibot" },
    ],
  },
  {
    label: "Secteurs",
    href: "/secteurs",
    children: [
      { label: "Juridique", href: "/secteurs/juridique" },
      { label: "E-commerce & Retail", href: "/secteurs/ecommerce-retail" },
      { label: "Finance", href: "/secteurs/finance" },
      { label: "Associations & ONG", href: "/secteurs/associations-ong" },
      { label: "Secteur public", href: "/secteurs/secteur-public" },
      { label: "Éducation", href: "/secteurs/education" },
    ],
  },
  { label: "Actualités", href: "/actualites", children: [] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Digital House<span className="text-accent">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="text-sm font-medium text-muted hover:text-ink">
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-72 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-soft hover:text-ink">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href={SITE.rdvUrl} className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-[#d8341f]">
            Prendre rendez-vous
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-5 pb-6 lg:hidden">
          {NAV.map((item) => (
            <div key={item.href} className="border-b border-neutral-100 py-3">
              <div className="flex items-center justify-between">
                <Link href={item.href} className="font-medium" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children.length > 0 && (
                  <button onClick={() => setOpenSub(openSub === item.href ? null : item.href)} aria-label={`Ouvrir ${item.label}`} className="px-2 text-muted">
                    {openSub === item.href ? "−" : "+"}
                  </button>
                )}
              </div>
              {openSub === item.href &&
                item.children.map((c) => (
                  <Link key={c.href} href={c.href} className="mt-2 block pl-3 text-sm text-muted" onClick={() => setOpen(false)}>
                    {c.label}
                  </Link>
                ))}
            </div>
          ))}
          <Link href={SITE.rdvUrl} className="mt-4 block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white">
            Prendre rendez-vous
          </Link>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Écrire `site/components/layout/Footer.tsx`**

```tsx
import Link from "next/link";
import { SITE } from "@/data/site";

const COLS = [
  {
    titre: "Cabinet",
    liens: [
      { label: "À propos", href: "/a-propos" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Actualités", href: "/actualites" },
      { label: "Agenda", href: "/agenda" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    titre: "Services",
    liens: [
      { label: "Expertise", href: "/services/expertise" },
      { label: "Formations", href: "/services/formations" },
      { label: "Données & Analyse", href: "/services/donnees-analyse" },
      { label: "Avantages", href: "/services/avantages" },
    ],
  },
  {
    titre: "Solutions",
    liens: [
      { label: "Jurisis", href: "/solutions/jurisis" },
      { label: "Indibot", href: "/solutions/indibot" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-neutral-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="text-lg font-extrabold text-white">
            Digital House<span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-sm">Cabinet de transformation numérique. {SITE.slogan}</p>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={SITE.linkedin} className="hover:text-white">LinkedIn</a>
            <a href={SITE.facebook} className="hover:text-white">Facebook</a>
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.titre}>
            <p className="text-sm font-semibold text-white">{col.titre}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.liens.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs md:flex-row md:justify-between md:px-8">
          <span>© {new Date().getFullYear()} Digital House. Tous droits réservés.</span>
          <span>{SITE.email}</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Insérer Header/Footer dans `site/app/layout.tsx`**

Dans le `<body>` :

```tsx
<body className={`${inter.variable} font-sans`}>
  <Header />
  <main>{children}</main>
  <Footer />
</body>
```

avec les imports `import Header from "@/components/layout/Header";` et `import Footer from "@/components/layout/Footer";`.

- [ ] **Step 4: Écrire `site/app/not-found.tsx`**

```tsx
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-extrabold">Cette page n'existe pas.</h1>
      <p className="mt-3 max-w-md text-muted">Le lien est peut-être obsolète, ou la page a été déplacée.</p>
      <div className="mt-6">
        <Button href="/" variant="dark">Retour à l'accueil</Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `✓ Compiled successfully`

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: header avec dropdowns, footer et page 404"
```

---

### Task 5: Page d'accueil complète

**Files:**
- Modify: `site/app/page.tsx` (remplacer entièrement)
- Create: `site/components/home/Hero.tsx`
- Create: `site/components/home/CtaFinal.tsx`

- [ ] **Step 1: Écrire `site/components/home/Hero.tsx`**

```tsx
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-white px-5 py-20 text-center md:py-28">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Cabinet de transformation numérique
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Embrasser la technologie.
          <br />
          Embrasser l'<span className="text-accent">ambition</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">{SITE.sousSlogan}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/services" variant="dark">Découvrir nos services</Button>
          <Button href={SITE.rdvUrl} variant="outline">Prendre rendez-vous</Button>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-16 text-xs uppercase tracking-widest text-neutral-400">Ils nous font confiance</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-neutral-400">
          {SITE.partenaires.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 2: Écrire `site/components/home/CtaFinal.tsx`**

```tsx
import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

export default function CtaFinal() {
  return (
    <section className="bg-accent px-5 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-white md:text-4xl">
        Prêt à transformer votre organisation ?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-white/80">
        Premier échange gratuit et sans engagement : parlons de vos objectifs.
      </p>
      <div className="mt-6">
        <Button href={SITE.rdvUrl} variant="white">Prendre rendez-vous</Button>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Écrire `site/app/page.tsx`** — assemble les 8 sections validées en maquette

```tsx
import Link from "next/link";
import Hero from "@/components/home/Hero";
import CtaFinal from "@/components/home/CtaFinal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { domaines } from "@/data/domaines";
import { categories } from "@/data/services";
import { secteurs } from "@/data/secteurs";
import { solutions } from "@/data/solutions";
import { SITE } from "@/data/site";
import { getArticles } from "@/lib/articles";

export default function Home() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <Hero />

      {/* Domaines d'action */}
      <section className="bg-soft py-20">
        <Container>
          <SectionHeading kicker="Domaines d'action" title="Cinq engagements pour votre réussite" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {domaines.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.06}>
                <Link href={`/domaines/${d.slug}`} className="block h-full rounded-lg border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md">
                  <p className="text-sm font-bold">{d.titre}</p>
                  <p className="mt-2 text-xs text-muted">{d.accroche}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading kicker="Services" title="Une offre complète, comme un grand cabinet" subtitle="Six familles de services couvrant tout le cycle de votre transformation numérique." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link href={`/services/${c.slug}`} className="block h-full rounded-lg border border-neutral-200 p-6 transition-shadow hover:shadow-md">
                  <p className="font-bold">{c.titre}</p>
                  <p className="mt-2 text-sm text-muted">{c.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions — bande sombre */}
      <section className="bg-ink py-20">
        <Container>
          <SectionHeading kicker="Solutions" title="Nos produits phares" dark />
          <div className="grid gap-4 md:grid-cols-2">
            {solutions.map((s) => (
              <Reveal key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="block rounded-lg bg-neutral-900 p-7 transition-colors hover:bg-neutral-800">
                  <p className="text-xl font-extrabold text-white">{s.nom}</p>
                  <p className="mt-2 text-sm text-neutral-400">{s.accroche}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Secteurs + chiffres */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading kicker="Secteurs" title="Nous parlons le langage de votre métier" />
          <div className="flex flex-wrap gap-3">
            {secteurs.map((s) => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`} className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium hover:border-ink">
                {s.titre}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {SITE.stats.map((st) => (
              <div key={st.label}>
                <p className="text-3xl font-extrabold text-accent">{st.valeur}</p>
                <p className="mt-1 text-sm text-muted">{st.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Actualités */}
      <section className="bg-soft py-20">
        <Container>
          <SectionHeading kicker="Actualités & Agenda" title="Nos dernières publications" />
          <div className="grid gap-4 md:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className="block overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow hover:shadow-md">
                <div className="h-32 bg-gradient-to-br from-neutral-100 to-neutral-200" />
                <div className="p-5">
                  <p className="text-xs text-muted">{a.date}</p>
                  <p className="mt-1 font-bold">{a.titre}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaFinal />
    </>
  );
}
```

(`getArticles` est créé en Task 6 — si Task 6 n'est pas encore faite au moment d'exécuter cette tâche, exécuter d'abord Task 6, ou stub temporairement. **Ordre recommandé : exécuter Task 6 avant Task 5.**)

- [ ] **Step 4: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `✓ Compiled successfully`, route `/` listée

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: page d'accueil complète (8 sections)"
```

---

### Task 6: Actualités MDX (lib + 4 articles + pages liste et détail + agenda)

**Files:**
- Create: `site/lib/articles.ts`
- Create: `site/content/actualites/lancement-nouveau-site.mdx`
- Create: `site/content/actualites/ia-generative-pme.mdx`
- Create: `site/content/actualites/cybersecurite-5-gestes.mdx`
- Create: `site/content/actualites/jurisis-nouveautes.mdx`
- Create: `site/app/actualites/page.tsx`
- Create: `site/app/actualites/[slug]/page.tsx`
- Create: `site/app/agenda/page.tsx`

- [ ] **Step 1: Écrire `site/lib/articles.ts`**

```ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface ArticleMeta {
  slug: string;
  titre: string;
  date: string;
  resume: string;
}

const DIR = path.join(process.cwd(), "content", "actualites");

export function getArticles(): ArticleMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
      return {
        slug: f.replace(/\.mdx$/, ""),
        titre: data.titre as string,
        date: data.date as string,
        resume: data.resume as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): { meta: ArticleMeta; contenu: string } | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    meta: { slug, titre: data.titre, date: data.date, resume: data.resume },
    contenu: content,
  };
}
```

- [ ] **Step 2: Écrire les 4 articles MDX**

`lancement-nouveau-site.mdx` :

```mdx
---
titre: "Digital House fait peau neuve : découvrez notre nouveau site"
date: "2026-06-13"
resume: "Nouvelle identité, nouvelle ambition : notre site reflète désormais l'étendue complète de notre offre de cabinet."
---

Digital House change de dimension. Notre nouveau site reflète notre ambition : être le cabinet de transformation numérique de référence pour les entreprises et organisations.

## Une offre structurée comme un grand cabinet

Vous y retrouverez nos **cinq domaines d'action**, nos **six familles de services** — de l'expertise IA aux formations en passant par les audits et les avantages partenaires — ainsi que nos solutions propriétaires **Jurisis** et **Indibot**.

## Et maintenant ?

Explorez nos services, parcourez nos réalisations, et surtout : [prenez rendez-vous](/contact) pour un premier échange gratuit.
```

`ia-generative-pme.mdx` :

```mdx
---
titre: "IA générative en PME : par où commencer ?"
date: "2026-06-01"
resume: "Trois étapes concrètes pour adopter l'IA générative sans se perdre dans la hype."
---

L'IA générative est partout dans les discours, mais comment l'adopter concrètement quand on dirige une PME ?

## 1. Identifier les tâches répétitives

Commencez par lister les tâches textuelles répétitives : réponses aux e-mails types, rédaction de descriptions produits, synthèses de réunions. Ce sont les gains les plus rapides.

## 2. Outiller une équipe pilote

Inutile de déployer partout d'un coup. Une équipe pilote, des outils éprouvés, et des prompts de qualité — c'est exactement ce que propose notre bibliothèque [Indibot](/solutions/indibot).

## 3. Former, puis généraliser

L'adoption durable passe par la formation. Nos [ateliers pratiques](/services/formations) transforment les curieux en utilisateurs quotidiens.
```

`cybersecurite-5-gestes.mdx` :

```mdx
---
titre: "Cybersécurité : 5 gestes qui protègent déjà 80 % des organisations"
date: "2026-05-15"
resume: "Avant d'investir dans des outils complexes, ces cinq pratiques élémentaires éliminent l'essentiel du risque."
---

La majorité des incidents de sécurité exploitent des négligences élémentaires. Voici les cinq gestes à mettre en place dès aujourd'hui.

1. **Authentification multifacteur** sur tous les comptes critiques.
2. **Mises à jour automatiques** des systèmes et logiciels.
3. **Sauvegardes testées** — une sauvegarde jamais restaurée n'est pas une sauvegarde.
4. **Gestionnaire de mots de passe** pour toute l'équipe.
5. **Sensibilisation au phishing** : la première ligne de défense est humaine.

Pour aller plus loin, notre [audit de sécurité](/services/expertise) identifie vos vulnérabilités réelles et les priorise.
```

`jurisis-nouveautes.mdx` :

```mdx
---
titre: "Jurisis s'enrichit : réponses sourcées et base élargie"
date: "2026-04-20"
resume: "Notre IA juridique franchit un cap avec des citations systématiques et une couverture documentaire étendue."
---

Jurisis, notre assistant IA pour les professionnels du droit, continue de progresser.

## Des réponses systématiquement sourcées

Chaque réponse cite désormais ses sources, permettant une vérification immédiate — une exigence non négociable pour un usage professionnel.

## Une base documentaire élargie

La couverture s'étend à de nouveaux domaines du droit, avec une mise à jour continue de la base de connaissances.

[Demandez une démo](/solutions/jurisis) pour découvrir Jurisis sur vos propres cas d'usage.
```

- [ ] **Step 3: Écrire `site/app/actualites/page.tsx`**

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getArticles } from "@/lib/articles";

export const metadata = { title: "Actualités" };

export default function ActualitesPage() {
  const articles = getArticles();
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Actualités" title="Analyses, conseils et nouveautés" subtitle="Le regard de nos experts sur la transformation numérique." />
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/actualites/${a.slug}`} className="block overflow-hidden rounded-lg border border-neutral-200 transition-shadow hover:shadow-md">
              <div className="h-36 bg-gradient-to-br from-neutral-100 to-neutral-200" />
              <div className="p-5">
                <p className="text-xs text-muted">{a.date}</p>
                <p className="mt-1 font-bold">{a.titre}</p>
                <p className="mt-2 text-sm text-muted">{a.resume}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Écrire `site/app/actualites/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/Container";
import { getArticle, getArticles } from "@/lib/articles";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.meta.titre, description: article.meta.resume };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const autres = getArticles().filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Actualités · {article.meta.date}</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">{article.meta.titre}</h1>
        <div className="prose-dh mt-10">
          <MDXRemote source={article.contenu} />
        </div>
        {autres.length > 0 && (
          <div className="mt-16 border-t border-neutral-200 pt-8">
            <p className="text-sm font-semibold">À lire ensuite</p>
            <ul className="mt-3 space-y-2">
              {autres.map((a) => (
                <li key={a.slug}>
                  <Link href={`/actualites/${a.slug}`} className="text-sm text-accent hover:underline">{a.titre}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </article>
  );
}
```

Ajouter dans `site/app/globals.css` la classe typographique article :

```css
.prose-dh h2 { font-size: 1.5rem; font-weight: 800; margin: 2rem 0 0.75rem; }
.prose-dh p { margin: 0.75rem 0; line-height: 1.75; color: #333; }
.prose-dh ul, .prose-dh ol { margin: 0.75rem 0 0.75rem 1.25rem; line-height: 1.75; color: #333; }
.prose-dh ol { list-style: decimal; }
.prose-dh ul { list-style: disc; }
.prose-dh a { color: var(--color-accent); text-decoration: underline; }
.prose-dh strong { color: var(--color-ink); }
```

- [ ] **Step 5: Écrire `site/app/agenda/page.tsx`** (événements statiques pour le lancement)

```tsx
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = { title: "Agenda" };

const EVENEMENTS = [
  { date: "Chaque 1er mardi du mois", titre: "Session d'info — Découvrir l'IA générative", lieu: "En ligne", texte: "Une heure pour comprendre ce que l'IA peut (vraiment) apporter à votre organisation. Gratuit." },
  { date: "Chaque 3e jeudi du mois", titre: "Atelier pratique — Prompting professionnel", lieu: "En ligne", texte: "Atelier hands-on : repartez avec des prompts opérationnels pour votre métier." },
  { date: "Sur demande", titre: "Réseau d'apprentissage — Dirigeants & IA", lieu: "Présentiel", texte: "Échanges entre pairs sur les déploiements IA réels, animés par nos experts." },
];

export default function AgendaPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Agenda" title="Sessions d'info, ateliers et rencontres" subtitle="Inscrivez-vous via la prise de rendez-vous — nous vous confirmerons les prochaines dates." />
        <div className="space-y-4">
          {EVENEMENTS.map((e) => (
            <div key={e.titre} className="rounded-lg border border-neutral-200 p-6 md:flex md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{e.date} · {e.lieu}</p>
                <p className="mt-1 text-lg font-bold">{e.titre}</p>
                <p className="mt-1 text-sm text-muted">{e.texte}</p>
              </div>
              <div className="mt-4 md:mt-0 md:pl-6">
                <Button href={SITE.rdvUrl} variant="outline">S'inscrire</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 6: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `✓ Compiled successfully` ; routes `/actualites`, `/actualites/[slug]` (4 pages statiques), `/agenda`

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: actualités MDX (lib, 4 articles, liste, détail) et agenda"
```

---

### Task 7: Gabarit Domaines d'action (`/domaines`, `/domaines/[slug]`)

**Files:**
- Create: `site/app/domaines/page.tsx`
- Create: `site/app/domaines/[slug]/page.tsx`

- [ ] **Step 1: Écrire `site/app/domaines/page.tsx`** (index)

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { domaines } from "@/data/domaines";

export const metadata = { title: "Domaines d'action" };

export default function DomainesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Domaines d'action" title="Cinq engagements pour votre réussite" subtitle="Notre vision de la transformation numérique, organisée en cinq domaines d'action concrets." />
        <div className="grid gap-4 md:grid-cols-2">
          {domaines.map((d) => (
            <Link key={d.slug} href={`/domaines/${d.slug}`} className="block rounded-lg border border-neutral-200 p-7 transition-shadow hover:shadow-md">
              <p className="text-lg font-bold">{d.titre}</p>
              <p className="mt-2 text-sm text-muted">{d.accroche}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Écrire `site/app/domaines/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { domaines } from "@/data/domaines";
import { services } from "@/data/services";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return domaines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = domaines.find((x) => x.slug === slug);
  return d ? { title: d.titre, description: d.accroche } : {};
}

export default async function DomainePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domaine = domaines.find((d) => d.slug === slug);
  if (!domaine) notFound();

  const lies = services.filter((s) => domaine.servicesLies.includes(s.slug));

  return (
    <>
      <section className="bg-soft py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Domaine d'action</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">{domaine.titre}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{domaine.accroche}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-extrabold">Notre vision</h2>
          <p className="mt-4 leading-relaxed text-muted">{domaine.vision}</p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {domaine.chiffres.map((c) => (
              <div key={c.label}>
                <p className="text-3xl font-extrabold text-accent">{c.valeur}</p>
                <p className="mt-1 text-sm text-muted">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Services liés</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {lies.map((s) => (
              <Link key={s.slug} href={`/services/${s.categorie}/${s.slug}`} className="block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
                <p className="font-bold">{s.titre}</p>
                <p className="mt-2 text-sm text-muted">{s.accroche}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button href={SITE.rdvUrl}>Prendre rendez-vous</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: routes `/domaines` + 5 pages `/domaines/[slug]` générées statiquement

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: gabarit domaines d'action (index + 5 pages)"
```

---

### Task 8: Gabarit Services (`/services`, `/services/[categorie]`, `/services/[categorie]/[slug]`)

**Files:**
- Create: `site/app/services/page.tsx`
- Create: `site/app/services/[categorie]/page.tsx`
- Create: `site/app/services/[categorie]/[slug]/page.tsx`

- [ ] **Step 1: Écrire `site/app/services/page.tsx`** (index des 6 catégories)

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories, services } from "@/data/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Services" title="Une offre complète, comme un grand cabinet" subtitle="Six familles de services couvrant tout le cycle de votre transformation numérique." />
        <div className="space-y-10">
          {categories.map((c) => (
            <div key={c.slug}>
              <Link href={`/services/${c.slug}`} className="text-xl font-extrabold hover:text-accent">{c.titre} →</Link>
              <p className="mt-1 max-w-2xl text-sm text-muted">{c.description}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {services.filter((s) => s.categorie === c.slug).map((s) => (
                  <Link key={s.slug} href={`/services/${c.slug}/${s.slug}`} className="block rounded-lg border border-neutral-200 p-5 transition-shadow hover:shadow-md">
                    <p className="text-sm font-bold">{s.titre}</p>
                    <p className="mt-1 text-xs text-muted">{s.accroche}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Écrire `site/app/services/[categorie]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { categories, services } from "@/data/services";

export function generateStaticParams() {
  return categories.map((c) => ({ categorie: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const c = categories.find((x) => x.slug === categorie);
  return c ? { title: c.titre, description: c.description } : {};
}

export default async function CategoriePage({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const cat = categories.find((c) => c.slug === categorie);
  if (!cat) notFound();

  const liste = services.filter((s) => s.categorie === categorie);

  return (
    <section className="py-20">
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Services</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{cat.titre}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{cat.description}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {liste.map((s) => (
            <Link key={s.slug} href={`/services/${categorie}/${s.slug}`} className="block rounded-lg border border-neutral-200 p-7 transition-shadow hover:shadow-md">
              <p className="text-lg font-bold">{s.titre}</p>
              <p className="mt-2 text-sm text-muted">{s.accroche}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Écrire `site/app/services/[categorie]/[slug]/page.tsx`** (gabarit service complet)

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { categories, services } from "@/data/services";
import { realisations } from "@/data/realisations";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ categorie: s.categorie, slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.titre, description: s.accroche } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { categorie, slug } = await params;
  const service = services.find((s) => s.slug === slug && s.categorie === categorie);
  if (!service) notFound();
  const cat = categories.find((c) => c.slug === categorie)!;

  return (
    <>
      <section className="bg-soft py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            <Link href={`/services/${cat.slug}`} className="hover:underline">{cat.titre}</Link>
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">{service.titre}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{service.accroche}</p>
          <div className="mt-8"><Button href={SITE.rdvUrl}>Prendre rendez-vous</Button></div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="leading-relaxed text-muted">{service.description}</p>
        </Container>
      </section>

      <section className="bg-soft py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Ce que vous y gagnez</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.benefices.map((b) => (
              <div key={b.titre} className="rounded-lg border border-neutral-200 bg-white p-6">
                <p className="font-bold">{b.titre}</p>
                <p className="mt-2 text-sm text-muted">{b.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Notre méthode</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.etapes.map((e, i) => (
              <div key={e.titre} className="rounded-lg border border-neutral-200 p-6">
                <p className="text-2xl font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-bold">{e.titre}</p>
                <p className="mt-1 text-sm text-muted">{e.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {service.faq.length > 0 && (
        <section className="bg-soft py-16">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-extrabold">Questions fréquentes</h2>
            <div className="mt-6 space-y-5">
              {service.faq.map((f) => (
                <div key={f.question}>
                  <p className="font-bold">{f.question}</p>
                  <p className="mt-1 text-sm text-muted">{f.reponse}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-ink py-14 text-center">
        <p className="text-2xl font-extrabold text-white">Parlons de votre projet.</p>
        <div className="mt-5"><Button href={SITE.rdvUrl}>Prendre rendez-vous</Button></div>
      </section>
    </>
  );
}
```

(L'import `realisations` n'est utilisé que si on affiche les réalisations liées — supprimer l'import s'il est inutilisé pour garder le build sans warning.)

- [ ] **Step 4: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `/services`, 6 pages catégorie, 11 pages service générées

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: gabarit services (index, 6 catégories, 11 services)"
```

---

### Task 9: Gabarits Secteurs et Solutions

**Files:**
- Create: `site/app/secteurs/page.tsx`
- Create: `site/app/secteurs/[slug]/page.tsx`
- Create: `site/app/solutions/page.tsx`
- Create: `site/app/solutions/[slug]/page.tsx`

- [ ] **Step 1: Écrire `site/app/secteurs/page.tsx`**

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { secteurs } from "@/data/secteurs";

export const metadata = { title: "Secteurs" };

export default function SecteursPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Secteurs" title="Nous parlons le langage de votre métier" subtitle="Six secteurs où nous cumulons réalisations et expertise." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {secteurs.map((s) => (
            <Link key={s.slug} href={`/secteurs/${s.slug}`} className="block rounded-lg border border-neutral-200 p-7 transition-shadow hover:shadow-md">
              <p className="text-lg font-bold">{s.titre}</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{s.enjeux}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Écrire `site/app/secteurs/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { secteurs } from "@/data/secteurs";
import { services } from "@/data/services";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = secteurs.find((x) => x.slug === slug);
  return s ? { title: `Secteur ${s.titre}` } : {};
}

export default async function SecteurPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const secteur = secteurs.find((s) => s.slug === slug);
  if (!secteur) notFound();

  const pertinents = services.filter((s) => secteur.servicesPertinents.includes(s.slug));

  return (
    <>
      <section className="bg-soft py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Secteur</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{secteur.titre}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{secteur.enjeux}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Nos services pour ce secteur</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pertinents.map((s) => (
              <Link key={s.slug} href={`/services/${s.categorie}/${s.slug}`} className="block rounded-lg border border-neutral-200 p-6 transition-shadow hover:shadow-md">
                <p className="font-bold">{s.titre}</p>
                <p className="mt-2 text-sm text-muted">{s.accroche}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-16">
        <Container className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Étude de cas</p>
          <h2 className="mt-2 text-2xl font-extrabold">{secteur.etudeDeCas.titre}</h2>
          <p className="mt-3 leading-relaxed text-muted">{secteur.etudeDeCas.texte}</p>
          <blockquote className="mt-8 border-l-4 border-accent pl-5">
            <p className="text-lg font-medium italic">« {secteur.temoignage.citation} »</p>
            <p className="mt-2 text-sm text-muted">— {secteur.temoignage.auteur}</p>
          </blockquote>
          <div className="mt-8"><Button href={SITE.rdvUrl}>Discuter de votre projet</Button></div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Écrire `site/app/solutions/page.tsx`**

```tsx
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";

export const metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <section className="bg-ink py-20">
      <Container>
        <SectionHeading kicker="Solutions" title="Nos produits phares" subtitle="Deux solutions propriétaires nées de nos projets clients." dark />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="block rounded-lg bg-neutral-900 p-8 transition-colors hover:bg-neutral-800">
              <p className="text-2xl font-extrabold text-white">{s.nom}</p>
              <p className="mt-2 text-neutral-400">{s.accroche}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Écrire `site/app/solutions/[slug]/page.tsx`** (gabarit produit style Sanity)

```tsx
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return s ? { title: s.nom, description: s.accroche } : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <section className="bg-ink py-24 text-center">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Solution</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl">{solution.nom}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">{solution.accroche}</p>
          <div className="mt-8"><Button href={solution.cta.href}>{solution.cta.label}</Button></div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">{solution.description}</p>
        </Container>
      </section>

      <section className="bg-soft py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Fonctionnalités</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {solution.fonctionnalites.map((f) => (
              <div key={f.titre} className="rounded-lg border border-neutral-200 bg-white p-6">
                <p className="font-bold">{f.titre}</p>
                <p className="mt-2 text-sm text-muted">{f.texte}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-center text-2xl font-extrabold">Tarification</h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            {solution.tarification.map((t) => (
              <div key={t.plan} className="rounded-lg border border-neutral-200 p-7 text-center">
                <p className="font-bold">{t.plan}</p>
                <p className="mt-2 text-3xl font-extrabold text-accent">{t.prix}</p>
                <ul className="mt-4 space-y-1 text-sm text-muted">
                  {t.inclus.map((i) => (<li key={i}>✓ {i}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={solution.cta.href} variant="dark">{solution.cta.label}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `/secteurs` + 6 pages, `/solutions` + 2 pages

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: gabarits secteurs (6 pages) et solutions (Jurisis, Indibot)"
```

---

### Task 10: Pages Réalisations et À propos

**Files:**
- Create: `site/app/realisations/page.tsx`
- Create: `site/components/RealisationsGrid.tsx`
- Create: `site/app/a-propos/page.tsx`

- [ ] **Step 1: Écrire `site/components/RealisationsGrid.tsx`** (client, filtre par secteur)

```tsx
"use client";
import { useState } from "react";
import { realisations } from "@/data/realisations";
import { secteurs } from "@/data/secteurs";

export default function RealisationsGrid() {
  const [filtre, setFiltre] = useState<string | null>(null);
  const liste = filtre ? realisations.filter((r) => r.secteur === filtre) : realisations;
  const secteurTitre = (slug: string) => secteurs.find((s) => s.slug === slug)?.titre ?? slug;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setFiltre(null)} className={`rounded-full border px-4 py-1.5 text-sm ${filtre === null ? "border-ink bg-ink text-white" : "border-neutral-200 hover:border-ink"}`}>
          Tous
        </button>
        {secteurs.map((s) => (
          <button key={s.slug} onClick={() => setFiltre(s.slug)} className={`rounded-full border px-4 py-1.5 text-sm ${filtre === s.slug ? "border-ink bg-ink text-white" : "border-neutral-200 hover:border-ink"}`}>
            {s.titre}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {liste.map((r) => (
          <div key={r.slug} className="rounded-lg border border-neutral-200 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">{secteurTitre(r.secteur)}</p>
            <p className="mt-2 font-bold">{r.titre}</p>
            <p className="mt-2 text-sm text-muted">{r.resume}</p>
            <p className="mt-3 text-sm font-medium text-ink">→ {r.resultat}</p>
          </div>
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Écrire `site/app/realisations/page.tsx`**

```tsx
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RealisationsGrid from "@/components/RealisationsGrid";

export const metadata = { title: "Réalisations" };

export default function RealisationsPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading kicker="Réalisations" title="Des projets, des résultats" subtitle="Un aperçu de nos accompagnements, du produit IA à l'installation Starlink." />
        <RealisationsGrid />
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Écrire `site/app/a-propos/page.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata = { title: "À propos" };

const VALEURS = [
  { titre: "Exigence", texte: "Nous visons la qualité des plus grands cabinets, avec l'agilité d'une équipe resserrée." },
  { titre: "Pédagogie", texte: "Pas de jargon : nous transférons la compétence autant que nous livrons des solutions." },
  { titre: "Résultats", texte: "Chaque mission se mesure à son impact réel sur votre organisation." },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-soft py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">À propos</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Le cabinet de transformation numérique des organisations ambitieuses.
          </h1>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            Digital House est né d'une conviction : la transformation numérique ne devrait pas être réservée aux grands groupes. Entreprises, indépendants, associations et institutions méritent le même niveau d'exigence — dans le conseil, la réalisation et la formation.
          </p>
          <p>
            De l'intelligence artificielle à la connectivité Starlink, de l'audit de code à la formation des équipes, nous couvrons l'ensemble du cycle numérique. Nos solutions propriétaires, Jurisis et Indibot, sont nées de cette pratique de terrain.
          </p>
          <p>
            Notre ambition : {SITE.slogan.toLowerCase()} Devenir le cabinet de référence qui fait franchir à chaque organisation son prochain palier technologique.
          </p>
        </Container>
      </section>
      <section className="bg-soft py-16">
        <Container>
          <h2 className="text-2xl font-extrabold">Nos valeurs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {VALEURS.map((v) => (
              <div key={v.titre} className="rounded-lg border border-neutral-200 bg-white p-6">
                <p className="font-bold">{v.titre}</p>
                <p className="mt-2 text-sm text-muted">{v.texte}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Button href="/contact">Travailler avec nous</Button></div>
        </Container>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Vérifier le build**

Run: `npm run build` (dans `site/`)
Expected: `/realisations` et `/a-propos` générées

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: pages réalisations (grille filtrable) et à propos"
```

---

### Task 11: Page Contact + route API

**Files:**
- Create: `site/app/contact/page.tsx`
- Create: `site/components/ContactForm.tsx`
- Create: `site/app/api/contact/route.ts`

- [ ] **Step 1: Écrire `site/app/api/contact/route.ts`**

```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { nom?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erreur: "Requête invalide." }, { status: 400 });
  }

  const nom = (body.nom ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!nom || !email || !message) {
    return NextResponse.json({ ok: false, erreur: "Tous les champs sont requis." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, erreur: "Adresse e-mail invalide." }, { status: 400 });
  }

  // V1 : journalisation serveur. Brancher Brevo (API transactionnelle) ici plus tard.
  console.log("[contact]", { nom, email, message: message.slice(0, 2000) });

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Écrire `site/components/ContactForm.tsx`**

```tsx
"use client";
import { useState } from "react";

type Statut = "idle" | "envoi" | "ok" | "erreur";

export default function ContactForm() {
  const [statut, setStatut] = useState<Statut>("idle");
  const [erreur, setErreur] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.nom?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatut("erreur");
      setErreur("Merci de remplir tous les champs.");
      return;
    }
    setStatut("envoi");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatut("ok");
        form.reset();
      } else {
        setStatut("erreur");
        setErreur(json.erreur ?? "Une erreur est survenue.");
      }
    } catch {
      setStatut("erreur");
      setErreur("Impossible d'envoyer le message. Réessayez ou écrivez-nous directement.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom" className="text-sm font-semibold">Nom</label>
        <input id="nom" name="nom" required className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-3 text-sm focus:border-ink focus:outline-none" placeholder="Votre nom" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-3 text-sm focus:border-ink focus:outline-none" placeholder="vous@entreprise.com" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">Message</label>
        <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-md border border-neutral-300 px-4 py-3 text-sm focus:border-ink focus:outline-none" placeholder="Parlez-nous de votre projet…" />
      </div>
      <button type="submit" disabled={statut === "envoi"} className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-[#d8341f] disabled:opacity-60">
        {statut === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
      {statut === "ok" && <p className="text-sm font-medium text-green-700">Message envoyé — nous revenons vers vous sous 24h ouvrées.</p>}
      {statut === "erreur" && <p className="text-sm font-medium text-accent">{erreur}</p>}
    </form>
  );
}
```

- [ ] **Step 3: Écrire `site/app/contact/page.tsx`**

```tsx
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Contact</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Parlons de votre projet.</h1>
            <p className="mt-4 text-muted">
              Premier échange gratuit et sans engagement. Le plus rapide : réservez directement un créneau.
            </p>
            <div className="mt-6"><Button href={SITE.rdvUrl}>Prendre rendez-vous</Button></div>
            <p className="mt-8 text-sm text-muted">Ou écrivez-nous : <a href={`mailto:${SITE.email}`} className="font-medium text-accent hover:underline">{SITE.email}</a></p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Tester manuellement le formulaire**

Run: `npm run dev` (dans `site/`), ouvrir `http://localhost:3000/contact`, soumettre vide (→ message d'erreur), soumettre rempli (→ message de confirmation, log serveur visible).

- [ ] **Step 5: Vérifier le build et commit**

Run: `npm run build` — Expected: `✓ Compiled successfully`

```bash
git add -A
git commit -m "feat: page contact avec formulaire et route API"
```

---

### Task 12: SEO (sitemap, robots) et vérification finale

**Files:**
- Create: `site/app/sitemap.ts`
- Create: `site/app/robots.ts`

- [ ] **Step 1: Écrire `site/app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { domaines } from "@/data/domaines";
import { categories, services } from "@/data/services";
import { secteurs } from "@/data/secteurs";
import { solutions } from "@/data/solutions";
import { getArticles } from "@/lib/articles";

const BASE = "https://dhcompany.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const statiques = ["", "/domaines", "/services", "/solutions", "/secteurs", "/actualites", "/agenda", "/realisations", "/a-propos", "/contact"];
  return [
    ...statiques.map((p) => ({ url: `${BASE}${p}` })),
    ...domaines.map((d) => ({ url: `${BASE}/domaines/${d.slug}` })),
    ...categories.map((c) => ({ url: `${BASE}/services/${c.slug}` })),
    ...services.map((s) => ({ url: `${BASE}/services/${s.categorie}/${s.slug}` })),
    ...secteurs.map((s) => ({ url: `${BASE}/secteurs/${s.slug}` })),
    ...solutions.map((s) => ({ url: `${BASE}/solutions/${s.slug}` })),
    ...getArticles().map((a) => ({ url: `${BASE}/actualites/${a.slug}` })),
  ];
}
```

- [ ] **Step 2: Écrire `site/app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://dhcompany.pro/sitemap.xml",
  };
}
```

- [ ] **Step 3: Build complet + tests**

Run (dans `site/`): `npm test` puis `npm run build`
Expected: tests PASS ; build OK ; vérifier que **toutes** les routes sont listées : `/`, `/domaines` (+5), `/services` (+6 catégories +11 services), `/secteurs` (+6), `/solutions` (+2), `/actualites` (+4), `/agenda`, `/realisations`, `/a-propos`, `/contact`, `/sitemap.xml`, `/robots.txt`.

- [ ] **Step 4: Vérification de navigation et responsive**

Run: `npm run dev`, puis vérifier dans le navigateur (ou via preview) :
- Tous les liens du header (y compris dropdowns) et du footer aboutissent (aucun 404).
- Un slug inexistant (ex. `/domaines/xyz`) affiche la page 404 personnalisée.
- Affichage correct à 375px (mobile), 768px et desktop : menu burger fonctionnel, grilles qui passent en colonne.

- [ ] **Step 5: Commit final**

```bash
git add -A
git commit -m "feat: sitemap, robots et vérification finale"
```

---

## Self-Review (effectuée)

- **Couverture spec :** arborescence complète ✓ (domaines T7, services T8, secteurs/solutions T9, actualités/agenda T6, réalisations/à-propos T10, contact T11, accueil T5, SEO T12). Hero, 8 sections d'accueil, 404, formulaire validé client+serveur, MDX → Sanity-ready ✓.
- **Ordre d'exécution :** T1 → T2 → T3 → T4 → **T6** → T5 → T7 → T8 → T9 → T10 → T11 → T12 (T5 dépend de `lib/articles.ts` créé en T6).
- **Cohérence des types :** slugs croisés vérifiés par le test d'intégrité (T3) ; routes du Header (T4) alignées sur les slugs des données (T3).
- **Placeholders :** le lien `SITE.rdvUrl` est un placeholder assumé à remplacer par le vrai lien Brevo du client — signalé dans le code et à confirmer avec l'utilisateur au moment du déploiement.
