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
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-4">
              <span className="text-[length:--font-size-h2] font-semibold text-ivory-50 tracking-tight">
                S. Kopstick
              </span>
              <span className="text-[length:--font-size-body] font-light text-slate-400 ml-1.5">
                &amp; Associates
              </span>
            </Link>
            <p className="text-[length:--font-size-body] text-slate-400 max-w-md leading-relaxed">
              Expert Spire &amp; Adagio implementation, training, and support.
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

      {/* Divider + Copyright */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[length:--font-size-caption] text-slate-500">
            &copy; 2026 S. Kopstick &amp; Associates Inc. All rights reserved.
          </p>
          <p className="text-[length:--font-size-caption] text-slate-500">
            Serving clients across Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
