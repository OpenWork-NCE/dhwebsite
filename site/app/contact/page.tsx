import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/site";

export const metadata = { title: "Contact" };

const CONTACT_POINTS = [
  "Cadrer une strategie IA, data, cloud ou cyber",
  "Lancer un POC agent IA ou une automatisation",
  "Former une equipe ou un comite de direction",
  "Auditer souverainete, risques et dependances",
];

export default function ContactPage() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow text-accent">Contact</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-black leading-none md:text-7xl">
              Parlons de votre prochaine transformation.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Premier echange sans engagement. Nous clarifions l&apos;objectif, les contraintes et les
              premieres options de mission.
            </p>
            <div className="mt-8">
              <Button href={SITE.rdvUrl} arrow>
                Prendre rendez-vous
              </Button>
            </div>
            <div className="mt-10 space-y-px overflow-hidden border border-white/10 bg-white/10">
              {CONTACT_POINTS.map((point, index) => (
                <div key={point} className="grid grid-cols-[3rem_1fr] gap-4 bg-black p-4">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <p className="text-sm text-neutral-300">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-neutral-400">
              Ou ecrivez-nous :{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-accent hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
          <div className="border border-white/10 bg-white p-7 text-ink shadow-2xl shadow-accent/10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
