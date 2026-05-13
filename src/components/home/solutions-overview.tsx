"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Settings,
  ArrowRightLeft,
  GraduationCap,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const solutions = [
  {
    icon: Settings,
    title: "Implementation & Configuration",
    description:
      "We set up Spire or Adagio to match how your business actually operates — chart of accounts, workflows, permissions, and reporting structures built right from day one.",
    href: "/solutions/implementation",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration & Conversion",
    description:
      "Moving from QuickBooks, Sage, or spreadsheets? We plan and execute clean data migrations so nothing falls through the cracks during the transition.",
    href: "/solutions/implementation",
  },
  {
    icon: GraduationCap,
    title: "Training & Ongoing Support",
    description:
      "Real training that sticks — not a one-time walkthrough. Plus ongoing support when questions arise months or years after go-live.",
    href: "/solutions/training",
  },
  {
    icon: BarChart3,
    title: "Reporting & Process Improvement",
    description:
      "Custom reports, automated workflows, and system optimizations that turn your accounting software into a genuine decision-making tool.",
    href: "/solutions/reporting",
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
    <SectionWrapper background="light" padding="large" id="solutions">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-600 mb-4">What We Do</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
          End-to-end support for Spire &amp; Adagio.
        </h2>
        <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600">
          From first conversation to years after go-live, we handle everything
          your team needs to get real value from your accounting software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {solutions.map((solution, i) => {
          const Icon = solution.icon;
          return (
            <motion.div
              key={solution.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={solution.href}
                className="group block h-full rounded-2xl border border-ivory-200 bg-white p-8 lg:p-10 shadow-card transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900/[0.06] mb-6">
                  <Icon
                    className="w-5 h-5 text-navy-800"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-3">
                  {solution.title}
                </h3>
                <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
                  {solution.description}
                </p>
                <div className="flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
