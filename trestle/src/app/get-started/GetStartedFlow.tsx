"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  CreditCard,
  Lock,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Zap,
  Droplets,
  Wind,
  Home,
  Waves,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Button, LinkButton } from "@/components/Button";
import { SectionLabel } from "@/components/Container";
import { SevenDayStamp } from "@/components/SevenDayStamp";
import { PLANS, TRADES, MARKETS, cn } from "@/lib/utils";

const TRADE_ICONS: Record<string, any> = {
  electrical: Zap,
  plumbing: Droplets,
  hvac: Wind,
  roofing: Home,
  pool: Waves,
};

type Step = 0 | 1 | 2 | 3;

export function GetStartedFlow() {
  const params = useSearchParams();
  const initialPlan =
    params.get("plan")?.toLowerCase() ?? "growth";

  const [step, setStep] = useState<Step>(0);
  const [planId, setPlanId] = useState<string>(initialPlan);
  const [trade, setTrade] = useState<string>("electrical");
  const [county, setCounty] = useState<string>("Miami-Dade County");
  const [account, setAccount] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const plan = useMemo(
    () => PLANS.find((p) => p.id === planId) ?? PLANS[1],
    [planId],
  );

  const onCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Stub — in production, redirect to Stripe Checkout / GHL embed:
    //   const session = await createStripeCheckoutSession({...})
    //   window.location.href = session.url
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setDone(true);
  };

  if (done) return <Done plan={plan} trade={trade} county={county} account={account} />;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <Stepper step={step} />

        <div className="mt-8">
          {step === 0 && <StepPlan planId={planId} setPlanId={setPlanId} />}
          {step === 1 && (
            <StepTradeTerritory
              trade={trade}
              setTrade={setTrade}
              county={county}
              setCounty={setCounty}
            />
          )}
          {step === 2 && (
            <StepAccount account={account} setAccount={setAccount} />
          )}
          {step === 3 && (
            <StepCheckout
              plan={plan}
              trade={trade}
              county={county}
              account={account}
              submitting={submitting}
              onCheckout={onCheckout}
            />
          )}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-ink-900/10 pt-6">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-700 hover:text-ink-900 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          {step < 3 && (
            <Button
              type="button"
              onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
              variant="primary"
              withArrow
              disabled={step === 2 && (!account.name || !account.email || !account.phone || !account.company)}
            >
              Continue
            </Button>
          )}
        </div>
      </div>

      <aside className="lg:col-span-5">
        <OrderSummary
          plan={plan}
          trade={trade}
          county={county}
          step={step}
        />
      </aside>
    </div>
  );
}

/* ----------------------------- Stepper ----------------------------- */

function Stepper({ step }: { step: Step }) {
  const labels = ["Plan", "Trade & territory", "Account", "Checkout"];
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {labels.map((l, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <div key={l} className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-semibold",
                done
                  ? "bg-forge-500 text-bone-50"
                  : active
                  ? "bg-ink-900 text-bone-50"
                  : "bg-ink-100 text-ink-500",
              )}
            >
              {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </div>
            <span
              className={cn(
                "hidden text-[13px] font-medium sm:inline-block",
                active ? "text-ink-900" : done ? "text-forge-700" : "text-ink-500",
              )}
            >
              {l}
            </span>
            {i < labels.length - 1 && (
              <span className="h-px w-6 bg-ink-900/10 sm:w-10" />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------ Step 0 — Plan ------------------------ */

function StepPlan({
  planId,
  setPlanId,
}: {
  planId: string;
  setPlanId: (v: string) => void;
}) {
  return (
    <div>
      <SectionLabel>Step 1 of 4</SectionLabel>
      <h1 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
        Pick a plan.
      </h1>
      <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-700">
        Every plan is monthly, every credit unlocks one sealed active project.
        Switch tiers any time from your dashboard.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {PLANS.map((p) => {
          const selected = p.id === planId;
          return (
            <label
              key={p.id}
              className={cn(
                "relative cursor-pointer rounded-xl border p-5 transition-all",
                selected
                  ? "border-ink-900 bg-bone-50 ring-2 ring-ink-900/10 shadow-card"
                  : "border-ink-900/10 bg-bone-50 hover:border-ink-900/20",
              )}
            >
              <input
                type="radio"
                name="plan"
                value={p.id}
                checked={selected}
                onChange={() => setPlanId(p.id)}
                className="sr-only"
              />
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                    {p.name}
                  </p>
                  <p className="mt-2 text-[28px] font-semibold tracking-tight text-ink-900">
                    ${p.price}
                    <span className="text-[14px] font-normal text-ink-500">
                      /mo
                    </span>
                  </p>
                  {p.credits ? (
                    <p className="mt-1 font-mono text-[12px] text-forge-700">
                      {p.credits} projects · ${p.perLead}/each
                    </p>
                  ) : (
                    <p className="mt-1 font-mono text-[12px] text-ink-600">
                      Unlimited 7+ day-old
                    </p>
                  )}
                </div>
                {p.popular && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-spark-500 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-50">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
                {p.blurb}
              </p>
              <div
                className={cn(
                  "absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full border",
                  selected ? "border-ink-900 bg-ink-900 text-bone-50" : "border-ink-900/20 bg-bone-50",
                )}
              >
                {selected && <Check className="h-3 w-3" strokeWidth={3} />}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Step 1 — Trade & Territory ---------------- */

function StepTradeTerritory({
  trade,
  setTrade,
  county,
  setCounty,
}: {
  trade: string;
  setTrade: (v: string) => void;
  county: string;
  setCounty: (v: string) => void;
}) {
  return (
    <div>
      <SectionLabel>Step 2 of 4</SectionLabel>
      <h1 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
        Your trade and territory.
      </h1>
      <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-700">
        We&apos;ll seal the next 7-day window in your trade and county to
        you. You can change either from your dashboard.
      </p>

      <div className="mt-8">
        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
          Primary trade
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {TRADES.map((t) => {
            const Icon = TRADE_ICONS[t.slug];
            const selected = t.slug === trade;
            return (
              <label
                key={t.slug}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-lg border p-3 text-[14px] transition-colors",
                  selected
                    ? "border-ink-900 bg-ink-900 text-bone-50"
                    : "border-ink-900/15 bg-bone-50 text-ink-800 hover:bg-bone-100/60",
                )}
              >
                <input
                  type="radio"
                  name="trade"
                  value={t.slug}
                  checked={selected}
                  onChange={() => setTrade(t.slug)}
                  className="sr-only"
                />
                <Icon className="h-4 w-4" />
                {t.name}
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
          Primary county
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {MARKETS.live.map((c) => {
            const selected = c === county;
            return (
              <label
                key={c}
                className={cn(
                  "flex cursor-pointer items-center justify-center rounded-lg border p-3 text-[13.5px] transition-colors",
                  selected
                    ? "border-ink-900 bg-ink-900 text-bone-50"
                    : "border-ink-900/15 bg-bone-50 text-ink-800 hover:bg-bone-100/60",
                )}
              >
                <input
                  type="radio"
                  name="county"
                  value={c}
                  checked={selected}
                  onChange={() => setCounty(c)}
                  className="sr-only"
                />
                {c}
              </label>
            );
          })}
        </div>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
          County not listed?{" "}
          <a href="/contact" className="text-spark-700 hover:text-spark-600">
            Tell us where you work →
          </a>
        </p>
      </div>
    </div>
  );
}

/* -------------------- Step 2 — Account -------------------- */

function StepAccount({
  account,
  setAccount,
}: {
  account: any;
  setAccount: (v: any) => void;
}) {
  const handle = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setAccount({ ...account, [k]: e.target.value });

  const inputCls =
    "mt-1.5 block w-full rounded-md border border-ink-900/15 bg-bone-50 px-3 h-11 text-[15px] text-ink-900 placeholder:text-ink-400 outline-none focus:border-ink-700";
  const labelCls =
    "block font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500";

  return (
    <div>
      <SectionLabel>Step 3 of 4</SectionLabel>
      <h1 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
        Your account.
      </h1>
      <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-700">
        Just the basics. We&apos;ll send your dashboard credentials and
        receipt to this email.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="gs-name">Full name</label>
          <input id="gs-name" type="text" value={account.name} onChange={handle("name")} className={inputCls} placeholder="Manny Rivera" />
        </div>
        <div>
          <label className={labelCls} htmlFor="gs-company">Company</label>
          <input id="gs-company" type="text" value={account.company} onChange={handle("company")} className={inputCls} placeholder="Rivera Electric LLC" />
        </div>
        <div>
          <label className={labelCls} htmlFor="gs-email">Work email</label>
          <input id="gs-email" type="email" value={account.email} onChange={handle("email")} className={inputCls} placeholder="manny@riveraelectric.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="gs-phone">Mobile</label>
          <input id="gs-phone" type="tel" value={account.phone} onChange={handle("phone")} className={inputCls} placeholder="(305) 555-0148" />
        </div>
      </div>
      <p className="mt-5 text-[12.5px] text-ink-500">
        We&apos;ll text you when a sealed project lands in your trade. Reply
        STOP anytime to opt out.
      </p>
    </div>
  );
}

/* ------------------ Step 3 — Checkout ------------------ */

function StepCheckout({
  plan,
  trade,
  county,
  account,
  submitting,
  onCheckout,
}: {
  plan: any;
  trade: string;
  county: string;
  account: any;
  submitting: boolean;
  onCheckout: (e: React.FormEvent) => void;
}) {
  const inputCls =
    "mt-1.5 block w-full rounded-md border border-ink-900/15 bg-bone-50 px-3 h-11 text-[15px] font-mono text-ink-900 placeholder:text-ink-400 outline-none focus:border-ink-700";
  const labelCls =
    "block font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500";

  return (
    <form onSubmit={onCheckout}>
      <SectionLabel>Step 4 of 4</SectionLabel>
      <h1 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
        Secure checkout.
      </h1>
      <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-700">
        Stripe-secured. Your card is charged today and on the same day each
        month. Cancel any time from your dashboard.
      </p>

      <div className="mt-7 rounded-xl border border-ink-900/10 bg-bone-50 p-6 shadow-card">
        <div className="flex items-center justify-between border-b border-ink-900/10 pb-4">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
            <Lock className="h-3.5 w-3.5 text-forge-500" />
            Payment · powered by Stripe
          </div>
          <div className="flex items-center gap-2 text-ink-400">
            <CardBadge letters="VISA" />
            <CardBadge letters="MC" />
            <CardBadge letters="AMEX" />
            <CardBadge letters="ACH" />
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div>
            <label className={labelCls} htmlFor="cc-num">Card number</label>
            <input id="cc-num" type="text" inputMode="numeric" placeholder="4242 4242 4242 4242" className={inputCls} required />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <label className={labelCls} htmlFor="cc-exp">Expiry</label>
              <input id="cc-exp" type="text" placeholder="MM / YY" className={inputCls} required />
            </div>
            <div>
              <label className={labelCls} htmlFor="cc-cvc">CVC</label>
              <input id="cc-cvc" type="text" inputMode="numeric" placeholder="•••" className={inputCls} required />
            </div>
            <div>
              <label className={labelCls} htmlFor="cc-zip">ZIP</label>
              <input id="cc-zip" type="text" inputMode="numeric" placeholder="33126" className={inputCls} required />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-lg bg-forge-50 px-4 py-3">
        <ShieldCheck className="mt-0.5 h-4 w-4 text-forge-700" strokeWidth={2.25} />
        <p className="text-[13.5px] leading-relaxed text-ink-800">
          Stripe-secured payment. Cancel anytime — no questions, no
          retention scripts. Money-back guarantee on the first month if you
          don&apos;t see at least three callable active projects in your trade.
        </p>
      </div>

      <Button
        type="submit"
        variant="spark"
        size="lg"
        disabled={submitting}
        withArrow={!submitting}
        className="mt-6 w-full"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing…
          </>
        ) : (
          <>
            Pay ${plan.price} and start
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-[12px] text-ink-500">
        You&apos;ll be charged ${plan.price}.00 today. Your dashboard unlocks
        immediately.
      </p>
    </form>
  );
}

function CardBadge({ letters }: { letters: string }) {
  return (
    <span className="inline-flex h-5 items-center rounded-sm bg-ink-100 px-1.5 font-mono text-[9.5px] font-semibold tracking-wider text-ink-700">
      {letters}
    </span>
  );
}

/* ---------------------- Order Summary ---------------------- */

function OrderSummary({
  plan,
  trade,
  county,
  step,
}: {
  plan: any;
  trade: string;
  county: string;
  step: Step;
}) {
  const tradeName = TRADES.find((t) => t.slug === trade)?.name ?? trade;
  return (
    <div className="sticky top-20 space-y-5">
      <div className="rounded-2xl border border-ink-900/10 bg-bone-50 p-6 shadow-card">
        <div className="flex items-center justify-between">
          <SectionLabel>Order summary</SectionLabel>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            Step {step + 1} / 4
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              {plan.name} plan · monthly
            </p>
            <p className="mt-1 text-[15px] text-ink-800">
              {plan.credits
                ? `${plan.credits} exclusive projects / month`
                : "Unlimited 7+ day-old projects"}
            </p>
          </div>
          <p className="font-mono text-[28px] font-semibold tabular-nums text-ink-900">
            ${plan.price}
          </p>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-ink-900/10 pt-4 text-[13.5px] text-ink-700">
          <SumRow k="Trade" v={tradeName} />
          <SumRow k="County" v={county} />
          <SumRow k="Per-project cost" v={plan.perLead ? `$${plan.perLead}` : "n/a"} />
          <SumRow k="Exclusive seal" v="7 days, one buyer" />
        </ul>

        <div className="mt-5 grid gap-2 border-t border-ink-900/10 pt-5">
          <div className="flex items-baseline justify-between font-mono text-[12px] uppercase tracking-[0.14em] text-ink-500">
            <span>Due today</span>
            <span>USD</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-[14.5px] text-ink-800">Total</span>
            <span className="font-mono text-3xl font-semibold tabular-nums text-ink-900">
              ${plan.price}.00
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-2 border-t border-ink-900/10 pt-5 text-[13px] text-ink-700">
          {[
            "Phone + license on 89.4% of records",
            "7-day exclusive trade seal",
            "Cancel anytime — no contract",
            "Stripe-secured checkout",
          ].map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-forge-500" strokeWidth={2.5} />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden justify-center pt-2 lg:flex">
        <SevenDayStamp size={140} variant="ink" rotate={-6} />
      </div>

      <div className="rounded-xl border border-ink-900/10 bg-bone-100/60 p-5 text-[13px] leading-relaxed text-ink-700">
        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
          Prefer a 15-min walkthrough?
        </p>
        <p className="mt-2">
          We&apos;ll demo your dashboard, sample real active projects in your
          trade, and answer pricing/SLA questions live.
        </p>
        <LinkButton href="/demo" variant="ghost" size="sm" className="mt-3 pl-0">
          Book a demo →
        </LinkButton>
      </div>
    </div>
  );
}

function SumRow({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-baseline justify-between gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
        {k}
      </span>
      <span className="text-right text-ink-800">{v}</span>
    </li>
  );
}

/* ---------------------------- Done ---------------------------- */

function Done({
  plan,
  trade,
  county,
  account,
}: {
  plan: any;
  trade: string;
  county: string;
  account: any;
}) {
  const tradeName = TRADES.find((t) => t.slug === trade)?.name ?? trade;
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-forge-500/30 bg-forge-50 p-8 sm:p-12">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forge-500 text-bone-50">
          <Check className="h-5 w-5" strokeWidth={3} />
        </span>
        <SectionLabel variant="forge">Welcome to Trestle</SectionLabel>
      </div>
      <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
        You&apos;re in.
      </h1>
      <p className="mt-4 text-[16px] leading-relaxed text-ink-800">
        We&apos;re sealing your first active projects right now. The first
        ones will land in your dashboard within minutes and you&apos;ll get
        an email with login credentials at{" "}
        <span className="font-semibold">{account.email || "your email"}</span>.
      </p>

      <dl className="mt-7 grid gap-4 sm:grid-cols-3">
        <DoneRow k="Plan" v={`${plan.name} · $${plan.price}/mo`} />
        <DoneRow k="Trade" v={tradeName} />
        <DoneRow k="County" v={county} />
      </dl>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/sample-opportunities" variant="primary" size="lg" withArrow>
          See your sample dashboard
        </LinkButton>
        <LinkButton href="/how-it-works" variant="secondary" size="lg">
          How the seal works
        </LinkButton>
      </div>
      <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-500">
        Your card was charged ${plan.price}.00 via Stripe · receipt in inbox
      </p>
    </div>
  );
}

function DoneRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-bone-50 p-3 ring-1 ring-inset ring-ink-900/10">
      <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
        {k}
      </dt>
      <dd className="mt-1 text-[14px] font-medium text-ink-900">{v}</dd>
    </div>
  );
}
