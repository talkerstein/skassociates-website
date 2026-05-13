import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | S. Kopstick & Associates",
  description:
    "Book a free consultation with Samuel Kopstick. Expert Spire and Adagio implementation, training, and support for businesses across Canada.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
