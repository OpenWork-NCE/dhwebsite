export default function SectionHeading({
  kicker,
  title,
  subtitle,
  dark = false,
  center = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      <p className="eyebrow text-accent">{kicker}</p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.1] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${center ? "mx-auto" : ""} max-w-2xl ${
            dark ? "text-neutral-400" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
