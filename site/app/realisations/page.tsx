import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import RealisationsGrid from "@/components/RealisationsGrid";

export const metadata = { title: "Realisations" };

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Realisations"
        title="Des projets concrets, des resultats mesurables."
        subtitle="Un apercu de nos accompagnements : IA, data, automatisation, connectivite, produits et transformation operationnelle."
        scene="chart"
      />
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow text-accent">Preuves terrain</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Filtrer par secteur, lire par impact.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Chaque mission doit laisser une capacite durable : temps gagne, risque reduit,
              meilleur pilotage, service plus fluide ou produit reutilisable. Nous documentons les
              choix, les dependances, les limites et les prochaines etapes afin que le resultat ne
              disparaisse pas apres la livraison. Une realisation utile doit pouvoir etre maintenue,
              mesuree et etendue par les equipes qui l&apos;utilisent.
            </p>
          </div>
          <RealisationsGrid />
        </Container>
      </section>
    </>
  );
}
