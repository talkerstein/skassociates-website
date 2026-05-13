"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Package, Briefcase, Heart } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/ui/faq";
import { caseStudiesFaqs } from "@/data/faqs";

const caseStudies = [
  {
    icon: Package,
    industry: "Distribution",
    company: "Kilo Gateaux",
    platform: "Spire",
    headline: "From 35-minute reports to instant insights",
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&h=600&fit=crop",
    imageAlt: "Distribution warehouse operations",
    problem:
      "Kilo Gateaux, a growing distribution company, was spending over 35 minutes generating each key business report. Data lived in multiple spreadsheets, inventory counts were unreliable, and the team was spending more time wrestling with their systems than running the business. Month-end close was a multi-day ordeal that consumed the entire accounting team.",
    approach:
      "We implemented Spire as their core ERP, configuring it around their specific distribution workflows. This included multi-warehouse inventory tracking, automated purchase order management, sales order processing with integrated shipping, and custom real-time dashboards that replaced the manual reporting process entirely.",
    results: [
      "Reports that took 35+ minutes now generate in seconds",
      "Real-time inventory visibility across all warehouse locations",
      "Automated purchase order generation at reorder points",
      "Month-end close reduced from days to hours",
      "Team adoption was high because the system matched their workflows",
    ],
    testimonial: {
      quote:
        "Reports that used to take us 35+ minutes are now generated in seconds. The difference has been transformational for our business.",
      name: "Bobby Bennett",
      title: "Co-Owner, Kilo Gateaux",
    },
  },
  {
    icon: Briefcase,
    industry: "Professional Services",
    company: "Professional Services Firm",
    platform: "Adagio",
    headline: "A clean migration from QuickBooks to Adagio",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop",
    imageAlt: "Professional consulting session",
    problem:
      "A mid-size professional services firm had outgrown QuickBooks. Their chart of accounts was a mess, departmental reporting was impossible, and their growing complexity meant they needed proper financial controls, approval workflows, and audit trails that QuickBooks simply could not provide.",
    approach:
      "We planned and executed a complete migration from QuickBooks to Adagio. This started with a thorough assessment of their current data, restructuring their chart of accounts for departmental reporting, configuring AP and AR modules with proper approval workflows, and migrating all historical data with full validation. We then trained each department on their specific workflows within the new system.",
    results: [
      "100% clean data migration with zero data loss",
      "Departmental reporting that was previously impossible",
      "Proper approval workflows for accounts payable",
      "Audit-ready financial controls and documentation",
      "Minimal disruption to daily operations during the transition",
    ],
    testimonial: {
      quote:
        "Samuel was a key element in our Adagio conversion. His knowledge of the software is excellent and he was always available when we needed guidance.",
      name: "Lester Frischman",
      title: "President/Owner",
    },
  },
  {
    icon: Heart,
    industry: "Not-for-Profit",
    company: "Community Non-Profit",
    platform: "Adagio",
    headline: "From spreadsheets to proper fund accounting",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=1200&h=600&fit=crop",
    imageAlt: "Community organization meeting",
    problem:
      "A community nonprofit was managing all of their fund accounting in spreadsheets. Restricted and unrestricted funds were tracked manually, grant reporting took days to compile, board financial packages were assembled by hand before every meeting, and audit preparation consumed weeks of staff time each year.",
    approach:
      "We implemented Adagio with a fund accounting configuration designed specifically for their needs. This included setting up their chart of accounts with proper fund tracking segments, configuring grant-level reporting, building automated board financial packages, and establishing the controls and documentation needed for audit readiness. We also provided thorough training to ensure the team felt confident with the new system.",
    results: [
      "Fund accounting with proper restricted and unrestricted tracking",
      "Grant reporting that previously took days now takes minutes",
      "Automated board financial package generation",
      "Audit preparation time reduced significantly",
      "Clear real-time visibility into fund balances and commitments",
    ],
    testimonial: {
      quote:
        "Amazing support throughout the entire process. Samuel is incredibly responsive and prompt. He truly understands the nonprofit space.",
      name: "Hannah Mestel",
      title: "Comptroller, Non-Profit Organization",
    },
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

export default function CaseStudiesPage() {
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow text-accent-400 mb-4">Case Studies</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Real results from real businesses.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Every project starts with a problem and ends with measurable
              improvement. Here is how we have helped businesses across
              distribution, professional services, and the nonprofit sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <SectionWrapper background="ivory" padding="large">
        <div className="space-y-16">
          {caseStudies.map((study, i) => {
            const Icon = study.icon;
            return (
              <motion.article
                key={study.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden"
              >
                {/* Banner image */}
                <div className="relative aspect-[21/9] overflow-hidden bg-navy-950">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent" />
                </div>

                {/* Header */}
                <div className="bg-navy-950 px-8 lg:px-12 py-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-[length:--font-size-caption] font-medium text-slate-300">
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 text-[length:--font-size-caption] font-medium text-accent-400">
                      {study.platform}
                    </span>
                  </div>
                  <h2 className="font-display text-[length:--font-size-display-sm] leading-[--line-height-heading] text-ivory-50">
                    {study.company}
                  </h2>
                  <p className="mt-2 text-[length:--font-size-body-lg] text-slate-300">
                    {study.headline}
                  </p>
                </div>

                {/* Body */}
                <div className="px-8 lg:px-12 py-10">
                  <div className="grid lg:grid-cols-3 gap-10">
                    {/* Problem */}
                    <div>
                      <p className="eyebrow text-accent-600 mb-3">The Problem</p>
                      <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                        {study.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <p className="eyebrow text-accent-600 mb-3">Our Approach</p>
                      <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                        {study.approach}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <p className="eyebrow text-accent-600 mb-3">The Results</p>
                      <ul className="space-y-2.5">
                        {study.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-10 pt-8 border-t border-ivory-200">
                    <div className="flex gap-4">
                      <Quote
                        className="w-8 h-8 text-accent-500/40 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <blockquote className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-700 italic">
                          &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <p className="mt-3 text-[length:--font-size-body-sm] font-semibold text-navy-900">
                          {study.testimonial.name}
                        </p>
                        <p className="text-[length:--font-size-caption] text-slate-500">
                          {study.testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </SectionWrapper>

      <Faq items={caseStudiesFaqs} />

      {/* CTA */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50 mb-6">
              Ready for results like these?
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300 max-w-2xl mx-auto mb-10">
              Every business is different, but the process is the same: we
              listen, we assess, and we build a solution that works. Book a
              free consultation to get started.
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
