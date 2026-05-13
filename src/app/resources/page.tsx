"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { articles } from "@/data/articles";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ResourcesPage() {
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
            <p className="eyebrow text-accent-400 mb-4">Articles &amp; Insights</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
              Articles, Use Cases &amp; Plain-Language Guides
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Practical writing on Spire, Adagio, migrations, reporting, and the
              realities of running better business systems &mdash; from someone
              who has spent thirty years inside them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <SectionWrapper background="ivory" padding="large">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {articles.map((article) => (
            <motion.article key={article.slug} variants={cardVariants}>
              <Link
                href={`/resources/${article.slug}`}
                className="group block h-full rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-navy-900/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[length:--font-size-caption] font-semibold text-navy-900">
                    {article.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-8">
                  <h2 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-3 text-balance">
                    {article.title}
                  </h2>
                  <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-4 pt-5 border-t border-ivory-200">
                    <div className="flex items-center gap-3 text-[length:--font-size-caption] text-slate-500">
                      <span className="font-medium text-navy-800">
                        {article.author}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.75} />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[length:--font-size-body-sm] font-medium text-accent-600 group-hover:gap-2 transition-all duration-300">
                      Read
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                  <p className="mt-3 text-[length:--font-size-caption] text-slate-400">
                    {formatDate(article.publishedAt)}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
