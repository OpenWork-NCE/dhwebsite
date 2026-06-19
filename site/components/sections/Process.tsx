import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ETAPES = [
  {
    titre: "Échange & diagnostic",
    texte: "On comprend vos objectifs, vos contraintes et vos cas d'usage à fort impact. Gratuit, sans engagement.",
  },
  {
    titre: "Proposition & cadrage",
    texte: "Un plan clair, chiffré et priorisé. Vous savez exactement ce qui sera livré, quand et pourquoi.",
  },
  {
    titre: "Réalisation itérative",
    texte: "Des cycles courts avec démonstrations régulières. Vous voyez le résultat avancer, semaine après semaine.",
  },
  {
    titre: "Lancement & accompagnement",
    texte: "Mise en production, formation de vos équipes et suivi dans la durée. Vous restez autonome.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          kicker="Méthode"
          title="Comment nous travaillons"
          subtitle="Un processus éprouvé, transparent du premier échange jusqu'à l'autonomie de vos équipes."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {ETAPES.map((e, i) => (
            <Reveal key={e.titre} delay={i * 0.08}>
              <div className="group relative h-full bg-white p-7 transition-colors hover:bg-soft">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-black tracking-tight text-ink/10 transition-colors group-hover:text-accent/30">
                    0{i + 1}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
                <p className="mt-4 text-lg font-extrabold tracking-tight">{e.titre}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
