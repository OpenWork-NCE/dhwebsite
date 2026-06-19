import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";

export const metadata = { title: "Agenda" };

const EVENEMENTS = [
  {
    date: "Chaque 1er mardi du mois",
    titre: "Briefing dirigeant - Comprendre l'IA generative",
    lieu: "En ligne",
    texte: "Une heure pour distinguer hype, risques et opportunites concretes pour votre organisation.",
  },
  {
    date: "Chaque 3e jeudi du mois",
    titre: "Atelier pratique - Prompting professionnel",
    lieu: "En ligne",
    texte: "Un atelier hands-on pour repartir avec des prompts, routines et workflows utilisables.",
  },
  {
    date: "Sur demande",
    titre: "Comite transformation - Dirigeants & IA",
    lieu: "Presentiel ou hybride",
    texte: "Un format entre pairs pour cadrer gouvernance, budget, priorites et adoption.",
  },
];

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Briefings, ateliers et rencontres pour passer a l'action."
        subtitle="Des formats courts pour comprendre, tester et engager vos equipes sur l'IA, la data, la cybersecurite et la transformation."
        scene="learn"
        image="/domains/Cyber training.png"
      />
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="space-y-px overflow-hidden border border-line bg-line">
            {EVENEMENTS.map((e, index) => (
              <article
                key={e.titre}
                className="grid gap-5 bg-white p-6 transition-colors hover:bg-black hover:text-white md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-xs text-muted">{e.date}</p>
                  <p className="text-xs text-muted">{e.lieu}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-black">{e.titre}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{e.texte}</p>
                </div>
                <Button href={SITE.rdvUrl} variant="outline">
                  S&apos;inscrire
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
