import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";
import { produits } from "@/data/produits";

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
      <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
        <TechBackground />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-accent">{produit.categorie}</p>
            <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">
              {produit.nom}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-neutral-200">{produit.accroche}</p>
            <div className="mt-8">
              <Button href={produit.cta.href} arrow>
                {produit.cta.label}
              </Button>
            </div>
          </div>
          <div className="hidden border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-accent/10 lg:block">
            {produit.image ? (
              <Image
                src={produit.image}
                alt={produit.nom}
                width={400}
                height={300}
                className={`my-24 w-full object-contain${produit.slug === "jurisis" || produit.slug === "indibot" ? " brightness-0 invert" : ""}`}
              />
            ) : (
              <SceneIllustration scene={produit.scene} tone="light" className="w-full" />
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink md:py-24">
        <Container className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          <article className="bg-white p-8">
            <p className="eyebrow text-accent">Le probleme</p>
            <p className="mt-5 text-lg leading-8 text-muted">{produit.probleme}</p>
          </article>
          <article className="bg-black p-8 text-white">
            <p className="eyebrow text-accent">Notre solution</p>
            <p className="mt-5 text-lg leading-8 text-neutral-300">{produit.solution}</p>
          </article>
        </Container>
      </section>

      <section className="bg-[#f3f3f6] py-20 text-ink md:py-24">
        <Container>
          <p className="eyebrow text-accent">Fonctionnalites</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
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

      <section className="bg-black py-16 text-white">
        <Container>
          <p className="eyebrow text-accent">Pour qui</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {produit.pour.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">Decouvrir {produit.nom}</h2>
          <Button href={produit.cta.href} variant="dark" arrow>
            {produit.cta.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
