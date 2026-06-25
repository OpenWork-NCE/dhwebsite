import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import LogoCloud from "@/components/visuals/LogoCloud";
import { HOME_REINVENTION, SITE } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <Container className="relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <Reveal>
            <p className="eyebrow text-accent">{HOME_REINVENTION.hero.kicker}</p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-black leading-[0.98] md:text-7xl xl:text-8xl">
              {HOME_REINVENTION.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
              {HOME_REINVENTION.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={SITE.rdvUrl} variant="primary" arrow>
                Lancer une mission
              </Button>
              <Button href="/expertises" variant="outlineLight">
                Explorer nos services
              </Button>
            </div>
            <p className="mt-8 max-w-xl border-l-2 border-accent pl-4 text-sm leading-6 text-neutral-400">
              {HOME_REINVENTION.hero.proof}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative border border-white/15 bg-white/[0.03] p-5 shadow-2xl shadow-accent/20">
              <div className="absolute -right-1 -top-1 h-20 w-20 border-r-4 border-t-4 border-accent" />
              <div className="absolute -bottom-1 -left-1 h-20 w-20 border-b-4 border-l-4 border-cyan" />
              <div className="grid gap-3">
                {HOME_REINVENTION.signals.map((signal) => (
                  <div
                    key={signal.value}
                    className="grid grid-cols-[4rem_1fr] gap-4 border border-white/10 bg-black/60 p-4"
                  >
                    <span className="font-mono text-3xl font-black text-accent">{signal.value}</span>
                    <div>
                      <p className="font-display text-lg font-bold text-white">{signal.label}</p>
                      <p className="mt-1 text-sm leading-6 text-neutral-400">{signal.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-ink py-10 text-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow text-accent">Technologies maitrisees</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-400">
                Nous assemblons les meilleurs outils du marche avec des exigences de souverainete,
                de securite et d&apos;adoption terrain.
              </p>
            </div>
            <LogoCloud />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">Ce que nous faisons</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Tout ce qu&apos;il faut pour passer de l&apos;idee IA a la valeur mesuree.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Digital House combine conseil, technologie, cybersecurite, formation et operations.
              L&apos;objectif n&apos;est pas de lancer des pilotes de plus, mais de creer des systemes utiles,
              gouvernes et utilises par vos equipes. Nous partons des processus qui coutent du temps,
              des donnees deja disponibles et des decisions que vos managers doivent prendre plus vite.
              Cela permet de prioriser les cas d&apos;usage qui peuvent etre livres, mesures et operes sans
              immobiliser l&apos;organisation dans une transformation trop abstraite.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {HOME_REINVENTION.services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="dh-hover-card group min-h-64 p-6"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="mt-6 font-display text-2xl font-black">{service.title}</h3>
                    <p className="dh-card-muted mt-4 text-sm leading-7">
                      {service.text}
                    </p>
                  </div>
                  <span className="dh-card-link mt-8 font-mono text-sm">Voir l&apos;expertise</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-cyan">Notre difference</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
                Un cabinet plus proche du terrain, plus rapide que les grandes machines.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                Nous gardons l&apos;ambition d&apos;un grand cabinet de transformation, mais avec une approche
                plus directe : decisions courtes, prototypes utiles, architecture serieuse et transfert
                de competence a vos equipes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SITE.stats.map((stat) => (
                  <div key={stat.label} className="border border-white/15 p-5">
                    <p className="font-display text-4xl font-black text-accent">{stat.valeur}</p>
                    <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="border border-white/15 bg-white/[0.04]">
                <div className="relative h-[260px] overflow-hidden">
                  <Image src="/domains/Transformation roadmap.png" alt="Notre difference" width={600} height={260} className="h-[260px] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-accent/10" />
                </div>
                <div className="p-8 pt-6">
                  <p className="font-display text-2xl font-black">Souverainete par conception</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    Chaque choix technologique est pense selon la sensibilite des donnees, le risque,
                    le budget et la capacite d&apos;operation de votre organisation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f3f6] py-20 text-ink md:py-24">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-accent">Valeur concrete</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
                Des missions qui changent les operations, pas seulement les slides.
              </h2>
            </div>
            <Button href="/realisations" variant="outline">
              Voir les realisations
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HOME_REINVENTION.valueCases.map((item) => (
              <Reveal key={item.title}>
                <article className="dh-hover-card flex min-h-72 justify-between p-6">
                  <div>
                    <p className="font-mono text-sm font-bold text-accent">{item.metric}</p>
                    <h3 className="mt-5 font-display text-2xl font-black">{item.title}</h3>
                    <p className="dh-card-muted mt-4 text-sm leading-7">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet relative overflow-hidden py-20 md:py-24">
        <div className="grain" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="eyebrow">Passer a l&apos;action</p>
              <h2 className="dh-mobile-cta-title mt-4 max-w-4xl font-display font-black md:text-7xl">
                Votre prochaine transformation doit produire plus qu&apos;un plan.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8">
                Parlons de vos priorites IA, data, cyber ou formation. Premier echange sans
                engagement, avec une lecture claire des prochaines etapes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={SITE.rdvUrl} variant="dark" arrow>
                  Prendre rendez-vous
                </Button>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
