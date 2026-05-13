import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { SITE, TRADES } from "@/lib/utils";

export function SiteFooter() {
  const linkCls =
    "text-[14px] text-ink-300 hover:text-bone-50 transition-colors";
  return (
    <footer className="bg-ink-950 text-bone-100">
      <Container size="wide" className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="bone" size="md" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-200">
              Trestle is the SaaS pipeline that turns building permits into
              verified active projects — buyers ready to break ground, budgets
              committed, exclusively yours for 7 days.
            </p>
            <div className="mt-7 flex flex-col gap-2 font-mono text-[12.5px] uppercase tracking-[0.15em] text-ink-400">
              <span>
                <span className="text-spark-400">●</span> Live in Miami-Dade,
                City of Miami &amp; Coral Gables
              </span>
              <span>
                <span className="text-forge-400">●</span> Next markets in build:
                Hialeah · Doral · Broward
              </span>
              <span>
                <span className="text-ink-300">●</span> Roadmap: Tampa · Orlando
                · Atlanta · Houston · Phoenix
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-7">
            <div>
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone-200">
                Product
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/how-it-works" className={linkCls}>How it works</Link></li>
                <li><Link href="/sample-opportunities" className={linkCls}>Active projects</Link></li>
                <li><Link href="/pricing" className={linkCls}>Pricing</Link></li>
                <li><Link href="/get-started" className={linkCls}>Get instant access</Link></li>
                <li><Link href="/demo" className={linkCls}>Book a demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone-200">
                For trades
              </h4>
              <ul className="mt-4 space-y-3">
                {TRADES.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/for/${t.slug}-contractors`} className={linkCls}>
                      {t.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone-200">
                Resources
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/landing/miami-permit-leads" className={linkCls}>Miami launch page</Link></li>
                <li><Link href="/sample-opportunities" className={linkCls}>Sample active projects</Link></li>
                <li><Link href="/how-it-works" className={linkCls}>The 7-day seal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone-200">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/about" className={linkCls}>About</Link></li>
                <li><Link href="/contact" className={linkCls}>Contact</Link></li>
                <li><a href={`mailto:${SITE.email}`} className={linkCls}>{SITE.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-700/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-400">
            © {new Date().getFullYear()} Trestle. Building the project feed for
            trade contractors.
          </p>
          <p className="text-[13px] text-ink-300">
            Trestle is an active-project intelligence platform. Permit data is
            sourced from public records. We don&apos;t guarantee awards — we
            put you first in line.
          </p>
        </div>
      </Container>
    </footer>
  );
}
