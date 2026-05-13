'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Package,
  ListFilter,
  Download,
  Boxes,
  Building2,
  Bell,
  GraduationCap,
  Layers,
  Network,
  MapPin,
  CheckCircle2,
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
/*  Data — Samuel's bullets, expanded                                  */
/* ------------------------------------------------------------------ */

const capabilities = [
  {
    icon: Package,
    title: 'Strong Inventory & Order Entry Management',
    description:
      'Maintain and manage Items, Kits, Bills of Materials, and Lot and Serial numbers with full traceability. Run production of raw materials into finished goods, plan jobs end-to-end, and price differently for individual Customers or Customer Groups, all in one place.',
  },
  {
    icon: ListFilter,
    title: 'Filters & Searches',
    description:
      'Filter records to find the exact data you need in seconds. Save filters for the searches you run again and again, so the work that used to take ten minutes takes ten seconds.',
  },
  {
    icon: Download,
    title: 'One-Click Export to Excel',
    description:
      'Every module list has a one-button export to Excel, straight from the records you are already looking at. No re-keying, no custom report request, no waiting.',
  },
  {
    icon: Boxes,
    title: '20 Core Modules Included',
    description:
      'G/L, A/R, A/P, Quotes, Job Costing, Inventory Control, Bills of Materials, Canadian Payroll, Sales and Purchase Orders, multi-currency and more, all included in the core system rather than sold as bolt-ons.',
  },
  {
    icon: Building2,
    title: 'Unlimited Companies',
    description:
      'Maintain separate databases for as many companies as you need at no additional fee. Useful for holding companies, multiple entities, or keeping prior-year data live and queryable.',
  },
  {
    icon: Bell,
    title: 'Built-In Alerts, CRM and Calendar',
    description:
      'Set alerts so key follow-ups do not slip. Spire ships with native CRM and Calendar modules. Assign any user to follow up on a specific date and a pop-up tells them exactly what needs to happen.',
  },
  {
    icon: GraduationCap,
    title: 'Online Training Videos',
    description:
      'Short, focused video instructions are recorded on nearly every topic and accessible directly through the Help feature. New hires get up to speed on their own time.',
  },
  {
    icon: Network,
    title: 'Complete Integration Throughout the System',
    description:
      'Every module is integrated. View and maintain sales and purchase orders wherever they live (on the Customer, on the Vendor, or on the Inventory item) and the data stays in sync automatically.',
  },
  {
    icon: MapPin,
    title: 'Multiple Locations',
    description:
      'Native multi-location inventory and operational support. Track stock, costs, and movement across warehouses, branches, or retail sites without external workarounds.',
  },
  {
    icon: Layers,
    title: 'Real-Time Visibility',
    description:
      'Because operations and accounting share one data set, every dashboard, report, and inquiry reflects what is actually happening right now, not what happened at last night\'s sync.',
  },
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
              Spire: The Natural Upgrade from BusinessVision.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              Modern accounting and operations software with deep integration,
              powerful inventory management, and real-time visibility. Built to
              handle the volume and complexity that legacy systems struggle
              with.
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
                href="/assessment"
                variant="secondaryDark"
                size="lg"
                arrow
              >
                Take the Fit Assessment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Lead: BusinessVision Upgrade Path ── */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <p className="eyebrow text-accent-600 mb-4">From BusinessVision</p>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                The most efficient upgrade from BusinessVision.
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed">
                If you are running BusinessVision today, Spire is the most
                logical and direct path forward, built by the same heritage,
                with a modern foundation underneath.
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
              className="lg:col-span-7 bg-white rounded-2xl p-10 lg:p-12 shadow-card border border-ivory-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight
                    className="w-5 h-5 text-accent-600"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="text-[length:--font-size-h2] font-semibold text-navy-900 mb-3">
                    Keep every record. Bring every history forward.
                  </h3>
                  <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                    Moving to Spire from BusinessVision preserves the full
                    depth of your historical data: customers, vendors,
                    inventory, transactions, and the trail behind them. What
                    other accounting software upgrade can honestly make that
                    claim?
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pt-6 border-t border-ivory-200">
                {[
                  'Direct upgrade path designed for BusinessVision users',
                  'All historical records retained, not just opening balances',
                  'Familiar concepts and terminology, modernized',
                  'A migration we have done many times before',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[length:--font-size-body] text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">What Spire Delivers</p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              Built for the volume and complexity legacy systems can&apos;t carry.
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
                  delay: (i % 3) * 0.08,
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

      {/* ── Moving from BusinessVision callout ── */}
      <section className="bg-navy-900 py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="eyebrow text-accent-400 mb-5">
              Moving from BusinessVision?
            </p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-6">
              We have done this migration more times than anyone else you&apos;ll talk to.
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Spire is the recommended path forward from BusinessVision, and
              we have spent decades doing exactly these migrations. We know
              where data needs cleaning, where defaults will hurt you, and how
              to bring the full history across without surprises after go-live.
            </p>
            <Button href="/assessment" variant="accent" size="lg" arrow>
              Get a BusinessVision Migration Plan
            </Button>
          </motion.div>
        </div>
      </section>

      <Faq items={spireFaqs} heading="Spire questions, answered." />

      {/* ── Final CTA ── */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-5">
              Ready to see what Spire can do for you?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you are moving off BusinessVision, evaluating Spire for
              the first time, or fixing an implementation that never landed
              properly, start with a real conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="accent" size="lg" arrow>
                Book a Spire Consultation
              </Button>
              <Button href="/assessment" variant="secondaryDark" size="lg" arrow>
                Take the Fit Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
