import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";
import { secteurs } from "@/data/secteurs";
import { realisations } from "@/data/realisations";
import { SITE } from "@/data/site";
import { Building2, Lightbulb, Wrench } from "lucide-react";

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

  const projetsLies = realisations.filter((r) => r.secteur === slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <TechBackground />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-accent">Secteur</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">
              {secteur.titre}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{secteur.enjeux}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={SITE.rdvUrl} arrow>
                Parler de votre projet
              </Button>
              <Button href="/secteurs" variant="outlineLight">
                Tous les secteurs
              </Button>
            </div>
          </div>
          <div className="relative hidden h-[400px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl shadow-accent/10 lg:block">
            {secteur.image ? (
              <>
                <Image src={secteur.image} alt={secteur.titre} width={600} height={400} className="h-[400px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-accent/10" />
              </>
            ) : (
              <SceneIllustration scene={secteur.scene} tone="light" className="h-[400px] w-full" />
            )}
          </div>
        </Container>
      </section>

      {/* Enjeux detailles */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="eyebrow text-accent">Enjeux du secteur</p>
              </div>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Comprendre les priorites pour agir juste.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                {secteur.enjeux} Nous adaptons les cas d&apos;usage, le niveau de gouvernance, les outils
                et les formats de mission a la realite de votre environnement. L&apos;objectif est de creer
                des capacites operationnelles durables, pas des demonstrations techniques isolees.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Cas d'usage */}
      <section className="bg-[#f3f3f6] py-20 text-ink md:py-24">
        <Container>
          <div className="flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-accent" strokeWidth={1.5} />
            <p className="eyebrow text-accent">Cas d&apos;usage</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Ce que nous mettons en place.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Les cas d&apos;usage sont selectionnes selon leur faisabilite, leur impact metier et leur
            capacite a etre operes dans la duree.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {secteur.casUsage.map((c, i) => (
              <article key={c} className="dh-hover-card min-h-52 p-6">
                <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                <p className="dh-card-muted mt-5 text-sm font-semibold leading-7">{c}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="bg-black py-16 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="eyebrow text-accent">Technologies</p>
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Les outils et plateformes que nous deplorons dans le secteur {secteur.titre.toLowerCase()}.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {secteur.technologies.map((t) => (
                <span key={t} className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Realisations liees */}
      {projetsLies.length > 0 && (
        <section className="bg-white py-20 text-ink md:py-24">
          <Container>
            <p className="eyebrow text-accent">Realisations dans ce secteur</p>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
              Projets livres pour le secteur {secteur.titre.toLowerCase()}.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {projetsLies.map((r) => (
                <article key={r.slug} className="dh-hover-card p-6">
                  {r.image && (
                    <div className="relative mb-4 h-32 overflow-hidden">
                      <Image src={r.image} alt={r.titre} width={300} height={128} className="h-32 w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-accent/5" />
                    </div>
                  )}
                  <p className="font-display text-lg font-black">{r.titre}</p>
                  <p className="dh-card-muted mt-2 text-sm leading-6">{r.resume}</p>
                  <p className="mt-3 text-xs font-semibold text-accent">{r.resultat}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/realisations" variant="outline">
                Toutes les realisations
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Un projet dans le secteur {secteur.titre.toLowerCase()} ?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              Echangeons sur vos priorites, vos contraintes et les premiers cas d&apos;usage activables.
            </p>
          </div>
          <Button href={SITE.rdvUrl} variant="dark" arrow>
            Parler de votre projet
          </Button>
        </Container>
      </section>
    </>
  );
}
