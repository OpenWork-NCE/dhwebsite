import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FeatureRow({
  eyebrow,
  title,
  text,
  bullets,
  visual,
  reversed = false,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  visual: React.ReactNode;
  reversed?: boolean;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <Container className="py-14 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reversed ? "lg:order-2" : ""}>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px]">
                <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-accent/12 text-accent">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-ink/85">{b}</span>
              </li>
            ))}
          </ul>
          <Link
            href={ctaHref}
            className="link-sweep mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
          <div className="relative">
            <div className="mesh opacity-60" />
            <div className="relative float">{visual}</div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
