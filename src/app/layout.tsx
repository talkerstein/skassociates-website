import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EolBanner } from "@/components/eol-banner";

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

export const metadata: Metadata = {
  title: "S. Kopstick & Associates | Spire & Adagio Implementation Experts",
  description:
    "Expert implementation, training, and ongoing support for Spire and Adagio accounting software. Toronto-based, serving businesses across Canada.",
  keywords: [
    "Spire software",
    "Adagio accounting",
    "accounting software implementation",
    "business software consulting",
    "Toronto",
    "Canada",
  ],
  openGraph: {
    title: "S. Kopstick & Associates | Spire & Adagio Experts",
    description:
      "Expert implementation, training, and support for Spire and Adagio. Toronto-based, serving businesses across Canada.",
    type: "website",
    locale: "en_CA",
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
