import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import { secteurs } from "@/data/secteurs";

export const metadata = { title: "Secteurs" };

export default function SecteursPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Des offres de transformation adaptees a chaque secteur."
        subtitle="Nous combinons expertise metier, IA, data, cyber, cloud et adoption pour construire des cas d'usage utiles dans six environnements prioritaires."
        scene="building"
      />
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">Secteurs servis</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Le meme socle technologique, des priorites metier differentes.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Sante, industrie, secteur public, PME, droit et education : chaque secteur a ses
              donnees, ses contraintes, son rythme de decision et ses risques. Notre role est de
              rendre la transformation applicable a ce contexte. Nous adaptons les cas d&apos;usage, le
              niveau de gouvernance, les outils et les formats de formation a la realite de chaque
              environnement, afin que les projets ne restent pas des demonstrations techniques mais
              deviennent des capacites operationnelles.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {secteurs.map((s, index) => (
              <Link
                key={s.slug}
                href={`/secteurs/${s.slug}`}
                className="dh-hover-card group min-h-96"
              >
                <div className="border-b border-line group-hover:border-white/10">
                  <SceneIllustration scene={s.scene} className="h-40 w-full" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-2xl font-black">{s.titre}</p>
                  <p className="dh-card-muted mt-3 line-clamp-5 flex-1 text-sm leading-7">
                    {s.enjeux}
                  </p>
                  <span className="dh-card-link mt-5 inline-flex items-center gap-1.5 text-sm">
                    Decouvrir -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
