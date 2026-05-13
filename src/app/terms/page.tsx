import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
          <p className="eyebrow text-accent-500 mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            The terms governing your use of this website.
          </p>
          <p className="text-sm text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-slate-700 leading-relaxed mb-4">
            These Terms of Use govern your access to and use of the website
            operated by S. Kopstick &amp; Associates Inc. (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) at skassociates.ca. Please
            read them carefully. They are designed to be plain-language and
            reasonable &mdash; not lawyer-bait.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Acceptance of these terms
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            By accessing or using this website, you agree to be bound by these
            terms and by our Privacy Policy. If you do not agree, please do not
            use the site. We may update these terms from time to time, and
            your continued use after changes are posted means you accept the
            updated version.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Use of the site
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This website is provided for general informational purposes. It
            describes our consulting, training, and support services and gives
            background on Spire, Adagio, and related accounting platforms.
            Using the site does not, on its own, create a consulting
            engagement, client relationship, or any contract for services
            between you and us. A consulting engagement only begins when we
            agree on scope and terms in writing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            You agree to use the site only for lawful purposes and not to
            interfere with its operation, security, or other users&rsquo;
            enjoyment of it.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Intellectual property
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            All original content on this site &mdash; including text,
            structure, layout, graphics, and code &mdash; is owned by S.
            Kopstick &amp; Associates Inc. or our licensors and is protected
            by Canadian and international copyright law. You may view and
            print pages for your own personal, non-commercial reference. You
            may not republish, redistribute, or use our content commercially
            without our written permission.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Spire&reg;, Adagio&reg;, PayDirt&reg;, Crystal Reports&reg;, and
            Microsoft Access&reg; are trademarks of their respective owners.
            We reference these names because we work with the products. We do
            not claim ownership of any third-party trademark.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            No professional advice
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Content on this site is general information, not professional
            advice. Nothing here is intended as legal, accounting, tax, or
            financial advice for your specific situation. Before acting on
            anything you read here, please consult a qualified professional
            who knows the details of your business.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Third-party links
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This site may contain links to third-party websites such as
            software publishers, industry associations, and resource pages.
            Those sites are not under our control. We provide the links for
            convenience only and do not endorse, guarantee, or take
            responsibility for the content, privacy practices, or accuracy of
            any third-party site.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Limitation of liability
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The information on this website is provided &ldquo;as is&rdquo;
            without warranties of any kind, whether express or implied. We try
            hard to keep it accurate and current, but we do not guarantee that
            it is error-free, complete, or always available. To the fullest
            extent permitted by law, S. Kopstick &amp; Associates Inc. and
            its principals will not be liable for any direct, indirect,
            incidental, or consequential damages arising from your use of, or
            inability to use, this website or any content on it.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Nothing in these terms limits liability that cannot be limited
            under applicable law.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Changes to these terms
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may update these terms occasionally to reflect changes in our
            services, the law, or how the site works. The &ldquo;last
            updated&rdquo; date at the top of this page will always show when
            the most recent change took effect.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Governing law
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These terms are governed by and construed in accordance with the
            laws of the Province of Ontario and the federal laws of Canada
            applicable in it. Any dispute arising from your use of this site
            will be heard in the courts of Ontario.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Contact
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have any question about these terms, please email{" "}
            <a
              href="mailto:samuel@skassociates.ca"
              className="text-accent-600 underline hover:text-accent-500"
            >
              samuel@skassociates.ca
            </a>
            .
          </p>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-3">
              Questions about these terms?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We will explain anything that is unclear in plain English. Send
              us a note and we will respond promptly.
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
