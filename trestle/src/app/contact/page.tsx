import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Real humans, one business day",
  description:
    "Get in touch with the Trestle team. Sample projects, pricing questions, market expansion requests — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[58px]">
              Real humans. One business day.
            </h1>
            <p className="mt-6 text-pretty text-[18px] leading-relaxed text-ink-600">
              Whether you want sample leads, pricing details, or to ask about a
              market we haven&apos;t launched yet — we&apos;re a small team and
              we read everything that comes in.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-bone-50 pb-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <LeadCaptureForm
                variant="full"
                ctaLabel="Send message"
              />
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-900/10 bg-bone-100/60 p-6 sm:p-8">
                <SectionLabel variant="forge">Direct lines</SectionLabel>
                <ul className="mt-6 space-y-5 text-[15px] text-ink-800">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ink-500" />
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-medium text-ink-900 hover:text-spark-600"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ink-500" />
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                        Based in
                      </p>
                      <p className="font-medium text-ink-900">Miami, FL</p>
                      <p className="text-[13.5px] text-ink-600">
                        Serving Miami-Dade County · City of Miami · Coral Gables
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ink-500" />
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                        Response time
                      </p>
                      <p className="text-[14.5px] text-ink-700">
                        We reply within <span className="font-semibold text-ink-900">1 business day</span> — usually same day.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl border border-spark-500/30 bg-spark-50 p-5">
                  <div className="flex items-center gap-2 text-spark-700">
                    <ShieldCheck className="h-4 w-4" strokeWidth={2.25} />
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]">
                      Our promise
                    </p>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-700">
                    No mailing lists. No drip sequences. You write us, a person
                    writes back. That&apos;s it.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
