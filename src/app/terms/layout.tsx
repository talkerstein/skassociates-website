import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | S. Kopstick & Associates",
  description:
    "The terms governing your use of the S. Kopstick & Associates website, including intellectual property, disclaimers, and governing law.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
