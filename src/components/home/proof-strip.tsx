'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatProps {
  value: string;
  suffix?: string;
  label: string;
  delay: number;
}

function AnimatedNumber({ target, delay }: { target: number; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const duration = 1800;
      const steps = 40;
      const stepDuration = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current++;
        const progress = current / steps;
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));

        if (current >= steps) {
          clearInterval(interval);
          setCount(target);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return <span ref={ref}>{count}</span>;
}

function Stat({ value, suffix = '', label, delay }: StatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const hasPlus = value.includes('+');

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-tight text-navy-900">
        <AnimatedNumber target={numericValue} delay={delay} />
        {hasPlus && <span>+</span>}
        {suffix}
      </div>
      <div className="mt-2.5 text-sm font-medium text-slate-500 tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export function ProofStrip() {
  const stats = [
    { value: '30+', label: 'Years of Expertise', delay: 0 },
    { value: '100+', label: 'Businesses Supported', delay: 0.1 },
  ];

  return (
    <section className="bg-ivory-100 border-y border-ivory-200">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:gap-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
