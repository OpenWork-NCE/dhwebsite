import { SITE } from "@/data/site";

export default function LogoCloud() {
  const items = [...SITE.partenaires, ...SITE.partenaires];
  return (
    <div className="relative overflow-hidden">
      {/* fondus latéraux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
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
