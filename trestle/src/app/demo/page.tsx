import type { Metadata } from "next";
import {
  Clock,
  CheckCircle2,
  Play,
  Workflow,
  Database,
  Lock,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { DashboardPreview } from "@/components/DashboardPreview";
import { SevenDayStamp } from "@/components/SevenDayStamp";

export const metadata: Metadata = {
  title: "Book a 15-minute walkthrough",
  description:
    "15 minutes. We walk you through Trestle live: real sealed active projects in your trade, the 7-day exclusivity flow, and pricing math. Pick a time.",
};

export default function DemoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionLabel variant="spark">Live walkthrough</SectionLabel>
              <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[60px]">
                15 minutes. Your trade.
                <br />
                Real active projects.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-[18px] leading-relaxed text-ink-700">
                We&apos;ll share screen, walk you through Trestle live, and
                show three real sealed active projects in your trade and
                territory. You&apos;ll see the data quality, the exclusivity
                flow, and how the seal expires. No pitch deck, no closing
                script.
              </p>

              <ul className="mt-8 space-y-3 text-[15px] text-ink-800">
                {[
                  "See real, current active projects in your trade",
                  "Walk through the 7-day seal in the live dashboard",
                  "ROI math on your specific average job value",
                  "Pricing, SLA, and integration questions answered live",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forge-500" strokeWidth={2.25} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="#book" variant="primary" size="lg" withArrow>
                  Book my demo
                </LinkButton>
                <LinkButton href="/get-started" variant="secondary" size="lg">
                  Or skip the demo — sign up now
                </LinkButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DashboardPreview />
              <div className="-mt-12 flex justify-end pr-2">
                <SevenDayStamp size={130} variant="spark" rotate={6} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-950 py-10 text-bone-100">
        <Container size="wide">
          <ul className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-4">
            {[
              { i: Clock, k: "15 min", v: "video call · zoom or meet" },
              { i: Play, k: "Live screen-share", v: "no canned demo deck" },
              { i: Database, k: "Real records", v: "from your trade & county" },
              { i: Lock, k: "Sealed examples", v: "you see the seal in action" },
            ].map((s) => (
              <li key={s.k} className="flex items-start gap-3">
                <s.i className="mt-1 h-5 w-5 shrink-0 text-spark-400" strokeWidth={2} />
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-300">
                    {s.v}
                  </p>
                  <p className="text-[15px] font-semibold text-bone-50">{s.k}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="book" className="scroll-mt-20 bg-bone-50 py-20 sm:py-28">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Pick a time</SectionLabel>
              <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
                Tell us about you. We&apos;ll reach out with 3 time slots.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-700">
                We do demos in the morning (8–10am ET) and evening (6–8pm ET)
                so you can fit one between job sites. Most subs book a slot
                same week.
              </p>
              <ul className="mt-7 space-y-2.5 text-[14.5px] text-ink-700">
                <li>· One business day to confirm time</li>
                <li>· No card needed, no contract pressure</li>
                <li>· Demo records you can rewatch</li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <LeadCaptureForm variant="full" ctaLabel="Request my demo" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
