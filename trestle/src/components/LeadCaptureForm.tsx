"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type Variant = "compact" | "full";

const TRADE_OPTIONS = [
  { value: "electrical", label: "Electrical" },
  { value: "plumbing", label: "Plumbing" },
  { value: "hvac", label: "HVAC" },
  { value: "roofing", label: "Roofing" },
  { value: "pool", label: "Pool" },
  { value: "other", label: "Other trade" },
];

const TEAM_OPTIONS = [
  { value: "solo", label: "Just me" },
  { value: "2-5", label: "2–5" },
  { value: "6-15", label: "6–15" },
  { value: "16+", label: "16+" },
];

export function LeadCaptureForm({
  variant = "compact",
  ctaLabel = "Get early access",
  className,
  surface = "light",
}: {
  variant?: Variant;
  ctaLabel?: string;
  className?: string;
  surface?: "light" | "dark";
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Stub: simulate network — replace with real API
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
  };

  const isDark = surface === "dark";

  const labelCls = cn(
    "block font-mono text-[10.5px] font-medium uppercase tracking-[0.16em]",
    isDark ? "text-bone-200" : "text-ink-500",
  );

  const inputCls = cn(
    "mt-1.5 block w-full rounded-md border px-3 h-11 text-[15px] outline-none transition-colors",
    isDark
      ? "bg-ink-800/60 border-ink-600 text-bone-50 placeholder:text-ink-400 focus:border-spark-400 focus:bg-ink-800"
      : "bg-bone-50 border-ink-900/15 text-ink-900 placeholder:text-ink-400 focus:border-ink-700",
  );

  if (done) {
    return (
      <div
        className={cn(
          "rounded-xl p-6 ring-1 text-center",
          isDark
            ? "bg-forge-700/20 ring-forge-400/40 text-bone-50"
            : "bg-forge-50 ring-forge-500/30 text-ink-900",
          className,
        )}
      >
        <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forge-500 text-bone-50">
          <Check className="h-5 w-5" strokeWidth={2.5} />
        </div>
        <h4 className="text-lg font-semibold">You&apos;re on the list.</h4>
        <p
          className={cn(
            "mt-1.5 text-[14.5px]",
            isDark ? "text-bone-200" : "text-ink-600",
          )}
        >
          We&apos;ll reach out within one business day with sample leads in your
          trade and territory.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl p-5 sm:p-6 ring-1",
        isDark
          ? "bg-ink-900/60 ring-ink-600/60 backdrop-blur"
          : "bg-bone-50 ring-ink-900/10 shadow-card",
        className,
      )}
    >
      <div className={variant === "full" ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"}>
        <div>
          <label htmlFor="lf-name" className={labelCls}>
            Name
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            required
            placeholder="Manny Rivera"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="lf-company" className={labelCls}>
            Company
          </label>
          <input
            id="lf-company"
            name="company"
            type="text"
            required
            placeholder="Rivera Electric"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="lf-trade" className={labelCls}>
            Trade
          </label>
          <select
            id="lf-trade"
            name="trade"
            required
            defaultValue=""
            className={cn(inputCls, "appearance-none pr-8")}
          >
            <option value="" disabled>
              Select your trade
            </option>
            {TRADE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lf-phone" className={labelCls}>
            Phone
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            required
            placeholder="(305) 555-0148"
            className={inputCls}
          />
        </div>

        {variant === "full" && (
          <>
            <div>
              <label htmlFor="lf-email" className={labelCls}>
                Work email
              </label>
              <input
                id="lf-email"
                name="email"
                type="email"
                required
                placeholder="manny@riveraelectric.com"
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="lf-area" className={labelCls}>
                Service area
              </label>
              <input
                id="lf-area"
                name="area"
                type="text"
                placeholder="Miami-Dade · Hialeah · Doral"
                className={inputCls}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="lf-team" className={labelCls}>
                Team size
              </label>
              <div className="mt-1.5 grid grid-cols-4 gap-2">
                {TEAM_OPTIONS.map((o) => (
                  <label
                    key={o.value}
                    className={cn(
                      "flex h-11 cursor-pointer items-center justify-center rounded-md text-[13px] font-medium ring-1 ring-inset transition-colors",
                      isDark
                        ? "ring-ink-600 text-bone-100 hover:bg-ink-800/60 has-[:checked]:bg-spark-500 has-[:checked]:text-bone-50 has-[:checked]:ring-spark-400"
                        : "ring-ink-900/15 text-ink-800 hover:bg-ink-900/[0.04] has-[:checked]:bg-ink-900 has-[:checked]:text-bone-50 has-[:checked]:ring-ink-900",
                    )}
                  >
                    <input
                      type="radio"
                      name="team"
                      value={o.value}
                      className="sr-only"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="lf-msg" className={labelCls}>
                Anything specific you&apos;re looking for? <span className="text-ink-400">(optional)</span>
              </label>
              <textarea
                id="lf-msg"
                name="message"
                rows={3}
                placeholder="E.g. service upgrades in 33126, tenant fit-outs in Wynwood..."
                className={cn(inputCls, "h-auto py-2.5")}
              />
            </div>
          </>
        )}
      </div>

      <div
        className={cn(
          "mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between",
        )}
      >
        <p
          className={cn(
            "text-[12.5px]",
            isDark ? "text-ink-300" : "text-ink-500",
          )}
        >
          No credit card. We&apos;ll send a sample of real leads in your trade.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          variant={isDark ? "spark" : "primary"}
          withArrow={!submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            ctaLabel
          )}
        </Button>
      </div>
    </form>
  );
}
