'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Package,
  ShoppingCart,
  ClipboardList,
  BarChart3,
  Layers,
  CheckCircle2,
  Users,
  TrendingUp,
  Settings,
  Headphones,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { spireFaqs } from '@/data/faqs';

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
    icon: Package,
    title: 'Real-Time Inventory',
    description:
      'Track stock across multiple locations with live visibility into quantities, costs, and movements as transactions happen.',
  },
  {
    icon: ClipboardList,
    title: 'Purchase Order Management',
    description:
      'Automate purchasing workflows from requisition through receipt, with approval controls and vendor performance tracking.',
  },
  {
    icon: ShoppingCart,
    title: 'Sales Order Processing',
    description:
      'Manage the full order-to-cash cycle with real-time availability checks, backorder management, and integrated shipping.',
  },
  {
    icon: BarChart3,
    title: 'Integrated Accounting',
    description:
      'General ledger, accounts payable, accounts receivable, and banking — all connected to your operations in a single system.',
  },
  {
    icon: Layers,
    title: 'Operational Dashboards',
    description:
      'At-a-glance visibility into the metrics that matter: sales performance, inventory turns, outstanding orders, and cash flow.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description:
      'Built-in reporting engine with drill-down capability, giving your team answers without waiting for IT or manual exports.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn how your business actually operates — your workflows, pain points, reporting needs, and growth plans.',
  },
  {
    step: '02',
    title: 'Recommend',
    description:
      'We map Spire capabilities to your specific requirements and present an honest assessment of fit, timeline, and investment.',
  },
  {
    step: '03',
    title: 'Implement',
    description:
      'We configure every module around your processes, migrate your data cleanly, and test everything before go-live.',
  },
  {
    step: '04',
    title: 'Train',
    description:
      'Role-based training that meets your team where they are — practical, plain-language sessions that build real competence.',
  },
  {
    step: '05',
    title: 'Support',
    description:
      'Ongoing access to someone who knows your system inside and out. Not a generic help desk — a genuine partner.',
  },
];

const idealFor = [
  'Distribution and wholesale companies',
  'Growing businesses that have outgrown entry-level tools',
  'Organizations needing real-time inventory visibility',
  'Companies managing complex order-to-cash cycles',
  'Businesses ready for integrated operations and accounting',
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SpirePage() {
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
              Spire ERP
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Spire — Modern Business Management, Fully Integrated
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              Real-time inventory, order management, purchasing, and accounting
              in one connected system. Built for businesses that need their
              operations and finances working from the same data, in real time.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Book a Spire Consultation
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

      {/* ── Who Spire Is For ── */}
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
                Is Spire Right for Your Business?
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-8">
                Spire is built for organizations that have outgrown basic
                accounting tools and need a system where operations and
                finances are genuinely connected. If you are managing
                inventory, processing orders, and running accounting in
                separate systems — or worse, in spreadsheets — Spire
                consolidates everything.
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
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-navy-900/[0.06] flex items-center justify-center">
                  <Users className="w-5 h-5 text-navy-800" />
                </div>
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900">
                  Common Triggers
                </h3>
              </div>
              <ul className="space-y-4 text-[length:--font-size-body] text-slate-600">
                {[
                  'Inventory counts never match what the system says',
                  'Orders are falling through the cracks during busy periods',
                  'Finance is reconciling data from three different systems',
                  'You are making decisions based on last month\'s numbers',
                  'Growth is outpacing your current software\'s capacity',
                  'New hires take months to learn your workaround processes',
                ].map((trigger) => (
                  <li key={trigger} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
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
              Everything Your Business Needs. One System.
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

      {/* ── Why Implementation Matters ── */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] mb-6">
                <Settings className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-6">
                Spire Is Powerful — But Only When It Is Configured Right
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                The difference between a Spire system that transforms your
                operations and one that frustrates your team comes down to
                implementation quality. Default settings do not account for
                your specific inventory rules, order workflows, approval
                processes, or reporting requirements.
              </p>
              <p className="text-[length:--font-size-body] text-slate-400 leading-relaxed">
                We take the time to understand how your business actually
                operates — not how a textbook says it should. Every configuration
                decision is made with your real processes in mind, and every
                setting is tested against your actual data before go-live.
              </p>
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
                <Headphones className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="font-display text-[length:--font-size-h1] tracking-tight text-ivory-50 mb-6">
                Ongoing Support From Someone Who Knows Your System
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                When something goes wrong at 2 PM on a Tuesday, you do not
                want to explain your setup to a stranger. Our support model
                means you work with someone who already knows your
                configuration, your data, and your team.
              </p>
              <p className="text-[length:--font-size-body] text-slate-400 leading-relaxed">
                No ticket queues, no first-tier runarounds. Direct access
                to an expert who can solve problems quickly because they
                understand the context.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">Our Process</p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              How We Work Together
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <span className="block text-[length:--font-size-caption] font-bold text-accent-500 mb-3">
                  {step.step}
                </span>
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-[length:--font-size-body-sm] text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              We tried implementing Spire ourselves and it was a disaster.
              Samuel came in, rebuilt our configuration from scratch, and
              the difference was night and day. Our team actually uses the
              system now.
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-navy-900">
                Operations Director
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-500">
                Distribution Company, Ontario
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={spireFaqs} heading="Spire questions, answered." />

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
              Ready to Get Spire Working for You?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you are evaluating Spire for the first time or need
              to fix a broken implementation, the first step is a
              conversation. No obligation, no sales pitch — just an honest
              assessment.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Spire Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
