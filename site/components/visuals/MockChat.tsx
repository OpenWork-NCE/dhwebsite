// Mockup "assistant juridique" — composition originale.
export default function MockChat() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[11px] font-bold text-white">
          J
        </span>
        <span className="text-sm font-bold">Jurisis</span>
        <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-medium text-green-700">
          En ligne
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-ink px-3.5 py-2 text-[11px] text-white">
          Quel est le délai de rétractation pour un achat en ligne ?
        </div>
        <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-soft px-3.5 py-2.5 text-[11px] leading-relaxed text-ink">
          Le délai légal de rétractation est de <strong>14 jours</strong> à compter de la réception
          du bien.
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="rounded-md bg-white px-2 py-0.5 text-[9px] text-accent ring-1 ring-line">
              Source : art. L221-18
            </span>
            <span className="rounded-md bg-white px-2 py-0.5 text-[9px] text-accent ring-1 ring-line">
              Code de la consommation
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-line px-3 py-2">
        <div className="h-2 w-2/3 rounded bg-soft" />
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-lg bg-accent text-white">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
