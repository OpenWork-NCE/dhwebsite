import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";
import { secteurs } from "@/data/secteurs";
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

  return (
    <>
      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <TechBackground />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-accent">Secteur</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">
              {secteur.titre}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{secteur.enjeux}</p>
            <div className="mt-8">
              <Button href={SITE.rdvUrl} arrow>
                Parler de votre projet
              </Button>
            </div>
          </div>
          <div className="hidden border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-accent/10 lg:block">
            <SceneIllustration scene={secteur.scene} tone="light" className="my-24 w-full" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-accent">Cas d&apos;usage</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Ce que nous mettons en place.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Les cas d&apos;usage sont selectionnes selon leur faisabilite, leur impact metier et leur
              capacite a etre operes dans la duree. Nous regardons aussi la disponibilite des donnees,
              les risques de securite, l&apos;effort d&apos;adoption par les equipes et la possibilite de
              mesurer rapidement un resultat concret. L&apos;objectif est d&apos;eviter les pilotes isoles :
              chaque initiative doit pouvoir devenir un usage stable, gouverne et utile au quotidien.
            </p>
          </div>
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

      <section className="bg-black py-16 text-white">
        <Container>
          <p className="eyebrow text-accent">Technologies</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {secteur.technologies.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <h2 className="font-display text-3xl font-black md:text-4xl">
            Un projet dans le secteur {secteur.titre.toLowerCase()} ?
          </h2>
          <Button href={SITE.rdvUrl} variant="dark" arrow>
            Parler de votre projet
          </Button>
        </Container>
      </section>
    </>
  );
}
