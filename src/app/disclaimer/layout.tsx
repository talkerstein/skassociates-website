import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Disclaimer | S. Kopstick & Associates",
  description:
    "Important information about the content on the S. Kopstick & Associates website, including trademarks, partner status, and results disclaimers.",
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
