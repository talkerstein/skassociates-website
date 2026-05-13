"use client";

import { motion } from "framer-motion";
import {
  Package,
  CheckCircle2,
  Database,
  Mail,
  CreditCard,
  Layers,
  MessageSquare,
  FileText,
  Archive,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/ui/faq";
import { caseStudiesFaqs } from "@/data/faqs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const keyOutcomes = [
  {
    icon: Archive,
    text: "Migrated off an aging Sage 300 / Accpac install before it failed",
  },
  {
    icon: Database,
    text: "Over 16,000 items imported and categorized across nearly 40 product codes",
  },
  {
    icon: Layers,
    text: "Decades of obsolete data left behind — clean fresh start in Spire Cloud",
  },
  {
    icon: Mail,
    text: "Automated direct email of invoices, EFT processing, and integrated credit card processing",
  },
  {
    icon: CreditCard,
    text: "Drill-down access to all related records from a single transaction",
  },
  {
    icon: MessageSquare,
    text: "Communications module replacing manual collection follow-up",
  },
  {
    icon: FileText,
    text: "Forms customized to Medina's specific operations",
  },
];

export default function CaseStudiesPage() {
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
            <p className="eyebrow text-accent-400 mb-4">Case Studies</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              These stories demonstrate how with the correct software &amp; a proper understanding of your challenges, we can vastly improve your business operations.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              A closer look at a recent client engagement — the situation we
              inherited, the decisions we made together, and the day-to-day
              outcomes the team is seeing now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study — Medina Supply */}
      <SectionWrapper background="ivory" padding="large">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden"
        >
          {/* Hero image */}
          <div className="relative aspect-[21/9] overflow-hidden bg-navy-950">
            <img
              src="https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1600&h=900&fit=crop"
              alt="Industrial distribution and warehouse operations"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent" />
          </div>

          {/* Header */}
          <div className="bg-navy-950 px-8 lg:px-12 py-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-[length:--font-size-caption] font-medium text-slate-300">
                <Package className="w-3.5 h-3.5" strokeWidth={1.5} />
                Distribution &amp; Manufacturing
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-500/20 text-[length:--font-size-caption] font-medium text-accent-400">
                Spire (on Spire Cloud)
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/20 text-[length:--font-size-caption] font-medium text-gold-400">
                Featured case study
              </span>
            </div>
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-heading] text-ivory-50">
              Medina Supply Inc.
            </h2>
            <p className="mt-4 text-[length:--font-size-body-lg] leading-relaxed text-slate-300 max-w-3xl">
              Medina Supply is a distributor and manufacturer of industrial
              equipment. Our task was to convert their outdated software up to
              Spire Systems without bringing over any of the more than 20
              years&rsquo; worth of now-obsolete data.
            </p>
          </div>

          {/* Body — editorial layout */}
          <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
            <div className="grid lg:grid-cols-[1fr,minmax(0,18rem)] gap-12 lg:gap-16">
              {/* Content column */}
              <div className="max-w-3xl space-y-12">
                <section>
                  <p className="eyebrow text-accent-600 mb-4">Background</p>
                  <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-4">
                    A trusted name in industrial supply
                  </h3>
                  <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700">
                    Medina Supply is a distributor and manufacturer of
                    industrial equipment, pipe, valves, fittings, and related
                    process control components. The company is cost-competitive
                    and staffed by experienced product experts. They offer free
                    delivery in their trading area and emergency after-hour
                    service 24/7.
                  </p>
                </section>

                <section>
                  <p className="eyebrow text-accent-600 mb-4">The Challenge</p>
                  <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-4">
                    A failing legacy system, weighed down by obsolete data
                  </h3>
                  <div className="space-y-4 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700">
                    <p>
                      Medina was running a very old version of Sage 300 /
                      Accpac. The fear was that the software was susceptible to
                      stopping at any time. Additionally, the company was
                      restricted from automating features such as direct email
                      and EFT processing — features that have become both
                      popular and necessary.
                    </p>
                    <p>
                      Installing new software and converting all their records
                      to the new system did not make sense, as there were tons
                      of entries that contained obsolete data.
                    </p>
                  </div>
                </section>

                <section>
                  <p className="eyebrow text-accent-600 mb-4">The Solution</p>
                  <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-4">
                    Spire Cloud, with a clean slate
                  </h3>
                  <div className="space-y-4 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700">
                    <p>
                      We upgraded to Spire Systems Accounting, hosted on the
                      Spire Cloud.
                    </p>
                    <p>
                      The staff at Medina deleted all the obsolete records and
                      updated all the incorrect records in Excel spreadsheets.
                    </p>
                    <p>
                      We used the extensive Importing feature in Spire to
                      populate all the master records — including G/L Accounts,
                      Customers and Vendors, and Inventory Item records. We
                      also labelled each of over 16,000 items within one of
                      almost 40 different product codes.
                    </p>
                    <p>
                      We were able to customize the various forms to meet
                      Medina&rsquo;s needs.
                    </p>
                    <p>
                      As we were importing the records, we created test copies
                      of the Spire database so the staff could test, verify,
                      and modify entries as required. The test copy also
                      assisted the staff in learning the new software.
                    </p>
                  </div>
                </section>

                <section>
                  <p className="eyebrow text-accent-600 mb-4">The Result</p>
                  <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-4">
                    Fully operational, fully automated
                  </h3>
                  <div className="space-y-4 text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-700">
                    <p>
                      Medina Supply is fully operational on the new Spire
                      System accounting platform.
                    </p>
                    <p>
                      They have automated direct Rich Text emailing. All
                      invoices and other forms are now sent out electronically.
                      Spire maintains full historical records, with the
                      original correspondence saved against each customer. EFT
                      is automated from within Spire. Reporting is timely. The
                      Communications module assists with collections from
                      customers.
                    </p>
                    <p>
                      One of the strongest benefits the staff has mentioned is
                      the ability to drill down from within a transaction to
                      review relevant information without opening other modules
                      and searching. This has been very valuable to Medina.
                    </p>
                    <p>
                      Finally, the team is now integrating with a third-party
                      add-on to automate direct credit card processing from
                      within Spire, with very favourable processing fees.
                    </p>
                  </div>
                </section>
              </div>

              {/* Sidebar — key outcomes */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-ivory-200 bg-ivory-50 p-7 lg:p-8">
                  <p className="eyebrow text-accent-600 mb-4">Key Outcomes</p>
                  <h4 className="font-display text-[length:--font-size-h3] leading-[--line-height-heading] text-navy-900 mb-6">
                    What Medina gained
                  </h4>
                  <ul className="space-y-4">
                    {keyOutcomes.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-accent-500/10 ring-1 ring-accent-500/30 flex items-center justify-center">
                          <Icon
                            className="w-4 h-4 text-accent-600"
                            strokeWidth={1.75}
                          />
                        </span>
                        <span className="text-[length:--font-size-body-sm] leading-[--line-height-body] text-navy-800">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </motion.article>

        {/* Soft note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 text-center text-[length:--font-size-body-sm] text-slate-500 flex items-center justify-center gap-2"
        >
          <CheckCircle2
            className="w-4 h-4 text-accent-500"
            strokeWidth={1.75}
          />
          More case studies coming as we publish them with client permission.
        </motion.p>
      </SectionWrapper>

      <Faq items={caseStudiesFaqs} />

      {/* CTA */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:--font-size-display-sm] md:text-[length:--font-size-display] leading-[--line-height-display] tracking-[--letter-spacing-display] text-balance text-ivory-50 mb-6">
              Ready for results like these?
            </h2>
            <p className="text-[length:--font-size-body-lg] leading-[--line-height-body] text-slate-300 max-w-2xl mx-auto mb-10">
              Every business is different, but the process is the same: we
              listen, we assess, and we build a solution that works. Book a
              free consultation to get started.
            </p>
            <Button href="/contact" variant="accent" size="lg" arrow>
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
