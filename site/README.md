# Digital House Consulting — Website

Corporate website for Digital House, a French consultancy specializing in AI, data, cybersecurity, and digital transformation.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **MDX** (next-mdx-remote + gray-matter) for content pages

## Getting Started

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest |

## Project Structure

```
site/
├── app/                 # Pages (App Router)
│   ├── page.tsx         # Home
│   ├── a-propos/        # About
│   ├── expertises/      # Services & expertise
│   ├── realisations/    # Case studies
│   ├── produits/        # Products
│   ├── secteurs/        # Industry sectors
│   ├── academy/         # Training academy
│   ├── actualites/      # News
│   ├── agenda/          # Events
│   ├── ressources/      # Resources
│   ├── souverainete/    # Digital sovereignty
│   └── contact/         # Contact form
├── components/          # React components
│   ├── ui/              # Base UI (Button, Container, Reveal)
│   ├── layout/          # Header, Footer
│   ├── home/            # Home page sections
│   ├── sections/        # Reusable sections
│   └── visuals/         # Illustrations & backgrounds
├── content/             # MDX articles
├── data/                # Static data & type definitions
├── lib/                 # Utility functions
├── public/              # Static assets
└── tests/               # Unit tests
```

## Styling

Tailwind CSS v4 with a custom theme defined in `app/globals.css`:

- **Accent**: `#a100ff` (purple)
- **Cyan**: `#4de3ff`
- **Ink**: `#050505`
- **Fonts**: Bricolage Grotesque (display), Hanken Grotesk (body), JetBrains Mono (code)

## Deployment

Built for Vercel. Includes dynamic sitemap (`app/sitemap.ts`) and robots.txt (`app/robots.ts`) for SEO.
