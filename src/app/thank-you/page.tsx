import type { Metadata } from "next";
import { ThankYouContent } from "./thank-you-content";

export const metadata: Metadata = {
  title: "Thank You | S. Kopstick & Associates",
  description:
    "Thank you for reaching out to S. Kopstick & Associates. Samuel typically responds within one business day.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
