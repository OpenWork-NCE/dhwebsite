import Image from "next/image";
import { SITE } from "@/data/site";

const PARTNER_LOGOS = [
  { name: "Brevo", src: "/partners/Brevo-Partners-2025.png" },
  { name: "AIOSEO", src: "/partners/aioseocoupon-copy.webp" },
  { name: "Monica", src: "/partners/monica-color.webp" },
  { name: "tl;dv", src: "/partners/tldv-Logo.webp" },
];

export default function LogoCloud() {
  const items = [...SITE.partenaires, ...SITE.partenaires];
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="relative overflow-hidden">
      {/* fondus latéraux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Logos images partenaires */}
      <div className="marquee mb-6 gap-12">
        {logos.map((logo, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Noms texte existants */}
      <div className="marquee gap-12">
        {items.map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-lg font-bold tracking-tight text-neutral-400"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
