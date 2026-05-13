import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | S. Kopstick & Associates",
  description:
    "Our commitment to making the S. Kopstick & Associates website accessible to everyone, including our work toward WCAG 2.1 AA and AODA compliance.",
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
