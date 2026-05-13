"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { clsx } from "clsx";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  items: FaqItem[];
  /** "light" | "ivory" | "navy" */
  background?: "light" | "ivory" | "navy";
  /** Show "Still have questions?" CTA card at the bottom */
  showCta?: boolean;
}

export function Faq({
  eyebrow = "FREQUENTLY ASKED",
  heading = "Questions, answered plainly.",
  intro,
  items,
  background = "ivory",
  showCta = true,
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDark = background === "navy";
  const sectionBg = background;

  return (
    <SectionWrapper background={sectionBg} padding="default" id="faq">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p
            className={clsx(
              "eyebrow mb-4",
              isDark ? "text-accent-400" : "text-accent-600"
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={clsx(
              "font-display text-[length:--font-size-display-sm] lg:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance",
              isDark ? "text-ivory-50" : "text-navy-900"
            )}
          >
            {heading}
          </h2>
          {intro && (
            <p
              className={clsx(
                "mt-5 text-[length:--font-size-body-lg] leading-[--line-height-body]",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              {intro}
            </p>
          )}
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={clsx(
                  "rounded-xl border transition-colors duration-300",
                  isDark
                    ? open
                      ? "bg-navy-800/60 border-white/15"
                      : "bg-navy-800/30 border-white/8 hover:border-white/15"
                    : open
                    ? "bg-white border-slate-200 shadow-card"
                    : "bg-white/70 border-slate-200/70 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-start gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span
                    className={clsx(
                      "flex-1 font-medium text-[length:--font-size-body-lg] leading-[--line-height-heading]",
                      isDark ? "text-ivory-50" : "text-navy-900"
                    )}
                  >
                    {item.q}
                  </span>
                  <Plus
                    className={clsx(
                      "w-5 h-5 mt-1 shrink-0 transition-transform duration-300 ease-[var(--ease-out-expo)]",
                      open && "rotate-45",
                      isDark ? "text-accent-400" : "text-accent-600"
                    )}
                    strokeWidth={2}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className={clsx(
                          "px-6 pb-5 text-[length:--font-size-body] leading-[--line-height-body]",
                          isDark ? "text-slate-300" : "text-slate-600"
                        )}
                      >
                        {item.a.split("\n\n").map((para, idx) => (
                          <p key={idx} className={idx > 0 ? "mt-3" : ""}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* JSON-LD FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />

        {/* Still have questions CTA */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
              "mt-12 rounded-2xl p-8 lg:p-10 text-center border",
              isDark
                ? "bg-navy-800/40 border-white/10"
                : "bg-ivory-200/60 border-ivory-300"
            )}
          >
            <p
              className={clsx(
                "eyebrow mb-3",
                isDark ? "text-gold-400" : "text-accent-600"
              )}
            >
              STILL HAVE QUESTIONS?
            </p>
            <h3
              className={clsx(
                "font-display text-[length:--font-size-h1] leading-[--line-height-heading] mb-3",
                isDark ? "text-ivory-50" : "text-navy-900"
              )}
            >
              Talk it through with Samuel.
            </h3>
            <p
              className={clsx(
                "text-[length:--font-size-body] leading-[--line-height-body] mb-6 max-w-xl mx-auto",
                isDark ? "text-slate-300" : "text-slate-600"
              )}
            >
              A 30-minute call costs nothing and clears up most questions in
              a single conversation.
            </p>
            <Button
              href="/contact"
              variant="accent"
              size="md"
              arrow
            >
              Book a Free Consultation
            </Button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
