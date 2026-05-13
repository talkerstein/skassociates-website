'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Settings,
  Database,
  Users,
  FileCheck,
  Shield,
  BarChart3,
  ClipboardCheck,
  RefreshCw,
  ArrowRightLeft,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { implementationFaqs } from '@/data/faqs';

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

const missedItems = [
  {
    icon: Settings,
    title: 'Workflow Configuration',
    description:
      'Default settings that do not match your processes. Approval chains, numbering sequences, and automation rules left unconfigured.',
  },
  {
    icon: Database,
    title: 'Data Mapping & Migration',
    description:
      'Historical data imported without cleaning or validation. Duplicate records, orphaned transactions, mismatched account structures.',
  },
  {
    icon: Users,
    title: 'User Permissions',
    description:
      'Everyone gets full access instead of role-appropriate permissions. No segregation of duties, no approval controls.',
  },
  {
    icon: BarChart3,
    title: 'Reporting Setup',
    description:
      'Standard reports are enabled but custom reports, the ones you actually need, are never built. Dashboards are empty.',
  },
  {
    icon: ClipboardCheck,
    title: 'Integration Testing',
    description:
      'Modules are installed but never tested together with real data. Problems surface only after go-live, when the cost of fixing them is highest.',
  },
  {
    icon: RefreshCw,
    title: 'Process Documentation',
    description:
      'No written procedures for daily operations, month-end close, or exception handling. Institutional knowledge stays in one person\'s head.',
  },
];

const ourApproach = [
  {
    step: '01',
    title: 'Business Process Review',
    description:
      'We map your actual workflows, not what the org chart says, but what people actually do every day. This is where we identify configuration requirements, automation opportunities, and integration needs.',
  },
  {
    step: '02',
    title: 'System Design & Configuration',
    description:
      'Every module is configured specifically for your business. Chart of accounts structure, tax settings, inventory rules, approval workflows, user permissions, all tailored to how you operate.',
  },
  {
    step: '03',
    title: 'Data Migration & Validation',
    description:
      'We plan the migration, clean the data, execute in a test environment, and validate every record. Nothing goes live until the numbers tie out and your team confirms accuracy.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description:
      'End-to-end testing using realistic scenarios. We run your month-end close, process sample transactions, and generate the reports you need, all before go-live.',
  },
  {
    step: '05',
    title: 'Training & Go-Live',
    description:
      'Role-based training on the system as configured for your team. We are on-site (or on-call) for the first week of live operation to handle anything unexpected.',
  },
  {
    step: '06',
    title: 'Post-Launch Support',
    description:
      'The relationship does not end at go-live. We stay engaged through the first month-end, first quarter-end, and first year-end to ensure everything works under real conditions.',
  },
];

const migrationSteps = [
  'Source system analysis and data inventory',
  'Field-by-field mapping to target system',
  'Data cleansing and deduplication',
  'Test migration with full validation',
  'Parallel run period for verification',
  'Final cutover with reconciliation',
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ImplementationPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
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
              Implementation & Migration
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Implementation Done Right, The First Time
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              A proper implementation is not just installing software. It is
              configuring every module around how your business operates,
              migrating your data cleanly, and making sure your team is ready
              to use it on day one.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Discuss Your Implementation
              </Button>
              <Button
                href="/solutions"
                variant="secondaryDark"
                size="lg"
                arrow
                
              >
                All Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ What Gets Missed â”€â”€ */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-accent-600" />
              <p className="eyebrow text-accent-600">The Problem</p>
            </div>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
              What Gets Missed in a Bad Implementation
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed">
              Most implementation failures are not dramatic. They are quiet.
              The system works, technically. But nobody trusts the numbers,
              workarounds multiply, and within six months your team is back
              to spreadsheets. Here is what typically gets overlooked:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missedItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
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

      {/* â”€â”€ How We Reduce Risk â”€â”€ */}
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
                <Shield className="w-6 h-6 text-accent-400" />
              </div>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-6">
                How We Reduce Risk and Confusion
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed mb-6">
                After three decades of accounting system implementations, we
                have seen most of the ways a project can go sideways, and we
                have built our process to prevent them. Every engagement starts
                with understanding your business, not your software requirements.
              </p>
              <p className="text-[length:--font-size-body] text-slate-400 leading-relaxed">
                We do not hand you a questionnaire and disappear for three
                weeks. We sit with your team, watch how work actually flows,
                and build the system around reality, not assumptions.
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
                  stat: '30+',
                  label: 'Years of implementation experience',
                },
                {
                  stat: 'Verified',
                  label: 'Every migration tested against source data',
                },
                {
                  stat: 'Hands-on',
                  label: 'Samuel runs the implementation himself',
                },
                {
                  stat: 'Hypercare',
                  label: 'Close post-launch support, not a handoff',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-6 bg-white/[0.04] rounded-xl px-7 py-5 border border-white/[0.06]"
                >
                  <span className="text-[length:--font-size-display-sm] font-display font-bold text-ivory-50 min-w-[5rem]">
                    {item.stat}
                  </span>
                  <span className="text-[length:--font-size-body] text-slate-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Our Approach â”€â”€ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="eyebrow text-accent-600 mb-4">Our Approach</p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900">
              Six Steps to a Successful Go-Live
            </h2>
            <p className="mt-4 text-[length:--font-size-body-lg] text-slate-600 max-w-2xl mx-auto">
              Every implementation follows this proven framework, adapted to
              your organization&apos;s specific needs and timeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourApproach.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-ivory-50 rounded-2xl p-8 border border-ivory-200"
              >
                <span className="block text-[length:--font-size-caption] font-bold text-accent-500 mb-4">
                  {item.step}
                </span>
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

      {/* â”€â”€ Migration Section â”€â”€ */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <ArrowRightLeft className="w-5 h-5 text-accent-600" />
                <p className="eyebrow text-accent-600">Data Migration</p>
              </div>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                Clean Migration. Zero Lost Records.
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-6">
                Data migration is where most implementations go wrong.
                Historical transactions, customer records, vendor data,
                inventory counts, open orders. All of it needs to move
                cleanly, tie out perfectly, and be verified before anyone
                touches the new system.
              </p>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                We treat migration as its own project within the project.
                It gets its own timeline, its own validation checkpoints,
                and its own sign-off process. Because if the data is wrong,
                nothing else matters.
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
              className="bg-white rounded-2xl p-10 shadow-card border border-ivory-200"
            >
              <h3 className="text-[length:--font-size-h2] font-semibold text-navy-900 mb-6">
                Our Migration Process
              </h3>
              <ol className="space-y-4">
                {migrationSteps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-navy-900 text-ivory-50 text-[length:--font-size-body-sm] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-[length:--font-size-body] text-slate-700 pt-0.5">
                      {step}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Testimonial â”€â”€ */}
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
              We migrated from a legacy system with 12 years of history.
              Every single record came through clean. Our auditors were
              impressed — and honestly, so were we.
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-navy-900">
                CFO
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-500">
                Distribution Company, Ontario
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={implementationFaqs} heading="What to expect from a real implementation." />

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-5">
              Ready to Get It Right?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether it is a fresh implementation, a rescue project, or a
              data migration, the first step is understanding where you are
              and where you need to go.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Discuss Your Implementation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
