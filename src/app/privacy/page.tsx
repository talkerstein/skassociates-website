import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
          <p className="eyebrow text-accent-500 mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            How we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-slate-700 leading-relaxed mb-4">
            S. Kopstick &amp; Associates Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a Toronto-based consulting firm helping
            Canadian businesses get the most from their accounting software. We
            take your privacy seriously. This policy explains what information
            we collect when you visit our website or contact us, how we use it,
            and the choices you have.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            This policy is written to comply with the Personal Information
            Protection and Electronic Documents Act (PIPEDA), the federal
            Canadian privacy law that governs how private-sector organizations
            handle personal information in the course of commercial activities.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Information we collect
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We only collect information that you choose to provide or that is
            necessary to operate the website. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              <strong>Contact form submissions.</strong> When you complete a
              form on this site (for example, the contact form or the
              assessment form), we collect the information you provide &mdash;
              typically your name, email address, phone number, company name,
              and a description of your situation.
            </li>
            <li>
              <strong>Direct email and phone contact.</strong> If you email or
              call us, we keep a record of that correspondence so we can serve
              you properly.
            </li>
            <li>
              <strong>Basic technical data.</strong> Our hosting provider
              records standard server information such as your IP address,
              browser type, referring page, and the pages you view on this
              site. This is used to keep the site secure and to understand
              broad usage patterns. We do not use third-party advertising
              cookies or tracking pixels.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            How we use your information
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use the information you provide for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              To respond to your inquiry, answer questions, and schedule
              consultations.
            </li>
            <li>
              To deliver the consulting, training, and support services you
              have engaged us for.
            </li>
            <li>
              To keep records required for normal business operations,
              accounting, and tax compliance.
            </li>
            <li>
              To improve the website and our service offering based on
              aggregated, non-identifying patterns.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not add you to a marketing list, send promotional emails, or
            share your information with marketing partners without your
            explicit consent.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Information sharing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not sell, rent, or trade your personal information. We share
            it only in these limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              <strong>Service providers.</strong> Our contact forms are
              processed by FormSubmit.co, which delivers form submissions to
              our email inbox. You can review their privacy practices at{" "}
              <a
                href="https://formsubmit.co/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-500"
              >
                formsubmit.co/privacy
              </a>
              . Our website is hosted on Vercel, which processes basic request
              logs as part of normal hosting operations.
            </li>
            <li>
              <strong>Legal requirements.</strong> We may disclose information
              if required by law, court order, or to protect our legal rights.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Data retention
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We keep your information only as long as needed for the purpose it
            was collected, to maintain the business relationship, and to meet
            our legal and tax record-keeping obligations. Inquiry records from
            people who do not become clients are typically purged within two
            years. Client records are kept for the duration of the engagement
            and for a reasonable period afterward, in line with professional
            and tax retention guidelines.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Your rights under PIPEDA
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Under Canadian privacy law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              Know what personal information we hold about you and how it is
              being used.
            </li>
            <li>
              Access that information and request a copy.
            </li>
            <li>
              Correct information that is inaccurate or incomplete.
            </li>
            <li>
              Withdraw consent for our continued use of your information,
              subject to legal and contractual restrictions.
            </li>
            <li>
              Request deletion of your information where we are not required
              to retain it.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            To exercise any of these rights, please email us at the address
            below. We will respond within 30 days.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Contact us
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            For any privacy-related question, request, or complaint, contact
            our privacy lead, Samuel Kopstick, at{" "}
            <a
              href="mailto:samuel@skassociates.ca"
              className="text-accent-600 underline hover:text-accent-500"
            >
              samuel@skassociates.ca
            </a>
            . If you are not satisfied with our response, you may also contact
            the Office of the Privacy Commissioner of Canada.
          </p>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-3">
              Questions about this policy?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We are happy to walk through anything in plain language. Reach
              out and we will get back to you promptly.
            </p>
            <Button href="/contact" variant="accent" size="md" arrow>
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
