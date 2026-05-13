# S. Kopstick & Associates — Website

Premium B2B website for S. Kopstick & Associates Inc. — Spire & Adagio implementation, training, and support specialists.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (custom design system via `@theme`)
- **Framer Motion** (refined motion)
- **Lucide React** (icons)
- **Forms:** [FormSubmit.co](https://formsubmit.co) — free, no signup, sends to `samuel@skassociates.ca`

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. Framework is auto-detected as Next.js. **Click Deploy.** No env vars needed.

## Exporting static HTML (for WordPress migration)

```bash
# Windows PowerShell
$env:NEXT_OUTPUT="export"; npm run build
# macOS / Linux
NEXT_OUTPUT=export npm run build
```

Produces an `out/` folder of static `.html` files that drop into any host or WordPress theme.

## Forms

The contact form and `/assessment` quiz both post to `https://formsubmit.co/samuel@skassociates.ca`.

**One-time setup:** the first submission triggers an activation email to Samuel. He clicks the confirmation link once, and all future submissions forward to his inbox automatically. No backend, no cost, unlimited submissions.

## Key routes

- `/` — Homepage (11 sections)
- `/assessment` — Spire vs Adagio fit quiz
- `/solutions` + 5 subpages (Spire, Adagio, Implementation, Training, Reporting)
- `/industries` + 3 subpages (Distribution, Service, Not-for-Profit)
- `/resources` + 6 articles
- `/case-studies`, `/about`, `/contact`, `/thank-you`

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme`:
- Colors: `navy-950..600`, `slate-*`, `ivory-50..300`, `accent-500/600`, `gold-400/500`
- Fonts: Playfair Display (display) + Inter (body)
- Shadows: `shadow-card`, `shadow-card-hover`, `shadow-elevated`
