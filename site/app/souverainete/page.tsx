import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Souverainete & confiance",
  description:
    "Audit de souverainete, architecture hybride, cybersecurite, conformite AI Act, RGPD, NIS2 et IA souveraine.",
};

const OFFRE = [
  {
    titre: "Audit de souverainete et dependance",
    texte: "Cartographier les donnees, fournisseurs, juridictions, risques, couts caches et scenarios de reprise de controle.",
  },
  {
    titre: "Architecture hybride",
    texte: "Combiner hyperscalers, cloud europeen, open-weight models et deploiements prives selon la sensibilite des usages.",
  },
  {
    titre: "Cybersecurite & resilience",
    texte: "Durcir les environnements, surveiller les dependances, preparer les incidents et aligner la securite avec NIS2.",
  },
  {
    titre: "Conformite IA & donnees",
    texte: "Structurer AI Act, RGPD, gouvernance des donnees, documentation, controles et politiques internes.",
  },
];

export default function SouverainetePage() {
  return (
    <>
      <PageHero
        eyebrow="Souverainete & confiance"
        title="La performance numerique ne doit pas creer une dependance invisible."
        subtitle="Digital House aide les organisations a arbitrer entre vitesse, cout, securite, conformite et autonomie technologique."
        scene="shield"
        image="/domains/Cybersécurité.png"
      />

      <section className="bg-white py-20 text-ink md:py-24">
        <Container className="max-w-4xl">
          <p className="eyebrow text-accent">Le moment</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
            La souverainete devient un critere de decision, pas un slogan.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Les directions doivent savoir ou circulent les donnees, quels fournisseurs deviennent
            critiques, quelles obligations s&apos;appliquent et quels compromis sont acceptables. Notre
            approche est pragmatique : chaque donnee au bon endroit, chaque usage avec le bon niveau
            de controle.
          </p>
        </Container>
      </section>

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-accent">Notre offre</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Quatre leviers pour reprendre la main.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              Nous traitons la souverainete comme une couche transversale : architecture, cyber,
              donnees, IA, achats, juridique et operations. L&apos;objectif n&apos;est pas de ralentir les
              projets, mais de choisir le bon niveau de controle pour chaque usage : ce qui peut aller
              vite doit aller vite, ce qui touche aux donnees sensibles doit etre concu avec plus de
              garanties.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {OFFRE.map((o, i) => (
              <article key={o.titre} className="dh-hover-card dh-hover-card-dark min-h-64 p-7">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <p className="mt-5 font-display text-2xl font-black">{o.titre}</p>
                <p className="dh-card-muted mt-4 text-sm leading-7">{o.texte}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f3f6] py-16 text-ink md:py-20">
        <Container>
          <p className="eyebrow text-accent">Cadres et referentiels</p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["AI Act", "RGPD", "NIS2", "CyFun", "EUCS", "Cloud souverain", "Open-weight models"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <p className="eyebrow">Audit de souverainete</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              Ou sont vraiment vos donnees ?
            </h2>
            <p className="mt-3 max-w-xl">
              Un diagnostic clair pour identifier les risques et prioriser les actions.
            </p>
          </div>
          <Button href={SITE.rdvUrl} variant="dark" arrow>
            Demander un audit
          </Button>
        </Container>
      </section>
    </>
  );
}
