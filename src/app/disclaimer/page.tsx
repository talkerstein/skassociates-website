import { Button } from "@/components/ui/button";

export default function DisclaimerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
          <p className="eyebrow text-accent-500 mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            General Disclaimer
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Important information about the content on this site.
          </p>
          <p className="text-sm text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-slate-700 leading-relaxed mb-4">
            This page collects the disclaimers that apply across the
            skassociates.ca website. It is meant to be read alongside our{" "}
            Terms of Use and Privacy Policy. The goal is to be clear about
            what this site is, what it is not, and what you should keep in
            mind as you read it.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Informational purposes only
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Everything on this website is provided for general informational
            purposes. It is not legal advice, accounting advice, tax advice,
            audit advice, or financial advice. Articles, examples, and
            descriptions of how Spire, Adagio, or related products work are
            written to help you understand options and ask better questions
            &mdash; not to replace a conversation with a qualified
            professional who knows your specific situation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Before relying on any information from this site to make a
            business decision, please confirm it against your own
            circumstances and consult an appropriate professional adviser.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Trademarks
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Spire&reg;, Adagio&reg;, PayDirt&reg;, Crystal Reports&reg;, and
            Microsoft Access&reg; are trademarks of their respective owners.
            Any other product or company names mentioned on this site may be
            trademarks of their respective owners. Reference to a third-party
            product or service does not imply endorsement by, or affiliation
            with, that company unless explicitly stated.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            S. Kopstick &amp; Associates Inc. is an independent consulting
            firm. We are not the publisher of Spire, Adagio, or any of the
            other products we work with.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Authorized partner status
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Where we describe ourselves as a partner or reseller of a
            specific product, that statement is accurate as of the last
            updated date above. In particular:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              We are an authorized Spire Systems partner, providing
              implementation, training, and support services for the Spire
              accounting and ERP platform.
            </li>
            <li>
              We are an authorized Adagio reseller, providing implementation,
              training, and support for Softrak Systems&rsquo; Adagio
              accounting suite.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Authorized partner and reseller relationships allow us to license
            software to clients and access vendor resources. They do not make
            us employees or representatives of those vendors, and we do not
            speak on the vendors&rsquo; behalf.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Results and case studies
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Any case studies, client stories, or outcome figures shared on
            this site reflect real engagements. The results described are
            specific to those clients, their systems, their teams, and the
            circumstances at the time. Your results in a similar engagement
            will depend on many factors and may differ. Past performance is
            not a promise of future outcomes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            We do not guarantee any specific reduction in close time, cost
            savings, error rate, or other quantitative result for your
            business. What we do guarantee is that we will work in good faith
            and tell you honestly what we think is achievable in your
            situation.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Third-party content
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We sometimes link to third-party websites, articles, or
            documentation that we find useful. We do not control those
            sources and are not responsible for their content, accuracy, or
            availability. Linking out does not constitute an endorsement of
            every view expressed on the linked site.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Updates and changes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Products, regulations, and best practices evolve. We update the
            site as we are able, but content can become out of date between
            revisions. The &ldquo;last updated&rdquo; date at the top of this
            page reflects the most recent material change to this
            disclaimer. For anything that matters to a current decision,
            please confirm with us directly before relying on it.
          </p>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-3">
              Questions about this policy?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If anything here is unclear or you want to discuss how it
              applies to your situation, we are happy to talk.
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
