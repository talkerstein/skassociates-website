import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | S. Kopstick & Associates",
  description:
    "Specialized Spire and Adagio consulting for distribution, service businesses, and not-for-profit organizations across Canada.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
