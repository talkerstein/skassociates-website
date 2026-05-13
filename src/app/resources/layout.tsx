import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Resources & Insights | S. Kopstick & Associates";
const description =
  "Plain-language guides, use cases, and practical insights on Spire, Adagio, BusinessVision migrations, and the realities of running better business systems.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Spire resources",
    "Adagio resources",
    "BusinessVision migration guide",
    "accounting software guides",
    "ERP insights",
  ],
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/resources",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resources and insights from S. Kopstick & Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
