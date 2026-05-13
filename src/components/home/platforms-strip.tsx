"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

interface Platform {
  name: string;
  subtitle: string;
  wordmark: React.ReactNode;
}

const platforms: Platform[] = [
  {
    name: "Spire",
    subtitle: "Business Management",
    wordmark: (
      <span className="inline-flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="inline-block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-accent-500"
        />
        <span className="font-sans font-bold uppercase tracking-[0.18em] text-navy-900 text-[length:--font-size-h3]">
          SPIRE
        </span>
      </span>
    ),
  },
  {
    name: "Adagio",
    subtitle: "Accounting Software",
    wordmark: (
      <span className="font-display italic text-navy-900 text-[length:--font-size-h2] leading-none">
        Adagio
      </span>
    ),
  },
  {
    name: "PayDirt",
    subtitle: "Payroll",
    wordmark: (
      <span className="font-sans font-bold text-navy-900 text-[length:--font-size-h3] tracking-tight">
        Pay<span className="text-accent-600">Dirt</span>
      </span>
    ),
  },
  {
    name: "Crystal Reports",
    subtitle: "Reporting",
    wordmark: (
      <span className="text-navy-900 text-[length:--font-size-h3] leading-none">
        <span className="font-bold tracking-tight">Crystal</span>
        <span className="font-light ml-1.5">Reports</span>
      </span>
    ),
  },
  {
    name: "Excel & Access",
    subtitle: "Custom Reporting",
    wordmark: (
      <span className="font-sans font-semibold text-navy-900 text-[length:--font-size-h3] tracking-tight">
        Excel <span className="text-accent-600 font-light">+</span> Access
      </span>
    ),
  },
];

export function PlatformsStrip() {
  return (
    <SectionWrapper background="light" padding="default">
      {/* TODO: Replace text wordmarks with official partner logos when client supplies brand assets */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EXPO_EASE }}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
      >
        <p className="eyebrow text-slate-500 mb-3">Certified On</p>
        <h2 className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] leading-[--line-height-heading] tracking-tight text-navy-900 text-balance">
          The platforms we know inside out.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5"
      >
        {platforms.map((platform) => (
          <motion.div
            key={platform.name}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: EXPO_EASE },
              },
            }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25, ease: EXPO_EASE }}
            className="group flex min-h-[112px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-5 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover"
          >
            <div className="flex h-10 items-center justify-center">
              {platform.wordmark}
            </div>
            <p className="mt-2.5 text-[length:--font-size-caption] font-medium uppercase tracking-[0.12em] text-slate-500">
              {platform.subtitle}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: EXPO_EASE }}
        className="mt-8 text-center text-sm text-slate-500"
      >
        * Replace with official partner logos when client supplies brand assets.
      </motion.p>
    </SectionWrapper>
  );
}
