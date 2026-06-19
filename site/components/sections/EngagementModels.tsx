import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const MODELES = [
  {
    titre: "Audit & diagnostic",
    texte: "Un regard expert et indépendant sur votre existant, un plan d'action priorisé et chiffré. Idéal pour décider sur des faits.",
    duree: "Quelques jours",
  },
  {
    titre: "Projet au forfait",
    texte: "Une réalisation cadrée, du périmètre au livrable : site, application, déploiement IA. Vous savez ce que vous obtenez, et quand.",
    duree: "Semaines à mois",
  },
  {
    titre: "Accompagnement continu",
    texte: "Un partenaire dans la durée : pilotage, évolutions et veille technologique. Comme une équipe digitale externalisée.",
    duree: "Au mois",
  },
  {
    titre: "Formation & transfert",
    texte: "Nous rendons vos équipes autonomes : ateliers pratiques, réseaux d'apprentissage et montée en compétence sur vos outils.",
    duree: "À la carte",
  },
];

export default function EngagementModels() {
  return (
    <section className="bg-soft py-20 md:py-24">
      <Container>
        <SectionHeading
          kicker="Modèles d'accompagnement"
          title="Une collaboration adaptée à votre besoin"
          subtitle="Du diagnostic ponctuel au partenariat de long terme, nous nous calons sur votre rythme et vos moyens."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODELES.map((m, i) => (
            <Reveal key={m.titre} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                <span className="eyebrow text-accent">{m.duree}</span>
                <p className="mt-3 text-lg font-extrabold tracking-tight">{m.titre}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{m.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
