import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribution & Wholesale | S. Kopstick & Associates",
  description:
    "Spire implementation and support for distribution and wholesale companies. Real-time inventory, multi-warehouse management, and automated reporting.",
};

export default function DistributionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
