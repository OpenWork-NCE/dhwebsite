import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/data/site";
import { BookOpen, Users, Award, Clock, Monitor, Briefcase } from "lucide-react";

export const metadata = { title: "Academy" };

const CATALOGUE = [
  { theme: "Intelligence artificielle", cours: "ChatGPT, Claude, Copilot, agents IA, prompt engineering, evaluation et securite des modeles", icon: Monitor },
  { theme: "Data & analytics", cours: "SQL, Python, Databricks, Power BI, dashboards executifs, gouvernance et qualite des donnees", icon: Briefcase },
  { theme: "Cloud & DevOps", cours: "Docker, Git, APIs, observabilite, fondamentaux cloud, architecture hybride et souveraine", icon: Monitor },
  { theme: "Automation & no-code", cours: "n8n, Make, Bubble, Lovable, Retool, workflows metier et orchestration d'agents", icon: Clock },
  { theme: "Cyber & conformite", cours: "Cyber hygiene, RGPD, NIS2, AI Act, protection des donnees, audit de maturite et resilience", icon: Award },
  { theme: "Experience & transformation", cours: "UX/UI, adoption, change management, marketing IA, design thinking et conduite de projet", icon: Users },
];

const FORMATS = [
  { titre: "Executive briefing", duree: "2h", desc: "Comprendre l'IA et ses implications strategiques pour decider vite et bien." },
  { titre: "Formation intra-entreprise", duree: "1-3 jours", desc: "Parcours adaptes a vos outils, vos donnees et vos cas d'usage reels." },
  { titre: "Sessions en ligne", duree: "4h", desc: "Formats courts et actionables, avec exercices pratiques et livrables." },
  { titre: "Parcours certifiant", duree: "4-12 semaines", desc: "Programmes complets avec evaluation, certification et suivi post-formation." },
];

const CHIFFRES = [
  { valeur: "1 000+", label: "professionnels formes" },
  { valeur: "20-30%", label: "d'efficacite operationnelle gagnee" },
  { valeur: "96%", label: "de satisfaction participants" },
  { valeur: "6", label: "domaines de formation" },
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

      {/* Chiffres */}
      <section className="border-y border-line bg-[#f3f3f6] py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-4">
            {CHIFFRES.map((c) => (
              <div key={c.label} className="text-center">
                <p className="font-display text-4xl font-black text-accent">{c.valeur}</p>
                <p className="mt-2 text-sm text-muted">{c.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Catalogue */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="eyebrow text-accent">Catalogue</p>
              </div>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                Apprendre par les usages, pas par les concepts seuls.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Chaque formation relie un outil, un processus et une responsabilite metier. Les
              participants repartent avec des workflows, prompts, tableaux de bord ou plans
              d&apos;adoption utilisables. Nous adaptons le niveau technique au public, du comite de
              direction aux equipes operationnelles.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {CATALOGUE.map((c, index) => {
              const Icon = c.icon;
              return (
                <article key={c.theme} className="dh-hover-card min-h-56 p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="font-mono text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-2xl font-black">{c.theme}</p>
                  <p className="dh-card-muted mt-4 text-sm leading-7">{c.cours}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Formats */}
      <section className="bg-black py-20 text-white md:py-24">
        <Container>
          <p className="eyebrow text-accent">Formats</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
            Du brief dirigeant au parcours certifiant.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Nous adaptons le format a votre contexte : urgence, nombre de participants, niveau
            technique, et objectifs de montee en competence.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {FORMATS.map((f, i) => (
              <article key={f.titre} className="dh-hover-card dh-hover-card-dark min-h-56 p-6">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <p className="mt-4 font-display text-xl font-black">{f.titre}</p>
                <p className="mt-1 text-xs font-semibold text-accent">{f.duree}</p>
                <p className="dh-card-muted mt-3 text-sm leading-7">{f.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Approche pedagogique */}
      <section className="bg-white py-20 text-ink md:py-24">
        <Container className="max-w-4xl">
          <p className="eyebrow text-accent">Notre approche</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
            Une pedagogie operationnelle, pas academique.
          </h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5">
              <div>
                <p className="font-display text-lg font-bold">Cas reels, pas de slides generiques</p>
                <p className="mt-1 text-sm text-muted">Nous travaillons sur vos donnees, vos processus et vos outils. Les exercices sont directement applicables le lundi suivant.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5">
              <div>
                <p className="font-display text-lg font-bold">Formateurs praticiens</p>
                <p className="mt-1 text-sm text-muted">Nos formateurs sont aussi consultants en mission. Ils connaissent les contraintes terrain, les budgets et les resistances au changement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5">
              <div>
                <p className="font-display text-lg font-bold">Livrables et suivi</p>
                <p className="mt-1 text-sm text-muted">Chaque session produit des livrables concrets (prompts, workflows, dashboards) et un plan d&apos;adoption post-formation.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="dh-cta-violet py-16">
        <Container className="grid gap-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <p className="eyebrow">Montee en competence</p>
            <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
              Construisons votre programme Academy.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/70">
              Briefing gratuit pour definir vos priorites, votre public et vos premiers modules.
            </p>
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
