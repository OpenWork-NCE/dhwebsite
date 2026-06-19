import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";

export const metadata = { title: "Academy" };

const CATALOGUE = [
  { theme: "Intelligence artificielle", cours: "ChatGPT, Claude, Copilot, agents IA, prompt engineering" },
  { theme: "Data & analytics", cours: "SQL, Python, Databricks, Power BI, dashboards executifs" },
  { theme: "Cloud & DevOps", cours: "Docker, Git, APIs, observabilite et fondamentaux cloud" },
  { theme: "Automation & no-code", cours: "n8n, Make, Bubble, Lovable, Retool et workflows metier" },
  { theme: "Cyber & conformite", cours: "Cyber hygiene, RGPD, NIS2, AI Act et protection des donnees" },
  { theme: "Experience & transformation", cours: "UX/UI, adoption, change management et marketing IA" },
];

const FORMATS = [
  "Executive briefing pour dirigeants",
  "Formations intra et inter-entreprises",
  "Sessions en ligne de 4 heures",
  "Parcours certifiants et academies internes",
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital House Academy"
        title="Former les equipes pour que la transformation reste dans l'entreprise."
        subtitle="Des parcours concrets, bases sur vos cas reels, pour dirigeants, managers, equipes metier et profils techniques."
        scene="learn"
        image="/domains/AI strategy.png"
      />

      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">Catalogue</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Apprendre par les usages, pas par les concepts seuls.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Chaque formation relie un outil, un processus et une responsabilite metier. Les
              participants repartent avec des workflows, prompts, tableaux de bord ou plans
              d&apos;adoption utilisables. Nous adaptons le niveau technique au public, du comite de
              direction aux equipes operationnelles, et nous travaillons sur des exemples proches de
              leur quotidien pour accelerer l&apos;appropriation.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {CATALOGUE.map((c, index) => (
              <article key={c.theme} className="dh-hover-card min-h-56 p-6">
                <span className="font-mono text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-display text-2xl font-black">{c.theme}</p>
                <p className="dh-card-muted mt-4 text-sm leading-7">{c.cours}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <p className="eyebrow text-accent">Formats</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Du brief dirigeant au parcours certifiant.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {FORMATS.map((f, i) => (
              <article key={f} className="dh-hover-card dh-hover-card-dark min-h-48 p-6">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <p className="dh-card-muted mt-5 text-sm leading-7">{f}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <p className="eyebrow">Montee en competence</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              Construisons votre programme Academy.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Button href={SITE.rdvUrl} variant="dark" arrow>
              Planifier une session
            </Button>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {SITE.email}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
