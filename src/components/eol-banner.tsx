"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, X } from "lucide-react";

const EOL_DATE = new Date("2026-12-31T00:00:00Z").getTime();
const STORAGE_KEY = "bv-eol-dismissed";

function daysUntilEol(): number {
  const now = Date.now();
  const diffMs = EOL_DATE - now;
  if (diffMs <= 0) return 0;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function EolBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [days, setDays] = useState<number>(() => daysUntilEol());

  useEffect(() => {
    setMounted(true);
    try {
      if (
        typeof window !== "undefined" &&
        window.localStorage.getItem(STORAGE_KEY) === "true"
      ) {
        setVisible(false);
      }
    } catch {
      // ignore storage errors
    }

    setDays(daysUntilEol());
    const interval = setInterval(() => {
      setDays(daysUntilEol());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  function handleDismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  }

  if (!mounted) return null;

  const fadeUp = {
    initial: { opacity: 0, y: -4 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="eol-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden border-b border-accent-500/25 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900"
          role="region"
          aria-label="BusinessVision end of life notice"
        >
          {/* Animated highlight sweep along the bottom edge */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-px w-32 bg-gradient-to-r from-transparent via-accent-500 to-transparent"
            animate={{ x: ["-100%", "calc(100vw + 100%)"] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 6,
            }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-2.5">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <motion.span
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10 ring-1 ring-accent-500/30"
                  aria-hidden="true"
                >
                  <AlertCircle
                    className="h-3.5 w-3.5 text-accent-400"
                    strokeWidth={2}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full ring-1 ring-accent-500/40"
                    animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.4, 1] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>

                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="min-w-0 leading-tight"
                >
                  <p className="flex flex-wrap items-baseline gap-x-2 text-white">
                    <span className="font-display text-2xl tabular-nums text-accent-400 sm:text-[1.6rem]">
                      {days.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium tracking-tight text-white sm:text-[0.95rem]">
                      days until BusinessVision retires
                    </span>
                  </p>
                  <p className="hidden text-xs text-slate-400 sm:block">
                    Spire is the natural upgrade.
                  </p>
                </motion.div>
              </div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="flex flex-shrink-0 items-center gap-1.5"
              >
                <Link
                  href="/assessment"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-3.5 py-1.5 text-xs font-medium text-accent-400 ring-1 ring-inset ring-accent-500/25 transition-all duration-200 hover:bg-accent-500/25 hover:text-accent-400 hover:ring-accent-500/40 sm:text-[0.8rem]"
                >
                  Get a migration plan
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Dismiss end of life notice"
                  className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-slate-500 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
