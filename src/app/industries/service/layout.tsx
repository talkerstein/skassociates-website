import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Professional Organizations | S. Kopstick & Associates",
  description:
    "Spire and Adagio consulting for service businesses. Job costing, project tracking, billing workflows, and financial reporting.",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
