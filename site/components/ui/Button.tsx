"use client";
import Link from "next/link";

const BOOKING_URL = "https://meet.brevo.com/joelparfaitkuate/borderless?l=echanger-dun-projet";

const styles = {
  primary: "bg-accent text-white shadow-sm hover:bg-[#8700d4] hover:shadow-md",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-line text-ink hover:border-ink hover:bg-soft",
  outlineLight: "border border-white/25 text-white hover:bg-white/10",
  white: "bg-white text-ink hover:bg-neutral-100",
  ghost: "text-ink hover:bg-soft",
} as const;

export default function Button({
  href,
  variant = "primary",
  arrow = false,
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  arrow?: boolean;
  children: React.ReactNode;
}) {
  const className = `group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${styles[variant]}`;
  const isBrevo = href.includes("meet.brevo.com");
  const isExternal = href.startsWith("http") && !isBrevo;

  if (isBrevo) {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          // @ts-expect-error Brevo script loaded globally
          if (typeof BrevoBookingPage !== "undefined") {
            // @ts-expect-error Brevo script loaded globally
            BrevoBookingPage.initStaticButton({ url: BOOKING_URL });
          }
        }}
        className={className}
      >
        {children}
        {arrow && (
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        )}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        {arrow && (
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {arrow && (
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      )}
    </Link>
  );
}
