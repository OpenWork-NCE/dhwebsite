import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";

export const metadata = { title: "A propos & notre modele" };

const METIERS = [
  { titre: "Advisory", texte: "Strategie, gouvernance, architecture, risque et feuille de route." },
  { titre: "Build & integrate", texte: "IA, data, cloud, CRM, ERP, e-commerce, applications et automatisation." },
  { titre: "Managed services", texte: "Run, monitoring, amelioration continue, support et directions externalisees." },
  { titre: "Ventures", texte: "Produits proprietaires, accelerateurs, ecosystem partners et emerging tech." },
];

const TRAJECTOIRE = [
  "Le conseil detecte les problemes repetes du marche.",
  "L'integration cree les premiers actifs reutilisables.",
  "Le run genere du recurrent et de la connaissance terrain.",
  "La R&D transforme cette connaissance en produits.",
  "Les produits renforcent nos missions de transformation.",
];

const VALEURS = [
  { titre: "Concret", texte: "Nous livrons des systemes, pas seulement des recommandations." },
  { titre: "Souverain", texte: "Nous protegeons les donnees, les choix technologiques et l'autonomie du client." },
  { titre: "Mesurable", texte: "Chaque mission doit produire une valeur observable : temps, qualite, risque ou revenu." },
  { titre: "Transmissible", texte: "Nous formons les equipes pour que la competence reste dans l'organisation." },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos & modele"
        title="Un cabinet hybride pour transformer, operer et construire des actifs."
        subtitle="Digital House combine les codes d'un cabinet de transformation, d'un integrateur technologique, d'une academy et d'un venture studio. Notre ambition est d'accompagner les organisations qui veulent passer de l'idee IA a des systemes utiles, operes et mesurables."
        scene="ai"
      />

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">Le modele</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Quatre metiers, une seule chaine de valeur.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Cette combinaison nous permet de conseiller comme un cabinet, livrer comme un integrateur,
              operer comme un partenaire long terme et capitaliser comme un editeur. Le client garde
              une lecture simple de la mission, tandis que nous pouvons mobiliser les bons leviers :
              cadrage, build, run, formation ou produit selon le niveau de maturite et le resultat
              attendu.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {METIERS.map((m, i) => (
              <article key={m.titre} className="dh-hover-card min-h-64 p-6">
                <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                <p className="mt-5 font-display text-2xl font-black">{m.titre}</p>
                <p className="dh-card-muted mt-4 text-sm leading-7">{m.texte}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <p className="eyebrow text-accent">La boucle economique</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Un modele concu pour apprendre plus vite que le marche.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
            {TRAJECTOIRE.map((t, i) => (
              <article key={t} className="dh-hover-card dh-hover-card-dark min-h-52 p-5">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <p className="dh-card-muted mt-5 text-sm leading-7">{t}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f3f6] py-20 text-ink md:py-24">
        <Container className="max-w-4xl">
          <p className="eyebrow text-accent">Ambition 2035</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
            Devenir un groupe technologique de reference pour les organisations ambitieuses.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Notre ambition est de couvrir la chaine complete : IA, data, automatisation, ERP, cloud,
            cybersecurite, experience client, operations, formation, services manages et SaaS. Pas en
            copiant les grands cabinets, mais en construisant un modele plus proche du terrain, capable
            d&apos;accompagner aussi bien des PME, des institutions, des groupes en croissance que des
            organisations internationales qui cherchent un partenaire plus direct.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <p className="eyebrow text-accent">Nos valeurs</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALEURS.map((v) => (
              <article key={v.titre} className="dh-hover-card p-6">
                <p className="font-display text-2xl font-black">{v.titre}</p>
                <p className="dh-card-muted mt-4 text-sm leading-7">{v.texte}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <p className="eyebrow text-accent">Partenaires technologiques</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SITE.partenaires.map((t) => (
                <span key={t} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/contact" arrow>
                Travailler avec nous
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
