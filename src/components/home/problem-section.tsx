'use client';

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Settings,
  FileWarning,
  EyeOff,
  Users,
  CircleSlash,
  type LucideIcon,
} from 'lucide-react';

type PainPoint = {
  title: string;
  short: string;
  long: string;
  Icon: LucideIcon;
};

const painPoints: PainPoint[] = [
  {
    title: 'Wrong-fit systems',
    short: 'Chosen for price, not for fit.',
    long: "Software chosen for price or familiarity, not for operational fit. The system can't model how the business actually works, so the team builds workarounds in Excel and email.",
    Icon: AlertTriangle,
  },
  {
    title: 'Poor initial setup',
    short: 'Defaults left untouched.',
    long: 'Defaults left untouched. Workflows never configured. Permissions wide open. The result is a system that technically works but never matches how the team actually operates day to day.',
    Icon: Settings,
  },
  {
    title: 'Weak reporting',
    short: 'Data you can’t reach in time.',
    long: 'Data exists, but nobody can get to it when it matters. Reports take 30+ minutes to run. Managers stop asking and start guessing.',
    Icon: FileWarning,
  },
  {
    title: 'Underused features',
    short: 'Paying for capability nobody uses.',
    long: "You're paying for capability that nobody was trained to use. Modules sit dormant. The system delivers a fraction of the value it could.",
    Icon: EyeOff,
  },
  {
    title: 'Low team adoption',
    short: 'Shadow systems take over.',
    long: "Staff avoid the system because it's confusing. Data ends up in shadow systems: sticky notes, side spreadsheets, one person's inbox. Trust in the data erodes.",
    Icon: Users,
  },
  {
    title: 'No post-launch support',
    short: 'The vendor disappears.',
    long: 'The vendor disappears after the invoice clears. When questions come up six months later, there is nobody who knows your setup. The investment slowly fades.',
    Icon: CircleSlash,
  },
];

function PainPanel({
  point,
  index,
  isActive,
}: {
  point: PainPoint;
  index: number;
  isActive: boolean;
}) {
  const { Icon } = point;
  return (
    <motion.article
      data-index={index}
      className="pain-panel relative min-h-[80vh] flex items-center"
      animate={{
        opacity: isActive ? 1 : 0.35,
        scale: isActive ? 1 : 0.98,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={[
          'relative w-full rounded-2xl border bg-white px-7 py-8 sm:px-9 sm:py-10 transition-shadow duration-500',
          isActive
            ? 'border-accent-500/40 shadow-elevated ring-1 ring-accent-500/20'
            : 'border-ivory-200 shadow-card',
        ].join(' ')}
      >
        <div className="flex items-start gap-5">
          <div
            className={[
              'flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500',
              isActive ? 'bg-accent-500/10' : 'bg-ivory-100',
            ].join(' ')}
          >
            <Icon
              className={[
                'w-7 h-7 transition-colors duration-500',
                isActive ? 'text-accent-500' : 'text-slate-400',
              ].join(' ')}
              strokeWidth={1.6}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow text-slate-400">
              {String(index + 1).padStart(2, '0')} / 06
            </div>
            <h3 className="mt-2 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.15] tracking-tight text-navy-900">
              {point.title}
            </h3>
            <p className="mt-4 text-body-lg leading-[1.7] text-slate-600">
              {point.long}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const [activeIndex, setActiveIndex] = useState(0);

  // Track which panel is centered in the viewport on desktop.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) {
      setActiveIndex(0);
      return;
    }

    const panels = containerRef.current?.querySelectorAll('.pain-panel');
    if (!panels || panels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry whose center is closest to viewport center.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const vh = window.innerHeight;
        const center = vh / 2;
        let best: IntersectionObserverEntry | null = null;
        let bestDist = Infinity;
        for (const e of visible) {
          const r = e.boundingClientRect;
          const c = r.top + r.height / 2;
          const d = Math.abs(c - center);
          if (d < bestDist) {
            bestDist = d;
            best = e;
          }
        }
        if (best) {
          const idx = Number(
            (best.target as HTMLElement).dataset.index ?? '0',
          );
          setActiveIndex(idx);
        }
      },
      {
        // Narrow band around viewport center.
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    panels.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  // Scroll progress for the thin indicator line.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  // Map the meaningful portion of scroll (where sticky is engaged) to 0..1.
  const indicatorProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const indicatorHeight = useTransform(indicatorProgress, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);

  const active = painPoints[activeIndex];

  return (
    <section className="bg-ivory-50">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8 py-section">
        {/* Mobile heading (visible only on small screens) */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden max-w-3xl"
        >
          <span className="eyebrow text-accent-500">The Challenge</span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-navy-900 text-balance">
            Most businesses don&apos;t have a software problem. They have an
            implementation problem.
          </h2>
          <p className="mt-6 text-body-lg leading-[1.75] text-slate-600">
            Spire and Adagio are both capable platforms. But powerful software
            loses most of its value when it&apos;s poorly set up, and that
            happens far more often than it should.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: sticky narrative on desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow text-accent-500">The Challenge</span>
                <h2 className="mt-4 font-display text-[clamp(1.875rem,2.8vw,2.75rem)] leading-[1.1] tracking-tight text-navy-900 text-balance">
                  Most businesses don&apos;t have a software problem. They have
                  an implementation problem.
                </h2>
              </motion.div>

              {/* Counter + progress rail */}
              <div className="mt-10 flex items-stretch gap-5">
                {/* Thin progress rail */}
                <div className="relative w-px bg-ivory-200 overflow-hidden rounded-full">
                  <motion.div
                    className="absolute left-0 top-0 w-full bg-accent-500"
                    style={{ height: indicatorHeight }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="eyebrow text-slate-400">
                      Pain point
                    </span>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={activeIndex}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-2xl text-navy-900 tabular-nums"
                      >
                        {String(activeIndex + 1).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                    <span className="font-display text-2xl text-slate-300 tabular-nums">
                      / 06
                    </span>
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4"
                    >
                      <h3 className="font-display text-2xl leading-tight text-navy-900">
                        {active.title}
                      </h3>
                      <p className="mt-3 text-body-lg leading-[1.75] text-slate-600">
                        {active.long}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dot indicators */}
                  <div className="mt-8 flex items-center gap-2">
                    {painPoints.map((p, i) => (
                      <span
                        key={p.title}
                        aria-hidden
                        className={[
                          'h-1.5 rounded-full transition-all duration-500',
                          i === activeIndex
                            ? 'w-6 bg-accent-500'
                            : 'w-1.5 bg-ivory-300',
                        ].join(' ')}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: scrolling panels (desktop) / stacked cards (mobile) */}
          <div className="lg:col-span-7">
            {/* Desktop: tall scrolling panels */}
            <div className="hidden lg:flex flex-col gap-6">
              {painPoints.map((p, i) => (
                <PainPanel
                  key={p.title}
                  point={p}
                  index={i}
                  isActive={i === activeIndex}
                />
              ))}
            </div>

            {/* Mobile: simple stacked cards */}
            <div className="lg:hidden grid sm:grid-cols-2 gap-4">
              {painPoints.map((p, i) => {
                const { Icon } = p;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative bg-white border border-ivory-200 rounded-xl px-5 py-5 shadow-card"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center">
                        <Icon
                          className="w-4.5 h-4.5 text-accent-500"
                          strokeWidth={1.7}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900 text-[0.95rem] leading-snug">
                          {p.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                          {p.long}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
