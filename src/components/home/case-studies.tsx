"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

export function CaseStudies() {
  return (
    <SectionWrapper background="light" padding="large" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-accent-600 mb-4">Results</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            Real outcomes from real businesses.
          </h2>
        </motion.div>
        <Button href="/case-studies" variant="secondary" size="md" arrow>
          View case study
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/case-studies"
          className="group block rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&h=900&fit=crop"
                alt="Industrial distribution warehouse with pipes and fittings"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-950/50 via-navy-950/10 to-transparent" />
              <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1 rounded-full bg-gold-500/90 text-[length:--font-size-caption] font-semibold text-navy-950">
                Featured case study
              </span>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-100 text-[length:--font-size-caption] font-medium text-navy-800">
                  <Package className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Distribution &amp; Manufacturing
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-500/10 text-[length:--font-size-caption] font-medium text-accent-600">
                  Spire Cloud
                </span>
              </div>

              <h3 className="font-display text-[length:--font-size-h1] leading-[--line-height-heading] text-navy-900 mb-5 text-balance">
                Medina Supply Inc. — From legacy Sage to Spire Cloud
              </h3>

              <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600 mb-8">
                Medina Supply is a distributor and manufacturer of industrial
                equipment. We migrated them off an aging Sage 300 / Accpac
                install onto Spire Cloud — importing over 16,000 items across
                nearly 40 product codes and leaving more than 20 years of
                obsolete data behind for a clean fresh start.
              </p>

              <div className="flex items-center gap-1.5 text-[length:--font-size-body] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                Read the full case study
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <p className="mt-8 text-center text-[length:--font-size-body-sm] text-slate-500">
        Additional case studies coming as we publish them with client
        permission.
      </p>
    </SectionWrapper>
  );
}
