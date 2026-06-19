import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CorporateServices from "@/components/sections/CorporateServices";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import Button from "@/components/ui/Button";
import { poles } from "@/data/poles";
import { SITE } from "@/data/site";

export const metadata = { title: "Expertises" };

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertises"
        title="Les capacites d'un cabinet de transformation, l'agilite d'une equipe terrain."
        subtitle="Strategie, IA, data, cloud, cyber, experience client, operations, learning et services manages : Digital House couvre la chaine complete de la reinvention numerique."
        scene="code"
        image="/domains/Ingénierie Logicielle.png"
      />

      <CorporateServices />

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow text-accent">Notre chaine de valeur</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Cinq poles pour passer du cadrage a l&apos;operation.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              Les services corporate se branchent sur cinq poles simples : conseiller, construire,
              operer, former et investir. Cette organisation garde les missions lisibles et les
              responsabilites claires. Elle nous permet aussi de passer d&apos;un diagnostic a une mise
              en production sans changer d&apos;interlocuteur a chaque etape : les memes arbitrages de
              valeur, de securite, de donnees et d&apos;adoption restent visibles tout au long de la
              mission.
            </p>
          </div>

          <div className="mt-12 space-y-px overflow-hidden border border-white/10 bg-white/10">
            {poles.map((p) => (
              <Link
                key={p.slug}
                href={`/expertises/${p.slug}`}
                className="group grid grid-cols-1 bg-black transition-colors hover:bg-white hover:text-black md:grid-cols-[180px_1fr_220px]"
              >
                <div className="flex items-center gap-4 border-b border-white/10 p-7 md:border-b-0 md:border-r">
                  <span className="font-mono text-4xl font-black text-accent">{p.numero}</span>
                  <div>
                    <p className="font-display text-xl font-black">{p.nom}</p>
                    <p className="text-xs text-neutral-500 group-hover:text-black/60">{p.sous}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-7">
                  <p className="font-semibold">{p.promesse}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400 group-hover:text-black/65">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Decouvrir le pole
                    <span className="transition-transform group-hover:translate-x-0.5">-&gt;</span>
                  </span>
                </div>
                <div className="relative hidden h-full overflow-hidden md:block">
                  {p.image ? (
                    <>
                      <Image src={p.image} alt={p.nom} width={220} height={180} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-accent/5" />
                    </>
                  ) : (
                    <SceneIllustration scene={p.scene} tone="light" className="h-full w-full" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet relative overflow-hidden py-16">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Souverainete & confiance</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              Une couche transversale sur chaque mission.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6">
              Arbitrage hyperscalers / solutions souveraines, AI Act, RGPD, NIS2, cybersecurite,
              architecture et gouvernance des donnees.
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
