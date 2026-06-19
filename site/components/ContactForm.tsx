"use client";
import { useState } from "react";

type Statut = "idle" | "envoi" | "ok" | "erreur";

export default function ContactForm() {
  const [statut, setStatut] = useState<Statut>("idle");
  const [erreur, setErreur] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.nom?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatut("erreur");
      setErreur("Merci de remplir tous les champs.");
      return;
    }
    setStatut("envoi");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatut("ok");
        form.reset();
      } else {
        setStatut("erreur");
        setErreur(json.erreur ?? "Une erreur est survenue.");
      }
    } catch {
      setStatut("erreur");
      setErreur("Impossible d'envoyer le message. Reessayez ou ecrivez-nous directement.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="nom" className="text-sm font-semibold">
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          required
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          placeholder="vous@entreprise.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          placeholder="Decrivez votre objectif, votre contexte et vos contraintes."
        />
      </div>
      <button
        type="submit"
        disabled={statut === "envoi"}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8700d4] disabled:opacity-60"
      >
        {statut === "envoi" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
      {statut === "ok" && (
        <p className="text-sm font-medium text-green-700">
          Message envoye. Nous revenons vers vous sous 24h ouvrees.
        </p>
      )}
      {statut === "erreur" && <p className="text-sm font-medium text-accent">{erreur}</p>}
    </form>
  );
}
