import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Spire", href: "/solutions/spire" },
      { label: "Adagio", href: "/solutions/adagio" },
      { label: "Implementation & Migration", href: "/solutions/implementation" },
      { label: "Training & Support", href: "/solutions/training" },
      { label: "Reporting & Process Improvement", href: "/solutions/reporting" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Distribution", href: "/industries/distribution" },
      { label: "Service Businesses", href: "/industries/service" },
      { label: "Not-for-Profit", href: "/industries/nonprofit" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      {/* Top tagline + CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-white/5">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5"
              aria-label="S. Kopstick & Associates Inc., Home"
            >
              {/* Monogram */}
              <span
                className="flex h-10 w-11 items-center justify-center rounded-sm border border-accent-500/60 font-display text-ivory-100"
                aria-hidden="true"
              >
                <span className="text-base leading-none">S</span>
                <span className="mx-1 h-5 w-px bg-accent-500/70" />
                <span className="text-base leading-none">K</span>
              </span>

              {/* Wordmark */}
              <span className="flex flex-col leading-none">
                <span className="font-display text-[length:--font-size-h3] text-ivory-100 tracking-tight">
                  S Kopstick
                </span>
                <span className="mt-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                  &amp; Associates Inc.
                </span>
              </span>
            </Link>

            {/* Taglines */}
            <p className="font-display italic text-[length:--font-size-body-sm] text-slate-300 max-w-md leading-relaxed">
              Canadian accounting software, simplified.
            </p>
            <p className="mt-1.5 text-[length:--font-size-caption] text-slate-500 max-w-md leading-relaxed">
              30+ years of getting it right the first time.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="/contact" variant="accent" size="md" arrow>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[length:--font-size-body-sm] font-semibold text-ivory-50 mb-4 tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[length:--font-size-body-sm] text-slate-400 hover:text-ivory-50 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-[length:--font-size-body-sm] font-semibold text-ivory-50 mb-4 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4167858637"
                  className="flex items-center gap-2.5 text-[length:--font-size-body-sm] text-slate-400 hover:text-ivory-50 transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  416-785-8637
                </a>
              </li>
              <li>
                <a
                  href="mailto:samuel@skassociates.ca"
                  className="flex items-center gap-2.5 text-[length:--font-size-body-sm] text-slate-400 hover:text-ivory-50 transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  samuel@skassociates.ca
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[length:--font-size-body-sm]">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                Toronto, ON
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom matter: disclaimer + legal links + copyright */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-white/5 pt-8 pb-8 space-y-6">
          {/* Legal disclaimer */}
          <p className="text-[length:--font-size-caption] text-slate-500 leading-relaxed max-w-5xl">
            The information on this website is provided for general
            informational purposes only and does not constitute legal,
            accounting, or financial advice. Spire&reg;, Adagio&reg;,
            PayDirt&reg;, Crystal Reports&reg;, and Microsoft Access&reg; are
            trademarks of their respective owners. S. Kopstick &amp; Associates
            Inc. is an independent consulting firm and is not affiliated with
            the publishers of these products except as an authorized partner
            where indicated. Always consult a qualified professional for advice
            specific to your business situation.
          </p>

          {/* Legal page links */}
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[length:--font-size-caption] text-slate-400"
          >
            <Link
              href="/privacy"
              className="hover:text-slate-200 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/terms"
              className="hover:text-slate-200 transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/cookies"
              className="hover:text-slate-200 transition-colors duration-200"
            >
              Cookie Statement
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/accessibility"
              className="hover:text-slate-200 transition-colors duration-200"
            >
              Accessibility
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/disclaimer"
              className="hover:text-slate-200 transition-colors duration-200"
            >
              Disclaimer
            </Link>
          </nav>

          {/* Copyright row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 pt-6">
              <p className="text-[length:--font-size-caption] text-slate-500">
                &copy; 2026 S. Kopstick &amp; Associates Inc. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">
                &middot;
              </span>
              <p className="text-[length:--font-size-caption] text-slate-500">
                Serving clients across Canada
              </p>
            </div>
            <p className="text-[length:--font-size-caption] text-slate-500 sm:pt-6">
              Handcrafted by{" "}
              <a
                href="https://talkerstein.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent-400 transition-colors duration-200"
              >
                Talkerstein Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
