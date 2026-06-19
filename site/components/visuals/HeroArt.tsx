// Illustration abstraite originale, déclinable par teinte. Aucune dépendance externe.
const PALETTES: Record<string, [string, string]> = {
  accent: ["#3ea6ff", "#7cc7ff"],
  blue: ["#2f6bff", "#7c5cff"],
  violet: ["#7c5cff", "#3ea6ff"],
  green: ["#0e9f6e", "#2f6bff"],
  ink: ["#3a3a3f", "#0b1d3a"],
};

export default function HeroArt({
  variant = "accent",
  className = "",
}: {
  variant?: keyof typeof PALETTES;
  className?: string;
}) {
  const [c1, c2] = PALETTES[variant] ?? PALETTES.accent;
  const id = `g-${variant}`;
  return (
    <svg viewBox="0 0 460 380" className={className} role="img" aria-label="Illustration" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${id}-r`} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor={c1} stopOpacity="0.35" />
          <stop offset="1" stopColor={c1} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo */}
      <circle cx="250" cy="160" r="170" fill={`url(#${id}-r)`} />

      {/* anneaux orbitaux */}
      <ellipse cx="250" cy="180" rx="160" ry="92" stroke={c1} strokeOpacity="0.25" strokeWidth="1.5" />
      <ellipse cx="250" cy="180" rx="110" ry="62" stroke={c2} strokeOpacity="0.3" strokeWidth="1.5" />

      {/* grande pastille gradient */}
      <circle cx="250" cy="170" r="58" fill={`url(#${id})`} />
      <circle cx="250" cy="170" r="58" fill="#fff" fillOpacity="0.06" />

      {/* carte flottante 1 */}
      <g transform="rotate(-8 120 110)">
        <rect x="70" y="78" width="120" height="64" rx="12" fill="#fff" stroke="#e7e6e3" />
        <rect x="84" y="94" width="46" height="8" rx="4" fill={c1} />
        <rect x="84" y="110" width="78" height="6" rx="3" fill="#e7e6e3" />
        <rect x="84" y="122" width="58" height="6" rx="3" fill="#e7e6e3" />
      </g>

      {/* carte flottante 2 */}
      <g transform="rotate(10 360 250)">
        <rect x="300" y="220" width="120" height="74" rx="12" fill="#15151a" stroke="#ffffff" strokeOpacity="0.18" />
        <circle cx="320" cy="240" r="8" fill={c2} />
        <rect x="336" y="236" width="64" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.85" />
        <rect x="316" y="258" width="86" height="6" rx="3" fill="#ffffff" fillOpacity="0.25" />
        <rect x="316" y="272" width="64" height="6" rx="3" fill="#ffffff" fillOpacity="0.25" />
      </g>

      {/* points orbitaux */}
      <circle cx="90" cy="180" r="6" fill={c2} />
      <circle cx="410" cy="150" r="5" fill={c1} />
      <circle cx="250" cy="78" r="5" fill={c1} />
      <circle cx="250" cy="262" r="6" fill={c2} />
    </svg>
  );
}
