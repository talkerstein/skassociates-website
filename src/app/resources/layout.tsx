import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources & Insights | S. Kopstick & Associates",
  description:
    "Plain-language guides, use cases, and practical insights on Spire, Adagio, BusinessVision migrations, and the realities of running better business systems.",
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
