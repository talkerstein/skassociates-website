"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

interface Platform {
  name: string;
  subtitle: string;
  /** Logo file path under /public */
  logo: string;
  /** Optional destination — wraps the card in a Link when present */
  href?: string;
}

const platforms: Platform[] = [
  {
    name: "Spire Authorized Partner",
    subtitle: "Business Management",
    logo: "/logos/spire.png",
    href: "/solutions/spire",
  },
  {
    name: "Adagio Authorized Reseller",
    subtitle: "Accounting Software",
    logo: "/logos/adagio.png",
    href: "/solutions/adagio",
  },
  {
    name: "PayDirt Payroll",
    subtitle: "Payroll",
    logo: "/logos/paydirt.png",
  },
  {
    name: "Crystal Reports",
    subtitle: "Reporting",
    logo: "/logos/crystal-reports.png",
  },
  {
    name: "Microsoft Access",
    subtitle: "Custom Databases",
    logo: "/logos/microsoft-access.png",
  },
];

// Unified visual canvas for every logo card so different aspect ratios all
// land at the same perceived weight. The inner box is 64px tall; each logo
// fills with object-contain and gets the same max constraints.
const LOGO_CONTAINER = "flex h-16 w-full items-center justify-center";
const LOGO_IMG =
  "max-h-16 max-w-[180px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]";

export function PlatformsStrip() {
  return (
    <SectionWrapper background="light" padding="default">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EXPO_EASE }}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
      >
        <p className="eyebrow text-slate-500 mb-3">Certified On</p>
        <h2 className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] leading-[--line-height-heading] tracking-tight text-navy-900 text-balance">
          The platforms we know inside out.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5"
      >
        {platforms.map((platform) => {
          const cardClasses =
            "group flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-6 text-center shadow-card transition-all duration-300 hover:shadow-card-hover" +
            (platform.href ? " cursor-pointer hover:border-accent-500/40" : "");
          const cardInner = (
            <>
              <div className={LOGO_CONTAINER}>
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  loading="lazy"
                  className={LOGO_IMG}
                />
              </div>
              <p className="mt-4 text-[length:--font-size-caption] font-medium uppercase tracking-[0.12em] text-slate-500">
                {platform.subtitle}
              </p>
            </>
          );
          return (
            <motion.div
              key={platform.name}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EXPO_EASE },
                },
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: EXPO_EASE }}
            >
              {platform.href ? (
                <Link href={platform.href} className={cardClasses}>
                  {cardInner}
                </Link>
              ) : (
                <div className={cardClasses}>{cardInner}</div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
