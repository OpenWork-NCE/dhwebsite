import { describe, expect, it } from "vitest";
import { poles } from "../data/poles";
import { produits } from "../data/produits";
import { secteurs } from "../data/secteurs";
import { realisations } from "../data/realisations";
import { HOME_REINVENTION } from "../data/site";
import { corporateServices } from "../data/services";

const secteurSlugs = new Set(secteurs.map((s) => s.slug));

function uniques(slugs: string[]) {
  return new Set(slugs).size === slugs.length;
}

describe("intégrité des données (modèle cabinet)", () => {
  it("slugs uniques dans chaque collection", () => {
    expect(uniques(poles.map((p) => p.slug))).toBe(true);
    expect(uniques(produits.map((p) => p.slug))).toBe(true);
    expect(uniques(secteurs.map((s) => s.slug))).toBe(true);
    expect(uniques(realisations.map((r) => r.slug))).toBe(true);
  });

  it("chaque pôle a une promesse, des practices et des formats", () => {
    for (const p of poles) {
      expect(p.promesse.length, p.slug).toBeGreaterThan(0);
      expect(p.practices.length, p.slug).toBeGreaterThan(0);
      expect(p.formats.length, p.slug).toBeGreaterThan(0);
    }
  });

  it("chaque secteur a des cas d'usage et des technologies", () => {
    for (const s of secteurs) {
      expect(s.casUsage.length, s.slug).toBeGreaterThan(0);
      expect(s.technologies.length, s.slug).toBeGreaterThan(0);
    }
  });

  it("le secteur de chaque réalisation existe", () => {
    for (const r of realisations) expect(secteurSlugs.has(r.secteur), r.slug).toBe(true);
  });

  it("comptes attendus", () => {
    expect(poles).toHaveLength(5);
    expect(produits).toHaveLength(6);
    expect(secteurs).toHaveLength(8);
  });

  it("la home reinvention expose les blocs corporate attendus", () => {
    expect(HOME_REINVENTION.services).toHaveLength(6);
    expect(HOME_REINVENTION.signals).toHaveLength(4);
    expect(HOME_REINVENTION.valueCases).toHaveLength(4);
    expect(HOME_REINVENTION.palette.accent).toBe("#a100ff");
  });

  it("les services corporate couvrent les offres de transformation attendues", () => {
    expect(corporateServices).toHaveLength(16);
    expect(corporateServices.map((s) => s.slug)).toContain("ia-data");
    expect(corporateServices.map((s) => s.slug)).toContain("cloud-plateformes");
    expect(corporateServices.map((s) => s.slug)).toContain("supply-chain");
    expect(corporateServices.every((s) => s.offerings.length >= 3)).toBe(true);
  });
});
