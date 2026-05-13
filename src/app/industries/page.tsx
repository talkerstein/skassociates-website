"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Briefcase,
  Heart,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Package,
    slug: "distribution",
    title: "Distribution & Wholesale",
    subtitle: "Inventory, logistics, and operational control",
    description:
      "Distribution companies need real-time visibility into inventory levels, purchase orders, sales pipelines, and multi-warehouse operations. Generic accounting software cannot keep up — and spreadsheet workarounds create more problems than they solve.",
    painPoints: [
      "Inventory counts that don’t match reality",
      "Manual purchase order tracking across vendors",
      "Sales orders falling through the cracks",
      "No real-time visibility across multiple warehouses",
      "Month-end close taking days instead of hours",
    ],
    platform: "Spire",
    accent: "bg-navy-900/[0.03]",
    border: "border-navy-900/[0.06]",
    iconBg: "bg-navy-900/[0.06]",
    iconColor: "text-navy-800",
  },
  {
    icon: Briefcase,
    slug: "service",
    title: "Service & Professional Organizations",
    subtitle: "Job costing, billing, and project visibility",
    description:
      "Service businesses run on time, projects, and accurate billing. Your accounting system needs to track job costs, manage billing workflows, and give you clear visibility into project profitability — not just record transactions after the fact.",
    painPoints: [
      "Job costs scattered across spreadsheets",
      "Billing delays from manual invoice generation",
      "No visibility into project profitability until it’s too late",
      "Time tracking disconnected from accounting",
      "Difficulty forecasting revenue and cash flow",
    ],
    platform: "Spire or Adagio",
    accent: "bg-accent-500/[0.04]",
    border: "border-accent-500/[0.08]",
    iconBg: "bg-accent-500/[0.08]",
    iconColor: "text-accent-600",
  },
  {
    icon: Heart,
    slug: "nonprofit",
    title: "Not-for-Profit & Community Organizations",
    subtitle: "Fund accounting, compliance, and transparency",
    description:
      "Nonprofits have unique accounting requirements that commercial software often ignores. Fund accounting, grant tracking, donor reporting, and board-ready financials are the foundation of good stewardship and regulatory compliance.",
    painPoints: [
      "Fund tracking managed in spreadsheets",
      "Grant reporting that takes days to compile",
      "Board financial packages assembled manually",
      "Audit preparation consuming weeks of staff time",
      "No clear picture of restricted vs. unrestricted funds",
    ],
    platform: "Adagio",
    accent: "bg-gold-400/[0.05]",
    border: "border-gold-400/[0.10]",
    iconBg: "bg-gold-400/[0.10]",
    iconColor: "text-gold-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow text-accent-400 mb-4">Industries We Serve</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Industry Expertise That Makes the Difference
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Every industry has its own accounting challenges, compliance
              requirements, and operational workflows. We bring specialized
              experience to each &mdash; so your system is built for how your
              business actually operates.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="ivory" padding="large">
        <div className="space-y-8">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={"/industries/" + industry.slug}
                  className={"group block rounded-2xl border " + industry.border + " " + industry.accent + " p-8 lg:p-12 transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                      <div
                        className={"inline-flex items-center justify-center w-12 h-12 rounded-xl " + industry.iconBg + " mb-6"}
                      >
                        <Icon
                          className={"w-5 h-5 " + industry.iconColor}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h2 className="font-display text-[length:--font-size-display-sm] leading-[--line-height-heading] mb-2">
                        {industry.title}
                      </h2>
                      <p className="text-[length:--font-size-body-sm] text-slate-500 mb-6">
                        {industry.subtitle}
                      </p>
                      <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
                        {industry.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-navy-900/[0.05] text-[length:--font-size-body-sm] font-medium text-navy-800">
                        Recommended: {industry.platform}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow text-slate-500 mb-4">Common Pain Points</p>
                      <ul className="space-y-3">
                        {industry.painPoints.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-[length:--font-size-body] text-navy-800"
                          >
                            <AlertCircle
                              className="w-4 h-4 text-accent-500 mt-1 shrink-0"
                              strokeWidth={2}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                        See how we help
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50 mb-6">
              Not sure which industry category fits?
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300 max-w-2xl mx-auto mb-10">
              Every business is unique. Let&apos;s talk about your specific
              situation and find the right approach together.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
