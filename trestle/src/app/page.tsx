import type { Metadata } from "next";
import {
  ShieldCheck,
  Phone,
  BadgeCheck,
  Zap,
  Droplets,
  Wind,
  Home as HomeIcon,
  Waves,
  Filter,
  Inbox,
  Lock,
  Clock,
  Activity,
  CheckCircle2,
  XCircle,
  TrendingUp,
  MapPin,
  Database,
  Mail,
  Sparkles,
  CreditCard,
  Workflow,
  AlertCircle,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { DashboardPreview } from "@/components/DashboardPreview";
import { PermitCard, SAMPLE_PERMITS } from "@/components/PermitCard";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SevenDayStamp } from "@/components/SevenDayStamp";
import { TRADES, MARKETS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Trestle — Active construction projects, sealed for 7 days",
  description:
    "Trestle is the SaaS pipeline that turns building permits into verified active projects — buyers ready to build, budgets committed, exclusively yours for 7 days.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <NotLeads />
      <Problem />
      <Mechanism />
      <DashboardSection />
      <SampleProjects />
      <Exclusivity />
      <Comparison />
      <Trades />
      <Markets />
      <PricingPreview />
      <Vision />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ----------------------------- Hero ----------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone-50">
      <div className="absolute inset-0 bg-grid-ink opacity-[0.55]" aria-hidden />
      <div className="absolute inset-0 bg-hero-spot" aria-hidden />
      <Container size="wide" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/30 bg-spark-50 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-spark-700">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-spark-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-spark-500" />
              </span>
              Active-project intelligence · SaaS
            </span>

            <h1 className="mt-5 text-balance text-[42px] font-semibold leading-[1.03] tracking-tight text-ink-900 sm:text-[58px] lg:text-[68px]">
              Don&apos;t buy leads.
              <br />
              <span className="text-forge-600">Win active projects</span>
              <br />
              before anyone else calls.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-600 sm:text-[20px]">
              Trestle is the SaaS pipeline that turns freshly-issued building
              permits into <strong className="text-ink-900">verified active projects</strong> — buyers ready to break
              ground, budgets already committed, crews being assembled. Every
              project is <strong className="text-ink-900">sealed to one trade for 7 days</strong>. No bidding wars.
              No shared inboxes. Just first call.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/get-started"
                variant="primary"
                size="lg"
                withArrow
              >
                Get instant access
              </LinkButton>
              <LinkButton href="/sample-opportunities" variant="secondary" size="lg">
                See live project examples
              </LinkButton>
            </div>
            <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-500">
              Stripe-secured · Cancel anytime · No long-term contract
            </p>

            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-x-6 gap-y-2 border-t border-ink-900/10 pt-6">
              <Stat n="2,081+" label="active projects ingested" />
              <Stat n="89.4%" label="phone + license enriched" />
              <Stat n="7-day" label="exclusive trade seal" />
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -top-8 -right-8 hidden h-40 w-40 rounded-full bg-spark-500/10 blur-3xl lg:block" />
            <div className="absolute -bottom-10 -left-6 hidden h-48 w-48 rounded-full bg-forge-500/10 blur-3xl lg:block" />
            <DashboardPreview className="relative z-10" />
            <div className="relative z-20 -mt-10 ml-auto hidden w-fit lg:block">
              <SevenDayStamp size={150} variant="ink" rotate={-10} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-mono text-3xl font-semibold tracking-tight text-ink-900 tabular-nums">
        {n}
      </dt>
      <dd className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
        {label}
      </dd>
    </div>
  );
}

/* --------------------------- Proof strip --------------------------- */

function ProofStrip() {
  const items = [
    { k: "Live: Miami-Dade County", v: "Daily ingest" },
    { k: "Live: City of Miami", v: "Daily ingest" },
    { k: "Live: Coral Gables", v: "Daily ingest" },
    { k: "Next: Hialeah · Doral · Broward", v: "Q3 2026" },
    { k: "Roadmap: Tampa · Orlando · Atlanta", v: "Q4 2026 → 2027" },
    { k: "FL DBPR license verification", v: "Every record" },
    { k: "Phone + license fill rate", v: "89.4% of sub-permits" },
    { k: "Trades live", v: "Electrical · Plumbing · HVAC · Roofing · Pool" },
    { k: "Stripe-secured checkout", v: "Cancel anytime" },
  ];
  return (
    <section className="border-y border-ink-900/10 bg-bone-100">
      <div className="relative overflow-hidden py-5">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.18em] text-ink-600">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-forge-500" />
              <span className="text-ink-700">{it.k}</span>
              <span className="text-ink-400">— {it.v}</span>
            </span>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bone-100 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bone-100 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}

/* --------------- "We don't sell leads" reframe block --------------- */

function NotLeads() {
  return (
    <section className="relative bg-bone-50 py-24 sm:py-32">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel variant="spark">The reframe</SectionLabel>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[48px] lg:text-[56px]">
              We don&apos;t sell leads.
              <br />
              We sell{" "}
              <span className="text-forge-600">
                active projects with buyers ready to build.
              </span>
            </h2>
            <p className="mt-7 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700">
              A lead is a maybe. A form-fill. Someone clicking &ldquo;get a
              quote&rdquo; at 11pm on a Tuesday. By the time you call, four
              other shops are already in the queue.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700">
              A <strong className="text-ink-900">permit</strong> is the
              opposite. The project is real. The address is real. The money
              has been authorized. The buyer is{" "}
              <strong className="text-ink-900">actively building a team</strong>{" "}
              right now — and they need your trade.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-[18px] leading-relaxed text-ink-700">
              Trestle puts that buyer in front of you{" "}
              <strong className="text-ink-900">first</strong>, with their phone
              number, license verification, and a 7-day window where{" "}
              <strong className="text-ink-900">only you</strong> see them.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                {
                  k: "Lead-gen platforms",
                  v: "Shared form-fills. 4–6 buyers. Race to undercut.",
                  tone: "down",
                },
                {
                  k: "Trestle active projects",
                  v: "Verified permit. One buyer. Seven days sealed.",
                  tone: "up",
                },
              ].map((c) => (
                <div
                  key={c.k}
                  className={`rounded-xl border p-5 ${
                    c.tone === "up"
                      ? "border-forge-500/30 bg-forge-50/70"
                      : "border-ink-900/10 bg-bone-100/60"
                  }`}
                >
                  <p
                    className={`flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] ${
                      c.tone === "up" ? "text-forge-700" : "text-spark-700"
                    }`}
                  >
                    {c.tone === "up" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.25} />
                    ) : (
                      <XCircle className="h-3.5 w-3.5" strokeWidth={2.25} />
                    )}
                    {c.k}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-800">
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <SevenDayStamp size={260} variant="ink" rotate={-8} />
            </div>
            <p className="mt-6 text-center font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-500 lg:text-right">
              Every active project on Trestle ships under seal
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------- Problem ----------------------------- */

function Problem() {
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>The cost of being second</SectionLabel>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[46px]">
            Most subcontractor pipeline is broken in the same six ways.
          </h2>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-ink-700">
            We&apos;ve spent two years talking to electricians, plumbers,
            HVAC techs, roofers, and pool contractors about how work actually
            shows up. The story is depressingly consistent.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Referrals are random",
              p: "You can&apos;t build a sales motion on hoping the phone rings. Pipeline shouldn&apos;t depend on who your aunt knows or how slow the last GC was last week.",
            },
            {
              h: "Form-fill leads are stale",
              p: "By the time a HomeAdvisor lead reaches you, four other contractors are racing for the same homeowner. By call three, the homeowner is annoyed. By call five, they&apos;ve picked.",
            },
            {
              h: "Raw permit data is unusable",
              p: "Public CSVs don&apos;t classify trade, validate license, or include the phone number. Hours of cleanup per lead, and you still end up calling unlicensed numbers.",
            },
            {
              h: "Speed determines outcome",
              p: "Contractors who reach out within 24 hours of permit issuance close materially more bids. Most subs find out a week late — when the crew is already staffed.",
            },
            {
              h: "Generic SaaS is overkill",
              p: "Construction-intelligence tools cost $500–$1,000/mo, are built for GCs and analysts, and don&apos;t care about your trade or your county. You&apos;re a footnote in their roadmap.",
            },
            {
              h: "Your time is the bottleneck",
              p: "Owners and estimators end up doing research instead of working the phone. The hourly math on that doesn&apos;t pencil. You&apos;re paying yourself to be a data analyst.",
            },
          ].map((card) => (
            <li
              key={card.h}
              className="rounded-xl border border-ink-900/10 bg-bone-50 p-6 transition-all hover:-translate-y-0.5 hover:border-ink-900/20 hover:shadow-card"
            >
              <div className="flex items-center gap-2 text-spark-600">
                <XCircle className="h-4 w-4" strokeWidth={2.25} />
                <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em]">
                  Without Trestle
                </span>
              </div>
              <h3 className="mt-3 text-[18px] font-semibold text-ink-900">
                {card.h}
              </h3>
              <p
                className="mt-2 text-[14.5px] leading-relaxed text-ink-600"
                dangerouslySetInnerHTML={{ __html: card.p }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* --------------------------- Mechanism ---------------------------- */

function Mechanism() {
  const steps = [
    {
      n: "01",
      icon: Inbox,
      title: "Ingest every permit, every day",
      body:
        "We monitor public permit systems on a daily ingest. Every new sub-permit lands in our pipeline within hours of issuance. No web scraping junk — real, normalized records straight from the source.",
    },
    {
      n: "02",
      icon: Filter,
      title: "Deduplicate, classify, enrich",
      body:
        "We collapse duplicate revisions, tag each permit by trade and scope, and cross-check the contractor against FL DBPR license records. Then we fill in phone numbers from licensed-contractor data — 89.4% of sub-permits get a usable, working contact.",
    },
    {
      n: "03",
      icon: Lock,
      title: "Seal the project to one trade",
      body:
        "Every fresh, enriched project is held in a 7-day exclusive window. When you claim a credit, the project disappears from every other Trestle subscriber&apos;s dashboard. One buyer. One window. No bid war.",
    },
    {
      n: "04",
      icon: Phone,
      title: "You call. Within 24 hours.",
      body:
        "Projects land in your dashboard with everything you need — scope, address, contractor, phone, license, permit value, exclusive countdown. Pick up the phone before the project is staffed.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-bone-100 sm:py-28">
      <div className="absolute inset-0 bg-grid-bone opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-hero-spot-dark" aria-hidden />
      <Container className="relative">
        <div className="max-w-3xl">
          <SectionLabel variant="bone">How Trestle works</SectionLabel>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[46px]">
            From public record to a sealed project, in 24 hours.
          </h2>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-ink-200">
            A permit is a financial commitment. The money&apos;s been
            authorized. Crews are being scheduled. Trestle is the layer that
            turns that signal into a clean, callable, exclusively-yours
            project — before your competitors know it exists.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-ink-700/60 bg-ink-900/40 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-spark-500/15 text-spark-400 ring-1 ring-inset ring-spark-400/30">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-ink-400">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-bone-50">
                {s.title}
              </h3>
              <p
                className="mt-2 text-[14px] leading-relaxed text-ink-300"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-700 bg-ink-900/60 px-5 py-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-300">
            Full pipeline → ingest, dedupe, classify, enrich, verify, score,
            seal, deliver, expire.
          </p>
          <LinkButton href="/how-it-works" variant="inverse" size="sm" withArrow>
            See the full pipeline
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Dashboard preview section -------------------- */

function DashboardSection() {
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Inside the platform</SectionLabel>
            <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[44px]">
              A workbench built for trade subs — not data analysts.
            </h2>
            <p className="mt-5 text-pretty text-[17px] leading-relaxed text-ink-700">
              Filter by trade, county, ZIP, permit value, and recency. Watch
              your exclusive window tick down on every claimed project. Claim,
              call, log the outcome. That&apos;s the loop. No 40-tab
              construction-tech dashboard. No analyst certification required.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Trade-tabbed feeds — Electrical, Plumbing, HVAC, Roofing, Pool",
                "Live exclusive countdown on every sealed project",
                "Filter by ZIP, county, permit value, and scope keywords",
                "Outcome tracking — Called / Contacted / Bid / Won / Lost",
                "CSV export, webhook delivery, and GHL sync on Pro",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-forge-500"
                    strokeWidth={2.25}
                  />
                  <span className="text-[15px] text-ink-800">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/get-started" variant="primary" size="md" withArrow>
                Get instant access
              </LinkButton>
              <LinkButton href="/demo" variant="ghost" size="md">
                Or book a 15-min demo
              </LinkButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------- Sample projects -------------------------- */

function SampleProjects() {
  return (
    <section className="bg-bone-50 py-20 sm:py-28">
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel variant="forge">What you actually get</SectionLabel>
            <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[44px]">
              Every active project on Trestle is real, callable, and sealed to you.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-700">
              The records below are styled exactly like what lands in your
              dashboard. Real projects include verified phone and license data
              on 89.4% of sub-permits — and only you can see them during the
              seal.
            </p>
          </div>
          <LinkButton href="/sample-opportunities" variant="secondary" size="md" withArrow>
            View 17 sample projects
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PERMITS.slice(0, 3).map((p) => (
            <PermitCard key={p.id} permit={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------- Exclusivity --------------------------- */

function Exclusivity() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-bone-100 sm:py-28">
      <div className="absolute inset-0 bg-dot-ink opacity-[0.06]" aria-hidden />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel variant="spark">The 7-day seal</SectionLabel>
            <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[48px]">
              One buyer. Seven days. No race to the bottom.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-200">
              When you claim an active project, we seal it to your account for
              seven days. No other Trestle subscriber sees it, calls it, or
              beats you to it. After seven days, the project expires from your
              queue and rolls into the Pool — older, non-exclusive inventory we
              offer at a flat $200/mo for volume buyers.
            </p>

            <ul className="mt-8 space-y-4 text-[15px] text-ink-200">
              {[
                {
                  h: "Real exclusivity, not soft",
                  p: "The project disappears from every other dashboard the moment you claim it. There is no shared queue. There is no second-place.",
                },
                {
                  h: "Skin in the game",
                  p: "Credits are limited per tier. You won&apos;t flood your team with projects you can&apos;t work — and we won&apos;t flood your competitors&apos; either.",
                },
                {
                  h: "Lifecycle is transparent",
                  p: "Every active project shows its exclusive countdown in your dashboard, your weekly digest, and the lead PDF. You always know how much time you have.",
                },
                {
                  h: "Backed by Stripe + cancel anytime",
                  p: "No annual lock-in. No surprise renewals. Pause or cancel from your dashboard with one click. We are a SaaS, not a long-term contract.",
                },
              ].map((b) => (
                <li key={b.h} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-spark-400" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-bone-50">{b.h}</p>
                    <p
                      className="mt-0.5 text-ink-300"
                      dangerouslySetInnerHTML={{ __html: b.p }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col items-center gap-8">
              <SevenDayStamp size={240} variant="spark" rotate={6} />
              <div className="w-full overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-900/60 p-7 backdrop-blur">
                <div className="flex items-center justify-between">
                  <SectionLabel variant="spark">Seal — live</SectionLabel>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                    M2026-046382
                  </span>
                </div>
                <p className="mt-4 text-[14px] uppercase tracking-[0.16em] font-mono text-ink-400">
                  Project sealed to you for
                </p>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {[
                    { v: "04", l: "Days" },
                    { v: "22", l: "Hours" },
                    { v: "18", l: "Mins" },
                    { v: "49", l: "Secs" },
                  ].map((d) => (
                    <div
                      key={d.l}
                      className="rounded-lg bg-ink-800/80 p-3 text-center ring-1 ring-inset ring-ink-600/60"
                    >
                      <div className="font-mono text-2xl font-semibold tabular-nums text-bone-50">
                        {d.v}
                      </div>
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-400">
                        {d.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-lg border border-spark-500/30 bg-spark-500/10 px-3 py-2.5">
                  <Clock className="h-4 w-4 text-spark-400" />
                  <span className="text-[13px] text-bone-100">
                    Call within 24 hours of issuance for best close rate.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Comparison --------------------------- */

function Comparison() {
  const cols = [
    { name: "Trestle", highlight: true },
    { name: "HomeAdvisor / Angi" },
    { name: "Construction Monitor" },
    { name: "Dodge / ConstructConnect" },
  ];
  const rows = [
    {
      label: "What you actually buy",
      values: [
        "Active projects, sealed",
        "Shared form-fills (4–6 buyers)",
        "Raw permit data CSV",
        "Pre-permit project intelligence",
      ],
    },
    {
      label: "Phone + license included",
      values: ["89.4% of sub-permits", "Sometimes", "Rarely", "No"],
    },
    {
      label: "Trade classification",
      values: ["Automatic", "Manual", "None", "Manual"],
    },
    {
      label: "Exclusive window",
      values: ["7 days, sealed", "No — shared", "No", "No"],
    },
    {
      label: "Designed for",
      values: ["Trade subs", "Homeowners", "Data analysts", "GCs + bid rooms"],
    },
    {
      label: "Typical cost / project",
      values: ["$40–$60", "$20–$75 / lead", "$96 / mo flat", "$500–$1,000 / mo"],
    },
    {
      label: "Sign up via",
      values: ["Stripe — instant", "Sales call required", "Sales call", "Multi-week sales cycle"],
    },
  ];

  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>Trestle vs. the alternatives</SectionLabel>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[44px]">
            Built for trade subs. Priced for trade subs.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-700">
            We&apos;ve named names here on purpose. The platforms below are
            useful for what they do — but none of them were built to put a
            verified, active project in front of a trade sub with first call.
            That&apos;s the gap Trestle fills.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-900/10 bg-bone-50 shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink-900/10">
                  <th className="bg-ink-50/40 p-4 text-[12px] font-mono uppercase tracking-[0.16em] text-ink-500">
                    Feature
                  </th>
                  {cols.map((c) => (
                    <th
                      key={c.name}
                      className={`p-4 text-[13px] font-semibold ${
                        c.highlight ? "bg-ink-900 text-bone-50" : "bg-ink-50/40 text-ink-700"
                      }`}
                    >
                      {c.name}
                      {c.highlight && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-md bg-spark-500/20 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.14em] text-spark-300">
                          You
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-ink-900/[0.06] last:border-0">
                    <td className="p-4 text-[13.5px] font-medium text-ink-700">
                      {row.label}
                    </td>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`p-4 text-[14px] ${
                          i === 0
                            ? "bg-forge-50/60 font-medium text-forge-700"
                            : "text-ink-700"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-spark-500/20 bg-spark-50/60 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-spark-500/15 text-spark-700">
            <TrendingUp className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-spark-700">
              Quick math
            </p>
            <p className="mt-1 text-[15.5px] text-ink-900">
              One project closed at the average Trestle value ($5,000) on the
              Starter plan ($299/mo) at a 25% close rate is{" "}
              <span className="font-semibold">17× ROI</span> in your first month.
              Most subs cover the year by month three.
            </p>
          </div>
          <LinkButton href="/pricing" variant="primary" size="md" withArrow>
            See pricing
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Trades ----------------------------- */

const TRADE_ICONS: Record<string, any> = {
  electrical: Zap,
  plumbing: Droplets,
  hvac: Wind,
  roofing: HomeIcon,
  pool: Waves,
};

function Trades() {
  return (
    <section className="bg-bone-50 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>Trades on Trestle</SectionLabel>
          <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[44px]">
            Five trades live. Each one a full, sealed feed.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-700">
            We don&apos;t add a trade until we can guarantee classification
            quality, license cross-checks, and a real volume estimate.
            That&apos;s why each feed feels operational, not exploratory.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRADES.map((t) => {
            const Icon = TRADE_ICONS[t.slug];
            return (
              <li
                key={t.slug}
                className="group relative overflow-hidden rounded-xl border border-ink-900/10 bg-bone-50 p-6 transition-all hover:-translate-y-0.5 hover:border-ink-900/20 hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-bone-50">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink-900">
                      {t.name}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-forge-700">
                      {t.weekly} projects / week · avg ${t.avgValue.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-600">
                  {t.examples}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-900/[0.08] pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                    License class {t.licenseClass}
                  </span>
                  <a
                    href={`/for/${t.slug}-contractors`}
                    className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700 transition-colors group-hover:text-spark-600"
                  >
                    See {t.name} feed →
                  </a>
                </div>
              </li>
            );
          })}
          <li className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-dashed border-ink-900/20 bg-bone-100/50 p-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                Q4 2026 →
              </p>
              <h3 className="mt-3 text-[17px] font-semibold text-ink-900">
                Concrete · Drywall · Solar · Fencing
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                On the trade roadmap. Tell us what we&apos;re missing — every
                request shapes the next launch.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-spark-700 hover:text-spark-600"
            >
              Suggest a trade →
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}

/* ----------------------------- Markets ----------------------------- */

function Markets() {
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel variant="forge">Markets</SectionLabel>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            We launched in Miami. We&apos;re not stopping there.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-700">
            Trestle is a national SaaS playbook running its first market in
            South Florida — because South Florida has the volume, the data
            mess, and the trade density to stress-test the pipeline. As soon
            as the playbook is tight, we&apos;re rolling.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              label: "Live now",
              tone: "forge",
              items: MARKETS.live,
              note: "Daily ingest. Phone + license enrichment on every record.",
            },
            {
              label: "Next 90 days",
              tone: "spark",
              items: MARKETS.next,
              note: "Source integration in build. Beta access goes to early Pro subscribers first.",
            },
            {
              label: "On the roadmap",
              tone: "ink",
              items: MARKETS.roadmap,
              note: "Tell us where you work — we route trade-density signal into our launch order.",
            },
          ].map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-6 ${
                col.tone === "forge"
                  ? "border-forge-500/30 bg-forge-50/60"
                  : col.tone === "spark"
                  ? "border-spark-500/25 bg-spark-50/60"
                  : "border-ink-900/10 bg-bone-50"
              }`}
            >
              <p
                className={`font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] ${
                  col.tone === "forge"
                    ? "text-forge-700"
                    : col.tone === "spark"
                    ? "text-spark-700"
                    : "text-ink-600"
                }`}
              >
                {col.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-[15px] text-ink-800">
                    <MapPin className="h-3.5 w-3.5 text-ink-400" />
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-ink-900/[0.08] pt-4 text-[13px] leading-relaxed text-ink-600">
                {col.note}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------ Pricing preview ------------------------ */

function PricingPreview() {
  return (
    <section className="bg-bone-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Simple pricing</SectionLabel>
            <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
              Pay for active projects. Not seats. Not modules.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-700">
              Monthly subscription. Credits per tier. Every credit unlocks one
              sealed active project — phone, license, scope, value, and a
              7-day exclusive window. Stripe-secured. Cancel anytime.
            </p>
          </div>
          <LinkButton href="/pricing" variant="secondary" size="md" withArrow>
            Full pricing details
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {[
            { name: "Starter", price: 299, credits: "5 projects", per: "$60 / project" },
            { name: "Growth", price: 599, credits: "12 projects", per: "$50 / project", popular: true },
            { name: "Pro", price: 999, credits: "25 projects", per: "$40 / project" },
            { name: "Pool", price: 200, credits: "Unlimited 7+ day", per: "non-exclusive" },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl border bg-bone-50 p-6 transition-all ${
                p.popular
                  ? "border-ink-900 ring-2 ring-ink-900/10 shadow-card-lg"
                  : "border-ink-900/10 hover:border-ink-900/20"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-ink-900 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-bone-50">
                  Most popular
                </span>
              )}
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {p.name}
              </p>
              <p className="mt-3 text-[36px] font-semibold tracking-tight text-ink-900">
                ${p.price}
                <span className="text-[15px] font-normal text-ink-500">/mo</span>
              </p>
              <p className="mt-1 font-mono text-[12px] text-forge-700">
                {p.credits} · {p.per}
              </p>
              <LinkButton
                href={`/get-started?plan=${p.name.toLowerCase()}`}
                variant={p.popular ? "spark" : "primary"}
                size="sm"
                className="mt-5 w-full"
                withArrow
              >
                Start {p.name}
              </LinkButton>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-500">
          <span>7-day seal on Starter, Growth, Pro</span>
          <span className="text-ink-300">·</span>
          <span>Pool leads phone + license stripped</span>
          <span className="text-ink-300">·</span>
          <span>Stripe-secured</span>
          <span className="text-ink-300">·</span>
          <span>Cancel anytime</span>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Vision ----------------------------- */

function Vision() {
  return (
    <section className="bg-bone-100 py-20 sm:py-28">
      <Container size="narrow">
        <div className="rounded-2xl border border-ink-900/10 bg-bone-50 p-8 sm:p-12 shadow-card">
          <SectionLabel>From the team</SectionLabel>
          <p className="mt-6 text-balance text-[22px] leading-[1.4] text-ink-900 sm:text-[26px]">
            &ldquo;Contractor pipeline is still stuck in 2010 — shared lists,
            stale data, five subs racing for the same homeowner. Permits are
            the cleanest signal in construction: real money, real address,
            real timeline. Trestle is the first platform to package that
            signal as a sealed, callable project — not a lead.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink-900/10 pt-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 font-mono text-[13px] font-semibold text-bone-50">
              TR
            </div>
            <div>
              <p className="font-semibold text-ink-900">The Trestle team</p>
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-500">
                Active-project intelligence · SaaS
              </p>
            </div>
            <LinkButton href="/about" variant="ghost" size="sm" className="sm:ml-auto">
              Why we&apos;re building this →
            </LinkButton>
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
      q: "Wait — is this just public permit data with a markup?",
      a: "No. Public permit data is messy, slow, and missing the one field you need — a working phone number. We ingest, dedupe, classify by trade, cross-check the contractor against FL DBPR licenses, enrich with phone, score by freshness, and seal the result to one buyer for 7 days. That&apos;s why $40–$60 per active project pencils out: it&apos;s a finished product, not a CSV dump.",
    },
    {
      q: "What exactly does &ldquo;active project, sealed for 7 days&rdquo; mean?",
      a: "When you claim an active project, it disappears from every other Trestle subscriber&apos;s dashboard for 7 days. No one else sees it, calls it, or hits the same buyer. After 7 days, it expires from your queue and rolls into the Pool — older, non-exclusive inventory we sell at a flat $200/mo.",
    },
    {
      q: "Do you guarantee jobs?",
      a: "We guarantee something better: we put the right active project, the right contractor, and the right phone number in front of you faster than anyone else — every week. We seal each one to your trade. Closing the work is still your team&apos;s. Anyone who guarantees jobs is selling something you shouldn&apos;t buy.",
    },
    {
      q: "How fresh is the data?",
      a: "Most active projects land in your dashboard within 24 hours of permit issuance. Daily ingest. We&apos;re working toward intra-day ingest for City of Miami in Q3 2026.",
    },
    {
      q: "What if a phone number doesn&apos;t work?",
      a: "We credit it back. If a project is missing a working phone, a license, or contractor info, write us — the credit returns to your account, no questions.",
    },
    {
      q: "Can I sign up self-serve?",
      a: "Yes. /get-started is a Stripe-secured checkout — pick a plan, pick a trade and county, enter card details, you&apos;re in. No sales call. No multi-week procurement. Most subscribers are in their dashboard within 5 minutes.",
    },
    {
      q: "Which trades and cities are live today?",
      a: "Electrical, Plumbing, HVAC, Roofing, and Pool — all live. Miami-Dade County, City of Miami, and Coral Gables are live. Hialeah, Doral, Fort Lauderdale, and Broward County are in build for Q3 2026. Tampa, Orlando, Atlanta, Houston, and Phoenix are on the roadmap.",
    },
    {
      q: "Is this just for Miami forever?",
      a: "No. Miami is the first market because the data mess and trade density make it the hardest market to nail — if the playbook works here, it works anywhere. National rollout is the plan, not the dream.",
    },
    {
      q: "How is this different from Construction Monitor or Dodge?",
      a: "Those are data tools built for analysts and GCs. They give you raw permit info or pre-permit project intelligence — useful, but you still have to build trade classification, enrichment, exclusivity, and sales workflow yourself. Trestle ships those steps as the product. We&apos;re a workbench for trade subs, not a data warehouse for analysts.",
    },
    {
      q: "Can I integrate with my CRM?",
      a: "Yes on Pro — Pro includes CSV export, webhook delivery, and a Go High Level (GHL) sync so active projects show up in your CRM the moment they&apos;re claimed. Starter and Growth get email and SMS delivery.",
    },
  ];

  return (
    <section className="bg-bone-50 py-20 sm:py-28">
      <Container size="narrow">
        <div className="max-w-2xl">
          <SectionLabel>Frequently asked</SectionLabel>
          <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            The questions every serious sub asks first.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-900/10 rounded-2xl border border-ink-900/10 bg-bone-50 shadow-card">
          {items.map((it, i) => (
            <details
              key={i}
              className="group px-5 py-5 transition-colors open:bg-bone-100/40 sm:px-7"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3
                  className="text-[16.5px] font-semibold text-ink-900"
                  dangerouslySetInnerHTML={{ __html: it.q }}
                />
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-700 transition-transform group-open:rotate-45">
                  <span className="block h-3 w-3 leading-none">+</span>
                </span>
              </summary>
              <p
                className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600"
                dangerouslySetInnerHTML={{ __html: it.a }}
              />
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink-900/10 bg-bone-50 p-5">
          <p className="text-[15px] text-ink-700">
            Different question? Real humans, real replies — within one
            business day.
          </p>
          <LinkButton href="/contact" variant="secondary" size="sm" withArrow>
            Talk to us
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------- Final CTA --------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-bone-100 sm:py-32">
      <div className="absolute inset-0 bg-grid-bone opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-hero-spot-dark" aria-hidden />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel variant="spark">Ready when you are</SectionLabel>
            <h2 className="mt-4 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-bone-50 sm:text-[60px]">
              The next 30 projects in your trade are being permitted right now.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-[18px] leading-relaxed text-ink-200">
              Sign up with Stripe in under 5 minutes. We&apos;ll route the next
              sealed projects in your trade and territory straight to your
              dashboard. No card, no demo? Get 3 sample projects free —
              we&apos;ll send them within one business day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/get-started" variant="spark" size="lg" withArrow>
                Get instant access
              </LinkButton>
              <LinkButton href="/landing/miami-permit-leads" variant="inverse" size="lg">
                Free sample first
              </LinkButton>
            </div>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Stripe-secured checkout",
                "Cancel anytime, no contracts",
                "Phone + license on 89.4% of records",
                "7-day exclusive seal per project",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-bone-100">
                  <BadgeCheck className="h-4 w-4 text-spark-400" />
                  <span className="text-[14.5px]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <SevenDayStamp size={260} variant="ink" rotate={-8} />
          </div>
        </div>
      </Container>
    </section>
  );
}
