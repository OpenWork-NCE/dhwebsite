import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { getArticles } from "@/lib/articles";

export const metadata = { title: "Ressources" };

export default function RessourcesPage() {
  const articles = getArticles();
  return (
    <>
      <PageHero
        eyebrow="Ressources"
        title="Le centre de preuves et d'analyses Digital House."
        subtitle="Etudes de cas, publications, visions marche et actifs de reference pour comprendre, cadrer et deployer une transformation IA qui produit des resultats."
        scene="book"
      />

      <section className="bg-white py-16 text-ink md:py-20">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            <Link
              href="/realisations"
              className="dh-hover-card group p-8"
            >
              <p className="font-display text-3xl font-black">Etudes de cas</p>
              <p className="dh-card-muted mt-3 text-sm leading-7">
                Nos realisations, par secteur, technologie et resultat operationnel.
              </p>
              <span className="dh-card-link mt-8 inline-block text-sm">Voir les projets -&gt;</span>
            </Link>
            <Link
              href="/produits/ia4africa"
              className="dh-hover-card group p-8"
            >
              <p className="font-display text-3xl font-black">ia4africa</p>
              <p className="dh-card-muted mt-3 text-sm leading-7">
                Notre actif de reference sur l&apos;IA, les usages et la souverainete en Afrique.
              </p>
              <span className="dh-card-link mt-8 inline-block text-sm">Decouvrir -&gt;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <p className="eyebrow text-accent">Analyses</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Lire le marche avec un prisme actionnable.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/actualites/${a.slug}`}
                className="dh-hover-card dh-hover-card-dark group min-h-72 justify-between p-6"
              >
                <div>
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 font-display text-2xl font-black leading-tight">{a.titre}</p>
                  <p className="dh-card-muted mt-4 text-sm leading-7">{a.resume}</p>
                </div>
                <span className="dh-card-link mt-8 text-sm">Lire -&gt;</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
