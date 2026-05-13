'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Receipt,
  CreditCard,
  BarChart3,
  Blocks,
  Shield,
  CheckCircle2,
  Lock,
  FileSearch,
  Quote,
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
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const capabilities = [
  {
    icon: BookOpen,
    title: 'General Ledger',
    description:
      'A rock-solid general ledger with multi-department tracking, recurring entries, and drill-down capability for full visibility into every number.',
  },
  {
    icon: CreditCard,
    title: 'Accounts Payable',
    description:
      'Streamlined vendor management, payment processing, and cash flow planning. Know exactly what you owe and when.',
  },
  {
    icon: Receipt,
    title: 'Accounts Receivable',
    description:
      'Invoice management, aging reports, and collection tracking to keep revenue flowing and receivables under control.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    description:
      'Powerful financial statements, custom report builders, and export tools that give you the numbers you need, when you need them.',
  },
  {
    icon: Blocks,
    title: 'Modular Architecture',
    description:
      'Start with what you need, add modules as you grow. Adagio does not force you into features you will never use.',
  },
  {
    icon: Shield,
    title: 'Audit Trails & Controls',
    description:
      'Comprehensive transaction logging, user permissions, and approval workflows that satisfy auditors and protect your data.',
  },
];

const idealFor = [
  'Accounting-focused organizations that need strong financial controls',
  'Service businesses managing complex receivables and project billing',
  'Not-for-profit organizations with fund accounting requirements',
  'Companies that need modular, right-sized software',
  'Organizations prioritizing audit readiness and compliance',
  'Businesses that value stability and long-term vendor support',
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
              Adagio — Proven Financial Control, Built to Last
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              A modular accounting system built for organizations that take
              financial accuracy seriously. Strong controls, clear reporting,
              and the flexibility to build exactly the system you need.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Book an Adagio Consultation
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

      {/* ── Who Adagio Is For ── */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-accent-600 mb-4">Ideal Fit</p>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                Is Adagio Right for Your Organization?
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-8">
                Adagio is the right choice when financial control is the
                priority. It is not trying to be everything to everyone — it
                is focused on doing accounting exceptionally well. For
                organizations that need reliable financial data, clean audit
                trails, and reporting you can trust, Adagio delivers.
              </p>
              <ul className="space-y-4">
                {idealFor.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[length:--font-size-body] text-slate-700">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-10 shadow-card border border-ivory-200"
            >
              <h3 className="font-display text-[length:--font-size-h1] tracking-tight text-navy-900 mb-6">
                Build Exactly the System You Need — No More, No Less
              </h3>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed mb-6">
                Adagio&apos;s modular approach means you only invest in the
                capabilities your organization actually uses. Start with
                General Ledger and Accounts Payable. Add Receivables when
                you need it. Layer in Inventory if your business requires
                it. Every module integrates seamlessly, but none are forced
                on you.
              </p>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                This is not about having fewer features — it is about
                having the right features configured correctly for your
                specific needs. The result is a system your team actually
                understands and trusts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">Capabilities</p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              Financial Management That Earns Your Trust
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
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

      {/* ── Reporting & Controls Emphasis ── */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] mb-6">
                <FileSearch className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="font-display text-[length:--font-size-h1] tracking-tight text-ivory-50 mb-6">
                Reporting That Stands Up to Scrutiny
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                Adagio was designed from the ground up with reporting in
                mind. Financial statements, trial balances, aging reports,
                and custom queries are not afterthoughts — they are core
                capabilities.
              </p>
              <ul className="space-y-3">
                {[
                  'Standard and custom financial statement formats',
                  'Drill-down from summary to transaction detail',
                  'Comparative period and budget vs. actual reporting',
                  'Crystal Reports integration for advanced output',
                  'Excel export for ad hoc analysis',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[length:--font-size-body] text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] mb-6">
                <Lock className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="font-display text-[length:--font-size-h1] tracking-tight text-ivory-50 mb-6">
                Controls Your Auditors Will Appreciate
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                Every transaction leaves a trail. User permissions control
                who can do what. Period locks prevent backdating. Approval
                workflows ensure proper authorization. When audit season
                arrives, you are prepared — not scrambling.
              </p>
              <ul className="space-y-3">
                {[
                  'Complete audit trail on every transaction',
                  'Granular user permissions by module and function',
                  'Period and year-end locking controls',
                  'Transaction approval workflows',
                  'Automated batch posting with full logging',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[length:--font-size-body] text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-ivory-50 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Quote className="w-10 h-10 text-accent-400/40 mx-auto mb-6" />
            <blockquote className="font-display text-[length:--font-size-h1] leading-snug tracking-tight text-navy-900 mb-8">
              Our previous accountant set up Adagio with all the defaults.
              Samuel reconfigured everything to match how we actually work,
              and our month-end close went from five days to two.
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-navy-900">
                Controller
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-500">
                Professional Services Firm, Toronto
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={adagioFaqs} heading="Adagio questions, answered." />

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
              Ready for Financial Software That Actually Works?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you are considering Adagio for the first time or need
              help getting more from an existing installation, let us start
              with a conversation.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book an Adagio Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
