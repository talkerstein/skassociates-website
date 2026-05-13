"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  Check,
  AlertCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    title: "Job costs scattered everywhere",
    description:
      "Time, expenses, and materials for each project live in different spreadsheets. Nobody knows the true cost until the project is over.",
  },
  {
    title: "Billing delays",
    description:
      "Invoices go out late because generating them requires pulling data from multiple sources and assembling them manually.",
  },
  {
    title: "No project profitability visibility",
    description:
      "You cannot tell which projects are profitable and which are losing money until long after they are finished.",
  },
  {
    title: "Time tracking disconnected",
    description:
      "Staff track time in one system, but it never flows into accounting. Billable hours go unbilled.",
  },
  {
    title: "Revenue forecasting is guesswork",
    description:
      "Without integrated project and financial data, predicting cash flow and revenue requires spreadsheet gymnastics.",
  },
  {
    title: "QuickBooks has been outgrown",
    description:
      "The business has evolved beyond what QuickBooks can handle, but the thought of switching systems feels overwhelming.",
  },
];

const spireCapabilities = [
  "Job costing with full cost accumulation",
  "Integrated time tracking",
  "Project-based billing workflows",
  "Sales pipeline and CRM integration",
  "Multi-department reporting",
  "Purchase order management",
];

const adagioCapabilities = [
  "Departmental accounting and cost centres",
  "Flexible chart of accounts structure",
  "Accounts receivable with aging reports",
  "Accounts payable with approval workflows",
  "Robust financial reporting and statements",
  "Bank reconciliation and audit trails",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-[length:--font-size-body-sm] text-slate-400 hover:text-ivory-50 transition-colors mb-6"
            >
              &larr; All Industries
            </Link>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] mb-6">
              <Briefcase className="w-6 h-6 text-ivory-100" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Service &amp; Professional Organizations
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Job costing, project tracking, billing workflows, and time
              management — built into a system that keeps pace with how
              service companies actually operate.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[length:--font-size-body-sm] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              Recommended platform: <strong className="text-ivory-50">Spire or Adagio</strong> (depends on your needs)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-[420px] shrink-0"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                alt="Professional services consulting session"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <SectionWrapper background="ivory" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow text-accent-600 mb-4">The Challenge</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            Service business pain points we solve every day.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-ivory-200 rounded-xl p-6 shadow-card"
            >
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/[0.08] flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-[0.95rem] leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Platform Comparison */}
      <SectionWrapper background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow text-accent-600 mb-4">Platform Fit</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
            The right platform depends on your workflow.
          </h2>
          <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600">
            Service businesses vary widely. A consulting firm has different
            needs than a property management company or a marketing agency.
            We recommend the platform that fits your specific operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-navy-700/20 bg-white p-8 lg:p-10 shadow-card"
          >
            <span className="inline-block bg-navy-900 text-ivory-50 text-[length:--font-size-body-sm] font-semibold px-3.5 py-1.5 rounded-lg mb-6">
              Spire
            </span>
            <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-3">
              Best when operations are central
            </h3>
            <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
              If your service business involves inventory, purchasing, or
              complex sales workflows alongside project work, Spire provides
              the operational depth you need.
            </p>
            <ul className="space-y-3">
              {spireCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                >
                  <Check
                    className="w-4 h-4 text-accent-500 mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-accent-500/20 bg-white p-8 lg:p-10 shadow-card"
          >
            <span className="inline-block bg-accent-600 text-white text-[length:--font-size-body-sm] font-semibold px-3.5 py-1.5 rounded-lg mb-6">
              Adagio
            </span>
            <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-3">
              Best when accounting depth matters most
            </h3>
            <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
              If your primary need is strong financial controls, departmental
              accounting, and robust reporting without inventory complexity,
              Adagio offers the depth and modularity you need.
            </p>
            <ul className="space-y-3">
              {adagioCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                >
                  <Check
                    className="w-4 h-4 text-accent-500 mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] leading-[--line-height-heading] text-ivory-50 mb-8">
              &ldquo;Samuel was a key element in our Adagio conversion. His
              knowledge of the software is excellent and he was always available
              when we needed guidance.&rdquo;
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-ivory-50">
                Lester Frischman
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-400 mt-1">
                President/Owner
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="ivory" padding="large">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
              Not sure which platform fits your service business?
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600 mb-10">
              That is exactly what the consultation is for. We will review your
              workflows, your pain points, and your goals &mdash; then recommend
              the platform and configuration that fits.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
