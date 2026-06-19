import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Le dépôt git est à la racine du projet (un cran au-dessus de site/),
  // et un package-lock.json traîne dans le profil utilisateur : on fixe
  // explicitement la racine Turbopack sur ce dossier pour lever l'ambiguïté.
  turbopack: {
    root: path.resolve(),
  },
};

export default nextConfig;
