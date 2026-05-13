import type { Metadata } from "next";

const title = "Industries We Serve | S. Kopstick & Associates";
const description =
  "Specialized Spire and Adagio consulting for distribution, service businesses, and not-for-profit organizations across Canada.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "industry-specific accounting",
    "distribution accounting",
    "nonprofit accounting",
    "service business accounting",
    "Spire industries",
    "Adagio industries",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/industries",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industries served by S. Kopstick & Associates",
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

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
