"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/data/site";
import Button from "@/components/ui/Button";

const NAV = [
  {
    label: "Services",
    href: "/expertises",
    children: [
      { label: "Strategie & advisory", href: "/expertises/conseiller" },
      { label: "IA, data & integration", href: "/expertises/construire" },
      { label: "Managed services", href: "/expertises/operer" },
      { label: "Academy & adoption", href: "/expertises/former" },
      { label: "Ventures & produits", href: "/expertises/investir" },
    ],
  },
  {
    label: "Industries",
    href: "/secteurs",
    children: [
      { label: "Sante", href: "/secteurs/sante" },
      { label: "Industrie 4.0", href: "/secteurs/industrie" },
      { label: "Secteur public", href: "/secteurs/secteur-public" },
      { label: "PME & independants", href: "/secteurs/pme-independants" },
      { label: "Droit", href: "/secteurs/droit" },
      { label: "Education", href: "/secteurs/education" },
      { label: "Finance & FinTech", href: "/secteurs/finance" },
      { label: "Communication", href: "/secteurs/communication" },
    ],
  },
  { label: "Souverainete", href: "/souverainete", children: [] },
  {
    label: "Produits",
    href: "/produits",
    children: [
      { label: "FormIA", href: "/produits/formia" },
      { label: "Jurisis", href: "/produits/jurisis" },
      { label: "Indibot", href: "/produits/indibot" },
      { label: "ia4africa.org", href: "/produits/ia4africa" },
      { label: "Figmani.be", href: "/produits/figmani" },
      { label: "UXDesign.cm", href: "/produits/uxdesign-cm" },
    ],
  },
  { label: "Ressources", href: "/ressources", children: [] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50 bg-black text-white">
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[12px] md:px-10 lg:px-14">
          <span className="text-neutral-400">Digital House Company / AI, data, cyber, cloud</span>
          <Link href="/contact" className="hidden font-semibold text-accent hover:text-accent-warm sm:block">
            Contact
          </Link>
        </div>
      </div>

      <header className="border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/digitalhouse.png"
              alt="Digital House"
              width={140}
              height={36}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {NAV.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap font-display text-[15px] font-black uppercase text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg
                      className="mt-0.5 opacity-60 transition-transform group-hover:rotate-180"
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
                {item.children.length > 0 && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-80 border border-white/10 bg-[#0d0d12] p-2 shadow-xl shadow-black/40">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-3.5 py-2.5 text-sm font-semibold uppercase text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/actualites" className="font-display text-[15px] font-black uppercase text-neutral-300 hover:text-white">
              Insights
            </Link>
            <Button href={SITE.rdvUrl} variant="primary">
              Rendez-vous
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {open && (
          <nav className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-black px-5 pb-6 lg:hidden">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-white/10 py-3">
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="font-display text-lg font-black uppercase" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => setOpenSub(openSub === item.href ? null : item.href)}
                      aria-label={`Ouvrir ${item.label}`}
                      className="px-2 text-xl leading-none text-neutral-400"
                    >
                      {openSub === item.href ? "-" : "+"}
                    </button>
                  )}
                </div>
                {openSub === item.href &&
                  item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="mt-2 block pl-3 text-sm font-semibold uppercase text-neutral-400"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
              </div>
            ))}
            <Button href={SITE.rdvUrl} variant="primary">
              Prendre rendez-vous
            </Button>
          </nav>
        )}
      </header>
    </div>
  );
}
