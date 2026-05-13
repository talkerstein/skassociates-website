import type { Metadata } from "next";

const title = "Case Studies | S. Kopstick & Associates";
const description =
  "Real results from Spire and Adagio implementations. See how we have helped distribution companies, service firms, and nonprofits transform their operations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Spire case studies",
    "Adagio case studies",
    "accounting software success stories",
    "ERP implementation results",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/case-studies",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Case studies from S. Kopstick & Associates",
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
