"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  MessageSquare,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: MessageSquare,
    title: "Clarity over jargon",
    description:
      "We explain things in plain language. No buzzwords, no technical fog. You will always know what we are doing and why.",
  },
  {
    icon: Shield,
    title: "Honesty over salesmanship",
    description:
      "If your current system just needs better configuration, we will tell you. We do not push new software when it is not needed.",
  },
  {
    icon: Clock,
    title: "Long-term support over transactions",
    description:
      "We are not interested in one-time projects. Our goal is to be your ongoing technology partner for years to come.",
  },
  {
    icon: Heart,
    title: "Responsiveness over bureaucracy",
    description:
      "When you call, you get Samuel. No ticket queues, no automated responses, no waiting days for a callback.",
  },
];

const approach = [
  {
    title: "We listen first",
    description:
      "Every engagement starts with understanding your business, your pain points, and your goals. We do not prescribe solutions before understanding the problem.",
  },
  {
    title: "We configure around you",
    description:
      "Your system should match your workflows, not the other way around. We build the configuration around how your team actually operates.",
  },
  {
    title: "We train for independence",
    description:
      "Our goal is to make your team confident and self-sufficient. Training is hands-on, role-specific, and practical.",
  },
  {
    title: "We stay available",
    description:
      "Questions come up months or years after go-live. We are always a phone call away, ready to help with whatever comes up.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow text-accent-400 mb-4">About</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              One consultant. Real expertise. Lasting relationships.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              S. Kopstick &amp; Associates is a founder-led consulting practice
              built on a simple principle: your software partner should know
              your business as well as you do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Samuel */}
      <SectionWrapper background="ivory" padding="large">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Founder portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:max-w-md"
          >
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-2xl bg-accent-500/10 border border-accent-500/20 hidden md:block" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-navy-900/10 shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces"
                alt="Samuel Kopstick, Founder and Principal Consultant"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent p-6">
                <p className="font-display text-[length:--font-size-h3] text-ivory-50 leading-tight">
                  Samuel Kopstick
                </p>
                <p className="text-[length:--font-size-body-sm] text-slate-300 mt-1">
                  Founder &amp; Principal Consultant
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-accent-600 mb-4">Meet Samuel</p>
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
              The person behind the practice.
            </h2>
            <div className="space-y-5 text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
              <p>
                Samuel Kopstick founded S. Kopstick &amp; Associates to provide
                the kind of hands-on, expert software consulting that larger
                firms struggle to deliver. With over 30 years of experience
                implementing and supporting Spire and Adagio across dozens of
                organizations, he brings deep platform knowledge paired with a
                genuine understanding of business operations.
              </p>
              <p>
                His background spans distribution, professional services, and
                not-for-profit organizations &mdash; giving him the ability to
                speak the language of each industry and understand the specific
                challenges they face. Clients value his practical,
                plain-language approach and his commitment to staying involved
                long after the initial project is complete.
              </p>
              <p>
                Based in Toronto and serving clients across Canada, Samuel works
                both on-site and remotely, adapting to whatever works best for
                each client.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="tel:4167858637"
                className="flex items-center gap-2.5 text-[length:--font-size-body-sm] font-medium text-navy-800 hover:text-accent-600 transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                416-785-8637
              </a>
              <a
                href="mailto:samuel@skassociates.ca"
                className="flex items-center gap-2.5 text-[length:--font-size-body-sm] font-medium text-navy-800 hover:text-accent-600 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                samuel@skassociates.ca
              </a>
              <div className="flex items-center gap-2.5 text-[length:--font-size-body-sm] text-slate-600">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                Toronto, ON &mdash; Remote across Canada
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow text-accent-600 mb-4">Our Values</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            What guides every engagement.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-ivory-200 bg-white p-8 shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900/[0.06] mb-5">
                  <Icon className="w-5 h-5 text-navy-800" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-3">
                  {value.title}
                </h3>
                <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* How Samuel Works */}
      <SectionWrapper background="ivory" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow text-accent-600 mb-4">How We Work</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            Practical, plain-language, responsive.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {approach.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/[0.1] flex items-center justify-center">
                <span className="text-[length:--font-size-body-sm] font-semibold text-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="max-w-xl">
                <h3 className="font-display text-[length:--font-size-h3] leading-[--line-height-heading] mb-2">
                  {item.title}
                </h3>
                <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Working session image */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden shadow-elevated"
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop"
              alt="Working session reviewing documents and software configuration"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/30 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-16 max-w-2xl">
              <div>
                <p className="eyebrow text-accent-400 mb-3">In the Work</p>
                <p className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] text-ivory-50 leading-[--line-height-heading]">
                  Hands-on. Side-by-side. Plain language.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Clients Stay */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-accent-400 mb-4">Why Clients Stay</p>
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50 mb-6">
              This is not a transactional relationship.
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300 max-w-2xl mx-auto mb-10">
              Most of our clients have worked with us for years. They stay
              because the relationship is genuine, the support is consistent,
              and they know they can always reach someone who understands their
              business.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Start the Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
