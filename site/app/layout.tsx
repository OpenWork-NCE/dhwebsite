import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-ff",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhcompany.pro"),
  title: {
    default: "Digital House - Cabinet de transformation IA",
    template: "%s | Digital House",
  },
  description:
    "IA, data, cloud, cybersecurite et formation : Digital House accompagne les entreprises dans leur transformation numerique.",
  icons: {
    icon: "/dhc.png",
    apple: "/dhc.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Digital House",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body flex min-h-screen flex-col bg-white text-ink antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
