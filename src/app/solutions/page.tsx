'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Cog,
  ArrowRightLeft,
  GraduationCap,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { solutionsFaqs } from '@/data/faqs';

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

/* ------------------------------------------------------------------ */
/*  Solution cards data                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    icon: Compass,
    title: 'Software Fit Guidance',
    description:
      'Not sure whether Spire or Adagio is right for your organization? We assess your workflows, growth plans, and reporting needs to recommend the platform that fits, not the one with the biggest feature list.',
    href: '/solutions/spire',
    linkLabel: 'Learn about Spire',
  },
  {
    icon: Cog,
    title: 'Implementation',
    description:
      'A proper implementation is the difference between software that transforms your operations and software that collects dust. We configure every module around how your team actually works.',
    href: '/solutions/implementation',
    linkLabel: 'See our approach',
  },
  {
    icon: ArrowRightLeft,
    title: 'Migration & Data',
    description:
      'Moving from legacy systems or spreadsheets? We handle the full data migration, including mapping, cleansing, validation, and verification, so nothing falls through the cracks.',
    href: '/solutions/implementation',
    linkLabel: 'Migration details',
  },
  {
    icon: GraduationCap,
    title: 'Training & Support',
    description:
      'Your team deserves training that actually sticks, and support from someone who already knows your system. Role-based, plain-language, and always available when you need it.',
    href: '/solutions/training',
    linkLabel: 'Explore training',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Process Improvement',
    description:
      'Your data is an asset, but only if you can get to it. We build custom reports, dashboards, and streamlined workflows so you spend less time digging and more time deciding.',
    href: '/solutions/reporting',
    linkLabel: 'Improve your reporting',
  },
];

/* ------------------------------------------------------------------ */
/*  Solution Card Component                                            */
/* ------------------------------------------------------------------ */

function SolutionCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel,
  index,
}: (typeof solutions)[number] & { index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900/[0.06] mb-6">
        <Icon className="w-5.5 h-5.5 text-navy-800" strokeWidth={1.5} />
      </div>

      <h3 className="text-[length:--font-size-h2] font-semibold text-navy-900 mb-3">
        {title}
      </h3>

      <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed mb-6">
        {description}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[length:--font-size-body-sm] font-semibold text-accent-600 hover:text-accent-500 transition-colors duration-200 group/link"
      >
        {linkLabel}
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SolutionsPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-900 to-navy-900" />
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
              Our Solutions
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Solutions That Actually Work
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              From software fit guidance to ongoing support, we help
              organizations get lasting value from Spire and Adagio. No
              bloated feature demos. No cookie-cutter rollouts. Just the
              right system, configured the right way, with the right people
              behind it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Solution Cards Grid â”€â”€ */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="eyebrow text-accent-600 mb-4"
            >
              How We Help
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900"
            >
              End-to-End Expertise
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-[length:--font-size-body-lg] text-slate-600 max-w-2xl mx-auto"
            >
              Most firms sell you software and wish you luck. We stay with
              you from the first conversation through years of ongoing
              support.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <SolutionCard key={solution.title} {...solution} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Why SK&A â”€â”€ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-accent-600 mb-4">
                Why S. Kopstick & Associates
              </p>
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                The Difference Between Installed and Implemented
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-8">
                Anyone can install accounting software. Making it work for
                your specific workflows, your reporting needs, and your
                team. That takes deep product knowledge, implementation
                experience, and the patience to get every detail right.
              </p>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                With over three decades of accounting software experience,
                including the years before Spire and Adagio came to dominate
                the mid-market, we have seen what works and what does not.
                Your implementation benefits from every lesson learned along
                the way.
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
                  label: 'Years of accounting software experience',
                },
                {
                  stat: 'Authorized',
                  label: 'Spire Partner & Adagio Reseller',
                },
                {
                  stat: 'Founder-led',
                  label: 'Every project handled by Samuel directly',
                },
                {
                  stat: 'Toronto',
                  label: 'Serving clients across Canada, remote-first',
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
                  className="flex items-center gap-6 bg-ivory-50 rounded-xl px-7 py-5 border border-ivory-200"
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

      {/* â”€â”€ Trust Strip â”€â”€ */}
      <section className="bg-ivory-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[length:--font-size-body-sm] text-slate-500"
          >
            {[
              'Certified Spire Partner',
              'Certified Adagio Partner',
              'Toronto-Based',
              'Remote Across Canada',
              'Crystal Reports Expertise',
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <Faq items={solutionsFaqs} />

      {/* â”€â”€ Bottom CTA â”€â”€ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-5">
              Not Sure Where to Start?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              That is exactly what the first conversation is for. No sales
              pitch, just an honest assessment of where you are and what
              would actually help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="accent" size="lg" arrow>
                Book a Free Consultation
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg" arrow className="border-white/15 text-ivory-50 hover:bg-white hover:text-navy-900">
                See Client Results
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
