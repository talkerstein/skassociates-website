"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Settings,
  ArrowRightLeft,
  GraduationCap,
  BarChart3,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

interface Solution {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href: string;
  /** Tailwind classes for icon container background tint */
  iconBg: string;
  /** Tailwind classes for icon stroke color */
  iconColor: string;
  /** Tailwind classes for the soft glow ring behind the icon container on hover */
  glow: string;
}

const solutions: Solution[] = [
  {
    icon: Settings,
    title: "Implementation & Configuration",
    description:
      "We set up Spire or Adagio to match how your business actually operates — chart of accounts, workflows, permissions, and reporting structures built right from day one.",
    href: "/solutions/implementation",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    glow: "from-blue-200/60",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration & Conversion",
    description:
      "Moving from QuickBooks, Sage, or spreadsheets? We plan and execute clean data migrations so nothing falls through the cracks during the transition.",
    href: "/solutions/implementation",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    glow: "from-amber-200/60",
  },
  {
    icon: GraduationCap,
    title: "Training & Ongoing Support",
    description:
      "Real training that sticks — not a one-time walkthrough. Plus ongoing support when questions arise months or years after go-live.",
    href: "/solutions/training",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    glow: "from-emerald-200/60",
  },
  {
    icon: BarChart3,
    title: "Reporting & Process Improvement",
    description:
      "Custom reports, automated workflows, and system optimizations that turn your accounting software into a genuine decision-making tool.",
    href: "/solutions/reporting",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    glow: "from-violet-200/60",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Integrated payment workflows that connect to your accounting and operations system — not bolted-on afterthoughts.",
    href: "/contact",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    glow: "from-rose-200/60",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SolutionsOverview() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper background="ivory" padding="large" id="solutions">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-600 mb-4">What We Do</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-navy-900">
          End-to-end support for Spire &amp; Adagio.
        </h2>
        <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700">
          From first conversation to years after go-live, we handle everything
          your team needs to get real value from your accounting software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {solutions.map((solution, i) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={solution.href}
                className="group relative block h-full overflow-hidden rounded-2xl border-2 border-slate-200/70 bg-white p-8 lg:p-10 shadow-card transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-1 hover:border-slate-300"
              >
                {/* Soft tinted glow that appears on hover, matching the icon color */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-radial ${solution.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${solution.iconBg} mb-7 ring-1 ring-inset ring-black/[0.04] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110 group-hover:rotate-[-4deg]`}
                  >
                    <Icon
                      className={`w-8 h-8 ${solution.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title — bumped to h1 size, navy-900 for max contrast */}
                  <h3 className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] leading-[--line-height-heading] tracking-tight text-navy-900 mb-4">
                    {solution.title}
                  </h3>

                  {/* Description — body-lg for readability, slate-700 for contrast */}
                  <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700 mb-7">
                    {solution.description}
                  </p>

                  {/* CTA — bolder, larger */}
                  <div className="flex items-center gap-2 text-[length:--font-size-body] font-semibold text-accent-600 group-hover:gap-3 group-hover:text-accent-500 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
