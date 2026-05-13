"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  PieChart,
  Shield,
  Users,
  Check,
  AlertCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/ui/faq";
import { nonprofitFaqs } from "@/data/faqs";

const painPoints = [
  {
    title: "Fund tracking in spreadsheets",
    description:
      "Restricted, unrestricted, and temporarily restricted funds are tracked manually. One mistake and the entire picture is wrong.",
  },
  {
    title: "Grant reporting takes days",
    description:
      "Every funder wants a different report format. Compiling them means pulling data from multiple sources and reformatting by hand.",
  },
  {
    title: "Board packages assembled manually",
    description:
      "Financial statements, budget comparisons, and program reports are pieced together from separate files before every board meeting.",
  },
  {
    title: "Audit preparation is painful",
    description:
      "Auditors need clean documentation and clear trails. Without proper systems, audit prep consumes weeks of staff time.",
  },
  {
    title: "No fund balance clarity",
    description:
      "It is difficult to see at a glance how much is available in each fund, what is committed, and what remains unrestricted.",
  },
  {
    title: "Software not built for nonprofits",
    description:
      "Commercial accounting software lacks fund accounting, grant tracking, and the specific reporting nonprofits require for compliance.",
  },
];

const capabilities = [
  "Fund accounting with restricted and unrestricted tracking",
  "Grant and project-based financial tracking",
  "Donor and contribution management integration",
  "Board-ready financial statement generation",
  "Budget vs. actual reporting by fund and program",
  "Audit trail documentation and controls",
  "Accounts payable with approval workflows",
  "Bank reconciliation with full history",
  "Departmental and program-level reporting",
  "Year-end reporting and tax preparation support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function NonprofitPage() {
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
              <Heart className="w-6 h-6 text-ivory-100" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Not-for-Profit &amp; Community Organizations
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Fund accounting, grant tracking, donor reporting, and
              board-ready financials &mdash; configured with the controls and
              transparency your stakeholders require.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[length:--font-size-body-sm] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              Recommended platform: <strong className="text-ivory-50">Adagio</strong>
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
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=600&fit=crop"
                alt="Non-profit community organization gathering"
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
            Nonprofit accounting challenges we understand deeply.
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

      {/* Why Adagio */}
      <SectionWrapper background="light" padding="large">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-accent-600 mb-4">Why Adagio</p>
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
              Accounting depth built for nonprofit complexity.
            </h2>
            <div className="space-y-5 text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
              <p>
                Adagio is a modular accounting suite that provides the
                financial depth nonprofits need without the operational
                complexity they do not. Its fund accounting capabilities,
                flexible chart of accounts, and robust reporting make it a
                natural fit for organizations managing multiple funds, grants,
                and programs.
              </p>
              <p>
                We configure Adagio specifically for nonprofit requirements:
                fund-level tracking, grant reporting structures, board
                financial packages, and audit-ready documentation. The result
                is a system that makes compliance easier, not harder.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-ivory-200 bg-ivory-50 p-8">
              <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-6">
                What we configure for nonprofits
              </h3>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
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
            </div>
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
              &ldquo;Amazing support throughout the entire process. Samuel is
              incredibly responsive and prompt. He truly understands the
              nonprofit space.&rdquo;
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-ivory-50">
                Hannah Mestel
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-400 mt-1">
                Comptroller, Non-Profit Organization
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq
        items={nonprofitFaqs}
        heading="Questions from not-for-profit organizations."
        background="light"
      />

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
              Ready to bring clarity to your nonprofit finances?
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600 mb-10">
              Book a free consultation. We will discuss your current setup,
              your reporting requirements, and how Adagio can simplify fund
              accounting and grant tracking for your organization.
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
