import {
  BrainCircuit,
  RefreshCcw,
  ShieldCheck,
  GraduationCap,
  Radio,
  Scale,
  ShoppingBag,
  BarChart3,
  HeartPulse,
  Landmark,
  BookOpen,
  Code2,
  Sparkles,
} from "lucide-react";

export type Scene =
  | "ai"
  | "transform"
  | "shield"
  | "learn"
  | "signal"
  | "scale"
  | "cart"
  | "chart"
  | "heart"
  | "building"
  | "book"
  | "code"
  | "spark";

const ICON_MAP: Record<Scene, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  ai: BrainCircuit,
  transform: RefreshCcw,
  shield: ShieldCheck,
  learn: GraduationCap,
  signal: Radio,
  scale: Scale,
  cart: ShoppingBag,
  chart: BarChart3,
  heart: HeartPulse,
  building: Landmark,
  book: BookOpen,
  code: Code2,
  spark: Sparkles,
};

export default function SceneIllustration({
  scene,
  tone = "navy",
  className = "",
}: {
  scene: Scene;
  tone?: "navy" | "light" | "dark";
  className?: string;
}) {
  const Icon = ICON_MAP[scene];
  const color = tone === "light" ? "text-[#8fd0ff]" : tone === "dark" ? "text-[#0b1d3a]" : "text-[#0b1d3a]";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Icon className={`h-40 w-40 ${color}`} strokeWidth={1} />
    </div>
  );
}
