"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Cog, Rocket, LifeBuoy } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a candid conversation about your current systems, pain points, and goals. No pressure, no pitch — just clarity.",
  },
  {
    number: "02",
    icon: Search,
    title: "Assessment & Recommendation",
    description:
      "We review your workflows and data, then recommend the platform and configuration that fits your business — not the other way around.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementation & Migration",
    description:
      "We configure the system around your operations, migrate your data cleanly, and test everything before go-live.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Training & Go-Live",
    description:
      "Your team gets hands-on training tailored to their roles. We stay close during go-live to handle anything that comes up.",
  },
  {
    number: "05",
    icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "We don't disappear after the invoice. Ongoing support, system optimization, and guidance — for as long as you need it.",
  },
];

export function Process() {
  return (
    <SectionWrapper background="light" padding="large" id="process">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-600 mb-4">How We Work</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
          A process built around your business.
        </h2>
        <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600">
          Every engagement follows a clear, proven structure — but the details
          are always tailored to your specific situation.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-navy-900/10 via-navy-900/10 to-transparent" />

        <div className="space-y-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-6 lg:gap-10 items-start py-6 lg:py-8"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-2xl bg-ivory-100 border border-ivory-200 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-navy-800" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[length:--font-size-caption] font-semibold text-accent-500 tabular-nums">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
