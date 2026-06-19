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
  pourQui?: string[]; // profils d'organisations concernées
  livrables?: string[]; // ce que le client reçoit concrètement
}

import type { Scene } from "@/components/visuals/SceneIllustration";

export interface Secteur {
  slug: string;
  titre: string;
  enjeux: string;
  casUsage: string[];
  technologies: string[];
  scene: Scene;
  image?: string;
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
  image?: string;
  stack?: string[];
}
