"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const QUESTIONS = [
  {
    q: "Combien de temps dure un projet ?",
    r: "Cela dépend du périmètre : un audit prend quelques jours, un site quelques semaines, un déploiement IA quelques semaines à quelques mois. Le cadrage initial vous donne un calendrier précis dès le départ.",
  },
  {
    q: "Travaillez-vous avec les petites structures ?",
    r: "Oui. PME, indépendants, associations et institutions sont au cœur de notre mission. Nos offres sont dimensionnées à vos moyens réels.",
  },
  {
    q: "Mes données sont-elles confidentielles ?",
    r: "Absolument. Nos architectures sont pensées pour la confidentialité, en particulier sur les projets IA et juridiques. Rien n'est exploité sans votre accord explicite.",
  },
  {
    q: "Proposez-vous de la maintenance ?",
    r: "Oui, des forfaits de maintenance et d'évolution adaptés à chaque projet, pour que votre solution reste performante et sécurisée dans la durée.",
  },
  {
    q: "Comment se déroule un premier rendez-vous ?",
    r: "Un échange gratuit et sans engagement, en visio ou en présentiel, pour comprendre vos objectifs et identifier les pistes à plus fort impact. Vous repartez avec des premières recommandations.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-soft py-20 md:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          kicker="Questions fréquentes"
          title="Tout ce que vous vous demandez"
          center
        />
        <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-lg leading-none text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted">{item.r}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
