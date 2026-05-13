import type { Metadata } from "next";
import {
  Database,
  Filter,
  Sparkles,
  ShieldCheck,
  Lock,
  Truck,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { DashboardPreview } from "@/components/DashboardPreview";

export const metadata: Metadata = {
  title: "How it works — Permit → sealed active project in 24 hours",
  description:
    "Trestle ingests permit data daily, dedupes, classifies by trade, cross-checks FL DBPR license records, enriches with phone, and seals each project to one buyer for 7 days.",
};

const STAGES = [
  {
    n: "01",
    icon: Database,
    title: "Ingest",
    body: "We pull from Miami-Dade County and City of Miami permit systems on a daily ingest schedule. Every new sub-permit lands in the Trestle pipeline within hours.",
    detail: "Sources: MDC ePlan, City of Miami iBuild, Coral Gables PRMS.",
  },
  {
    n: "02",
    icon: Filter,
    title: "Deduplicate",
    body: "Many permits are revised, re-issued, or duplicated across systems. We collapse them into a single record per project to keep the feed clean.",
    detail: "Match keys: address + permit family + contractor + date.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Classify",
    body: "Each permit is auto-tagged by trade and scope using a rules + ML classifier. Trade resolution feeds the per-trade dashboards.",
    detail: "Trades live: Electrical, Plumbing, HVAC, Roofing, Pool.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Verify license",
    body: "Every contractor is checked against the FL DBPR license registry. Active, expired, suspended — you see the status before you make the call.",
    detail: "Inputs: license #, name, classification, expiration.",
  },
  {
    n: "05",
    icon: Sparkles,
    title: "Enrich phone",
    body: "We fill in the contractor&apos;s phone number from public licensed-contractor records. 89.4% of sub-permits get a usable number.",
    detail: "Verified working numbers refreshed on a rolling basis.",
  },
  {
    n: "06",
    icon: Lock,
    title: "Lock exclusive",
    body: "Once claimed by a subscriber, the lead is locked to that account for 7 days. No other subscriber sees it. The countdown is visible in your dashboard.",
    detail: "One buyer per lead. No bid wars. No shared inboxes.",
  },
  {
    n: "07",
    icon: Truck,
    title: "Deliver",
    body: "Leads land in your dashboard, email digest, and (Pro) CSV/webhook. You decide how your team works the queue.",
    detail: "Channels: dashboard, email, weekly digest, webhook (Pro).",
  },
  {
    n: "08",
    icon: RotateCcw,
    title: "Roll to Pool",
    body: "After 7 days, the lead expires from exclusive status and moves to the Pool — older, non-exclusive inventory at $200/mo flat.",
    detail: "Pool is shared, phone + license stripped, volume play.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-3xl">
            <SectionLabel>How it works</SectionLabel>
            <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[60px]">
              From public record to a callable lead in 24 hours.
            </h1>
            <p className="mt-6 text-pretty text-[18px] leading-relaxed text-ink-600">
              Trestle is a pipeline — eight stages, run daily, that turn the
              messy reality of public permit data into a clean, exclusive,
              trade-classified opportunity feed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/get-started" variant="primary" size="lg" withArrow>
                Get instant access
              </LinkButton>
              <LinkButton href="/sample-opportunities" variant="secondary" size="lg">
                See sample active projects
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Pipeline */}
      <section className="bg-bone-100 py-20 sm:py-28">
        <Container size="wide">
          <SectionLabel>The pipeline</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            Eight stages. Run daily. Visible end-to-end.
          </h2>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s) => (
              <li
                key={s.n}
                className="rounded-xl border border-ink-900/10 bg-bone-50 p-5 transition-colors hover:border-ink-900/20 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-bone-50">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-400">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-relaxed text-ink-600"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
                <p
                  className="mt-3 border-t border-ink-900/[0.08] pt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500"
                  dangerouslySetInnerHTML={{ __html: s.detail }}
                />
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Dashboard view */}
      <section className="bg-bone-50 py-20 sm:py-28">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>The dashboard</SectionLabel>
              <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[38px]">
                Filter, claim, call. Three actions, one screen.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
                Trestle isn&apos;t a data warehouse. It&apos;s a workbench
                built for owners and estimators who need to move on a lead
                without thirty minutes of pre-call research.
              </p>
              <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
                {[
                  "Trade-tabbed feed of the freshest permits",
                  "Filter by ZIP, county, permit value, scope keyword",
                  "One-click claim with live exclusive countdown",
                  "Mark called / contacted / won / lost — track your hit rate",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forge-500" strokeWidth={2.25} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <DashboardPreview />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-24 text-bone-100">
        <Container size="narrow" className="text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[46px]">
            See what just got permitted in your trade.
          </h2>
          <p className="mt-5 text-[17px] text-ink-200">
            Get 3 free sample leads. Decide if Trestle pencils out from the data
            itself.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/get-started" variant="spark" size="lg" withArrow>
              Get instant access
            </LinkButton>
            <LinkButton href="/demo" variant="inverse" size="lg">
              Or book a 15-min demo
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
