"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ThankYouContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow text-accent-400 mb-4">Message received</p>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-ivory-50 text-balance">
              Thank you. We&rsquo;ll be in touch shortly.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl"
            >
              Samuel typically responds within one business day. In the
              meantime, feel free to explore our case studies or see which
              platform fits your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/case-studies" variant="accent" size="lg" arrow>
                View Case Studies
              </Button>
              <Button
                href="/assessment"
                variant="secondary"
                size="lg"
                arrow
                className="border-ivory-50/20 text-ivory-50 hover:bg-ivory-50 hover:text-navy-900"
              >
                Take the Fit Assessment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supporting block */}
      <SectionWrapper background="ivory" padding="default">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900">
            What happens next
          </h2>
          <p className="mt-4 text-[length:--font-size-body] leading-relaxed text-slate-600">
            We&rsquo;ll review your message and reach out to schedule a short
            conversation. No sales pitch &mdash; just a chance to understand
            your business, your current setup, and whether we&rsquo;re a good
            fit to help.
          </p>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
