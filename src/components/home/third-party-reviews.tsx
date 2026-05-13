"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

type PlatformBase = {
  name: string;
  logoLabel: string;
  logoClassName: string;
  href: string;
};

type StarPlatform = PlatformBase & {
  kind: "stars";
  rating: string;
  caption: string;
};

type BadgePlatform = PlatformBase & {
  kind: "badge";
  badge: string;
  caption: string;
};

type Platform = StarPlatform | BadgePlatform;

const platforms: Platform[] = [
  {
    kind: "stars",
    name: "Google",
    logoLabel: "GOOGLE",
    logoClassName: "bg-white text-[#4285F4] ring-1 ring-slate-200",
    rating: "4.9",
    caption: "Based on 28 reviews",
    href: "#",
  },
  {
    kind: "stars",
    name: "Clutch.co",
    logoLabel: "CLUTCH",
    logoClassName: "bg-white text-[#E32B2B] ring-1 ring-slate-200",
    rating: "5.0",
    caption: "Based on 6 reviews",
    href: "#",
  },
  {
    kind: "badge",
    name: "LinkedIn Recommendations",
    logoLabel: "LINKEDIN",
    logoClassName: "bg-white text-[#0A66C2] ring-1 ring-slate-200",
    badge: "12+",
    caption: "12 recommendations",
    href: "#",
  },
  {
    kind: "badge",
    name: "Better Business Bureau",
    logoLabel: "BBB",
    logoClassName: "bg-white text-navy-900 ring-1 ring-slate-200",
    badge: "A+",
    caption: "Accredited Business",
    href: "#",
  },
];

export function ThirdPartyReviews() {
  return (
    <SectionWrapper
      background="ivory"
      padding="large"
      id="third-party-reviews"
      className="bg-ivory-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-14"
      >
        <p className="eyebrow text-slate-500 mb-4">Independent Reviews</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-navy-900">
          Verified by the people who actually work with us.
        </h2>
        <p className="mt-5 text-[length:--font-size-body] leading-[--line-height-body] text-slate-700">
          We&apos;re rated on the platforms our clients trust. Click through to read what they say in their own words — not curated by us.
        </p>
      </motion.div>

      {/* TODO: Replace text placeholders with actual platform logos when accounts are set up — drop logo files into /public/logos/reviews/ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {platforms.map((platform, i) => (
          <motion.a
            key={platform.name}
            href={platform.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col rounded-2xl bg-white p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-ivory-200"
          >
            <div
              className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-xs md:text-sm font-bold tracking-wide self-start ${platform.logoClassName}`}
            >
              {platform.logoLabel}
            </div>

            <div className="mt-5 flex-1">
              {platform.kind === "stars" ? (
                <>
                  <div className="flex items-center gap-0.5" aria-label={`${platform.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-accent-500 fill-accent-500"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="mt-3 font-display text-3xl text-navy-900">
                    {platform.rating}
                  </p>
                  <p className="mt-1 text-[length:--font-size-caption] text-slate-500">
                    {platform.caption}
                  </p>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center justify-center rounded-md bg-navy-900 text-ivory-50 px-3 py-1 text-sm font-semibold">
                    {platform.badge}
                  </span>
                  <p className="mt-3 text-[length:--font-size-caption] text-slate-500">
                    {platform.caption}
                  </p>
                </>
              )}
            </div>

            <span className="mt-5 inline-flex items-center gap-1.5 text-[length:--font-size-caption] font-medium text-navy-900 group-hover:text-accent-600 transition-colors">
              Read reviews
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </span>
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">* Review counts and ratings shown are illustrative placeholders. Live data will populate once review platform accounts are connected.</p>
    </SectionWrapper>
  );
}
