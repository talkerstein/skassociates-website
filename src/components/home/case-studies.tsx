"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    eyebrow: "Distribution",
    title: "Kilo Gateaux",
    stat: "35 min",
    statLabel: "reports reduced to seconds",
    summary:
      "A growing distribution company was drowning in manual reports that took over 35 minutes each. We implemented Spire and configured real-time dashboards that deliver the same insights instantly.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    imageAlt: "Distribution warehouse operations with inventory",
  },
  {
    eyebrow: "Professional Services",
    title: "Professional Services Firm",
    stat: "100%",
    statLabel: "clean migration from QuickBooks",
    summary:
      "A mid-size professional services firm had outgrown QuickBooks. We planned and executed a seamless migration to Adagio with zero data loss and minimal disruption to daily operations.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    imageAlt: "Service consulting conversation",
  },
  {
    eyebrow: "Not-for-Profit",
    title: "Community Non-Profit",
    stat: "3x",
    statLabel: "faster financial reporting",
    summary:
      "A community nonprofit was managing fund accounting in spreadsheets. We moved them to Adagio with proper fund tracking, grant reporting, and board-ready financials.",
    href: "/case-studies",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    imageAlt: "Community gathering",
  },
];

export function CaseStudies() {
  return (
    <SectionWrapper background="light" padding="large" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-accent-600 mb-4">Results</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            Real outcomes, real businesses.
          </h2>
        </motion.div>
        <Button href="/case-studies" variant="secondary" size="md" arrow>
          View all case studies
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={study.href}
              className="group block h-full rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"
            >
              {/* Header image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>

              <div className="p-8">
              <p className="eyebrow text-accent-500 mb-6">{study.eyebrow}</p>
              <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-6">
                {study.title}
              </h3>

              {/* Stat */}
              <div className="mb-6 pb-6 border-b border-ivory-200">
                <div className="font-display text-[length:--font-size-display-sm] leading-none text-navy-900">
                  {study.stat}
                </div>
                <p className="mt-1.5 text-[length:--font-size-body-sm] text-slate-500">
                  {study.statLabel}
                </p>
              </div>

              <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
                {study.summary}
              </p>
              <div className="flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                Read the case study
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
