import type { Metadata } from "next";

const title = "Distribution & Wholesale | S. Kopstick & Associates";
const description =
  "Spire implementation and support for distribution and wholesale companies. Real-time inventory, multi-warehouse management, and automated reporting.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "distribution accounting",
    "wholesale software",
    "Spire distribution",
    "multi-warehouse inventory",
    "real-time inventory",
  ],
  alternates: { canonical: "/industries/distribution" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/industries/distribution",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Distribution and wholesale consulting by S. Kopstick & Associates",
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

export default function DistributionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
