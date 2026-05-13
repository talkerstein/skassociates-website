import type { Metadata } from "next";

const title = "Contact | S. Kopstick & Associates";
const description =
  "Book a free consultation with Samuel Kopstick. Expert Spire and Adagio implementation, training, and support for businesses across Canada.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact Spire consultant",
    "Adagio consultant Toronto",
    "free consultation",
    "accounting software help",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://skassociates.ca/contact",
    siteName: "S. Kopstick & Associates",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact S. Kopstick & Associates",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
