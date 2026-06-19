import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";
import { poles } from "@/data/poles";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return poles.map((p) => ({ pole: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pole: string }> }) {
  const { pole } = await params;
  const p = poles.find((x) => x.slug === pole);
  return p ? { title: `${p.nom} - ${p.sous}`, description: p.promesse } : {};
}

export default async function PolePage({ params }: { params: Promise<{ pole: string }> }) {
  const { pole } = await params;
  const p = poles.find((x) => x.slug === pole);
  if (!p) notFound();

  const idx = poles.findIndex((x) => x.slug === pole);
  const suivant = poles[(idx + 1) % poles.length];

  return (
    <>
      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <TechBackground />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-accent">
              Pole {p.numero} / {p.sous}
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">{p.nom}</h1>
            <p className="mt-6 max-w-2xl text-2xl font-semibold text-neutral-100">{p.promesse}</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-300">{p.description}</p>
            <div className="mt-8">
              <Button href={SITE.rdvUrl} arrow>
                Parler de votre projet
              </Button>
            </div>
          </div>
          <div className="relative hidden h-[400px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl shadow-accent/10 lg:block">
            {p.image ? (
              <>
                <Image src={p.image} alt={p.nom} width={600} height={400} className="h-[400px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-accent/10" />
              </>
            ) : (
              <SceneIllustration scene={p.scene} tone="light" className="h-[400px] w-full" />
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-accent">Ce que nous faisons</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Des practices concretes, activables par mission.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Chaque practice peut etre engagee seule, combinee avec d&apos;autres, ou transformee en
              programme complet de transformation. Nous definissons toujours le niveau d&apos;ambition,
              les donnees necessaires, les dependances techniques, les risques et les indicateurs de
              succes avant d&apos;industrialiser. Cette discipline evite les initiatives decoratives et
              concentre l&apos;effort sur les usages qui peuvent vraiment changer les operations.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {p.practices.map((pr, index) => (
              <article key={pr.titre} className="dh-hover-card p-7">
                <span className="font-mono text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-black">{pr.titre}</h3>
                <ul className="mt-5 space-y-3">
                  {pr.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm leading-6">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span className="dh-card-muted">{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-accent">Technologies & cadres</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {p.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-accent">Formats de mission</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.formats.map((f, i) => (
                  <div key={f} className="border border-white/10 p-4">
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <p className="mt-2 text-sm text-neutral-300">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet py-16">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Pole suivant</p>
            <h2 className="mt-3 font-display text-3xl font-black">Continuer vers {suivant.nom}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={SITE.rdvUrl} variant="dark" arrow>
              Lancer une mission
            </Button>
            <Link
              href={`/expertises/${suivant.slug}`}
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {suivant.nom} -&gt;
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
