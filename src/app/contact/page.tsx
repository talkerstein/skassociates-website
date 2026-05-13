"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Send,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const topicOptions: { value: string; label: string }[] = [
  { value: "Spire implementation or support", label: "Spire implementation or support" },
  { value: "Adagio implementation or support", label: "Adagio implementation or support" },
  {
    value: "Migration from another system",
    label: "Migration from another system (QuickBooks, BusinessVision, etc.)",
  },
  { value: "Training for our team", label: "Training for our team" },
  { value: "Reporting & process improvement", label: "Reporting & process improvement" },
  { value: "Payment processing", label: "Payment processing" },
  { value: "Other", label: "Other (let's chat)" },
];

const expectations = [
  {
    icon: MessageSquare,
    title: "A real conversation",
    description:
      "No sales pitch. We will ask about your business, your current setup, and your pain points.",
  },
  {
    icon: Clock,
    title: "A clear next step",
    description:
      "After the call, you will know whether we are a good fit and what the path forward looks like.",
  },
  {
    icon: CheckCircle,
    title: "No obligation",
    description:
      "The consultation is free. If we are not the right fit, we will tell you honestly.",
  },
];

export default function ContactPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  function toggleTopic(value: string) {
    setSelectedTopics((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

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
            <p className="eyebrow text-accent-400 mb-4">Contact</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Whether you are exploring Spire or Adagio for the first time,
              considering a migration, or looking for better support on your
              current system &mdash; the first step is a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <SectionWrapper background="ivory" padding="large">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <form
              action="https://formsubmit.co/samuel@skassociates.ca"
              method="POST"
              className="rounded-2xl border border-ivory-200 bg-white p-8 lg:p-10 shadow-card"
            >
              {/* FormSubmit.co configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Consultation Request — skassociates.ca"
              />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://skassociates.ca/thank-you"
              />
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <h2 className="font-display text-[length:--font-size-h1] leading-[--line-height-heading] mb-2">
                Request a consultation
              </h2>
              <p className="text-[length:--font-size-body] text-slate-500 mb-8">
                Fill out the form below and Samuel will reach out within one
                business day.
              </p>

              <div className="space-y-6">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-2"
                    >
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-[length:--font-size-body] text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-2"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-[length:--font-size-body] text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Phone + Organization row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-[length:--font-size-body] text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all duration-200"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-[length:--font-size-body] text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Topics */}
                <fieldset>
                  <legend className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-3">
                    What would you like to discuss?
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {topicOptions.map((opt) => {
                      const checked = selectedTopics.includes(opt.value);
                      return (
                        <label
                          key={opt.value}
                          className={`group flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all duration-200 ${
                            checked
                              ? "border-accent-600 bg-accent-500/[0.06]"
                              : "border-ivory-300 bg-ivory-50 hover:border-navy-900/25"
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="topics"
                            value={opt.value}
                            checked={checked}
                            onChange={() => toggleTopic(opt.value)}
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                              checked
                                ? "border-accent-600 bg-accent-600 text-white"
                                : "border-navy-900/25 bg-white"
                            }`}
                          >
                            {checked && (
                              <CheckCircle
                                className="w-3.5 h-3.5"
                                strokeWidth={2.5}
                              />
                            )}
                          </span>
                          <span className="text-[length:--font-size-body-sm] leading-snug text-navy-900 font-medium">
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[length:--font-size-body-sm] font-medium text-navy-900 mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-[length:--font-size-body] text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all duration-200 resize-none"
                    placeholder="Tell us about your current setup, your pain points, or what you are looking for..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-accent-600 hover:bg-accent-500 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  Send Message
                  <Send
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="rounded-2xl border border-ivory-200 bg-white p-8 shadow-card">
              <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-6">
                Reach out directly
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:4167858637"
                  className="flex items-center gap-3 text-[length:--font-size-body] text-navy-800 hover:text-accent-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy-900/[0.06] flex items-center justify-center">
                    <Phone className="w-4.5 h-4.5 text-navy-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">416-785-8637</p>
                    <p className="text-[length:--font-size-caption] text-slate-500">
                      Call or text
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:samuel@skassociates.ca"
                  className="flex items-center gap-3 text-[length:--font-size-body] text-navy-800 hover:text-accent-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy-900/[0.06] flex items-center justify-center">
                    <Mail className="w-4.5 h-4.5 text-navy-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">samuel@skassociates.ca</p>
                    <p className="text-[length:--font-size-caption] text-slate-500">
                      Email anytime
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-[length:--font-size-body] text-navy-800">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy-900/[0.06] flex items-center justify-center">
                    <MapPin className="w-4.5 h-4.5 text-navy-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">Toronto, Ontario</p>
                    <p className="text-[length:--font-size-caption] text-slate-500">
                      Remote across Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="rounded-2xl border border-ivory-200 bg-white p-8 shadow-card">
              <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-6">
                What to expect
              </h3>
              <div className="space-y-5">
                {expectations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon
                          className="w-5 h-5 text-accent-500"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h4 className="text-[length:--font-size-body-sm] font-semibold text-navy-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[length:--font-size-body-sm] leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
