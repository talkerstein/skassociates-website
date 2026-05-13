# CleverPays — Plan v3: Six Moments + 200-Page Platform

**What this is:** the reset plan based on the Master IA + the 6-Moments homepage direction. Read this end-to-end before we touch any code again. I want to be aligned before I spend another hour producing files that miss the brief.

---

## 1. The shift in direction (where I was wrong)

You scored the work **6.3/10** and the diagnosis is right: I leaned too hard on **"save money / fair pricing / lower fees"** as the primary frame. That's a *feature*, not a *brand*. Helcim does that. Square does that. Every payments site eventually does that.

The Master IA shifts the brand to:

> **CleverPays helps merchants choose, connect, optimize, and grow their payment ecosystem.**

That's a **merchant intelligence + ecosystem platform** brand, not a "we'll cut your rate" brand. The site has to do **four jobs simultaneously** (per the IA):

1. **Convert** merchants now (Upload Statement, Book a Call)
2. **Educate** merchants who are researching (200+ pages of pillar + supporting content)
3. **Establish authority** in payments topics at scale (surcharging, interchange, integrations)
4. **Route** merchants and partners into the right path (Solutions / Clover / Industries / Integrations / Partners)

**Everything below this section is in service of those four jobs.**

---

## 2. QA Agent — bugs found on the current Clover page

You flagged "What does this *actually cost?*" with the italic "cost?" clipping past the container's right edge. Confirmed bug. Here's the diagnosis and the fix.

### Bug 1 — Italic serif accent overflows container width
- **Where:** `.section-h2 .serif` on the Pricing section of `clover.html`
- **Why it's happening:** `clamp(32px, 4.5vw, 56px)` on a wide italic serif sets a font-size that's right at the edge of the viewport-width budget. Italic glyphs extend past their nominal box on the right, and `display:inline` doesn't account for that overhang. There's no right padding on the H2, so the descender / italic terminal of "cost?" pokes through the section's right edge.
- **Fix (one line of CSS, applied to the design system):**
  ```css
  .section-h2 { padding-right: 0.05em; overflow-wrap: anywhere; }
  .section-h2 .serif { padding-right: 0.1em; }
  ```
  Plus reduce the `clamp()` upper bound to `52px` on viewport widths under 1200px.

### Bug 2 — same pattern likely lives on all hero accents
Every page uses `<span class="serif accent-honey">italic phrase.</span>` inside `display-lg` and `display-xl`. The same overflow happens at the right edge whenever the italic phrase ends a line. Fix universally in the design system, not per page.

### Bug 3 — inner-nav was 15 items wide
Already fixed last turn (reduced to 9). But the underlying lesson: **any horizontal nav over ~8 items is too many.** New rule baked into the QA SOP below.

### Other items the QA SOP should catch from now on
- Heading orphans (single word on a new line at the right edge)
- Card height mismatches in grids where copy varies
- French translations breaking layout (FR is ~15% longer)
- CTA button text overflow at narrow widths
- Image alt text missing or generic
- Skipped heading levels (H2 → H4)
- Duplicate H1s on a page

---

## 3. Brevity Agent — what gets cut, what gets linked

I ran the agent over the current homepage and Clover hub copy. **Top brevity wins + internal-link opportunities I'd weave in:**

### Homepage hero — current vs. proposed

**Current sub:**
> "A Clover Authorized Dealer with in-house support and in-house integration teams. We empower our team to go above and beyond — because every merchant deserves a partner who actually shows up."

**Brevity rewrite:**
> "Clover Authorized Dealer. In-house support, in-house engineering, real merchant intelligence — built in Quebec for businesses that deserve a partner, not a vendor."

Cut 12 words. Same meaning. Adds "real merchant intelligence" — sets up the Audit Studio moment.

### Clover hub — "What does this actually cost?" — link opportunities I missed

Currently this section says everything but links nowhere. **Should link to:**
- *"Interchange explained"* → `/resources/pricing/interchange`
- *"How to read a merchant statement"* → `/resources/pricing/read-statement`
- *"Effective rate explained"* → `/resources/pricing/effective-rate`
- *"Hidden processing fees"* → `/resources/pricing/hidden-fees`
- *"Upload Your Statement"* → `/upload-statement`

Each phrase that names a fee should be an inline link to the pillar page that explains that fee. That's the difference between a marketing site and an SEO-ranking authority site.

### Universal internal-link rule (per the Master IA)
Every page needs:
- **1** parent pillar link
- **2–4** sibling links
- **1** resource link
- **1** conversion link (Upload / Book / Call)

I haven't been doing this systematically. New rule: every page gets a 5-link audit before publish.

---

## 4. The 6 Moments — homepage redesign spec

I'm scrapping the current homepage. Building it instead as **six large moments**, each a cinematic composition, not a "section." Here's the spec at planning level (no code yet).

### Moment 1 — Hero: "Clover Cathedral"

**Composition (desktop):**
- **Full-bleed dark canvas** — deep navy → black-blue gradient, no header card, no eyebrow chip
- **One hero composition** — a single editorial Clover Station Duo product photo, dramatically lit, occupying ~60% of the right side
- **Headline** in serif/sans pairing — *"More than payments."* (sans bold) *"Built for how merchants actually work."* (italic serif accent below) — ~88–112px display weight
- **Sub** — single sentence, max 18 words
- **Two CTAs only** — `Upload Statement` (primary, honey/amber gold) and `Explore Clover POS` (secondary, ghost on dark)
- **One quiet trust panel** in the lower-left corner — *not* a stat row, just a single line: *"Reviewed by humans · Clover Authorized · Built in Quebec, EN/FR"*
- **Massive negative space.** No floating cards. No proof strip stuck to the bottom. The fold should breathe.

**What I'm cutting from the current hero:**
- The 5-cell trust strip (moves to Moment 5)
- The "< 2 min avg phone answer" stat card (moves to Moment 5)
- The hex network SVG behind the device (replaced by clean studio lighting)
- The eyebrow chip with pulsing dot (overdone)

### Moment 2 — Merchant Audit Studio

**Composition:**
- **Editorial split** — 40% copy left, 60% audit interface right
- **Left:** A serious, single proposition headline — *"Bring us your statement. We'll show you what you're actually paying for."*
- **Right:** An elegant upload zone designed like a **diagnostic workspace**, not a contact form:
  - Drop zone with cinematic drag affordance
  - 4 quiet input tiles: Statement · POS photos · Contract · Notes
  - Below the zone, a tasteful "what we analyze" reveal (interchange, markup, hidden fees, contract risk) — fades in on scroll
- **Internal links** woven into the description: → Merchant Statement Review · → Hidden Processing Fees · → Effective Rate Explained
- **One CTA only** — `Start Your Review`

This is **the signature moment.** Most processors don't have this. We make it cinematic.

### Moment 3 — Connected Ecosystem Story

**Composition:**
- **One sculptural visual** — not an icon grid, not a hex network. Think: a **dimensional, motion-suggesting diagram** with Clover POS at the center, connected via curved lines and floating tiles to: in-store payments · online payments · virtual terminal · reporting · integrations · loyalty · business tools.
- **One short headline** — *"One system. Every way your customers pay."*
- **One sub** — one line.
- **One CTA** — `Explore All Solutions`
- **No icon farm.** No 8 equal boxes. The visual itself carries the meaning.

### Moment 4 — Clover Showroom

**Composition:**
- **Featured hero device** — Clover Station Duo, full-bleed against a stage-lit dark background, taking ~70% of the section
- **Three supporting devices** in a quiet row below — Flex, Mini, Integrated — each a clean product shot, *not* a card
- **Minimal labels** — three words per device (e.g., "Countertop command center" · "Mobile checkout anywhere" · "Keep your software, upgrade payments")
- **Compare CTA** — single text link, `Compare Clover Devices →`
- **No feature bullets** in this moment. The product photos do the work.

The current 6-device-grid I shipped is already a step in this direction, but it still reads as a grid of cards. v3 makes the **Station Duo the hero**, with the rest as supporting roles.

### Moment 5 — Trust, Security, Real People

**Composition:**
- **Editorial three-part layout** (not a card row):
  - **Left:** Large editorial portrait of an actual team member (or a tasteful illustration if we don't have photography yet) — implies "real humans in Laval"
  - **Center:** A short brand statement — *"Quebec-built. Bilingual by design. PCI-compliant. Backed by people, not portals."*
  - **Right:** One merchant quote, set in serif italic, ~24px — with attribution to a real merchant (or "pending — we don't fabricate testimonials")
- **Below:** A quiet metrics line (only if numbers are verifiable) — *"Thousands of Canadian merchants · 24h statement review · ~2-min avg phone answer · EN/FR"*
- **Internal links:** Security Overview · PCI Compliance Basics · About CleverPays · Case Studies

### Moment 6 — Resources Gateway + Surcharging Feature + Monumental Footer

**Composition:**

**A. Surcharging feature panel** (the new homepage section you asked for):
- Headline — *"Surcharging, cash discount, or neither? We'll tell you what fits."*
- Sub — *"Canadian rules. Quebec specifics. Real customer-experience math."*
- 3 link cards (clean, no boxes): Surcharging Overview · Is It Legal in Canada? · Surcharge vs Cash Discount
- One CTA — `Learn About Surcharging →`

**B. Resource Gateway** — a 5-column quiet link map (no boxes, no cards):
- Pricing & Fees · Clover & POS · Security & Compliance · Integrations & eCommerce · Industry Guides
- Each column: 4–6 article links, plain text, hoverable

**C. Final CTA pair** — `Upload Statement` · `Book a Call` — composed *into* the bottom of the page, not as a separate band

**D. Monumental footer** — spacious, deep navy, brand-led. Footer feels like a destination, not a dump.

---

## 5. Brand voice shift (away from "save money")

Here's the side-by-side I'm internalizing:

| ❌ Where I was | ✅ Where v3 goes |
|---|---|
| "We give a damn" / "we treat your business like it's our own" | "Built for how merchants actually work" |
| "Fair to merchants, always" | "Merchant intelligence, end to end" |
| "We won't surprise you with fees" | "We tell you what every line of your statement means" |
| "Lower rates than Square" | "Choose, connect, optimize, and grow your payment ecosystem" |
| Heavy comparison-to-competitor copy | Authority + ecosystem positioning |
| Defensive ("you won't see these fees") | Confident ("here's what to look for in any processor's statement") |

The shift: from a **defensive challenger** voice to an **expert insider** voice. The merchant doesn't want to be told CleverPays is cheaper. They want to be told CleverPays *understands payments at a deeper level than anyone else they've talked to.*

---

## 6. Image / photography strategy (you said "photos are terrible")

Real talk on the photo situation:

**What I've been doing:** linking to `cleverpays.ca/wp-content/uploads/...` for Clover product shots. They work but they're flat product cutouts on white — not cinematic. For the rest (industry tiles, team, scenarios), I've been using CSS gradients and SVG icons.

**What v3 needs:**
1. **Real cinematic Clover product photography** — Clover provides authorized dealers with marketing assets. We need access to the high-res, dramatic-lighting product shots Clover uses on its own corporate marketing site, *not* the white-background utility shots. **Action: request the Clover authorized-dealer asset library.**
2. **Real merchant photography** — for the Moment 5 "real people" section, we need either:
   - Editorial portrait photography of the CleverPays team (commissioned, ~$2–4K for a half-day shoot in Laval), or
   - Authentic merchant-in-environment photos (commissioned at 3–5 customer locations, ~$5–8K),
   - Or, as Phase 1 stopgap: carefully selected high-end stock from Stocksy / Unsplash+ — but **only with curation**, not random results.
3. **Editorial illustration** — for Moment 3 (Connected Ecosystem), we should commission a **single bespoke illustration** of the ecosystem map. ~$1.5–3K from a fintech-experienced illustrator. This is the most important visual on the site and the one that can't be a stock photo.

**My recommendation:** Phase 1 — premium stock + cleaned-up Clover assets. Phase 2 — commissioned team photography + bespoke ecosystem illustration before launch.

---

## 7. SEO / meta framework (this needs explicit attention)

For every one of the 200+ pages, the SEO Agent SOP (from the Master IA) defines:
- Target keyword (one per page, no cannibalization)
- SEO title (≤60 chars)
- Meta description (155–160 chars, specific, action-oriented)
- H1 (one only)
- Parent pillar + sibling links
- Schema (FAQ / Article / Product / Breadcrumb / Organization where applicable)

**Today's status:** I've been writing titles and meta descriptions inline but haven't been doing the keyword-clustering work. **What I'm proposing:**

I deliver a **page brief** for every one of the first 60 pages (the Master IA priority list). Each brief is 1 page of structured content covering:
- target keyword
- search intent
- title + meta
- H1 + H2 outline
- internal links (parent + 2-4 siblings + 1 resource + 1 conversion)
- schema to add

That's the artifact that lets us **scale to 200 pages without producing junk.** It's also what makes the SEO Agent rule-following instead of vibe-based.

---

## 8. Where files should live (the wipe problem)

**Decision needed from you before I write another line of code.** Three options I laid out last turn:

1. **Sibling folder:** `D:\Claude\Samuel Kopstick\cleverpays\` (separate from `new\`) — files survive any work you do on the SK Associates project
2. **Init git** in `new\` and commit before each turn
3. **`cleverpays-site\` subfolder** at the root, not under `public\`

**My strong recommendation: option 1.** Cleanest separation. No risk of either project clobbering the other. I'll set up a tiny `npx serve` workflow so you can still preview easily.

---

## 9. The 200+ page roadmap (per the Master IA)

Here's how I'd phase it. **The Master IA already has the first 60. Mapping the rest below.**

### Phase A — First 60 (the Master IA Priority List)
Already specified in your doc. These are the pillars + core conversion + Clover devices + industries + pricing + security + resource hubs.

**My recommended build order within the 60:**
1. **Week 1:** Brand + Conversion (Home, About, Why CleverPays, Contact, Book a Demo, Upload Statement) — 6 pages
2. **Week 2:** Solutions pillars (Solutions Overview, Payment Processing, In-Store, Online, Virtual Terminal, Invoicing, POS Integrations, eCommerce Payments, Reporting, Gift Cards, Business Tools, Fraud Protection) — 12 pages
3. **Week 3:** Clover hub (Overview, 6 device pages, Compare, Pricing, Buy vs Lease) — 10 pages
4. **Week 4:** Industries (Overview + 8 verticals) — 9 pages
5. **Week 5:** Pricing & Fees (Overview + Statement Review + 5 fee-education pages + 6 surcharging pages) — 13 pages
6. **Week 6:** Security + Resource hubs + Partners — 10 pages

**60 pages in 6 weeks** = ~10 pages/week with proper SEO briefs and QA on each.

### Phase B — Next 80 (clusters from the Master IA)

- **Cluster A — Clover supporting** (12 pages): Clover for [vertical], device-vs-device comparisons, App Market, multi-location
- **Cluster B — Fee education** (12 pages): the deep fee-explainer cluster (interchange vs markup, batch fees, AVS, PCI fees, in-person vs online cost dynamics, etc.)
- **Cluster C — Surcharging cluster** (13 pages): the surcharging deep-dive (national overview, by province, by vertical, calculator, signage, mistakes, customer-experience impact)
- **Cluster D — Industry support** (~24 pages): for each top vertical, the "best POS for [X]" + "common payment problems in [X]" + "Clover for [X]" + "how to lower fees in [X]" template
- **Cluster E — Integration pages** (~10 pages): Shopify, WooCommerce, Magento, NMI, Auth.Net, Bambora, etc., each with a dedicated page
- **Cluster F — Articles/guides** (~15 pages): glossary, buyer guides, switching checklist, PCI checklist, etc.

### Phase C — French parity (~40 pages)
The top conversion + pillar pages translated. Master IA names the priority list.

### Phase D — Long tail (the next 20–40)
Comparison pages, calculators, vertical-specific guides we identify gaps in.

---

## 10. The Surcharging pillar (the one you specifically called out)

This is huge and underserved in Canadian payments content. Surcharging in Quebec has unique rules; surcharging in the rest of Canada has been legal since 2022 with specific notice requirements; the U.S. landscape is different again.

### Pillar page: `/pricing-fees/surcharging`

**Structure:**
1. **Hero:** *"Surcharging, explained for Canadian merchants."*
2. **The basics** — what surcharging is, what cash discount is, what dual pricing is, what's the same and different
3. **Is it legal in Canada?** — clear yes/no with effective date (Oct 2022 settlement) and the rules
4. **Quebec specifics** — distinct rules under Quebec consumer protection law
5. **The card-network rules** — Visa, Mastercard, Amex each have their own caps and disclosure rules
6. **What signage is required** — examples + downloadable templates
7. **The customer-experience question** — when surcharging hurts your business (and when it doesn't)
8. **Surcharging vs cash discount vs dual pricing** — comparison table
9. **Common mistakes** — the 6–8 mistakes we see merchants make
10. **Surcharge calculator** — live tool: input your volume + average ticket, see net effect
11. **Setting up surcharging with Clover** — practical setup
12. **FAQ** — 10–12 questions
13. **CTA:** *"Talk to us about whether surcharging fits your business"*

### Supporting pages (the cluster):
- Is surcharging legal in Canada? (focused snapshot, ranks for the literal query)
- Surcharging in Quebec
- Surcharging rules by province
- Surcharging for restaurants
- Surcharging for retail
- Surcharging for healthcare
- Surcharge vs cash discount vs dual pricing
- Surcharge calculator (tool page)
- Surcharge signage examples (downloadable)
- Common surcharging mistakes
- How surcharging affects customer experience
- Setting up surcharging on Clover

That's **12 pages in one cluster.** This is what "200+ pages on payments" looks like in practice — one topic, properly explored, becomes a content authority that ranks dominantly.

### Homepage placement
Moment 6 panel (per Section 4 above) — *"Surcharging, cash discount, or neither?"* with three link cards into the pillar.

---

## 11. What I need from you before continuing

Three decisions, in priority order:

1. **File location:** Confirm option 1 (sibling `cleverpays\` folder) so we stop losing work.
2. **Photography path:** Confirm Phase 1 (premium stock + cleaned Clover product photos) or commit to commissioning team photography now.
3. **Sequencing:** Confirm I should start with the **v3 homepage rebuild** (the 6 Moments) and the **Surcharging pillar** in parallel, then move into the Phase A 60-page sprint.

Optional but useful:
- Any specific merchant testimonials we can quote (with permission) — otherwise Moment 5 stays generic
- A list of 5–10 real CleverPays merchant case studies we can write about
- Confirmation we have rights to use the Clover Authorized Dealer logo and dealer asset library

---

## 12. Same ballpark? Here's how I'd put it

**You wanted:** A merchant intelligence platform that feels like Apple/Square hardware campaign meets premium Canadian fintech, with 200+ pages of authority content and an end-to-end editorial design language.

**Where I was:** Building a polished "we save you money" Clover dealer site.

**Where v3 goes:** The Master IA's brand promise — *"Choose, connect, optimize, and grow your payment ecosystem"* — expressed through 6 cinematic homepage moments, a 200-page content platform with surcharging as a flagship pillar, and editorial design discipline (whitespace, typography, real photography, no card grids).

That's the same ballpark. Confirm direction, file location, and sequencing — and I rebuild in the new location, properly this time, with the Surcharging pillar as the second major deliverable.

---

*Plan v3 · written before any further code.*
