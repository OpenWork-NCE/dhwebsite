import Image from "next/image";
import Container from "@/components/ui/Container";
import SceneIllustration from "@/components/visuals/SceneIllustration";
import TechBackground from "@/components/visuals/TechBackground";

type Scene = Parameters<typeof SceneIllustration>[0]["scene"];

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  scene = "ai",
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  scene?: Scene;
  image?: string;
  tint?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <TechBackground />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-none md:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{subtitle}</p>}
        </div>
        <div className="relative hidden h-[400px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl shadow-accent/10 lg:block">
          {image ? (
            <>
              <Image src={image} alt={eyebrow} width={600} height={400} className="h-[400px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-accent/10" />
            </>
          ) : (
            <SceneIllustration scene={scene} tone="light" className="h-[400px] w-full" />
          )}
        </div>
      </Container>
    </section>
  );
}
