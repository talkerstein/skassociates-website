import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Zap,
  Droplets,
  Wind,
  Home as HomeIcon,
  Waves,
  CheckCircle2,
  BadgeCheck,
  Phone,
  MapPin,
  Lock,
  TrendingUp,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { PermitCard, SAMPLE_PERMITS, type Permit } from "@/components/PermitCard";
import { SevenDayStamp } from "@/components/SevenDayStamp";
import { TRADES, MARKETS } from "@/lib/utils";

const TRADE_ICONS: Record<string, any> = {
  electrical: Zap,
  plumbing: Droplets,
  hvac: Wind,
  roofing: HomeIcon,
  pool: Waves,
};

const TRADE_COPY: Record<string, {
  h1: string;
  promise: string;
  why: string[];
  scopeBlurb: string;
}> = {
  electrical: {
    h1: "Active electrical projects, sealed to you for 7 days.",
    promise:
      "From 200A service upgrades to commercial tenant fit-outs — Trestle delivers the permit, the licensed contractor, the phone number, and the seven-day exclusive window. You make the call, no one else does.",
    why: [
      "Every permit cross-checked against FL DBPR EC license registry",
      "Trade auto-classification — no panel-change permits buried under HVAC",
      "Average value per electrical project: $14,000",
      "124 new electrical permits per week in live markets",
    ],
    scopeBlurb:
      "Service upgrades · panel changes · sub-panels · EV chargers · generator wiring · commercial fit-outs · low-voltage rough-in.",
  },
  plumbing: {
    h1: "Active plumbing projects, sealed to you for 7 days.",
    promise:
      "Whole-home repipes, sewer laterals, water heaters, new construction rough-in — Trestle hands you the verified permit, the CFC-licensed contractor, the phone number, and a seven-day window where only you see them.",
    why: [
      "Cross-checked against FL DBPR CFC license registry",
      "Trade classification distinguishes repipes from rough-in",
      "Average value per plumbing project: $11,400",
      "89 new plumbing permits per week in live markets",
    ],
    scopeBlurb:
      "Repipes · water heaters · sewer laterals · gas lines · backflow · new-construction rough-in · water filtration.",
  },
  hvac: {
    h1: "Active HVAC projects, sealed to you for 7 days.",
    promise:
      "Split-system replacements, ductwork, mini-splits, commercial mechanical — Trestle delivers the permit, the CAC-licensed contractor, the phone number, and a seven-day exclusive seal.",
    why: [
      "Cross-checked against FL DBPR CAC license registry",
      "Classifier separates residential changeouts from commercial mechanical",
      "Average value per HVAC project: $16,800",
      "71 new HVAC permits per week in live markets",
    ],
    scopeBlurb:
      "Split systems · ductwork · mini-splits · rooftop units · refrigeration · commercial mechanical · controls.",
  },
  roofing: {
    h1: "Active roofing projects, sealed to you for 7 days.",
    promise:
      "Tile re-roofs, shingle replacements, flat-roof TPO, commercial reroofs — Trestle gives you the permit, the CCC-licensed contractor, the phone number, and a seven-day window where only you see them.",
    why: [
      "Cross-checked against FL DBPR CCC license registry",
      "Classifier separates re-roofs from new-construction roofing",
      "Average value per roofing project: $28,200",
      "102 new roofing permits per week in live markets",
    ],
    scopeBlurb:
      "Tile re-roofs · shingle replacements · flat-roof TPO · leak repairs · commercial reroofs · hurricane strap retrofits.",
  },
  pool: {
    h1: "Active pool projects, sealed to you for 7 days.",
    promise:
      "New gunite pools, spa adds, resurfacing, equipment pads — Trestle delivers the permit, the CPC-licensed contractor, the phone number, and your seven-day exclusive seal.",
    why: [
      "Cross-checked against FL DBPR CPC license registry",
      "Classifier separates new pools from resurface vs. equipment-only",
      "Average value per pool project: $24,500",
      "38 new pool permits per week in live markets",
    ],
    scopeBlurb:
      "New gunite pools · spa adds · equipment pad rebuilds · resurfacing · pool heaters · deck and tile.",
  },
};

function resolveSlug(rawSlug: string): { slug: string; suffix: string } | null {
  const lower = rawSlug.toLowerCase();
  const cleaned = lower.replace(/-contractors?$/, "");
  if (TRADES.some((t) => t.slug === cleaned)) {
    return { slug: cleaned, suffix: lower === cleaned ? "" : "-contractors" };
  }
  return null;
}

export function generateStaticParams() {
  return TRADES.flatMap((t) => [
    { trade: `${t.slug}-contractors` },
    { trade: t.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string }>;
}): Promise<Metadata> {
  const { trade: raw } = await params;
  const resolved = resolveSlug(raw);
  if (!resolved) return { title: "Trade not found" };
  const trade = TRADES.find((t) => t.slug === resolved.slug)!;
  return {
    title: `${trade.short} — Active ${trade.name.toLowerCase()} projects, sealed for 7 days`,
    description: `Trestle delivers verified active ${trade.name.toLowerCase()} projects to ${trade.short.toLowerCase()} — phone, license, scope, and a 7-day exclusive seal. Built for trade subs, not analysts.`,
  };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade: raw } = await params;
  const resolved = resolveSlug(raw);
  if (!resolved) notFound();

  const trade = TRADES.find((t) => t.slug === resolved.slug)!;
  const copy = TRADE_COPY[trade.slug];
  const Icon = TRADE_ICONS[trade.slug];
  const sample = SAMPLE_PERMITS.filter((p) => p.trade === trade.slug);
  const filler = SAMPLE_PERMITS.filter((p) => p.trade !== trade.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-bone-50">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <SectionLabel variant="forge">For {trade.short.toLowerCase()}</SectionLabel>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                    {trade.weekly} new {trade.name.toLowerCase()} projects / week · avg ${trade.avgValue.toLocaleString()}
                  </p>
                </div>
              </div>

              <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[54px] lg:text-[62px]">
                {copy.h1}
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700">
                {copy.promise}
              </p>

              <ul className="mt-8 space-y-3 text-[15px] text-ink-800">
                {copy.why.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forge-500" strokeWidth={2.25} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href={`/get-started?plan=growth`}
                  variant="primary"
                  size="lg"
                  withArrow
                >
                  Start receiving {trade.name.toLowerCase()} projects
                </LinkButton>
                <LinkButton href="/demo" variant="secondary" size="lg">
                  Book a {trade.name.toLowerCase()} demo
                </LinkButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex justify-center lg:justify-end">
                <SevenDayStamp size={240} variant="ink" rotate={-8} />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-ink-900/10 bg-bone-100/60 p-4">
                <Stat n={`${trade.weekly}`} l="projects / wk" />
                <Stat n={`$${(trade.avgValue / 1000).toFixed(0)}K`} l="avg value" />
                <Stat n="89.4%" l="phone enriched" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bone-100 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>What you actually get</SectionLabel>
            <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
              Every active {trade.name.toLowerCase()} project ships with the things you need to make the call.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-700">
              {copy.scopeBlurb}
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BadgeCheck, h: `License class ${trade.licenseClass}`, p: `Verified against FL DBPR. We show status, classification, and expiration before you dial.` },
              { icon: Phone, h: "Working phone number", p: "89.4% of sub-permits include a working contractor phone. Bad number? Credit returned." },
              { icon: MapPin, h: "Permit address + ZIP", p: "Full address with ZIP and submunicipality. Plan your route, not your guesses." },
              { icon: TrendingUp, h: "Permit value", p: "The declared project value — a $3K replacement vs. a $58K commercial fit-out." },
              { icon: Lock, h: "7-day seal countdown", p: "Live timer in your dashboard, your weekly digest, and the project PDF. Always know how much window remains." },
              { icon: Icon, h: `Trade auto-classified`, p: `Our classifier won't bury a ${trade.name.toLowerCase()} permit under another trade. You only see what fits your license.` },
            ].map((b) => (
              <li key={b.h} className="rounded-xl border border-ink-900/10 bg-bone-50 p-6 transition-colors hover:border-ink-900/20">
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

      <section className="bg-bone-50 py-20 sm:py-28">
        <Container size="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionLabel variant="forge">Real records</SectionLabel>
              <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
                Recent active {trade.name.toLowerCase()} projects from your feed.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-700">
                Phone numbers are masked here. On your account they&apos;re
                live the moment you spend a credit.
              </p>
            </div>
            <LinkButton href={`/sample-opportunities#${trade.slug}`} variant="secondary" size="md" withArrow>
              See all sample projects
            </LinkButton>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...sample, ...filler].slice(0, 3).map((p) => (
              <PermitCard key={p.id} permit={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 text-bone-100 sm:py-28">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionLabel variant="bone">Markets covered</SectionLabel>
              <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[42px]">
                {trade.name} projects live in {MARKETS.live.length} cities. {MARKETS.next.length} more in build.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-200">
                We launched in Miami-Dade because it has the trade density to
                stress-test the pipeline. Next markets ship as soon as license
                cross-checks and trade classification meet our quality bar.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {[
                  ...MARKETS.live.map((m) => ({ m, tone: "live" })),
                  ...MARKETS.next.map((m) => ({ m, tone: "next" })),
                  ...MARKETS.roadmap.map((m) => ({ m, tone: "roadmap" })),
                ].map((c) => (
                  <li
                    key={c.m}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${
                      c.tone === "live"
                        ? "bg-forge-500/15 text-forge-300 ring-1 ring-inset ring-forge-400/30"
                        : c.tone === "next"
                        ? "bg-spark-500/15 text-spark-300 ring-1 ring-inset ring-spark-400/30"
                        : "bg-ink-800 text-ink-300 ring-1 ring-inset ring-ink-700"
                    }`}
                  >
                    <span className={c.tone === "live" ? "h-1.5 w-1.5 rounded-full bg-forge-400" : c.tone === "next" ? "h-1.5 w-1.5 rounded-full bg-spark-400" : "h-1.5 w-1.5 rounded-full bg-ink-400"} />
                    {c.m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <SevenDayStamp size={220} variant="spark" rotate={6} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bone-50 py-20 sm:py-24">
        <Container className="text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[46px]">
            Ready to be the first call for active {trade.name.toLowerCase()} projects?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/get-started?plan=growth" variant="primary" size="lg" withArrow>
              Get instant access
            </LinkButton>
            <LinkButton href="/demo" variant="secondary" size="lg">
              Book a 15-min demo
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-lg bg-bone-50 p-3 text-center ring-1 ring-inset ring-ink-900/10">
      <p className="font-mono text-[18px] font-semibold text-ink-900 tabular-nums">{n}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">{l}</p>
    </div>
  );
}
