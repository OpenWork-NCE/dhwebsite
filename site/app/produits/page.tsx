import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import { produits } from "@/data/produits";

export const metadata = { title: "Produits" };

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ventures & produits"
        title="Nos actifs technologiques naissent des besoins clients."
        subtitle="Nous conseillons, integrons et operons. Puis nous capitalisons ce que le marche repete en produits, accelerateurs et plateformes reutilisables."
        scene="spark"
      />
      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow text-accent">Produits maison</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Le conseil nourrit la R&D. La R&D renforce le conseil.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              Chaque produit Digital House est pense comme un actif de transformation : plus proche
              des usages, plus rapide a deployer, et capable de servir plusieurs marches, secteurs
              et typologies d&apos;organisations sans repartir de zero a chaque mission. Ces produits ne
              remplacent pas le conseil : ils l&apos;augmentent en capitalisant ce que nous apprenons sur
              le terrain, puis en le transformant en accelerateurs reutilisables, maintenables et
              mesurables.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {produits.map((p, index) => (
              <Link
                key={p.slug}
                href={`/produits/${p.slug}`}
                className="dh-hover-card dh-hover-card-dark group min-h-96"
              >
                <div className="flex h-44 items-center justify-center border-b border-white/10">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.nom}
                      width={200}
                      height={120}
                      className={`h-20 w-auto object-contain${p.slug === "jurisis" || p.slug === "indibot" ? " brightness-0 invert" : ""}`}
                    />
                  ) : (
                    <SceneIllustration scene={p.scene} tone="light" className="h-44 w-full" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")} / {p.categorie}
                  </span>
                  <p className="mt-4 font-display text-3xl font-black">{p.nom}</p>
                  <p className="dh-card-muted mt-3 flex-1">{p.accroche}</p>
                  <span className="dh-card-link mt-6 inline-flex items-center gap-1.5 text-sm">
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
