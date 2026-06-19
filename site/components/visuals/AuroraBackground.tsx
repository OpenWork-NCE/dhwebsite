// Fond animé "aurora" — dégradés en mouvement continu, façon vidéo. 100% CSS, sans dépendance.
export default function AuroraBackground({
  grid = true,
  className = "",
}: {
  grid?: boolean;
  className?: string;
}) {
  return (
    <div className={`aurora ${className}`} aria-hidden>
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      {grid && <div className="grid-overlay" />}
    </div>
  );
}
