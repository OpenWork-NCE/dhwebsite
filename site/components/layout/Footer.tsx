"use client";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import Button from "@/components/ui/Button";

const COLS = [
  {
    titre: "Services",
    liens: [
      { label: "Strategie & advisory", href: "/expertises/conseiller" },
      { label: "IA, data & integration", href: "/expertises/construire" },
      { label: "Cybersecurite & souverainete", href: "/souverainete" },
      { label: "Managed services", href: "/expertises/operer" },
      { label: "Academy", href: "/academy" },
    ],
  },
  {
    titre: "Cabinet",
    liens: [
      { label: "Secteurs", href: "/secteurs" },
      { label: "A propos & modele", href: "/a-propos" },
      { label: "Realisations", href: "/realisations" },
      { label: "Ressources", href: "/ressources" },
    ],
  },
  {
    titre: "Produits",
    liens: [
      { label: "FormIA", href: "/produits/formia" },
      { label: "Jurisis", href: "/produits/jurisis" },
      { label: "Indibot", href: "/produits/indibot" },
      { label: "ia4africa.org", href: "/produits/ia4africa" },
      { label: "Figmani.be", href: "/produits/figmani" },
      { label: "UXDesign.cm", href: "/produits/uxdesign-cm" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-neutral-400">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="grid gap-8 border-b border-white/10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="eyebrow text-accent">Digital House Company</p>
            <p className="mt-4 max-w-2xl font-display text-4xl font-black leading-tight text-white md:text-5xl">
              Transformer l&apos;IA en avantage operationnel durable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href={SITE.rdvUrl} variant="primary">
              Parler de votre projet
            </Button>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div>
            <Image
              src="/digitalhouse.png"
              alt="Digital House"
              width={140}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm leading-7">{SITE.slogan}</p>
            <p className="mt-4 text-xs leading-6 text-neutral-500">
              {SITE.adresse}
              <br />
              TVA {SITE.tva}
            </p>
            <a
              href={SITE.linkedin}
              aria-label="LinkedIn"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
            >
              in
            </a>
          </div>
          {COLS.map((col) => (
            <div key={col.titre}>
              <p className="text-sm font-semibold text-white">{col.titre}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.liens.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <span>Copyright {new Date().getFullYear()} Digital House Company. Tous droits reserves.</span>
          <div className="flex gap-5">
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
            <Link href="/contact" className="hover:text-white">
              Mentions legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
