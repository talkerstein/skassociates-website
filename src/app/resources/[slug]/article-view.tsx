"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, Calendar, Phone } from "lucide-react";
import type { Article } from "@/data/articles";
import { Button } from "@/components/ui/button";

interface Props {
  article: Article;
  related: Article[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-display text-[length:--font-size-h2] md:text-[length:--font-size-h1] leading-[--line-height-heading] text-navy-900 mt-14 mb-5 text-balance"
        >
          {trimmed.slice(3).trim()}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="text-[length:--font-size-body-lg] leading-[1.75] text-navy-900/85 mb-6"
      >
        {trimmed}
      </p>
    );
  });
}

export function ArticleView({ article, related }: Props) {
  return (
    <>
      {/* Hero with featured image */}
      <section className="relative bg-navy-950">
        <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        </div>

        <div className="relative -mt-32 md:-mt-40 pb-16 md:pb-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-[length:--font-size-body-sm] text-slate-300 hover:text-ivory-50 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
                All Resources
              </Link>
              <p className="eyebrow text-accent-400 mb-4">{article.category}</p>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-tight text-ivory-50 text-balance">
                {article.title}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[length:--font-size-body-sm] text-slate-300">
                <span className="font-medium text-ivory-50">{article.author}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  {article.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-ivory-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderContent(article.content)}
          </motion.article>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 rounded-2xl bg-navy-950 p-8 md:p-10 shadow-elevated"
          >
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500/15 items-center justify-center">
                <Phone className="w-5 h-5 text-accent-400" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="eyebrow text-accent-400 mb-3">Talk to Samuel</p>
                <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-ivory-50 mb-3 text-balance">
                  Have a question about this in your business?
                </h3>
                <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-300 mb-6">
                  Every business is different. The fastest way to find out how
                  this applies to yours is a short, no-obligation conversation.
                </p>
                <Button href="/contact" variant="accent" size="md" arrow>
                  Book a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More articles */}
      {related.length > 0 && (
        <section className="bg-white py-16 md:py-24 border-t border-ivory-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-[length:--font-size-display-sm] leading-[--line-height-heading] text-navy-900 text-balance">
                More articles
              </h2>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-[length:--font-size-body-sm] font-medium text-accent-600 hover:gap-2.5 transition-all duration-300"
              >
                All resources
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={`/resources/${other.slug}`}
                  className="group block rounded-2xl border border-ivory-200 bg-white shadow-card overflow-hidden transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={other.image}
                      alt={other.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow text-accent-600 mb-3">{other.category}</p>
                    <h3 className="font-display text-[length:--font-size-h2] leading-[--line-height-heading] text-navy-900 mb-3 text-balance">
                      {other.title}
                    </h3>
                    <p className="text-[length:--font-size-body] leading-[--line-height-body] text-slate-600">
                      {other.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
