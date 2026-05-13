import type { Metadata } from "next";
import {
  Compass,
  Target,
  Layers,
  MapPin,
  Hammer,
  Lock,
  Workflow,
  Database,
} from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { SevenDayStamp } from "@/components/SevenDayStamp";

export const metadata: Metadata = {
  title: "About — The active-project pipeline for trade contractors",
  description:
    "Trestle is a SaaS that turns building permits into sealed, callable active projects for trade subs. We started in Miami because Miami breaks every other lead-gen tool.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-16 sm:pt-24 sm:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionLabel>About Trestle</SectionLabel>
              <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[62px]">
                The active-project pipeline trade subs always wanted.
              </h1>
              <p className="mt-6 text-pretty text-[18px] leading-relaxed text-ink-700">
                Trestle is a SaaS that does one thing well: it turns the
                cleanest spend-intent signal in construction — a freshly
                issued building permit — into a verified, sealed,
                trade-classified active project. We packaged what every
                lead-gen tool refused to: real exclusivity, real freshness,
                real trade fit.
              </p>
              <p className="mt-5 text-pretty text-[18px] leading-relaxed text-ink-700">
                We launched in Miami-Dade because Miami breaks every other
                lead-gen tool. If the pipeline works in this market — the
                volume, the permit chaos, the trade density — it works
                anywhere.
              </p>
            </div>
            <div className="hidden lg:col-span-5 lg:flex lg:justify-end">
              <SevenDayStamp size={220} variant="ink" rotate={-6} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bone-100 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel variant="forge">Our thesis</SectionLabel>
              <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
                Permits are the cleanest spend-intent signal in construction.
                Nobody&apos;s packaging them for the trades.
              </h2>
              <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink-700">
                <p>
                  Most lead-gen for contractors is built around homeowner
                  forms — someone fills out a quote request and the same
                  inquiry gets sold to four or five subs. By the third call
                  the homeowner is annoyed. By the fifth, they&apos;ve gone
                  with a neighbor.
                </p>
                <p>
                  Permits don&apos;t work that way. A permit is a record of
                  intent backed by money. The project is real. The address is
                  real. Someone is actively assembling a crew to do the work
                  this month.
                </p>
                <p>
                  That signal deserved a better wrapper than a CSV export and
                  a search bar. So we built Trestle.
                </p>
                <p>
                  We don&apos;t sell leads. We sell{" "}
                  <strong className="text-ink-900">active projects</strong>{" "}
                  with verified buyers who are ready to build — sealed to one
                  trade for seven days.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Workflow,
                  h: "What Trestle is",
                  p: "A SaaS pipeline that ingests building permits, dedupes them, classifies them by trade, enriches them with phone and license, and seals each one to one buyer for 7 days.",
                },
                {
                  icon: Target,
                  h: "Who it&apos;s for",
                  p: "Trade subs — electricians, plumbers, HVAC, roofers, pool contractors — who care about pipeline and don&apos;t want to share buyers with four competitors.",
                },
                {
                  icon: Layers,
                  h: "What we&apos;re not",
                  p: "Not a directory. Not a CRM. Not a marketing agency. Not a job board. We are an active-project intelligence layer, and we keep it focused.",
                },
                {
                  icon: MapPin,
                  h: "Where we are",
                  p: "Live in Miami-Dade, City of Miami, and Coral Gables. Hialeah, Doral, and Broward in the next 90 days. Tampa, Orlando, Atlanta, Houston, and Phoenix on the roadmap.",
                },
                {
                  icon: Database,
                  h: "Where the data comes from",
                  p: "Public permit systems, the FL DBPR license registry, and licensed-contractor records. All public. All daily. All cross-checked before it hits your dashboard.",
                },
                {
                  icon: Lock,
                  h: "Why the 7-day seal matters",
                  p: "Because shared leads are why subs quit lead-gen. We won&apos;t resell the same project to your competitor — full stop. One buyer, one window.",
                },
              ].map((b) => (
                <div
                  key={b.h}
                  className="flex gap-4 rounded-xl border border-ink-900/10 bg-bone-50 p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-bone-50">
                    <b.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3
                      className="text-[16px] font-semibold text-ink-900"
                      dangerouslySetInnerHTML={{ __html: b.h }}
                    />
                    <p
                      className="mt-1.5 text-[14px] leading-relaxed text-ink-600"
                      dangerouslySetInnerHTML={{ __html: b.p }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 text-bone-100 sm:py-28">
        <Container size="narrow">
          <div className="flex items-center gap-4 text-spark-400">
            <Hammer className="h-5 w-5" />
            <SectionLabel variant="spark">Operating principle</SectionLabel>
          </div>
          <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-tight text-bone-50 sm:text-[50px]">
            We don&apos;t sell leads.
            <br />
            We sell <span className="text-spark-400">ready-to-build buyers</span>.
          </h2>
          <p className="mt-7 text-pretty text-[18px] leading-relaxed text-ink-200">
            Anyone selling guaranteed jobs is selling something you
            shouldn&apos;t buy. Our job is sharper: get a verified active
            project — a buyer ready to break ground, with a budget already
            committed — in front of you faster than anyone else. Seal it to
            your trade for seven days. Hand you the phone number.
          </p>
          <p className="mt-5 text-pretty text-[18px] leading-relaxed text-ink-200">
            Closing the work is still your team&apos;s. The seal is ours to
            keep.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/get-started" variant="spark" size="lg" withArrow>
              Get instant access
            </LinkButton>
            <LinkButton href="/demo" variant="inverse" size="lg">
              Book a 15-min demo
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
