"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Warehouse,
  TruckIcon,
  BarChart3,
  ShoppingCart,
  Check,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    title: "Inventory counts never match",
    description:
      "Physical stock and system stock drift apart because updates are manual, delayed, or duplicated across spreadsheets.",
  },
  {
    title: "Purchase orders tracked manually",
    description:
      "Reorder points are guesswork. Vendors get duplicate orders or orders arrive too late because nothing is automated.",
  },
  {
    title: "Sales orders fall through the cracks",
    description:
      "Orders entered in one system never make it to shipping. Customers call asking where their delivery is.",
  },
  {
    title: "Multi-warehouse blind spots",
    description:
      "Stock sits in one location while another runs out. There is no single view of inventory across all warehouses.",
  },
  {
    title: "Month-end takes days",
    description:
      "Reconciling inventory, AP, AR, and GL means pulling data from multiple sources and hoping it matches.",
  },
  {
    title: "Reports that take 35+ minutes",
    description:
      "Key business reports require exporting data, pasting into Excel, and building the report by hand every time.",
  },
];

const capabilities = [
  "Real-time inventory tracking across all locations",
  "Automated purchase order generation at reorder points",
  "Sales order processing with integrated picking and shipping",
  "Multi-warehouse transfers and visibility",
  "Vendor management and purchase history",
  "Lot tracking and serial number management",
  "Landed cost calculations",
  "Custom dashboards and real-time reporting",
  "Multi-currency support for international suppliers",
  "Integrated CRM for customer relationship tracking",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function DistributionPage() {
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-[length:--font-size-body-sm] text-slate-400 hover:text-ivory-50 transition-colors mb-6"
            >
              &larr; All Industries
            </Link>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] mb-6">
              <Package className="w-6 h-6 text-ivory-100" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Distribution &amp; Wholesale
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Inventory complexity, multi-warehouse operations, order volume,
              and vendor management — we configure systems that give you
              real-time control across the entire supply chain.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[length:--font-size-body-sm] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              Recommended platform: <strong className="text-ivory-50">Spire</strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-[420px] shrink-0"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="Distribution warehouse operations"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <SectionWrapper background="ivory" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="eyebrow text-accent-600 mb-4">The Challenge</p>
          <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance">
            Distribution pain points we solve every day.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-ivory-200 rounded-xl p-6 shadow-card"
            >
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/[0.08] flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-[0.95rem] leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Spire */}
      <SectionWrapper background="light" padding="large">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-accent-600 mb-4">Why Spire</p>
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
              Built for operations-driven businesses.
            </h2>
            <div className="space-y-5 text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
              <p>
                Spire is a full-suite ERP designed specifically for companies
                that manage inventory, purchasing, and sales orders. It is not a
                general-purpose accounting tool with inventory bolted on — it
                was built from the ground up for distribution and wholesale
                operations.
              </p>
              <p>
                We configure Spire to match your specific workflows: your
                warehouse layout, your vendor terms, your pricing tiers, your
                reporting needs. The result is a system that your team actually
                uses — because it works the way they work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-ivory-200 bg-ivory-50 p-8">
              <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] mb-6">
                What we configure for distribution
              </h3>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-[length:--font-size-body-sm] text-navy-800"
                  >
                    <Check
                      className="w-4 h-4 text-accent-500 mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote className="font-display text-[length:--font-size-h1] md:text-[length:--font-size-display-sm] leading-[--line-height-heading] text-ivory-50 mb-8">
              &ldquo;Reports that used to take us 35+ minutes are now generated
              in seconds. The difference has been transformational for our
              business.&rdquo;
            </blockquote>
            <div>
              <p className="text-[length:--font-size-body] font-semibold text-ivory-50">
                Bobby Bennett
              </p>
              <p className="text-[length:--font-size-body-sm] text-slate-400 mt-1">
                Co-Owner, Kilo Gateaux
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="ivory" padding="large">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance mb-6">
              Let&apos;s talk about your distribution operations.
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-600 mb-10">
              Book a free consultation and we will walk through your current
              setup, identify the biggest opportunities, and show you what Spire
              can do for your business.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
