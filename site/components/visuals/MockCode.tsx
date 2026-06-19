// Mockup "éditeur de code" — composition originale.
export default function MockCode() {
  const lines: { indent: number; tokens: [string, string][] }[] = [
    { indent: 0, tokens: [["text-violet", "export"], ["text-ink", " function "], ["text-blue", "Hero"], ["text-ink", "() {"]] },
    { indent: 1, tokens: [["text-violet", "return"], ["text-ink", " ("]] },
    { indent: 2, tokens: [["text-muted", "<section "], ["text-accent", "className"], ["text-ink", "="], ["text-emerald", "\"hero\""], ["text-muted", ">"]] },
    { indent: 3, tokens: [["text-muted", "<h1>"], ["text-ink", "Embrasser l'ambition"], ["text-muted", "</h1>"]] },
    { indent: 2, tokens: [["text-muted", "</section>"]] },
    { indent: 1, tokens: [["text-ink", ")"]] },
    { indent: 0, tokens: [["text-ink", "}"]] },
  ];
  return (
    <div className="bg-[#0b1d3a] p-5 font-mono text-[11px] leading-6">
      {lines.map((l, i) => (
        <div key={i} className="flex">
          <span className="w-6 select-none text-right text-neutral-600">{i + 1}</span>
          <span className="ml-3" style={{ paddingLeft: `${l.indent * 14}px` }}>
            {l.tokens.map(([cls, txt], j) => (
              <span
                key={j}
                className={
                  cls === "text-violet"
                    ? "text-violet-400"
                    : cls === "text-blue"
                      ? "text-sky-400"
                      : cls === "text-accent"
                        ? "text-accent"
                        : cls === "text-emerald"
                          ? "text-emerald-400"
                          : cls === "text-muted"
                            ? "text-neutral-500"
                            : "text-neutral-200"
                }
              >
                {txt}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
