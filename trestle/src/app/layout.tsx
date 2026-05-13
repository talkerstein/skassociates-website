import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Permit-fresh contractor leads. Exclusive for 7 days.`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Trestle" }],
  keywords: [
    "contractor leads Miami",
    "permit leads",
    "construction permit data",
    "subcontractor leads",
    "electrical contractor leads",
    "Miami-Dade permits",
    "roofing leads",
    "HVAC leads",
    "plumbing leads",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — Permit-fresh contractor leads. Exclusive for 7 days.`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Permit-fresh contractor leads`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bone-50 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-bone-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
