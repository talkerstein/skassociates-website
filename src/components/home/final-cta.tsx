"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="bg-navy-950 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow text-accent-400 mb-4">Get Started</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50 mb-6">
            Ready to get real value from your accounting software?
          </h2>
          <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300 max-w-2xl mx-auto mb-10">
            Book a free, no-pressure consultation. We&apos;ll discuss your
            current setup, your pain points, and whether Spire or Adagio is the
            right fit — or if your existing system just needs better
            configuration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Free Consultation
            </Button>
            <Button href="/solutions" variant="ghost" size="lg" className="text-slate-300 hover:text-ivory-50 hover:bg-white/5">
              Explore Our Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
