import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Spire vs Adagio Fit Assessment | S. Kopstick & Associates",
  description:
    "A short, expert-built assessment that recommends whether Spire or Adagio is the better fit for your business — based on your industry, volume, team, and operational needs.",
  openGraph: {
    title: "Spire vs Adagio Fit Assessment",
    description:
      "Find out which platform fits your business in under 3 minutes.",
    type: "website",
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
