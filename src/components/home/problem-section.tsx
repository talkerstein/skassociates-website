'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle } from 'lucide-react';

const painPoints = [
  {
    title: 'Wrong-fit systems',
    description: 'Software chosen for price, not for operational fit.',
  },
  {
    title: 'Poor initial setup',
    description: 'Defaults left untouched, workflows never configured.',
  },
  {
    title: 'Weak reporting',
    description: "Data exists but can't be accessed when it matters.",
  },
  {
    title: 'Underused features',
    description: 'Paying for capability that nobody was trained to use.',
  },
  {
    title: 'Low team adoption',
    description: "Staff avoid the system because it's confusing.",
  },
  {
    title: 'No post-launch support',
    description: 'The vendor disappears after the invoice is paid.',
  },
];

function PainPointCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white border border-ivory-200 rounded-xl px-5 py-5 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-start gap-3.5">
        <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/8 flex items-center justify-center">
          <AlertCircle className="w-4 h-4 text-accent-500" />
        </div>
        <div>
          <h4 className="font-semibold text-navy-900 text-[0.95rem] leading-snug">
            {title}
          </h4>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const copyRef = useRef(null);
  const copyInView = useInView(copyRef, { once: true, margin: '-60px' });

  return (
    <section className="bg-ivory-50 py-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-accent-500">The Challenge</span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-navy-900 text-balance">
            Most businesses don&apos;t have a software problem. They have an
            implementation problem.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="mt-14 lg:mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Narrative copy */}
          <motion.div
            ref={copyRef}
            className="space-y-5 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={copyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-body-lg leading-[1.75] text-slate-600">
              Spire and Adagio are both capable platforms. But powerful software
              loses most of its value when it&apos;s poorly set up. And that
              happens far more often than it should.
            </p>
            <p className="text-body-lg leading-[1.75] text-slate-600">
              Teams waste hours every week on manual workarounds because the
              system was never configured for how they actually operate. Reports
              don&apos;t match reality. Inventory counts drift. Financial
              close takes days instead of hours.
            </p>
            <p className="text-body-lg leading-[1.75] text-slate-600">
              The result is always the same: bad implementations lead to bad
              data, bad reports, and bad decisions. And eventually, someone
              blames the software — when the software was never the problem.
            </p>
          </motion.div>

          {/* Right: Pain point cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3.5">
            {painPoints.map((point, i) => (
              <PainPointCard
                key={point.title}
                title={point.title}
                description={point.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
