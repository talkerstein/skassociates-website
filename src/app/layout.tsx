import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EolBanner } from "@/components/eol-banner";
import { OrganizationSchema } from "@/components/seo/organization-schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

const SITE_URL = "https://skassociates.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "S. Kopstick & Associates | Spire & Adagio Implementation Experts",
  description:
    "Expert implementation, training, and ongoing support for Spire and Adagio accounting software. Toronto-based, serving businesses across Canada.",
  keywords: [
    "Spire software",
    "Adagio accounting",
    "accounting software implementation",
    "business software consulting",
    "BusinessVision migration",
    "Spire implementation",
    "Adagio implementation",
    "ERP consulting Canada",
    "Toronto",
    "Canada",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "S. Kopstick & Associates",
    title: "S. Kopstick & Associates | Spire & Adagio Implementation Experts",
    description:
      "Expert implementation, training, and ongoing support for Spire and Adagio accounting software. Toronto-based, serving businesses across Canada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "S. Kopstick & Associates — Spire & Adagio Implementation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Kopstick & Associates | Spire & Adagio Implementation Experts",
    description:
      "Expert implementation, training, and ongoing support for Spire and Adagio. Toronto-based, serving Canada.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="min-h-screen bg-ivory-50 text-navy-900 antialiased">
        <OrganizationSchema />
        {/* Locked top stack — EOL banner sits above the nav, both stay pinned */}
        <div className="fixed top-0 inset-x-0 z-50">
          <EolBanner />
          <Navigation />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
