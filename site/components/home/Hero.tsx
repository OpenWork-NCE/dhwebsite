import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-white px-5 py-20 text-center md:py-28">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Cabinet de transformation numérique
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Embrasser la technologie.
          <br />
          Embrasser l&apos;<span className="text-accent">ambition</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">{SITE.sousSlogan}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/services" variant="dark">
            Découvrir nos services
          </Button>
          <Button href={SITE.rdvUrl} variant="outline">
            Prendre rendez-vous
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-16 text-xs uppercase tracking-widest text-neutral-400">
          Ils nous font confiance
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-neutral-400">
          {SITE.partenaires.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
