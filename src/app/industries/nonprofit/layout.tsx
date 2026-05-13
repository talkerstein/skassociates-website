import type { Metadata } from "next";

const title = "Not-for-Profit Organizations | S. Kopstick & Associates";
const description =
  "Adagio fund accounting for nonprofits. Grant tracking, donor reporting, board financials, and audit readiness configured by an expert.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "nonprofit accounting",
    "fund accounting",
    "Adagio nonprofit",
    "grant tracking",
    "donor reporting",
    "charity accounting Canada",
  ],
  alternates: { canonical: "/industries/nonprofit" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/industries/nonprofit",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Not-for-profit consulting by S. Kopstick & Associates",
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

export default function NonprofitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
