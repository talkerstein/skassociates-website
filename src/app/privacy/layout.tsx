import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | S. Kopstick & Associates",
  description:
    "How S. Kopstick & Associates collects, uses, and protects your personal information, including your rights under Canada's PIPEDA.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
