# Spécification — Nouveau site Digital House

**Date :** 2026-06-13
**Statut :** validé en brainstorming

## Contexte et vision

Digital House (ancien site : dhcompany.pro) est une agence de transformation numérique. Le nouveau site doit la repositionner comme un **cabinet de référence complet**, à l'image d'**Agoria** (agoria.be) — prestige, largeur d'offre, structure institutionnelle — avec l'**esthétique exacte de Sanity.io** : minimaliste, blanc/noir, accent rouge-corail, animations sobres.

Ce qui est repris d'Agoria : le positionnement/prestige et la largeur des services (taxonomie de services calquée). Ce qui n'est PAS repris : le modèle d'adhésion/membres — Digital House reste une agence de services.

## Décisions clés

| Sujet | Décision |
|---|---|
| Livrable | Site web complet codé, prêt à mettre en ligne |
| Techno | Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion |
| Langue | Français uniquement (multilingue plus tard) |
| Actualités | MDX en fichiers maintenant, migration Sanity CMS plus tard |
| Direction visuelle | « Sanity pur » : fond blanc, texte noir #111, accent rouge-corail #f03e2f, bandes sombres #111 pour les sections Solutions, typographie grasse et contrastée |
| Déploiement | Vercel |

## Arborescence (~25 pages)

### Navigation principale
1. **Domaines d'action** (5 pages) — l'ambition, comme les 5 domaines Agoria :
   - Accélérer la compétitivité par l'IA
   - Réussir la transformation digitale
   - Sécuriser les organisations (cybersécurité)
   - Former les talents de demain
   - Connecter les territoires (hardware/Starlink)
2. **Services** (6 catégories, taxonomie Agoria) :
   - **Expertise** : IA · Digitalisation & UX · Software & Développement · Cybersécurité · Data & Analyse · LegalTech · Hardware & Connectivité
   - **Documents & Outils** : guides, livres blancs, templates, Indibot
   - **Développement de marchés** : accompagnement e-commerce, mise en réseau, go-to-market digital
   - **Données & Analyse** : audits (code, UX, sécurité), études, benchmarks, veille techno
   - **Formations** : Academy (catalogue), sessions d'info, réseaux d'apprentissage / ateliers IA
   - **Avantages** : Smart Deals via partenaires (Brevo, Monica, AIOSEO, TL;DV…)
3. **Solutions** : Jurisis (IA juridique) · Indibot (10 000 prompts)
4. **Secteurs** (6 pages) : Juridique · E-commerce & Retail · Finance · Associations & ONG · Secteur public · Éducation
5. **Actualités** (articles MDX) + **Agenda** (événements/sessions)

### Pages secondaires
À propos / Vision · Réalisations (grille filtrable, 15+ use cases) · Contact / Prendre rendez-vous

## Page d'accueil (validée sur maquette)

Déroulé de haut en bas :
1. **Nav** : Domaines d'action ▾ · Services ▾ · Solutions ▾ · Secteurs ▾ · Actualités + bouton rouge « Prendre rendez-vous »
2. **Hero** : surtitre « Cabinet de transformation numérique », titre « Embrasser la technologie. Embrasser l'ambition. », sous-texte, 2 CTA, bande logos clients
3. **Domaines d'action** : 5 engagements en cartes (fond gris clair #f7f7f8)
4. **Services** : grille 6 catégories (fond blanc)
5. **Solutions** : bande sombre #111 — Jurisis et Indibot
6. **Secteurs + chiffres clés** : 15+ projets · 7 expertises · 3 formations · 2 solutions IA
7. **Actualités & Agenda** : 3 dernières cartes
8. **CTA final** : bande rouge #f03e2f « Prêt à transformer votre organisation ? »
9. **Footer** sombre : colonnes navigation, newsletter, réseaux, mentions légales

## Gabarits de pages intérieures (5)

- **Domaine d'action** : hero engagé, vision, services liés, chiffres, CTA
- **Service** : description, bénéfices en cartes, méthode/étapes, réalisations liées, FAQ courte, CTA
- **Secteur** : enjeux, services pertinents, étude de cas, témoignage
- **Solution** : page produit style Sanity — hero produit, fonctionnalités, captures, tarification simple, CTA démo
- **Article** : typographie soignée, sommaire, articles liés, partage

Pages uniques : Accueil, À propos/Vision, Réalisations, Contact.

## Architecture technique

- **Next.js 15 App Router**, TypeScript, Tailwind CSS v4, Framer Motion (apparitions au scroll, micro-interactions sobres)
- **Contenu structuré** : fichiers de données TypeScript par collection (`data/domaines.ts`, `data/services.ts`, `data/secteurs.ts`, `data/solutions.ts`, `data/realisations.ts`) — séparation contenu/présentation pour migration Sanity CMS facile
- **Actualités** : MDX dans `content/actualites/`
- **Contact** : route API (fallback mailto, branchable Brevo ensuite) ; bouton rendez-vous → lien Brevo/Calendly existant
- **SEO** : metadata par page, sitemap.xml, robots.txt, Open Graph
- **Pages génériques** : routes dynamiques par gabarit (`/domaines/[slug]`, `/services/[categorie]/[slug]`, `/secteurs/[slug]`, `/solutions/[slug]`, `/actualites/[slug]`)

## Contenu

- Textes en français, tirés de l'ancien site dhcompany.pro, réécrits avec le ton « cabinet de référence » (institutionnel, ambitieux, orienté résultats)
- Images : placeholders élégants (dégradés/compositions CSS) en attendant les vraies photos et logos clients
- 4-5 articles d'actualités de lancement
- Use cases : reconstruits à partir des 15+ projets mentionnés sur l'ancien site (titres génériques si détails indisponibles)

## Gestion des erreurs

- Page 404 personnalisée au style du site
- Formulaire contact : validation côté client + serveur, message de confirmation/erreur clair
- Slugs inconnus dans les routes dynamiques → 404 (`notFound()`)

## Tests et vérification

- `next build` sans erreur ni warning TypeScript
- Navigation complète cliquée (toutes les pages atteignables, aucun lien mort)
- Responsive vérifié (mobile 375px, tablette, desktop)
- Lighthouse : viser ≥ 90 en performance et SEO sur l'accueil

## Hors périmètre (plus tard)

- CMS Sanity, multilingue, espace membre, paiement en ligne, blog avancé (catégories/recherche)
