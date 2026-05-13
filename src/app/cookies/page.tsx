import { Button } from "@/components/ui/button";

export default function CookiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 text-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
          <p className="eyebrow text-accent-500 mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Cookie Statement
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            How this site uses cookies and similar technologies.
          </p>
          <p className="text-sm text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
          <p className="text-slate-700 leading-relaxed mb-4">
            This statement explains how skassociates.ca uses cookies and
            similar technologies. We aim to keep this site lean and respectful
            of your privacy &mdash; we do not run advertising trackers or
            cross-site profiling tools.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            What cookies are
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Cookies are small text files that a website stores in your browser.
            They allow the site to remember things between page loads or
            between visits &mdash; for example, that you have already
            dismissed a banner or that you are in a particular session.
            &ldquo;Similar technologies&rdquo; include things like local
            storage and pixels, which serve a comparable purpose.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            What we use them for
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Today, this site uses only essential cookies and storage required
            to make the website function. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>
              <strong>Essential technical cookies.</strong> Our hosting
              provider, Vercel, may set basic cookies or use local storage to
              keep the site running smoothly, route requests, and protect
              against abuse. These are required for the site to work.
            </li>
            <li>
              <strong>No advertising or marketing cookies.</strong> We do not
              currently use Google Analytics, Facebook Pixel, retargeting
              pixels, or any other third-party advertising or marketing
              tracker on this site.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            If we ever add a basic analytics tool in the future to understand
            page popularity in aggregate, we will update this statement first
            and choose a privacy-respecting option.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            First-party vs third-party cookies
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            First-party cookies are set by the website you are visiting
            directly &mdash; in this case, skassociates.ca. Third-party
            cookies are set by another domain whose content is embedded on the
            page (for example, an embedded video or a chat widget). At the
            time of writing, this site does not embed third-party content
            that sets tracking cookies. Any change to that would be reflected
            in an updated version of this statement.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            How to manage cookies
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You are always in control of cookies in your browser. Every major
            browser lets you view stored cookies, block them by category,
            delete them, or prevent them from being set at all. Look in your
            browser&rsquo;s privacy or security settings, or visit the help
            pages for your specific browser:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4">
            <li>Chrome &mdash; Settings &rarr; Privacy and security &rarr; Cookies</li>
            <li>Safari &mdash; Settings &rarr; Privacy</li>
            <li>Firefox &mdash; Settings &rarr; Privacy &amp; Security</li>
            <li>Edge &mdash; Settings &rarr; Cookies and site permissions</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Blocking essential cookies may prevent parts of this or other
            websites from working correctly. Because this site does not rely
            on tracking cookies, blocking them here will not break your
            experience.
          </p>

          <h2 className="font-display text-2xl text-navy-900 mt-12 mb-4">
            Updates to this statement
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If we change how we use cookies on this site, we will update this
            page and revise the &ldquo;last updated&rdquo; date at the top.
            Material changes &mdash; for example, adding an analytics tool
            &mdash; will be called out clearly.
          </p>

          {/* CTA card */}
          <div className="mt-16 rounded-2xl bg-navy-900 text-ivory-50 p-8 sm:p-10">
            <h3 className="font-display text-2xl mb-3">
              Questions about this policy?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you would like more detail about anything on this page, email
              us and we will be glad to explain.
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
