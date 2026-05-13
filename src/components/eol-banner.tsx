"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

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

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="eol-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden bg-navy-900 border-b border-accent-500/30"
          role="region"
          aria-label="BusinessVision end of life notice"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-2 sm:py-2 text-sm">
              <div className="flex items-start sm:items-center gap-2.5 flex-1 min-w-0">
                <AlertCircle
                  className="w-4 h-4 flex-shrink-0 text-accent-400 mt-0.5 sm:mt-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="text-slate-300 leading-snug">
                  <span className="font-medium text-white">
                    BusinessVision reaches end of life December 31, 2026.
                  </span>{" "}
                  <span className="hidden sm:inline text-slate-500">·</span>{" "}
                  <span>
                    Spire is the natural upgrade — plan your migration before
                    support ends.
                  </span>{" "}
                  <span className="hidden md:inline text-slate-500">·</span>{" "}
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className="font-semibold text-accent-400">
                      {days.toLocaleString()}
                    </span>
                    <span className="text-slate-400">days remaining</span>
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <Link
                  href="/assessment"
                  className="text-sm font-medium text-accent-400 hover:text-accent-500 transition-colors duration-200 whitespace-nowrap"
                >
                  Get a Migration Plan{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Dismiss end of life notice"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
