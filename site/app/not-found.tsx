import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-5 text-center text-white">
      <p className="eyebrow text-accent">Erreur 404</p>
      <h1 className="mt-5 max-w-2xl font-display text-5xl font-black leading-none md:text-7xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-6 max-w-md text-neutral-400">
        Le lien est peut-etre obsolete, ou la page a ete deplacee pendant la transformation du site.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Retour a l&apos;accueil
        </Button>
      </div>
    </div>
  );
}
