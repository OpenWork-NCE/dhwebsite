import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { nom?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erreur: "Requête invalide." }, { status: 400 });
  }

  const nom = (body.nom ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!nom || !email || !message) {
    return NextResponse.json({ ok: false, erreur: "Tous les champs sont requis." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, erreur: "Adresse e-mail invalide." }, { status: 400 });
  }

  // V1 : journalisation serveur. Brancher Brevo (API transactionnelle) ici plus tard.
  console.log("[contact]", { nom, email, message: message.slice(0, 2000) });

  return NextResponse.json({ ok: true });
}
