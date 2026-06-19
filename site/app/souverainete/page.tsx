import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";
import { ShieldCheck, Globe, Lock, FileCheck, AlertTriangle, Server } from "lucide-react";

export const metadata = {
  title: "Souverainete & confiance",
  description:
    "Audit de souverainete, architecture hybride, cybersecurite, conformite AI Act, RGPD, NIS2 et IA souveraine.",
};

const OFFRE = [
  {
    titre: "Audit de souverainete et dependance",
    texte: "Cartographier les donnees, fournisseurs, juridictions, risques, couts caches et scenarios de reprise de controle.",
    icon: Globe,
  },
  {
    titre: "Architecture hybride",
    texte: "Combiner hyperscalers, cloud europeen, open-weight models et deploiements prives selon la sensibilite des usages.",
    icon: Server,
  },
  {
    titre: "Cybersecurite & resilience",
    texte: "Durcir les environnements, surveiller les dependances, preparer les incidents et aligner la securite avec NIS2.",
    icon: ShieldCheck,
  },
  {
    titre: "Conformite IA & donnees",
    texte: "Structurer AI Act, RGPD, gouvernance des donnees, documentation, controles et politiques internes.",
    icon: FileCheck,
  },
];

const RISQUES = [
  { titre: "Dependance fournisseur", texte: "Concentration sur un seul hyperscaler, cout de migration eleve, perte de negociation." },
  { titre: "Donnees hors juridiction", texte: "Donnees sensibles stockees hors UE sans cadre contractuel suffisant." },
  { titre: "Shadow AI", texte: "Collaborateurs utilisant des outils IA non valides sans gouvernance ni confidentialite." },
  { titre: "Conformite fragmentee", texte: "AI Act, RGPD, NIS2 traites en silos sans vision transversale ni responsable unique." },
];

const APPROCHE = [
  { etape: "01", titre: "Cartographie", texte: "Identifier les donnees, fournisseurs, juridictions, flux et dependances critiques." },
  { etape: "02", titre: "Evaluation", texte: "Mesurer le risque, le cout de migration et l'impact sur les operations." },
  { etape: "03", titre: "Arbitrage", texte: "Decider ce qui doit etre souverain, ce qui peut rester chez un hyperscaler, et ce qui doit etre hybride." },
  { etape: "04", titre: "Execution", texte: "Migrer, durcir, documenter et former les equipes sur les nouveaux dispositifs." },
  { etape: "05", titre: "Gouvernance", texte: "Installer les controles, les revues et les indicateurs pour maintenir le niveau dans la duree." },
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

      {/* Le moment */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-accent" strokeWidth={1.5} />
            <p className="eyebrow text-accent">Le moment</p>
          </div>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
            La souverainete devient un critere de decision, pas un slogan.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Les directions doivent savoir ou circulent les donnees, quels fournisseurs deviennent
            critiques, quelles obligations s&apos;appliquent et quels compromis sont acceptables. Notre
            approche est pragmatique : chaque donnee au bon endroit, chaque usage avec le bon niveau
            de controle. Ni paranoia, ni naivete.
          </p>
        </Container>
      </section>

      {/* Risques courants */}
      <section className="bg-[#f3f3f6] py-20 text-ink md:py-24">
        <Container>
          <p className="eyebrow text-accent">Risques que nous traitons</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Ce que nous voyons chez nos clients.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {RISQUES.map((r, i) => (
              <article key={r.titre} className="dh-hover-card min-h-48 p-7">
                <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                <p className="mt-4 font-display text-xl font-black">{r.titre}</p>
                <p className="dh-card-muted mt-3 text-sm leading-7">{r.texte}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Notre offre */}
      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="eyebrow text-accent">Notre offre</p>
              </div>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Quatre leviers pour reprendre la main.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              Nous traitons la souverainete comme une couche transversale : architecture, cyber,
              donnees, IA, achats, juridique et operations. L&apos;objectif n&apos;est pas de ralentir les
              projets, mais de choisir le bon niveau de controle pour chaque usage.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {OFFRE.map((o, i) => {
              const Icon = o.icon;
              return (
                <article key={o.titre} className="dh-hover-card dh-hover-card-dark min-h-64 p-7">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  </div>
                  <p className="mt-5 font-display text-2xl font-black">{o.titre}</p>
                  <p className="dh-card-muted mt-4 text-sm leading-7">{o.texte}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Approche en 5 etapes */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <p className="eyebrow text-accent">Notre approche</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Un audit structure, un plan clair, une execution maitrisee.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-5">
            {APPROCHE.map((a) => (
              <article key={a.etape} className="dh-hover-card min-h-56 p-5">
                <span className="font-mono text-2xl font-black text-accent">{a.etape}</span>
                <p className="mt-4 font-display text-lg font-black">{a.titre}</p>
                <p className="dh-card-muted mt-3 text-xs leading-6">{a.texte}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Cadres */}
      <section className="bg-[#f3f3f6] py-16 text-ink md:py-20">
        <Container>
          <p className="eyebrow text-accent">Cadres et referentiels</p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Nous maitrisons les cadres reglementaires et les referentiels de securite qui structurent
            vos obligations et vos choix d&apos;architecture.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["AI Act", "RGPD", "NIS2", "CyFun", "EUCS", "Cloud souverain", "Open-weight models", "ISO 27001", "DORA"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <p className="eyebrow">Audit de souverainete</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              Ou sont vraiment vos donnees ?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              Un diagnostic clair pour identifier les risques, cartographier les dependances et prioriser les actions.
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
