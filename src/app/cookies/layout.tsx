import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Statement | S. Kopstick & Associates",
  description:
    "How the S. Kopstick & Associates website uses cookies and similar technologies, and how you can manage them.",
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
