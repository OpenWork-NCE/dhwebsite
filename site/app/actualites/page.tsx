import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { getArticles } from "@/lib/articles";

export const metadata = { title: "Actualites" };

export default function ActualitesPage() {
  const articles = getArticles();
  return (
    <>
      <PageHero
        eyebrow="Actualites & insights"
        title="Analyses pour dirigeants qui veulent agir, pas seulement suivre la tendance."
        subtitle="IA, cybersecurite, souverainete, agents, data et transformation : nos lectures du marche et nos conseils operationnels."
        scene="book"
        image="/domains/Actualites.png"
      />
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/actualites/${a.slug}`}
                className="dh-hover-card group min-h-80 justify-between p-6"
              >
                <div>
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 font-display text-2xl font-black leading-tight">{a.titre}</p>
                  <p className="dh-card-muted mt-4 text-sm leading-7">{a.resume}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-4 text-sm group-hover:border-white/10">
                  <span className="dh-card-muted">{a.date}</span>
                  <span className="dh-card-link">Lire -&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
