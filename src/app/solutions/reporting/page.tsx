'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Filter,
  FileSpreadsheet,
  LayoutDashboard,
  Download,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { reportingFaqs } from '@/data/faqs';

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const reportingCapabilities = [
  {
    icon: Filter,
    title: 'Filtered Views & Custom Reports',
    description:
      'Stop scrolling through data you do not need. We build filtered views and custom reports that surface exactly the information each role requires — nothing more, nothing less.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Visual Summaries',
    description:
      'At-a-glance visibility into the metrics that drive your business. Sales performance, cash position, inventory levels, and receivables aging — all updated in real time.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Crystal Reports',
    description:
      'Professional-grade custom reports with precise formatting, calculated fields, and parameter-driven filtering. Financial statements, operational summaries, and compliance reports built to your exact specifications.',
  },
  {
    icon: Download,
    title: 'Excel Integration & Exports',
    description:
      'Seamless data export to Excel for ad hoc analysis, pivot tables, and executive presentations. Automated exports that eliminate the manual copy-paste cycle.',
  },
  {
    icon: Workflow,
    title: 'Process Optimization',
    description:
      'Reporting often reveals process problems. We do not just build the report — we help you fix the underlying workflows so the data is cleaner and the processes are faster.',
  },
  {
    icon: BarChart3,
    title: 'Automated Scheduling',
    description:
      'Reports that generate and distribute themselves on schedule. Monthly financials, weekly sales summaries, daily exception reports — delivered to the right people without anyone pressing a button.',
  },
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Data Exists But You Cannot Get to It',
    description:
      'Your system is full of valuable information — transactions, trends, patterns — but extracting it requires manual effort, workarounds, or waiting for someone with technical skills.',
  },
  {
    icon: Clock,
    title: 'Hours Spent on Manual Spreadsheet Work',
    description:
      'Every month, someone exports raw data, reformats it, adds formulas, and builds the same reports by hand. It is error-prone, time-consuming, and entirely preventable.',
  },
  {
    icon: Lightbulb,
    title: 'Decisions Based on Outdated Information',
    description:
      'By the time the report is assembled, the data is already stale. You are making this month\'s decisions based on last month\'s numbers because real-time access does not exist.',
  },
];

const howWeHelp = [
  'Audit your current reporting to identify gaps and redundancies',
  'Build custom Crystal Reports tailored to your exact requirements',
  'Create Excel templates with automated data population',
  'Design dashboards for management and operational visibility',
  'Automate report generation and distribution',
  'Optimize underlying data entry processes for better report accuracy',
  'Train your team to modify and create their own basic reports',
  'Provide ongoing report development as your needs evolve',
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ReportingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800/80" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="eyebrow text-accent-400 mb-5"
            >
              Reporting & Process Improvement
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Better Reporting. Better Decisions.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              Your data is one of your most valuable assets — but only if
              you can access it, understand it, and act on it. We build the
              reports, dashboards, and processes that turn raw data into
              clear decisions.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Improve Your Reporting
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                arrow
                className="border-white/15 text-ivory-50 hover:bg-white hover:text-navy-900"
              >
                All Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">
              Common Pain Points
            </p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
              Sound Familiar?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed">
              These are the problems we hear about most. The software
              already has the data — the gap is in getting it out in a
              format that is actually useful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-2xl p-8 shadow-card border border-ivory-200"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-600/[0.08] mb-5">
                  <item.icon
                    className="w-5 h-5 text-accent-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Good Reporting Looks Like ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">
              What We Build
            </p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              Reporting That Works for Your Business
            </h2>
            <p className="mt-4 text-[length:--font-size-body-lg] text-slate-600 max-w-2xl mx-auto">
              Good reporting is not about more data — it is about the right
              data, presented clearly, available when you need it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportingCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-ivory-50 rounded-2xl p-8 border border-ivory-200 hover:shadow-card transition-shadow duration-500"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-900/[0.06] mb-5">
                  <cap.icon
                    className="w-5 h-5 text-navy-800"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Help ── */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-accent-400 mb-4">Our Approach</p>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-6">
                How S. Kopstick & Associates Helps
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                We start by understanding what decisions you need to make
                and work backward to figure out what data and reports will
                support those decisions. The result is a reporting
                environment that is purposeful, not just comprehensive.
              </p>
              <p className="text-[length:--font-size-body] text-slate-400 leading-relaxed">
                With deep expertise in Crystal Reports, Excel integration,
                and both Spire and Adagio reporting engines, we build
                reports that are accurate, maintainable, and actually used
                by your team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/[0.04] rounded-2xl p-10 border border-white/[0.06]"
            >
              <h3 className="text-[length:--font-size-h2] font-semibold text-ivory-50 mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-4">
                {howWeHelp.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-[length:--font-size-body] text-slate-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Improvement Callout ── */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-accent-600 mb-4">
                Beyond Reports
              </p>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                Reports Reveal Processes. We Fix Both.
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-6">
                Building a report often uncovers the real problem: the data
                is messy because the process is broken. Maybe invoices are
                entered inconsistently, or inventory adjustments are not
                following a standard procedure, or month-end close takes
                twice as long as it should.
              </p>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                We do not just build the report and walk away. We help you
                fix the underlying processes so the data is clean at the
                source — which means every report downstream becomes more
                reliable, automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-5"
            >
              {[
                {
                  stat: '60%',
                  label:
                    'Average reduction in manual reporting time for our clients',
                },
                {
                  stat: '3x',
                  label: 'Faster month-end close after process optimization',
                },
                {
                  stat: '100+',
                  label: 'Custom Crystal Reports built for Spire & Adagio clients',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-6 bg-white rounded-xl px-7 py-5 shadow-card border border-ivory-200"
                >
                  <span className="text-[length:--font-size-display-sm] font-display font-bold text-navy-900 min-w-[4.5rem]">
                    {item.stat}
                  </span>
                  <span className="text-[length:--font-size-body] text-slate-600">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Quote className="w-10 h-10 text-accent-400/40 mx-auto mb-6" />
            <blockquote className="font-display text-[length:--font-size-h1] leading-snug tracking-tight text-navy-900 mb-8">
              We used to spend two full days building month-end reports in
              Excel. Samuel built us a set of Crystal Reports that generate
              in minutes. We got two days back every single month.
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-navy-900">
                Controller
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-500">
                Wholesale Distribution, GTA
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={reportingFaqs} heading="Reporting questions, answered." />

      {/* ── CTA ── */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-5">
              Ready to Get More From Your Data?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you need a single custom report or a complete
              reporting overhaul, the first step is understanding what
              decisions you need better data to support.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Improve Your Reporting
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
