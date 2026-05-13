import type { Metadata } from "next";

const title = "About Samuel Kopstick | S. Kopstick & Associates";
const description =
  "Founder-led Spire and Adagio consulting. Over 30 years of hands-on experience helping businesses across Canada get real value from their accounting software.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Samuel Kopstick",
    "Spire consultant",
    "Adagio consultant",
    "Toronto accounting consultant",
    "ERP consultant Canada",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    locale: "en_CA",
    url: "https://skassociates.ca/about",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Samuel Kopstick, founder of S. Kopstick & Associates",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
