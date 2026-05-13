"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const platforms = [
  {
    name: "Spire",
    logo: "/logos/spire.png",
    tagline: "Operations-driven businesses",
    description:
      "Full-suite ERP designed for companies managing inventory, purchasing, sales orders, and multi-location operations. Best fit for distribution, wholesale, and manufacturing.",
    strengths: [
      "Inventory & warehouse management",
      "Purchase order automation",
      "Sales order processing",
      "Integrated CRM & sales pipeline",
      "Multi-currency & multi-location",
      "Built-in production & BOM",
    ],
    href: "/solutions/spire",
    accent: "border-navy-700/20",
  },
  {
    name: "Adagio",
    logo: "/logos/adagio.png",
    tagline: "Accounting-focused organizations",
    description:
      "Modular accounting suite built for organizations that need deep financial controls, fund accounting, and flexible reporting. Strong fit for service firms, nonprofits, and professional practices.",
    strengths: [
      "General ledger & fund accounting",
      "Accounts payable & receivable",
      "Modular: pay only for what you need",
      "Robust financial reporting",
      "Bank reconciliation & audit trails",
      "Payroll integration",
    ],
    href: "/solutions/adagio",
    accent: "border-accent-500/20",
  },
];

export function PlatformComparison() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper background="navy" padding="large" id="platforms">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-400 mb-4">Find Your Fit</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50">
          Spire vs. Adagio: which platform fits your business?
        </h2>
        <p className="mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300">
          Both are powerful. Both are proven. The right choice depends on your
          operations, your team, and where your business is headed.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={platform.href}
              className={`group block h-full rounded-2xl border ${platform.accent} bg-white p-8 lg:p-10 shadow-card transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5`}
            >
              {/* Real logo replaces the previous text badge */}
              <div className="flex h-14 items-center justify-start mb-6">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  loading="lazy"
                  className="max-h-14 max-w-[160px] w-auto h-auto object-contain object-left"
                />
              </div>
              <p className="eyebrow text-slate-500 mb-3">{platform.tagline}</p>
              <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-8">
                {platform.description}
              </p>
              <ul className="space-y-3 mb-8">
                {platform.strengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                  >
                    <Check
                      className="w-4 h-4 text-accent-500 mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                Explore {platform.name}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 text-center"
      >
        <p className="text-slate-300 text-[length:--font-size-body-lg] mb-6">
          Not sure which platform fits? That&apos;s exactly what we&apos;re here for.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-accent-500/20"
        >
          Get Personalized Guidance
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
