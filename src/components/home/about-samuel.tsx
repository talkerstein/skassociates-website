"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function AboutSamuel() {
  return (
    <SectionWrapper background="ivory" padding="large" id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Founder portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:max-w-md lg:ml-auto"
        >
          {/* Subtle offset accent block for asymmetric depth */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent-500/10 border border-accent-500/20 hidden md:block" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-navy-900/10 shadow-elevated">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces"
              alt="Samuel Kopstick, Founder and Principal Consultant"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent p-6">
              <p className="font-display text-[length:--font-size-h3] text-ivory-50 leading-tight">
                Samuel Kopstick
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-300 mt-1">
                Founder &amp; Principal Consultant
              </p>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="eyebrow text-accent-600 mb-4">About Samuel</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
            One person. Real answers.
          </h2>
          <div className="space-y-5 text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
            <p>
              S. Kopstick &amp; Associates is a founder-led consulting practice.
              When you call, you get Samuel — not a call centre, not a ticket
              queue. That direct relationship is the foundation of everything
              we do.
            </p>
            <p>
              With over 30 years of hands-on experience implementing Spire and
              Adagio across distribution, service, and nonprofit organizations,
              Samuel brings deep platform knowledge paired with a practical,
              plain-language approach that clients appreciate.
            </p>
            <p>
              The goal is always the same: make your system work the way your
              business works, and be there when you need help — not just during
              go-live, but for years after.
            </p>
          </div>

          {/* Quick contact */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="tel:4167858637"
              className="flex items-center gap-2 text-[length:--font-size-body-sm] font-medium text-navy-800 hover:text-accent-600 transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              416-785-8637
            </a>
            <a
              href="mailto:samuel@skassociates.ca"
              className="flex items-center gap-2 text-[length:--font-size-body-sm] font-medium text-navy-800 hover:text-accent-600 transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              samuel@skassociates.ca
            </a>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[length:--font-size-body-sm] font-medium text-accent-600 hover:gap-3 transition-all duration-300"
            >
              More about Samuel &amp; our approach
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
