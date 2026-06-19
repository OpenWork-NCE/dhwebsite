"use client";
import { useState } from "react";
import Image from "next/image";
import { realisations } from "@/data/realisations";
import { secteurs } from "@/data/secteurs";
import SceneIllustration from "@/components/visuals/SceneIllustration";

export default function RealisationsGrid() {
  const [filtre, setFiltre] = useState<string | null>(null);
  const liste = filtre ? realisations.filter((r) => r.secteur === filtre) : realisations;
  const secteurTitre = (slug: string) => secteurs.find((s) => s.slug === slug)?.titre ?? slug;
  const secteurScene = (slug: string) => secteurs.find((s) => s.slug === slug)?.scene ?? "spark";

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFiltre(null)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
            filtre === null ? "border-black bg-black text-white" : "border-line hover:border-black"
          }`}
        >
          Tous
        </button>
        {secteurs.map((s) => (
          <button
            key={s.slug}
            onClick={() => setFiltre(s.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filtre === s.slug ? "border-black bg-black text-white" : "border-line hover:border-black"
            }`}
          >
            {s.titre}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {liste.map((r) => (
          <article key={r.slug} className="dh-hover-card group min-h-96">
            <div className="relative overflow-hidden border-b border-line group-hover:border-white/10">
              {r.image ? (
                <>
                  <Image
                    src={r.image}
                    alt={r.titre}
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-accent/5" />
                </>
              ) : (
                <SceneIllustration scene={secteurScene(r.secteur)} className="h-[200px] w-full" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow text-accent">{secteurTitre(r.secteur)}</p>
              <p className="mt-4 font-display text-2xl font-black leading-tight">{r.titre}</p>
              <p className="dh-card-muted mt-3 flex-1 text-sm leading-7">{r.resume}</p>
              {r.stack && r.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.stack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <p className="dh-card-link mt-5 text-sm">Resultat : {r.resultat}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
