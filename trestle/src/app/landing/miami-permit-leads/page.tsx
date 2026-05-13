import type { Metadata } from "next";
import {
  ShieldCheck,
  Phone,
  BadgeCheck,
  Lock,
  Clock,
  Zap,
  XCircle,
  CheckCircle2,
  MapPin,
  Activity,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { PermitCard, SAMPLE_PERMITS } from "@/components/PermitCard";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SevenDayStamp } from "@/components/SevenDayStamp";

export const metadata: Metadata = {
  title: "Be call #1 on the next Miami construction project",
  description:
    "Trestle delivers active construction projects to Miami-Dade trade subs — verified permit, phone, license, and a 7-day exclusive seal. No shared leads. No bid wars.",
  alternates: { canonical: "/landing/miami-permit-leads" },
  robots: { index: true, follow: true },
};

export default function LandingPage() {
  return (
    <>
      <LandingStripe />
      <LandingHero />
      <ProofBand />
      <PAS />
      <WhatYouGet />
      <SampleStrip />
      <WhyDifferent />
      <FormSection />
      <FAQ />
      <FinalBlock />
    </>
  );
}

/* ----------------------- Landing banner ----------------------- */

function LandingStripe() {
  return (
    <div className="bg-ink-950 text-bone-100">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.18em] sm:px-8">
        <span className="hidden h-1.5 w-1.5 rounded-full bg-spark-400 sm:inline-block" />
        <span className="text-bone-200">Miami launch · 4 sample slots left this week</span>
        <span className="hidden text-ink-300 sm:inline">·</span>
        <span className="hidden text-bone-200 sm:inline">Free, no card, real records in your trade</span>
      </div>
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */

function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-bone-50">
      <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-hero-spot" aria-hidden />
      <Container size="wide" className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/30 bg-spark-50 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-spark-700">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-spark-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-spark-500" />
              </span>
              Miami-Dade · For trade subs only
            </span>

            <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.04] tracking-tight text-ink-900 sm:text-[52px] lg:text-[62px]">
              The permit just got issued.
              <br />
              <span className="text-forge-600">The buyer is hiring a crew.</span>
              <br />
              You should be call #1.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700 sm:text-[20px]">
              Trestle hands Miami-Dade trade subs <strong className="text-ink-900">active construction projects</strong> — verified permits with phone, license, scope, and a 7-day exclusive seal. Not leads. Not form-fills. Real buyers ready to build, locked to one trade at a time.
            </p>

            <div className="mt-7 grid gap-3 sm:max-w-md">
              <ul className="space-y-2.5">
                {[
                  "Exclusive 7-day seal — one buyer per active project",
                  "Phone + license enriched (89.4% fill rate)",
                  "Trade-classified: Electrical · Plumbing · HVAC · Roofing · Pool",
                  "Free 3-project sample in your trade before you commit",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15.5px] text-ink-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forge-500" strokeWidth={2.25} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#claim" variant="primary" size="lg" withArrow>
                Get my 3 sample projects
              </LinkButton>
              <LinkButton href="/get-started" variant="secondary" size="lg">
                Skip the sample — sign up now
              </LinkButton>
            </div>
            <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-500">
              No card · No commitment · Replies within 1 business day
            </p>
          </div>

          <div className="lg:col-span-5">
            <div id="claim" className="scroll-mt-24">
              <div className="mb-3 flex items-center justify-between">
                <SectionLabel variant="spark">Reserve your sample</SectionLabel>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  4 spots left this week
                </span>
              </div>
              <LeadCaptureForm
                variant="compact"
                ctaLabel="Send my sample projects"
              />
              <div className="-mt-2 flex justify-end pr-4">
                <SevenDayStamp size={120} variant="spark" rotate={8} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Proof band --------------------------- */

function ProofBand() {
  const stats = [
    { n: "2,081+", l: "permits ingested · since Apr 22" },
    { n: "89.4%", l: "phone + license fill rate" },
    { n: "7 days", l: "exclusive lock per lead" },
    { n: "$40–$60", l: "typical cost per lead" },
  ];
  return (
    <section className="border-y border-ink-900/10 bg-ink-950 text-bone-100">
      <Container size="wide" className="py-10">
        <ul className="grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4">
          {stats.map((s) => (
            <li key={s.l} className="text-center sm:text-left">
              <p className="font-mono text-3xl font-semibold text-bone-50 tabular-nums sm:text-4xl">
                {s.n}
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300">
                {s.l}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* --------------------- Problem · Agitate · Solution --------------------- */

function PAS() {
  return (
    <section className="bg-bone-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl border border-ink-900/10 bg-bone-50 p-7 shadow-card">
            <div className="flex items-center gap-2 text-spark-700">
              <XCircle className="h-4 w-4" strokeWidth={2.25} />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                What most subs are stuck with
              </span>
            </div>
            <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-700">
              {[
                "Form-fill leads sold to 4–6 contractors. By call #3 the homeowner is annoyed.",
                "Public permit CSVs with no phone, no trade tag, no license check — hours of cleanup per lead.",
                "Generic SaaS tools built for GCs and analysts that don&apos;t know your county or your trade.",
                "Referrals when they come, silence when they don&apos;t. Pipeline ≠ luck.",
              ].map((p) => (
                <li
                  key={p}
                  className="border-l-2 border-spark-500/40 pl-4"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-forge-500/30 bg-forge-50/70 p-7 shadow-card">
            <div className="flex items-center gap-2 text-forge-700">
              <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                What Trestle delivers
              </span>
            </div>
            <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-800">
              {[
                "<b>Exclusive</b> permit-derived leads. One buyer. Seven days. You set the pace.",
                "Phone numbers and license verification included on <b>89.4%</b> of sub-permits.",
                "Built for trade subs — Electrical, Plumbing, HVAC, Roofing, Pool. Miami-Dade-first.",
                "Pipeline you can plan around. Same number of fresh permits every week.",
              ].map((p, i) => (
                <li
                  key={i}
                  className="border-l-2 border-forge-500 pl-4"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------- What you get ------------------------- */

function WhatYouGet() {
  return (
    <section className="bg-bone-100 py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>What each lead includes</SectionLabel>
          <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
            Everything you need to make the call. Nothing you don&apos;t.
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: BadgeCheck, h: "Verified contractor", p: "FL DBPR license check. Status, classification, and expiration on every record." },
            { icon: Phone, h: "Working phone number", p: "89.4% of sub-permits include a current contractor phone. Bad numbers get credited back." },
            { icon: MapPin, h: "Permit address + ZIP", p: "Full property address with ZIP and submunicipality. Plan your route, not your guesses." },
            { icon: Zap, h: "Trade + scope", p: "Auto-classified by trade (Electrical, Plumbing, HVAC, Roofing, Pool) with a clean scope summary." },
            { icon: Activity, h: "Permit value", p: "The declared project value, so you know whether it&apos;s a $3K replacement or a $58K fit-out." },
            { icon: Lock, h: "Exclusive countdown", p: "A live timer showing exactly how much of your 7-day lock remains. No surprises." },
          ].map((b) => (
            <li
              key={b.h}
              className="rounded-xl border border-ink-900/10 bg-bone-50 p-6 transition-colors hover:border-ink-900/20"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-bone-50">
                <b.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[17px] font-semibold text-ink-900">{b.h}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{b.p}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------- Sample strip ------------------------- */

function SampleStrip() {
  return (
    <section id="sample" className="scroll-mt-20 bg-bone-50 py-20 sm:py-24">
      <Container size="wide">
        <div className="max-w-3xl">
          <SectionLabel variant="forge">Real, callable leads</SectionLabel>
          <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
            What lands in your dashboard.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
            Below — three sample leads styled exactly like the real thing.
            Phone numbers are masked here; on your account they&apos;re unlocked
            the moment you claim a credit.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PERMITS.slice(0, 3).map((p) => (
            <PermitCard key={p.id} permit={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------- Why different ------------------------- */

function WhyDifferent() {
  return (
    <section className="bg-ink-950 py-20 text-bone-100 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel variant="bone">Why this isn&apos;t lead-gen garbage</SectionLabel>
            <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[38px]">
              Permits are the cleanest spend-intent signal in construction.
            </h2>
            <p className="mt-5 text-pretty text-[16.5px] leading-relaxed text-ink-200">
              A permit means the project is real, the money has been committed,
              and crews are being scheduled this week. That&apos;s a different
              animal than a form-fill where someone clicked &ldquo;get a
              quote&rdquo; at 11pm on a Tuesday.
            </p>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-200">
              We combine that signal with the contractor&apos;s licensed phone
              number from public records, classify it by trade, and lock it to
              one buyer for 7 days. That&apos;s the whole product.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              {
                h: "Exclusive, not shared",
                p: "When you claim, no one else can. Full stop.",
              },
              {
                h: "Fresh, not stale",
                p: "Ingested daily — most leads land in your dashboard within 24 hours of issuance.",
              },
              {
                h: "Trade-specific, not generic",
                p: "Five trades. Auto-classification. No sifting through pool permits when you&apos;re an electrician.",
              },
              {
                h: "Priced like a tool, not a lottery",
                p: "$40–$60 per lead at most tiers. One job covers the year.",
              },
            ].map((b) => (
              <li
                key={b.h}
                className="flex gap-4 rounded-xl border border-ink-700 bg-ink-900/60 p-5"
              >
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-spark-400" strokeWidth={2} />
                <div>
                  <p className="font-semibold text-bone-50">{b.h}</p>
                  <p className="mt-1 text-[14.5px] text-ink-300">{b.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Form section --------------------------- */

function FormSection() {
  return (
    <section className="bg-bone-50 py-20 sm:py-24">
      <Container size="narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel variant="spark">Reserve your sample</SectionLabel>
            <h2 className="mt-3 text-balance text-[28px] font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-[36px]">
              Three free sample leads.
              <br />
              In your trade.
              <br />
              In your territory.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
              We&apos;ll send you 3 anonymized but real leads pulled from the
              last 14 days in your trade and county. Look at the data quality
              yourself. Decide if Trestle pencils out.
            </p>
            <ul className="mt-6 space-y-2 text-[14.5px] text-ink-700">
              {[
                "Reply within 1 business day",
                "No card, no auto-charge",
                "Free even if you don&apos;t subscribe",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-forge-500" strokeWidth={2.25} />
                  <span dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LeadCaptureForm
              variant="compact"
              ctaLabel="Send my sample projects"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------- */

function FAQ() {
  const items = [
    {
      q: "Is this just public permit data with a markup?",
      a: "No. Public permit data is messy, slow, and missing the one field you need — a phone. We ingest, dedupe, classify by trade, cross-check the contractor against FL DBPR licenses, enrich with phone, score by freshness, and lock to one buyer for 7 days. That&apos;s why $40–$60/lead pencils out.",
    },
    {
      q: "What happens after the 7-day window?",
      a: "The lead expires from your queue and rolls into the Pool — older, non-exclusive inventory that any subscriber can access for a flat $200/mo. We do this so the freshest leads stay scarce, and so older permits still have value at volume.",
    },
    {
      q: "What if the phone doesn&apos;t work?",
      a: "We credit it back. If a lead is missing a working phone, license, or contractor info, write us — credit returned to your account, no questions.",
    },
    {
      q: "Which trades and cities are live today?",
      a: "Electrical, Plumbing, HVAC, Roofing, and Pool. Miami-Dade County and the City of Miami today. Coral Gables live. Hialeah and Doral targeted Q3 2026.",
    },
    {
      q: "How is this priced?",
      a: "Monthly subscription, credits per tier. Starter $299 = 5 leads. Growth $599 = 12 leads. Pro $999 = 25 leads. Pool $200 = unlimited 7+ day-old, non-exclusive leads. Every credit unlocks one exclusive lead with phone + license.",
    },
  ];
  return (
    <section className="bg-bone-100 py-20 sm:py-24">
      <Container size="narrow">
        <SectionLabel>Common questions</SectionLabel>
        <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[36px]">
          The questions every Miami sub asks first.
        </h2>
        <div className="mt-8 divide-y divide-ink-900/10 rounded-2xl border border-ink-900/10 bg-bone-50">
          {items.map((it, i) => (
            <details
              key={i}
              className="group px-5 py-5 open:bg-bone-100/40 sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3
                  className="text-[16.5px] font-semibold text-ink-900"
                  dangerouslySetInnerHTML={{ __html: it.q }}
                />
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p
                className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600"
                dangerouslySetInnerHTML={{ __html: it.a }}
              />
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Final block --------------------------- */

function FinalBlock() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-bone-100">
      <div className="absolute inset-0 bg-hero-spot-dark" aria-hidden />
      <Container size="narrow" className="relative text-center">
        <SectionLabel variant="spark" className="justify-center">
          Last call
        </SectionLabel>
        <h2 className="mt-4 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-bone-50 sm:text-[54px]">
          The next permit in your trade is being issued right now.
        </h2>
        <p className="mt-5 text-pretty text-[18px] leading-relaxed text-ink-200">
          You&apos;ll either call them first or read about the job when it&apos;s done.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="#claim" variant="spark" size="lg" withArrow>
            Get my 3 sample projects
          </LinkButton>
          <LinkButton href="/get-started" variant="inverse" size="lg">
            Or sign up with Stripe →
          </LinkButton>
        </div>
        <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-400">
          Free sample · No card · 1 business day reply
        </p>
      </Container>
    </section>
  );
}
