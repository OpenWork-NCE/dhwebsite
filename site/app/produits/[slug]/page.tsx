import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";
import { produits } from "@/data/produits";
import { CheckCircle2, Target, Layers, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return produits.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = produits.find((x) => x.slug === slug);
  return p ? { title: p.nom, description: p.accroche } : {};
}

export default async function ProduitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const produit = produits.find((p) => p.slug === slug);
  if (!produit) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <TechBackground />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-accent">{produit.categorie}</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">
              {produit.nom}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-neutral-200">{produit.accroche}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={produit.cta.href} arrow>
                {produit.cta.label}
              </Button>
              <Button href="/contact" variant="outlineLight">
                Parler a un expert
              </Button>
            </div>
          </div>
          <div className="relative hidden h-[400px] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-accent/10 lg:flex">
            {produit.image ? (
              <>
                <Image
                  src={produit.image}
                  alt={produit.nom}
                  width={400}
                  height={300}
                  className={`relative z-10 max-h-48 w-auto object-contain${produit.slug === "jurisis" || produit.slug === "indibot" ? " brightness-0 invert" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-accent/5" />
              </>
            ) : (
              <SceneIllustration scene={produit.scene} tone="light" className="h-[400px] w-full" />
            )}
          </div>
        </Container>
      </section>

      {/* Probleme / Solution */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          <article className="bg-white p-8">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="eyebrow text-accent">Le probleme</p>
            </div>
            <p className="mt-5 text-lg leading-8 text-muted">{produit.probleme}</p>
          </article>
          <article className="bg-black p-8 text-white">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="eyebrow text-accent">Notre solution</p>
            </div>
            <p className="mt-5 text-lg leading-8 text-neutral-300">{produit.solution}</p>
          </article>
        </Container>
      </section>

      {/* Metriques */}
      {produit.metriques && produit.metriques.length > 0 && (
        <section className="border-y border-line bg-[#f3f3f6] py-14">
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              {produit.metriques.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-display text-5xl font-black text-accent">{m.valeur}</p>
                  <p className="mt-2 text-sm text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Fonctionnalites */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">Fonctionnalites</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Ce que {produit.nom} fait pour vous.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Chaque fonctionnalite est concue pour s&apos;integrer dans vos workflows existants,
              sans courbe d&apos;apprentissage complexe et avec des resultats mesurables des les
              premieres semaines d&apos;utilisation.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {produit.fonctionnalites.map((f, index) => (
              <article key={f.titre} className="dh-hover-card min-h-56 p-7">
                <span className="font-mono text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-display text-2xl font-black">{f.titre}</p>
                <p className="dh-card-muted mt-4 text-sm leading-7">{f.texte}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Cas d'usage */}
      {produit.casUsage && produit.casUsage.length > 0 && (
        <section className="bg-black py-20 text-white md:py-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow text-accent">Cas d&apos;usage</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                  Comment nos clients utilisent {produit.nom}.
                </h2>
              </div>
              <div className="space-y-4">
                {produit.casUsage.map((c, i) => (
                  <div key={c} className="flex items-start gap-4 border border-white/10 bg-white/[0.03] p-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 font-mono text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-neutral-200">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Stack technique */}
      {produit.stack && produit.stack.length > 0 && (
        <section className="bg-[#f3f3f6] py-16 text-ink">
          <Container>
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="eyebrow text-accent">Stack technique</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {produit.stack.map((t) => (
                <span key={t} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Pour qui */}
      <section className="bg-black py-16 text-white">
        <Container>
          <p className="eyebrow text-accent">Pour qui</p>
          <p className="mt-3 max-w-2xl text-neutral-400">
            {produit.nom} est concu pour les organisations qui veulent aller vite sans sacrifier
            la qualite, la gouvernance ou la specificite de leur metier.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {produit.pour.map((t) => (
              <span key={t} className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {produit.faq && produit.faq.length > 0 && (
        <section className="bg-white py-20 text-ink md:py-24">
          <Container className="max-w-4xl">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="eyebrow text-accent">Questions frequentes</p>
            </div>
            <div className="mt-8 divide-y divide-line">
              {produit.faq.map((f) => (
                <details key={f.question} className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-lg font-bold">
                    {f.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-muted">{f.reponse}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA final */}
      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Pret a decouvrir {produit.nom} ?
            </h2>
            <p className="mt-2 max-w-xl text-sm">
              Premier echange sans engagement. Nous analysons votre besoin et vous montrons ce que {produit.nom} peut faire pour votre organisation.
            </p>
          </div>
          <Button href={produit.cta.href} variant="dark" arrow>
            {produit.cta.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
