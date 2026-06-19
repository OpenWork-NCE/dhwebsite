// Mockup d'interface "analytics IA" — composition originale en SVG/CSS.
export default function MockDashboard() {
  const bars = [38, 52, 44, 70, 60, 84, 76];
  return (
    <div className="grid grid-cols-[120px_1fr] gap-0">
      {/* Sidebar */}
      <div className="hidden flex-col gap-2 border-r border-line bg-soft/60 p-4 sm:flex">
        <div className="h-2.5 w-16 rounded bg-ink/80" />
        {["Vue d'ensemble", "Automations", "Modèles", "Rapports"].map((l, i) => (
          <div
            key={l}
            className={`mt-1 flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
              i === 0 ? "bg-accent/10 text-accent" : "text-muted"
            }`}
          >
            <span className="h-2 w-2 rounded-sm bg-current opacity-60" />
            {l}
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="eyebrow text-accent">Productivité IA</div>
            <div className="mt-1 text-lg font-extrabold tracking-tight">+212 %</div>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-soft px-2.5 py-1 text-[10px] text-muted">7 j</span>
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] text-white">30 j</span>
          </div>
        </div>
        {/* Chart */}
        <div className="mt-5 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-t-md bg-soft">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-accent to-accent-warm"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        {/* Stat cards */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { k: "Tâches auto.", v: "1 248" },
            { k: "Heures gagnées", v: "326 h" },
            { k: "Satisfaction", v: "98 %" },
          ].map((c) => (
            <div key={c.k} className="rounded-lg border border-line p-2.5">
              <div className="text-[9px] uppercase tracking-wide text-muted">{c.k}</div>
              <div className="mt-0.5 text-sm font-bold">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
