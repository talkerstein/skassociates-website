import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Samuel Kopstick | S. Kopstick & Associates",
  description:
    "Founder-led Spire and Adagio consulting. over 30 years of hands-on experience helping businesses across Canada get real value from their accounting software.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
