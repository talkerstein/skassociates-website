'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  BarChart3,
  Eye,
  Download,
  Heart,
  LifeBuoy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { adagioFaqs } from '@/data/faqs';

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
/*  Data — Samuel's bullets, expanded                                  */
/* ------------------------------------------------------------------ */

const strengths = [
  {
    icon: FileText,
    title: 'Exceptional Financial Reporting',
    description:
      'Adagio lets you build any financial statement in the format you actually need to report, not a fixed template. Departmental and consolidated reporting are particularly strong, which is why so many finance-led organizations have stayed with it for years.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Budgeting',
    description:
      'Maintain detailed budgets at the level your organization works at. For clients with heavier reporting needs, we produce professional monthly and quarterly statements with variance analysis between periods that summarize the budgeting clearly.',
  },
  {
    icon: Eye,
    title: 'Sophisticated Online Views with GridView',
    description:
      'The Adagio GridView module creates executive snapshots of your data that can be run without granting access to the rest of the accounting system. Useful when you want managers and staff to view reports without ever touching the accounting program itself.',
  },
  {
    icon: Download,
    title: 'Rapid Excel Export',
    description:
      'Adagio offers an "Excel Direct" button that exports the current view of any grid straight into Excel. Quick to use, and exactly what most finance teams reach for first.',
  },
  {
    icon: Heart,
    title: 'A Strong Fit for Non-Profit Organizations',
    description:
      'Adagio has a long-standing client base in the non-profit sector and offers discounts on module purchases for non-profits. Generate all of your financials and reporting in one place, so you are no longer late producing detailed financial statements and the other reports the board needs.',
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AdagioPage() {
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
              Adagio Accounting
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Adagio: Proven Financial Reporting and Control.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              Strong financial reporting, departmental analysis, budgeting, and
              a deep history serving accounting-focused organizations and
              non-profits. We have supported Adagio implementations for years
              and continue to do so for clients where it is the right fit.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Talk About Adagio
              </Button>
              <Button
                href="/assessment"
                variant="secondaryDark"
                size="lg"
                arrow
              >
                See Which Platform Fits
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Where Adagio Excels ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">Where Adagio Excels</p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              A mature platform with real strengths in reporting and control.
            </h2>
            <p className="mt-5 text-[length:--font-size-body-lg] text-slate-600 leading-relaxed">
              Adagio has earned its reputation in financial reporting,
              departmental and consolidated accounting, budgeting, and the
              non-profit sector. Below is an honest look at what it does well.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-ivory-50 rounded-2xl p-8 border border-ivory-200 hover:shadow-card transition-shadow duration-500"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-900/[0.06] mb-5">
                  <item.icon
                    className="w-5 h-5 text-navy-800"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900 mb-2">
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

      {/* ── Already an Adagio Customer? ── */}
      <section className="bg-ivory-100 py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-10 lg:p-14 shadow-card border border-ivory-200"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-navy-900/[0.06] flex items-center justify-center flex-shrink-0">
                <LifeBuoy
                  className="w-6 h-6 text-navy-800"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="eyebrow text-accent-600 mb-3">
                  Already an Adagio Customer?
                </p>
                <h2 className="font-display text-[length:--font-size-h1] tracking-tight text-navy-900 mb-5">
                  You are not going anywhere unless you want to.
                </h2>
                <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-4">
                  If you currently run on Adagio, we provide ongoing
                  implementation refinement, training, custom reporting, and
                  support, for as long as you continue using the platform.
                </p>
                <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed mb-8">
                  Whether you need a small tune-up, a new report built, or a
                  quiet second opinion on a year-end question, get in touch
                  and we will help.
                </p>
                <Button href="/contact" variant="accent" arrow>
                  Talk About Your Adagio Setup
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={adagioFaqs} heading="Adagio questions, answered." />

      {/* ── Final CTA — soft ── */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-5">
              Wondering whether Adagio is the right fit?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              We will give you a straight answer, whether that is yes,
              whether that is a different platform, or whether your current
              Adagio setup just needs better support behind it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="accent" size="lg" arrow>
                Get Guidance on Adagio
              </Button>
              <Button href="/assessment" variant="secondaryDark" size="lg" arrow>
                See Which Platform Fits
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
