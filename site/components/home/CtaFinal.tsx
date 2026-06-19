import Button from "@/components/ui/Button";
import { SITE } from "@/data/site";

export default function CtaFinal() {
  return (
    <section className="bg-accent px-5 py-16 text-center">
      <h2 className="text-3xl font-extrabold text-white md:text-4xl">
        Prêt à transformer votre organisation ?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-white/80">
        Premier échange gratuit et sans engagement : parlons de vos objectifs.
      </p>
      <div className="mt-6">
        <Button href={SITE.rdvUrl} variant="white">
          Prendre rendez-vous
        </Button>
      </div>
    </section>
  );
}
