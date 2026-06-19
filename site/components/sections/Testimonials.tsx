import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const TEMOIGNAGES = [
  {
    citation:
      "Jurisis nous fait gagner des heures de recherche chaque semaine, avec des réponses sourcées. Un changement de rythme pour le cabinet.",
    auteur: "Maître L.",
    role: "Associé, cabinet d'avocats",
    initiales: "ML",
    couleur: "var(--color-accent)",
  },
  {
    citation:
      "Notre nouvelle boutique est plus rapide, plus belle, et surtout elle vend mieux. L'équipe a tenu chaque promesse.",
    auteur: "Sarah D.",
    role: "Fondatrice, marque de cosmétiques",
    initiales: "SD",
    couleur: "var(--color-blue)",
  },
  {
    citation:
      "Une approche pédagogue qui a embarqué nos agents du début à la fin. L'IA est passée du fantasme à l'outil quotidien.",
    auteur: "Karim B.",
    role: "Responsable, service public",
    initiales: "KB",
    couleur: "var(--color-violet)",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-soft py-20 md:py-24">
      <Container>
        <SectionHeading
          kicker="Témoignages"
          title="Ils ont franchi le cap avec nous"
          subtitle="Des organisations de toutes tailles, un même constat : des résultats concrets."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TEMOIGNAGES.map((t, i) => (
            <Reveal key={t.auteur} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <div className="text-3xl font-black leading-none text-accent">&ldquo;</div>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/85">
                  {t.citation}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: t.couleur }}
                  >
                    {t.initiales}
                  </span>
                  <div>
                    <div className="text-sm font-bold">{t.auteur}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
