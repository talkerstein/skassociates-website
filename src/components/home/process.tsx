"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const EXPO = [0.16, 1, 0.3, 1] as const;

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  caption: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a candid conversation about your current systems, pain points, and goals. No pressure, no pitch — just clarity. We need to understand where you are before we recommend where to go.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=900&fit=crop",
    caption: "Step 01 — Discovery Call",
  },
  {
    number: "02",
    title: "Assessment & Recommendation",
    description:
      "We review your workflows and data, then recommend the platform and configuration that fits your business — not the other way around. If your current system just needs better setup, we will tell you. Honesty over upsell.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
    caption: "Step 02 — Assessment & Recommendation",
  },
  {
    number: "03",
    title: "Implementation & Migration",
    description:
      "We configure the system around your operations, migrate your data cleanly, and test everything before go-live. You see the system running on your real data before anyone depends on it.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop",
    caption: "Step 03 — Implementation & Migration",
  },
  {
    number: "04",
    title: "Training & Go-Live",
    description:
      "Your team gets hands-on training tailored to their roles — not a generic walkthrough. We stay close during go-live to handle anything that comes up. Confidence on day one, not month three.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=900&fit=crop",
    caption: "Step 04 — Training & Go-Live",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We don't disappear after the invoice. Ongoing support, system optimization, and guidance — for as long as you need it. The relationship lasts as long as the system does.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop",
    caption: "Step 05 — Ongoing Support",
  },
];

interface StepBlockProps {
  step: Step;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
}

function StepBlock({ step, index, isActive, onActivate }: StepBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.5, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  return (
    <div
      ref={ref}
      className="flex min-h-[70vh] lg:min-h-[80vh] items-center py-10 lg:py-16"
    >
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.35 }}
        transition={{ duration: 0.5, ease: EXPO }}
        className="w-full"
      >
        <div className="flex items-start gap-5 lg:gap-6">
          {/* Number circle */}
          <motion.div
            animate={{
              backgroundColor: isActive ? "var(--color-accent-500, #c89b4a)" : "rgba(255,255,255,0)",
              borderColor: isActive ? "var(--color-accent-500, #c89b4a)" : "rgba(15, 23, 42, 0.15)",
              color: isActive ? "#ffffff" : "var(--color-navy-900, #0b1733)",
            }}
            transition={{ duration: 0.4, ease: EXPO }}
            className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full border flex items-center justify-center font-display text-[1.25rem] lg:text-[1.4rem]"
          >
            {step.number}
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="eyebrow text-accent-600 mb-3">Step {step.number}</p>
            <h3 className="font-display text-[length:--font-size-h1] leading-[--line-height-heading] tracking-[--letter-spacing-display] text-navy-900 text-balance">
              {step.title}
            </h3>
            <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600 max-w-xl">
              {step.description}
            </p>
          </div>
        </div>

        {/* Mobile-only inline image */}
        <div className="lg:hidden mt-8 rounded-2xl overflow-hidden border border-ivory-200 shadow-elevated">
          <img
            src={step.image}
            alt={step.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[360px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <SectionWrapper background="light" padding="large" id="process">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EXPO }}
        className="max-w-2xl mb-12 lg:mb-20"
      >
        <p className="eyebrow text-accent-600 mb-4">Our Process</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
          A process built around your business.
        </h2>
        <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600">
          Every engagement follows a clear, proven structure — but the details
          are always tailored to your specific situation.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* LEFT COLUMN — scrolling steps */}
        <div className="relative">
          {steps.map((step, i) => (
            <StepBlock
              key={step.number}
              step={step}
              index={i}
              isActive={activeStep === i}
              onActivate={setActiveStep}
            />
          ))}
        </div>

        {/* RIGHT COLUMN — sticky image (desktop only) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex items-start gap-6">
            {/* Vertical progress indicator */}
            <div className="flex flex-col items-center gap-3 pt-6">
              {steps.map((s, i) => (
                <div key={s.number} className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: activeStep === i ? 1.15 : 1,
                      backgroundColor:
                        activeStep === i
                          ? "var(--color-accent-500, #c89b4a)"
                          : "rgba(15, 23, 42, 0.18)",
                    }}
                    transition={{ duration: 0.4, ease: EXPO }}
                    className="w-2 h-2 rounded-full"
                  />
                  {i < steps.length - 1 && (
                    <div className="w-px h-10 bg-navy-900/10 my-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Image card */}
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden border border-ivory-200 shadow-elevated bg-ivory-100 aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.5, ease: EXPO }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 ring-1 ring-inset ring-navy-950/5 rounded-2xl pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="mt-5 flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.caption}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: EXPO }}
                    className="text-[length:--font-size-caption] font-medium tracking-wide text-slate-600"
                  >
                    {active.caption}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[length:--font-size-caption] tabular-nums text-slate-500">
                  {String(activeStep + 1).padStart(2, "0")}
                  <span className="text-slate-400"> / {String(steps.length).padStart(2, "0")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
