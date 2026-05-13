import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | S. Kopstick & Associates",
  description:
    "Real results from Spire and Adagio implementations. See how we have helped distribution companies, service firms, and nonprofits transform their operations.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
