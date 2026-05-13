"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, Briefcase, Heart } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const industries = [
  {
    icon: Package,
    title: "Distribution & Wholesale",
    slug: "distribution",
    description:
      "Inventory complexity, multi-warehouse operations, order volume, and vendor management — we configure systems that give you real-time control across the supply chain.",
    needs: [
      "Inventory accuracy",
      "Purchase order automation",
      "Sales order processing",
      "Multi-location reporting",
    ],
    accent: "bg-navy-900/[0.03]",
    border: "border-navy-900/[0.06]",
    iconBg: "bg-navy-900/[0.06]",
    iconColor: "text-navy-800",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    imageAlt: "Warehouse interior with organized inventory shelving",
  },
  {
    icon: Briefcase,
    title: "Service & Professional Organizations",
    slug: "service",
    description:
      "Project tracking, time-based billing, job costing, and financial visibility — built into a system that keeps pace with how service companies actually operate.",
    needs: [
      "Job costing",
      "Time tracking",
      "Billing workflows",
      "Project profitability",
    ],
    accent: "bg-accent-500/[0.04]",
    border: "border-accent-500/[0.08]",
    iconBg: "bg-accent-500/[0.08]",
    iconColor: "text-accent-600",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    imageAlt: "Professional consultation between two people",
  },
  {
    icon: Heart,
    title: "Not-for-Profit & Community Organizations",
    slug: "nonprofit",
    description:
      "Fund accounting, grant tracking, donor reporting, and board-ready financials — configured with the controls and transparency your stakeholders require.",
    needs: [
      "Fund accounting",
      "Grant reporting",
      "Budget controls",
      "Audit readiness",
    ],
    accent: "bg-gold-400/[0.05]",
    border: "border-gold-400/[0.10]",
    iconBg: "bg-gold-400/[0.10]",
    iconColor: "text-gold-500",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    imageAlt: "Community organization meeting",
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Industries() {
  return (
    <SectionWrapper background="ivory" padding="large" id="industries">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-600 mb-4">Industries We Serve</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
          Specialized experience where it matters most.
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <motion.div key={industry.slug} variants={cardVariants}>
              <Link
                href={`/industries/${industry.slug}`}
                className={`group block h-full rounded-2xl border ${industry.border} ${industry.accent} overflow-hidden transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/40 to-transparent" />
                </div>

                <div className="p-8 lg:p-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${industry.iconBg} mb-6`}
                >
                  <Icon className={`w-5 h-5 ${industry.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-4">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-8">
                  {industry.description}
                </p>

                {/* Key needs */}
                <div className="mb-8">
                  <p className="text-[length:--font-size-caption] font-semibold uppercase tracking-[0.1em] text-slate-500 mb-3">
                    Key Needs
                  </p>
                  <ul className="space-y-2">
                    {industry.needs.map((need) => (
                      <li
                        key={need}
                        className="flex items-center gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2.5 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
