import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not-for-Profit Organizations | S. Kopstick & Associates",
  description:
    "Adagio fund accounting for nonprofits. Grant tracking, donor reporting, board financials, and audit readiness configured by an expert.",
};

export default function NonprofitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
