import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const title = "Spire vs Adagio Fit Assessment | S. Kopstick & Associates";
const description =
  "A short, expert-built assessment that recommends whether Spire or Adagio is the better fit for your business, based on your industry, volume, team, and operational needs.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Spire vs Adagio",
    "accounting software assessment",
    "Spire or Adagio",
    "software fit assessment",
  ],
  alternates: { canonical: "/assessment" },
  openGraph: {
    title: "Spire vs Adagio Fit Assessment",
    description:
      "Find out which platform fits your business in under 3 minutes.",
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/assessment",
    siteName: "S. Kopstick & Associates",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spire vs Adagio Fit Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spire vs Adagio Fit Assessment",
    description:
      "Find out which platform fits your business in under 3 minutes.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
};

export default function AssessmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
