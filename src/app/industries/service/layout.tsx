import type { Metadata } from "next";

const title = "Service & Professional Organizations | S. Kopstick & Associates";
const description =
  "Spire and Adagio consulting for service businesses. Job costing, project tracking, billing workflows, and financial reporting.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "service business accounting",
    "job costing",
    "project tracking",
    "professional services billing",
    "Spire service",
    "Adagio service",
  ],
  alternates: { canonical: "/industries/service" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/industries/service",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Service and professional organization consulting by S. Kopstick & Associates",
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

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
