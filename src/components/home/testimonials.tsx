"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const testimonials = [
  {
    quote:
      "Reports that used to take us 35+ minutes are now generated in seconds. The difference has been transformational for our business.",
    name: "Bobby Bennett",
    title: "Co-Owner",
    company: "Kilo Gateaux",
  },
  {
    quote:
      "Samuel was a key element in our Adagio conversion. His knowledge of the software is excellent and he was always available when we needed guidance.",
    name: "Lester Frischman",
    title: "President/Owner",
    company: "",
  },
  {
    quote:
      "Amazing support throughout the entire process. Samuel is incredibly responsive and prompt. He truly understands the nonprofit space.",
    name: "Hannah Mestel",
    title: "Comptroller",
    company: "Non-Profit Organization",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper background="navy" padding="large" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="eyebrow text-accent-400 mb-4">Client Testimonials</p>
        <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50">
          Trusted by businesses across Canada.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-8 lg:p-10"
          >
            <Quote
              className="w-8 h-8 text-accent-500/50 mb-6"
              strokeWidth={1.5}
            />
            <blockquote className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-300 mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body-sm] font-semibold text-ivory-50">
                {testimonial.name}
              </p>
              <p className="text-[length:--font-size-caption] text-slate-400 mt-0.5">
                {testimonial.title}
                {testimonial.company && `, ${testimonial.company}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
