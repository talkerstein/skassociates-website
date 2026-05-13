'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Video,
  Monitor,
  CheckCircle2,
  Headphones,
  Clock,
  MessageSquare,
  AlertTriangle,
  BookOpen,
  Zap,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Faq } from '@/components/ui/faq';
import { trainingFaqs } from '@/data/faqs';

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

const trainingApproach = [
  {
    icon: Users,
    title: 'Role-Based Training',
    description:
      'Your AP clerk and your sales manager do not need the same training. We teach each role exactly what they need, no more, no less. Everyone leaves confident in their specific responsibilities.',
  },
  {
    icon: MessageSquare,
    title: 'Plain Language, Real Scenarios',
    description:
      'No jargon, no abstract demos. We train using your actual data, your real workflows, and the specific tasks your team will perform every day. The system feels familiar before it goes live.',
  },
  {
    icon: Monitor,
    title: 'On-Site & Remote Delivery',
    description:
      'We come to you for hands-on sessions, and we offer remote training for distributed teams, follow-up refreshers, and new hire onboarding. Whatever format works best for your people.',
  },
  {
    icon: Video,
    title: 'Video & Reference Resources',
    description:
      'Custom video walkthroughs and quick-reference guides for your specific configuration. Your team always has somewhere to turn when they need a refresher, without waiting for support.',
  },
  {
    icon: BookOpen,
    title: 'Documentation & SOPs',
    description:
      'Written step-by-step procedures for daily operations, month-end processes, and exception handling. Your institutional knowledge is documented, not locked in one person\'s memory.',
  },
  {
    icon: Zap,
    title: 'New Hire Onboarding',
    description:
      'When you bring on new team members, we provide focused onboarding training so they are productive quickly, without pulling experienced staff away from their work.',
  },
];

const whyItMatters = [
  {
    problem: 'Untrained teams underuse the software',
    detail:
      'When people do not understand what the system can do, they default to manual processes and spreadsheets, making the entire investment pointless.',
  },
  {
    problem: 'Workarounds multiply and compound',
    detail:
      'One person finds a shortcut. Others copy it. Six months later, your data is unreliable and nobody can figure out why the reports are wrong.',
  },
  {
    problem: 'Errors become expensive',
    detail:
      'A misposted payment, a duplicated invoice, an incorrect inventory adjustment: these are not just mistakes. They are audit findings, customer complaints, and lost revenue.',
  },
  {
    problem: 'Key person dependency becomes a risk',
    detail:
      'If only one person knows how to run month-end close or fix a posting error, you have a single point of failure that gets more dangerous every day.',
  },
];

const supportFeatures = [
  {
    icon: Headphones,
    title: 'Direct Expert Access',
    description:
      'No ticket queues, no first-tier scripts, no explaining your setup to someone new every time. You reach someone who already knows your system, your configuration, and your history.',
  },
  {
    icon: Clock,
    title: 'Responsive Turnaround',
    description:
      'We understand that when something is broken, waiting is not an option. Our average response time is under 48 hours, and critical issues get same-day attention.',
  },
  {
    icon: CheckCircle2,
    title: 'Proactive Guidance',
    description:
      'We do not just fix problems. We help you anticipate them. Year-end preparation, version upgrade planning, and process refinements are part of every support relationship.',
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TrainingPage() {
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
              Training & Support
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance"
            >
              Training That Sticks. Support That Stays.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-2xl"
            >
              Your software is only as good as the people using it. We
              deliver practical, role-based training that builds real
              competence, and ongoing support from someone who actually
              knows your system.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" arrow>
                Get Started with Training
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

      {/* ── Why Training Quality Matters ── */}
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
              <p className="eyebrow text-accent-600">
                The Cost of Poor Training
              </p>
            </div>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
              Bad Training Costs More Than You Think
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed">
              The software itself is rarely the problem. The real cost comes
              from teams that never learn to use it properly, leading to
              errors, inefficiency, and the slow erosion of trust in the
              system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyItMatters.map((item, i) => (
              <motion.div
                key={item.problem}
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
                <h3 className="text-[length:--font-size-h3] font-semibold text-navy-900 mb-3">
                  {item.problem}
                </h3>
                <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Training Approach ── */}
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
              Training Built Around Your People
            </h2>
            <p className="mt-4 text-[length:--font-size-body-lg] text-slate-600 max-w-2xl mx-auto">
              We do not deliver canned demos or generic tutorials. Every
              training session is designed for your specific team, your
              specific configuration, and your specific workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingApproach.map((item, i) => (
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

      {/* ── Support Section ── */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <p className="eyebrow text-accent-400 mb-4">
              Post-Go-Live Support
            </p>
            <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-ivory-50 mb-6">
              Not a Generic Help Desk
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 leading-relaxed">
              When you call for help, you should not have to explain your
              entire setup from scratch. Our support model means you work
              with someone who already knows your configuration, your data
              structure, and the specific decisions that were made during
              your implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white/[0.04] rounded-2xl p-8 border border-white/[0.06]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.06] mb-5">
                  <item.icon
                    className="w-5 h-5 text-accent-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[length:--font-size-h3] font-semibold text-ivory-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-[length:--font-size-body] text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator Callout ── */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-[length:--font-size-display-sm] tracking-tight text-navy-900 mb-6">
                The Difference a Dedicated Partner Makes
              </h2>
              <p className="text-[length:--font-size-body-lg] text-slate-600 leading-relaxed mb-8">
                Most software vendors offer training once, during
                implementation, and then point you to a generic help desk.
                That model fails because teams change, processes evolve, and
                new questions arise months after go-live.
              </p>
              <p className="text-[length:--font-size-body] text-slate-600 leading-relaxed">
                With S. Kopstick & Associates, your training and support is
                an ongoing relationship. We know your system because we
                built it. We know your team because we trained them. And
                when something changes, we are the first call, not the
                last resort.
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
                What Our Support Includes
              </h3>
              <ul className="space-y-4">
                {[
                  'Phone and remote support during business hours',
                  'Same-day response for critical issues',
                  'Year-end preparation and close assistance',
                  'Version upgrade planning and execution',
                  'New hire onboarding training',
                  'Process refinement as your business evolves',
                  'Custom report development and modifications',
                  'Quarterly system health checks',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.06,
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
              For the first time, our whole team actually knows how to use
              the system. The difference in confidence — and in the quality
              of our data — is remarkable.
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-navy-900">
                Office Manager
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-500">
                Not-for-Profit Organization, Ontario
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Faq items={trainingFaqs} heading="About training, support, and what comes after go-live." />

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
              Ready for Training That Actually Works?
            </h2>
            <p className="text-[length:--font-size-body-lg] text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you need initial training for a new implementation,
              refresher sessions for your existing team, or ongoing support
              from someone who knows your system, let us talk.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Get Started with Training
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
