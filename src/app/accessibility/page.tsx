import { Button } from "@/components/ui/button";

export default function AccessibilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
          <p className="eyebrow text-accent-500 mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Accessibility Statement
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Our commitment to making this site usable for everyone.
          </p>
          <p className="text-sm text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <h2 className="font-display text-2xl text-navy-900 mt-0 mb-4">
            Our commitment
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            S. Kopstick &amp; Associates Inc. is committed to making this
            website accessible to as many people as possible, including
            visitors with disabilities. Accessibility is not an afterthought
            for us &mdash; it is part of how we build, test, and maintain
            the site. We believe that clear, navigable content is good for
            everyone, not just users of assistive technology.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Standards we aim for
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our target is conformance with the Web Content Accessibility
            Guidelines (WCAG) 2.1 at Level AA, the international standard
            referenced by most accessibility laws, including those in Ontario
            and the rest of Canada. We design and review pages against these
            guidelines and treat them as a baseline rather than a ceiling.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            As an Ontario-based business, we also align our practices with the
            Accessibility for Ontarians with Disabilities Act (AODA) and its
            Integrated Accessibility Standards Regulation, which apply to
            digital content for organizations operating in the province.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            What we have done
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Specific steps we take on this site include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              <strong>Semantic HTML.</strong> Headings, lists, links, and
              landmarks are marked up so assistive technologies can navigate
              the page structure.
            </li>
            <li>
              <strong>Keyboard navigation.</strong> All interactive elements
              &mdash; menus, forms, buttons, and links &mdash; can be reached
              and operated using only the keyboard.
            </li>
            <li>
              <strong>Visible focus indicators.</strong> A clear focus style
              shows where you are on the page when navigating with a keyboard.
            </li>
            <li>
              <strong>Color contrast.</strong> Text and meaningful UI elements
              meet or exceed the WCAG AA contrast ratios against their
              backgrounds.
            </li>
            <li>
              <strong>Alternative text on images.</strong> Decorative images
              are marked as such and informative images carry descriptive
              alternative text.
            </li>
            <li>
              <strong>Scalable text.</strong> The site uses relative units so
              you can increase text size in your browser without breaking the
              layout.
            </li>
            <li>
              <strong>Responsive layout.</strong> Pages reflow gracefully on
              phones, tablets, and desktops, and at common zoom levels up to
              200%.
            </li>
            <li>
              <strong>Reduced-motion support.</strong> Animations honor the
              operating system&rsquo;s &ldquo;reduce motion&rdquo; preference
              where possible.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Known limitations
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We are honest about the fact that no site is ever &ldquo;done&rdquo;
            on accessibility. Current limitations we are actively working on
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              Some third-party stock photography (for example, imagery from
              Unsplash) may have generic alternative text. We are reviewing
              these images and writing more descriptive alt text page by page.
            </li>
            <li>
              Older PDF documents linked from the site may not be fully
              tagged for screen readers. New PDFs are produced with tagging
              and reading order in mind.
            </li>
            <li>
              Embedded third-party widgets, where used, may not meet the same
              standard as our own code. We evaluate accessibility before
              adopting any new third-party component.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            How to report a barrier
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you run into an accessibility barrier on this site, we want to
            know. Please email{" "}
            <a
              href="mailto:samuel@skassociates.ca"
              className="text-accent-600 underline hover:text-accent-500"
            >
              samuel@skassociates.ca
            </a>{" "}
            and include the page URL, what you were trying to do, the
            assistive technology you were using if applicable, and a brief
            description of the problem. We will acknowledge your message and
            aim to respond with a fix or a plan within 10 business days.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            You can also request information that is on this site in an
            alternate format. We will do our best to provide it in a way that
            works for you, at no cost.
          </p>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-3">
              Questions about this policy?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We welcome feedback on accessibility. Send us a note and we
              will take it seriously.
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
