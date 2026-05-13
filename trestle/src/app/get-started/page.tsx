import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { GetStartedFlow } from "./GetStartedFlow";

export const metadata: Metadata = {
  title: "Get instant access — Stripe-secured signup",
  description:
    "Sign up for Trestle in under 5 minutes. Stripe-secured checkout. Pick a plan, trade, and territory — and start receiving sealed active projects in your dashboard.",
};

export default function GetStartedPage() {
  return (
    <section className="bg-bone-50 pb-24 pt-10 sm:pt-12">
      <Container size="wide">
        <Suspense
          fallback={
            <div className="py-32 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-ink-500">
              Loading checkout…
            </div>
          }
        >
          <GetStartedFlow />
        </Suspense>
      </Container>
    </section>
  );
}
