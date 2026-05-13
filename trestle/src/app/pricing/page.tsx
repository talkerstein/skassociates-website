import type { Metadata } from "next";
import {
  Check,
  X,
  Lock,
  Infinity as InfinityIcon,
  Phone,
  BadgeCheck,
  Filter,
  Mail,
  Download,
  Bell,
  Users,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { SevenDayStamp } from "@/components/SevenDayStamp";
import { PLANS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Simple, monthly, Stripe-secured",
  description:
    "Trestle pricing: Starter $299/mo (5 active projects), Growth $599/mo (12), Pro $999/mo (25), Pool $200/mo (unlimited 7+ day-old, non-exclusive). Stripe-secured. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Plans />
      <FeatureMatrix />
      <ROI />
      <Trust />
      <PricingFAQ />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone-50">
      <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-hero-spot" aria-hidden />
      <Container size="wide" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[60px]">
              Pay for active projects.
              <br />
              Not seats. Not modules.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700">
              Monthly subscription. Credits per tier. Every credit unlocks one
              sealed active project — phone, license, scope, value, and a
              7-day exclusive window. Stripe-secured. Cancel anytime.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-bone-50 px-3 py-1.5">
                <CreditCard className="h-3.5 w-3.5 text-ink-500" /> Stripe-secured
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-bone-50 px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-forge-600" /> Cancel anytime
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-bone-50 px-3 py-1.5">
                <Lock className="h-3.5 w-3.5 text-spark-600" /> 7-day seal
              </span>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
            <SevenDayStamp size={220} variant="ink" rotate={-6} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Plans() {
  return (
    <section className="bg-bone-50 pb-20 sm:pb-28">
      <Container size="wide">
        <div className="grid gap-5 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-2xl border bg-bone-50 p-6 transition-all sm:p-7 ${
                p.popular
                  ? "border-ink-900 ring-2 ring-ink-900/10 shadow-card-lg"
                  : "border-ink-900/10 hover:border-ink-900/20"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-spark-500 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-bone-50">
                  Most popular
                </span>
              )}
              <div>
                <h2 className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  {p.name}
                </h2>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-[44px] font-semibold tracking-tight text-ink-900">
                    ${p.price}
                  </span>
                  <span className="text-[15px] text-ink-500">/mo</span>
                </div>
                {p.credits ? (
                  <p className="mt-1 font-mono text-[13px] text-forge-700">
                    {p.credits} active project credits · ${p.perLead}/each
                  </p>
                ) : (
                  <p className="mt-1 font-mono text-[13px] text-ink-600">
                    Unlimited 7+ day-old projects
                  </p>
                )}
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-600">
                  {p.blurb}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-[14px] text-ink-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.id === "pool" ? "text-ink-500" : "text-forge-500"
                      }`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-ink-900/10 pt-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Best for: {p.bestFor}
                </p>
                <LinkButton
                  href={p.checkoutHref}
                  variant={p.popular ? "spark" : "primary"}
                  size="md"
                  withArrow
                  className="w-full"
                >
                  Start {p.name}
                </LinkButton>
                <p className="mt-2 text-center font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                  Stripe-secured · Instant access
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[13.5px] text-ink-500">
          7-day exclusive seal applies to Starter, Growth, and Pro tiers. Pool
          leads have phone &amp; license stripped and are shared among Pool
          subscribers. All prices in USD.
        </p>
      </Container>
    </section>
  );
}

function FeatureMatrix() {
  const rows: { label: string; icon: any; values: (boolean | string)[] }[] = [
    {
      label: "Exclusive 7-day seal",
      icon: Lock,
      values: [true, true, true, false],
    },
    {
      label: "Phone + license enrichment",
      icon: Phone,
      values: [true, true, true, "Stripped"],
    },
    {
      label: "FL DBPR license verification",
      icon: BadgeCheck,
      values: [true, true, true, true],
    },
    {
      label: "Trade + county filtering",
      icon: Filter,
      values: ["1 / 1", "2 / 2", "All / All", "All / All"],
    },
    {
      label: "Email + SMS delivery",
      icon: Mail,
      values: [true, true, true, "Email only"],
    },
    {
      label: "Weekly territory digest",
      icon: Bell,
      values: [false, true, true, false],
    },
    {
      label: "Priority match queue",
      icon: Users,
      values: [false, true, "Top", false],
    },
    {
      label: "CSV export + webhook + GHL",
      icon: Download,
      values: [false, false, true, false],
    },
    {
      label: "Multi-user team access",
      icon: Users,
      values: ["1 seat", "2 seats", "5 seats", "1 seat"],
    },
    {
      label: "Inventory age",
      icon: InfinityIcon,
      values: ["Fresh", "Fresh", "Fresh", "7+ days"],
    },
  ];

  const cols = ["Starter", "Growth", "Pro", "Pool"];
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Compare plans</SectionLabel>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
            Every line. One table.
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-bone-50 shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-900/10 bg-ink-50/50">
                  <th className="p-4 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-500">
                    Feature
                  </th>
                  {cols.map((c, i) => (
                    <th
                      key={c}
                      className={`p-4 text-[13.5px] font-semibold ${
                        i === 1 ? "bg-ink-900 text-bone-50" : "text-ink-800"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-ink-900/[0.06] last:border-0"
                  >
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-ink-800">
                        <row.icon className="h-4 w-4 text-ink-500" />
                        {row.label}
                      </div>
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-4 align-top text-[13.5px] ${
                          i === 1 ? "bg-forge-50/60 font-medium text-forge-700" : "text-ink-700"
                        }`}
                      >
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check className="h-4 w-4 text-forge-500" strokeWidth={2.5} />
                          ) : (
                            <X className="h-4 w-4 text-ink-300" />
                          )
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ROI() {
  return (
    <section className="bg-bone-50 py-20 sm:py-28">
      <Container size="narrow">
        <div className="rounded-2xl border border-ink-900/10 bg-ink-950 p-8 text-bone-100 shadow-card-lg sm:p-12">
          <SectionLabel variant="spark">ROI math</SectionLabel>
          <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.15] tracking-tight text-bone-50 sm:text-[38px]">
            One job closed at the average active-project value pays Trestle for the year.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { l: "Avg active project value", v: "$5,000" },
              { l: "Conservative close rate", v: "25%" },
              { l: "Starter cost / month", v: "$299" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-ink-700 bg-ink-900/60 p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300">
                  {s.l}
                </p>
                <p className="mt-1.5 font-mono text-3xl font-semibold text-bone-50 tabular-nums">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-spark-500/30 bg-spark-500/10 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-spark-300">
              First-month ROI on Starter
            </p>
            <p className="mt-1 text-[28px] font-semibold text-bone-50 sm:text-[36px]">
              ~17× <span className="text-[18px] font-normal text-ink-200">on a single closed job</span>
            </p>
          </div>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-300">
            5 sealed projects × 25% close × $5,000 average = $6,250 in awarded
            work vs. $299 in plan cost. Numbers scale with tier and trade.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-bone-100 py-16 sm:py-20">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-4">
          {[
            { icon: CreditCard, h: "Stripe-secured", p: "Industry-standard checkout. No card data ever touches our servers." },
            { icon: ShieldCheck, h: "Cancel anytime", p: "One click in your dashboard. No retention scripts. No annual contracts." },
            { icon: BadgeCheck, h: "Money-back guarantee", p: "First month refundable if you don&apos;t see at least 3 callable projects in your trade." },
            { icon: Lock, h: "Replace bad records", p: "Dead phone? Wrong license? We credit it back. No paperwork." },
          ].map((b) => (
            <li key={b.h} className="rounded-xl border border-ink-900/10 bg-bone-50 p-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-bone-50">
                <b.icon className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <h3 className="mt-3 text-[15.5px] font-semibold text-ink-900">{b.h}</h3>
              <p
                className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600"
                dangerouslySetInnerHTML={{ __html: b.p }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PricingFAQ() {
  const items = [
    { q: "Do unused credits roll over?", a: "Yes — credits roll one month. Beyond that we reset, so you&apos;re always working fresh inventory." },
    { q: "Can I switch plans?", a: "Yes, any time. Upgrades take effect immediately and prorate. Downgrades take effect at your next billing cycle." },
    { q: "What counts as a credit?", a: "Each time you claim an exclusive active project, one credit is consumed. Pool projects never consume credits." },
    { q: "What if a phone number doesn&apos;t work?", a: "Write us and we&apos;ll credit it back to your account, no questions, no documentation needed." },
    { q: "Is there a money-back guarantee?", a: "Yes. If you don&apos;t see at least 3 callable active projects in your trade in your first month, write us — full refund, no friction." },
    { q: "Is there an annual discount?", a: "Not yet. We&apos;re keeping it month-to-month while we expand markets. Annual pricing is on the 2026 roadmap." },
    { q: "Can my team share an account?", a: "Yes on Growth (2 seats) and Pro (5 seats). Each seat has its own login and lead attribution. Starter and Pool are single-user." },
    { q: "How are payments processed?", a: "Stripe. Card data is tokenized and stored with Stripe — never on our infrastructure. ACH available on annual upgrades via support." },
    { q: "Do you do invoicing for larger teams?", a: "Yes — Pro accounts can request NET-30 invoicing for multi-seat setups. Email hello@trestle.work." },
  ];
  return (
    <section className="bg-bone-50 py-20 sm:py-24">
      <Container size="narrow">
        <SectionLabel>Pricing questions</SectionLabel>
        <h2 className="mt-3 text-balance text-[28px] font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-[36px]">
          Everything we get asked about money.
        </h2>
        <div className="mt-8 divide-y divide-ink-900/10 rounded-2xl border border-ink-900/10 bg-bone-50">
          {items.map((it, i) => (
            <details key={i} className="group px-5 py-5 open:bg-bone-100/40 sm:px-7">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3
                  className="text-[16px] font-semibold text-ink-900"
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

function CTA() {
  return (
    <section className="bg-ink-950 py-24 text-bone-100">
      <Container className="text-center">
        <h2 className="text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[46px]">
          Pick a plan. Hit the dashboard. Start calling.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/get-started?plan=growth" variant="spark" size="lg" withArrow>
            Start Growth — $599
          </LinkButton>
          <LinkButton href="/demo" variant="inverse" size="lg">
            Or book a 15-min demo
          </LinkButton>
        </div>
        <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-400">
          Stripe-secured · Cancel anytime · Money-back guarantee
        </p>
      </Container>
    </section>
  );
}
