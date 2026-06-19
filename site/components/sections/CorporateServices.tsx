import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { corporateServices } from "@/data/services";

export default function CorporateServices({
  dark = false,
  limit,
}: {
  dark?: boolean;
  limit?: number;
}) {
  const services = typeof limit === "number" ? corporateServices.slice(0, limit) : corporateServices;

  return (
    <section className={dark ? "bg-black py-20 text-white md:py-24" : "bg-white py-20 text-ink md:py-24"}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-accent">Services de transformation</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
              Un portefeuille complet pour reinventer vos operations.
            </h2>
          </div>
          <p className={dark ? "max-w-2xl text-lg leading-8 text-neutral-300" : "max-w-2xl text-lg leading-8 text-muted"}>
            Nous couvrons les grandes capacites attendues d&apos;un cabinet de transformation :
            strategie, IA, data, cloud, cyber, experience client, operations, finance, talent et
            durabilite. Chaque offre est dimensionnee pour une PME, une institution, un groupe en
            croissance ou une organisation internationale qui veut avancer vite sans perdre la maitrise
            de ses donnees, de ses processus et de ses choix technologiques.
          </p>
        </div>

        <div className={dark ? "mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4" : "mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4"}>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 4) * 0.03}>
              <Link
                href={service.href}
                className={dark ? "dh-hover-card dh-hover-card-dark group min-h-72 justify-between p-5" : "dh-hover-card group min-h-72 justify-between p-5"}
              >
                <div>
                  <span className={dark ? "font-mono text-xs text-neutral-500 group-hover:text-white/70" : "font-mono text-xs text-muted group-hover:text-white/70"}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-black">{service.title}</h3>
                  <p className="dh-card-muted mt-3 text-sm leading-6">
                    {service.short}
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  {service.offerings.slice(0, 3).map((offering) => (
                    <li key={offering} className="flex items-start gap-2 text-xs leading-5">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent group-hover:bg-white" />
                      <span className="dh-card-muted">{offering}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
