import type { MetadataRoute } from "next";
import { poles } from "@/data/poles";
import { produits } from "@/data/produits";
import { secteurs } from "@/data/secteurs";
import { getArticles } from "@/lib/articles";

const BASE = "https://dhcompany.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const statiques = [
    "",
    "/expertises",
    "/souverainete",
    "/secteurs",
    "/produits",
    "/academy",
    "/ressources",
    "/realisations",
    "/actualites",
    "/agenda",
    "/a-propos",
    "/contact",
  ];
  return [
    ...statiques.map((p) => ({ url: `${BASE}${p}` })),
    ...poles.map((p) => ({ url: `${BASE}/expertises/${p.slug}` })),
    ...produits.map((p) => ({ url: `${BASE}/produits/${p.slug}` })),
    ...secteurs.map((s) => ({ url: `${BASE}/secteurs/${s.slug}` })),
    ...getArticles().map((a) => ({ url: `${BASE}/actualites/${a.slug}` })),
  ];
}
