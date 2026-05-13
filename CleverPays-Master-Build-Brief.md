# CleverPays.ca — Master Build Brief
**Merchant-First Bilingual Fintech Rebuild · 2026**

Prepared from the World's Most Epic Master Brief and the current 2026 sitemap audit.
Implementation-ready for product, design, front-end, CMS, copy, SEO, and QA leads.

---

## Audit Summary: What the Current Site Looks Like Today

Before any building, an honest read of the present state from the 2026 sitemap PDF:

- **Mixed language chaos.** Roughly 60% of existing pages default to French copy, others to English, no consistent EN/FR locale logic. Pages like Pax, Verifone, Auth.Net, Bambora, NMI, Virtual Terminal, Inventory Management, Employee Management, Gift Cards, MCA, Healthcare, Non-Profits, Restaurant Management, Gas, Customer Relationships, Fraud Protection, Developers, etc. lead in French; Clover devices, Retail, Grocery, Franchise, Ecommerce lead in English. The rebuild must collapse this into a clean, mirrored EN/FR system.
- **Template flatness.** Most pages are `Navbar → Header → 2–3 Feature blocks → CTA → Footer`. This is brochure depth, not platform depth.
- **Content duplication.**
  - Virtual Terminals AND Virtual Terminal (two near-identical pages).
  - POS Integrations / Integrated POS / Clover Integrated / POS App Hardware (four pages doing overlapping jobs).
  - Other Solutions / Smart Terminals / Ingenico / Pax / Verifone (terminal-vendor pages floating without parent IA).
  - Unattended / Pay at Pump Fleet / Kiosk (three unattended stories not linked together).
- **Hardware vendor pages live in IA isolation.** Ingenico, Pax, Verifone, Auth.Net, Bambora, NMI are stranded — no parent category, no compare, no recommend logic.
- **No real pricing surface.** No statement-review flow, no fee education, no effective-rate explainer. Pricing is implied through "lower rates" claims on industry pages.
- **No secure upload surface.** Statement upload is referenced rhetorically but doesn't exist as a product feature.
- **Footer is a single line in every page block.** It is doing zero work.
- **CTA monoculture.** Every page ends with "Book a Demo / Leave Your Details." There is no statement upload CTA, no compare CTA, no recommend CTA, no resource CTA.
- **Industries inconsistent.** Retail and Grocery in English, Healthcare/Restaurant/Gas/Non-Profits in French, no Professional Services, no Franchise integration with industries.

**Headline:** the content universe is real and broad, but the architecture is not. The rebuild's job is to take this breadth and impose a serious operating system on top of it.

---

# Part A — Strategic Summary

## A.1 Positioning Statement

> **CleverPays is the bilingual merchant advocate that rebuilds messy payment stacks into clean, modern, fairly-priced operations. We specialize in Clover, integrate with what you already run, and tell you the truth about your statement.**

This positioning intentionally rejects three weaker stances:
- "We process payments" → commodity, race to the bottom.
- "We sell Clover" → reseller framing, no defensibility.
- "We grow your business" → vague, indistinguishable.

It claims a defensible ground: **bilingual merchant advocacy + Clover specialty + integrations competence + statement truth-telling**.

## A.2 Why CleverPays Wins

1. **Quebec-native, Canada-strong, U.S.-ready.** Real EN/FR depth, not Google Translate. This is structurally hard for U.S. competitors to copy and structurally lazy for big Canadian processors to commit to.
2. **Clover specialist, not Clover-only.** Deep on hardware + ecosystem, but compatible with what merchants already run.
3. **Statement-first acquisition motion.** "Upload your statement" is a smarter top-of-funnel than "Book a demo." It collects a high-intent signal earlier and creates a real reason to talk.
4. **Integrations posture.** Most processors hide the integration story. CleverPays makes it a front-door capability — POS, ecommerce, ERP, middleware.
5. **Operational soul.** The brand reads like an operator, not a salesperson. Tone is calm, sharp, and pragmatic.

## A.3 The Merchant-First Thesis

The merchant has 11 real questions (Section 4 of the source brief). Every page must answer at least one. The homepage must answer the top six in the first three scroll-depths:

1. Can you lower my fees? → Pricing Trust Layer + Statement Vault.
2. Can I keep my current POS? → Integrations + Clover Integrated.
3. Which Clover device is right for me? → Clover Play Area + Recommender.
4. Can you help me switch? → Switch & Save module + Resource hub.
5. Are you in EN and FR? → Top-right toggle + bilingual proof in hero.
6. Will I get real help from real people? → Trust modules + named team or service promise.

## A.4 Top-Level Site Strategy

- **Homepage** = orientation + statement vault + Clover play area + pricing trust + integrations posture. Conversion machine, not a marketing brochure.
- **Solutions hub** = problem-led IA, not product-led. Merchants think in jobs, not SKUs.
- **Clover hub** = signature interactive experience. The site's hero moment.
- **Pricing surface** = truth-telling, education, and the statement vault. Differentiator.
- **Integrations hub** = capability proof and developer/partner front door.
- **Industries hub** = vertical proof with consistent template.
- **Resources hub** = ranking-and-trust engine, AI-discoverable.
- **Footer** = a second navigation system, not a legal afterthought.

---

# Part B — Full Sitemap and Information Architecture

## B.1 Primary Navigation (8 items + EN/FR + 2 CTAs)

```
Solutions   Clover   Pricing   Integrations   Industries   Partners   Resources   About
                                                                          [EN | FR]   [Upload Statement]   [Book a Demo]
```

Primary CTA: **Book a Demo** (filled, accent green).
Secondary CTA: **Upload Statement** (outlined, equal weight visually but secondary semantically).
Mobile: primary CTAs collapse into a sticky bottom bar.

## B.2 Mega-Nav Structure

### Solutions (problem-led, not product-led)
| Column 1 — Accept Payments | Column 2 — Run the Business | Column 3 — Specialized |
|---|---|---|
| In-Person Payments | Inventory Management | Unattended & Kiosk |
| Online & eCommerce | Employee Management | Pay-at-Pump & Fleet |
| Virtual Terminal | Business Reporting | Gift Cards & Loyalty |
| Invoicing | Customer Relationships | Merchant Cash Advance |
| Integrated Payments | Fraud Protection | Franchise / Multi-Location |

Right rail: **"Not sure what you need? Upload your statement — we'll map it."** + secondary link to Compare Solutions.

### Clover
| Column 1 — Devices | Column 2 — By Business | Column 3 — Resources |
|---|---|---|
| Clover Overview | Retail Setup | Compare Devices |
| Clover Flex | Restaurant / QSR Setup | Clover Buyer's Guide |
| Clover Mini | Grocery Setup | Accessories |
| Clover Station Duo | Healthcare Setup | Clover vs Other POS |
| Clover Kiosk | Multi-Location Setup | Book a Clover Demo |
| Clover Integrated | | |

Right rail: small render of the Clover lineup + **"Try the Clover Recommender →"**.

### Pricing
| Column 1 — Understand | Column 2 — Compare | Column 3 — Act |
|---|---|---|
| How CleverPays Prices | In-Person vs Online vs Integrated | Upload Your Statement |
| Effective Rate Explained | Sample Scenarios | Request a Custom Quote |
| Common Statement Fees | Switching from Another Processor | Talk to a Specialist |
| Fee Glossary | Contract Rescue | |

Right rail: **"30-second statement read. We tell you what each line means."**

### Integrations
| Column 1 — POS | Column 2 — eCommerce | Column 3 — Build |
|---|---|---|
| All POS Integrations | Shopify | Developer Portal |
| Clover | WooCommerce | API Documentation |
| Lightspeed | Magento / Adobe Commerce | Sandbox Access |
| Square (migration) | BigCommerce | Webhooks |
| Toast / TouchBistro | Custom Integrations | ISV Partnership |
| Middleware Solutions | | |

Right rail: **"Keep your current POS. Switch your processor. Save on fees."**

### Industries
| Column 1 | Column 2 |
|---|---|
| Retail | Healthcare |
| Restaurant & QSR | Professional Services |
| Grocery & Convenience | Non-Profit |
| Gas & Fleet | Multi-Location & Franchise |
| | eCommerce-First |

Right rail: featured case study tile.

### Partners
- ISV Partnership Program
- Referral Partners
- Resellers / Agents
- Strategic & Enterprise Partnerships
- Developers (cross-link to Integrations)

### Resources
| Column 1 — Learn | Column 2 — Compare | Column 3 — Tools |
|---|---|---|
| Statement 101 | Clover Buyer's Guide | Effective Rate Calculator |
| Payment Processing Basics | Compare Processors | Statement Upload |
| The Switch Guide | Compare Clover Devices | Device Recommender |
| Security & Compliance | | Sample Statements |
| Case Studies | | |
| Glossary | | |
| FAQ | | |

### About
- Our Story
- Why CleverPays (the manifesto page)
- Our Service Model (named promises, response times)
- Bilingual Service
- Security & Trust
- Careers
- Contact

## B.3 Full Page Tree (consolidated from current sitemap)

```
/                                       Home
/solutions
  /in-person                           replaces "Other Solutions" + Smart Terminals
  /online                              eCommerce hub
  /virtual-terminal                    merges Virtual Terminal x2
  /invoicing
  /integrated-payments                 absorbs Integrated POS + Clover Integrated angle
  /inventory-management
  /employee-management
  /business-reporting
  /unattended                          parent for kiosk + pay-at-pump
    /pay-at-pump-fleet
    /self-service-kiosk
  /gift-cards
  /merchant-cash-advance               renamed "Clover Capital & Financing"
  /customer-relationships              renamed "Loyalty & Customer Engagement"
  /fraud-protection
  /franchise                           operational + multi-location story

/clover
  /                                    overview
  /flex
  /mini
  /station-duo
  /kiosk
  /integrated                          Clover-integrated for existing POS
  /accessories
  /compare                             Clover device compare
  /recommender                         interactive device finder
  /clover-vs-other-pos                 SEO conquest

/pricing
  /                                    overview + philosophy
  /effective-rate                      explainer + calculator
  /statement-101                       education page
  /scenarios                           in-person / online / integrated examples
  /switching                           contract rescue + The Switch Guide entry
  /upload-statement                    THE merchant vault entry

/integrations
  /                                    overview
  /pos                                 list + filter
    /clover
    /lightspeed
    /square-migration
    /toast
    /touchbistro
    /...
  /ecommerce
    /shopify
    /woocommerce
    /magento
    /bigcommerce
  /gateways                            Authorize.Net, Bambora, NMI consolidated here as gateway partners
  /terminal-hardware                   Ingenico, Pax, Verifone consolidated here as supported hardware
  /middleware
  /developers
    /                                  portal overview
    /docs                              API documentation
    /sandbox
    /webhooks
    /partner-program

/industries
  /                                    overview
  /retail
  /restaurant
  /grocery
  /gas-fleet
  /healthcare
  /professional-services
  /non-profit
  /franchise-multilocation
  /ecommerce

/partners
  /                                    overview
  /isv
  /referral
  /reseller-agent
  /strategic-enterprise

/resources
  /                                    hub
  /guides
    /statement-101
    /switching-processors
    /clover-buyers-guide
    /security-compliance
    /effective-rate-explained
  /case-studies
  /faq
  /glossary
  /tools
    /effective-rate-calculator
    /device-recommender
    /sample-statements
  /blog                                if/when content cadence supports it

/about
  /                                    our story
  /why-cleverpays
  /service-model
  /bilingual-service
  /security-trust                      doubles as compliance/security page
  /careers
  /contact

/legal
  /privacy
  /terms
  /accessibility
  /cookies
  /pci-compliance
```

**Pages retired or merged:**
- Testimonials (standalone) → distributed across hub pages + case-studies index.
- Other Solutions → `/solutions/in-person`.
- Smart Terminals → folded into `/integrations/terminal-hardware`.
- Pax / Verifone / Ingenico → child pages under `/integrations/terminal-hardware`.
- Authorize.Net / Bambora / NMI → child pages under `/integrations/gateways`.
- POS App Hardware → merged into `/clover/accessories` + `/integrations/terminal-hardware`.
- POS Integrations + Integrated POS + Clover Integrated → three distinct pages with clear jobs (`/integrations/pos`, `/solutions/integrated-payments`, `/clover/integrated`).
- Virtual Terminal x2 → single `/solutions/virtual-terminal`.
- Website Services → moved off the main IA, kept as a partner offering linked from Partners only. (It dilutes the payments positioning if it lives in primary nav.)

## B.4 Internal Linking Logic

**Three link rings, applied to every page:**

1. **Lateral ring** (peer pages): Clover Flex links to Mini, Station Duo, Kiosk, Compare. Retail links to other industries.
2. **Vertical ring** (up + down): every leaf links to its hub; every hub surfaces its leaves.
3. **Conversion ring**: every page surfaces Statement Upload + Book Demo, and every solution/industry page surfaces the most relevant Clover device + the most relevant integration.

**Contextual link blocks:**
- After hero on industry pages → "The Clover devices retailers most often choose: Mini, Station Duo, Flex."
- After feature blocks on Clover pages → "Pairs well with: Inventory Management, Business Reporting, Gift Cards."
- Resource articles → end with a "What to do next" trio: relevant solution, relevant tool, talk to us.

**Anchor text discipline:** descriptive, never "click here," never "learn more" alone. Always pair with the target topic.

## B.5 Footer Tree
See Part G for full footer specification.

## B.6 Breadcrumb Logic
- Hidden on Home.
- Shown on every L2 and deeper.
- Format: `Home / Clover / Devices / Flex` (locale-aware: `Accueil / Clover / Appareils / Flex`).
- Schema.org BreadcrumbList markup on every page.

---

# Part C — Homepage Wireframe (Section-by-Section)

The homepage runs 12 sections plus a sticky element layer. Every section must justify its existence by answering a merchant question or removing a merchant doubt.

## Section 1 — Hero (above fold)

**Layout:** Two-column on desktop (60/40), stacked on mobile.

**Left column (copy):**
- Eyebrow: `Payments · POS · Integrations · EN/FR`
- H1 (two-line max).
- Subhead (one sentence, 18–22 words).
- Two CTAs side-by-side: `Upload Your Statement` (primary on this page, reversing site-wide pattern because it's the homepage) and `Book a Demo` (secondary).
- Trust strip: 5 micro-proofs in a single row: `Bilingual EN/FR · Clover Specialist · Works with your existing POS · Real human support · Secure intake`.

**Right column (visual):**
- Layered render of a Clover Mini + a phone showing the upload flow + a desktop tile showing a clean statement-read mockup.
- Subtle parallax on scroll, max 8px translate.
- No animated stock video.

**Headline options (EN):**
1. *"Lower fees. Better Clover. Cleaner operations."*
2. *"The payments partner your accountant will actually like."*
3. *"Modern payments, plainly explained — in English and in French."*
4. *"Bring us your statement. We'll show you what's actually happening."*
5. *"Clover specialists. Integration experts. Bilingual by design."*

**Recommended:** #4 for hero, with #1 as the alternate H1 for the Pricing page hero (consistency of voice across funnel).

**Headline options (FR):**
1. *« Apportez-nous votre relevé. On vous explique ce qui s'y passe vraiment. »*
2. *« Frais réduits. Meilleur Clover. Opérations simplifiées. »*
3. *« Le partenaire de paiement que votre comptable va aimer. »*

**Subhead (EN):**
> Upload a recent statement and we'll map it line by line, recommend the right Clover setup, and connect it to the systems you already run. Quebec-built, Canada-wide, U.S.-ready.

**Bilingual note:** French version is ~15% longer; reserve 1.2x vertical space in the layout for FR rendering.

## Section 2 — Quick Trust Strip

**Layout:** Single horizontal row, 5 compact cards.

Cards:
- **2,000+ merchants** served across Canada & U.S.
- **EN/FR** native support, not translated.
- **300+ integrations** — keep your current systems.
- **All major Clover devices** + accessories in stock.
- **Statement review in 24h** by a real human.

On mobile: 2x3 grid (last cell is a CTA tile linking to About).

**Important:** Every numeric claim must be verified before launch. If the 2,000 number is not defensible, replace with "thousands" or a verified industry-served count. The legal/copy QA checklist enforces this.

## Section 3 — Clover Play Area (signature)

Full specification in **Part D**. Section anchor: `#clover`.

This section runs 90vh on desktop, 100vh on mobile. It's the site's hero moment after the hero itself.

## Section 4 — Pricing Trust Layer

**Layout:** Three columns on desktop, stacked on mobile.

**Header:** *"We tell you the truth about your statement."*
**Sub:** *"No surprise tiered pricing. No buried interchange fluff. We explain what you're paying and why."*

**Column 1 — Our pricing philosophy:**
- Interchange-plus, when it fits.
- Flat-rate, when it fits better.
- Transparent rate on every quote.
- No three-year auto-renew lock-ins.

**Column 2 — What the statement says vs what it means:**
- A two-row mini visual: a fragment of a real statement (anonymized, blurred line items) → mapped to plain-language meaning.
- CTA: *"Upload yours →"*

**Column 3 — Real merchant scenarios:**
- Three condensed examples: a 2-location restaurant, a Shopify+retail combo, an unattended kiosk operator. Show "before" weighted rate, "after" effective rate range, and 3 sentences on what changed. **Disclaim every example** as illustrative; do not promise outcomes.

Bottom of section: two CTAs.
- `Upload Statement` (primary).
- `Pricing Overview →` (text link to /pricing).

**Critical compliance note:** Do not claim specific savings percentages or guaranteed reductions. Every dollar figure must be illustrative, sourced, or approved by a finance lead before publish.

## Section 5 — Merchant Vault CTA

Mid-page CTA section. Full specification in **Part E**. This is a tall, dark, premium section that interrupts the page rhythm intentionally.

**Headline:** *"Bring us what you've got. We'll figure out what's worth changing."*
**Sub:** *"Upload statements, contracts, setup photos, or a description of what's not working. Our team reviews it within 24 hours and comes back with a real read — not a sales pitch."*

Three small icon-blocks describing the inputs (Statements, Contracts/Invoices, Setup Photos).
One large CTA: `Start Your Vault →`.
Trust strip below: `Encrypted upload · Reviewed by 1–2 humans only · Deleted on request · Bilingual review`.

## Section 6 — Integrations + Partnerships

**Layout:** Tabbed module — three tabs (POS / eCommerce / Build).

- POS tab: logo grid (Clover, Lightspeed, Square migration, Toast, TouchBistro, Aloha, NCR, etc.) + line: *"Keep your current POS. Switch your processor."*
- eCommerce tab: logo grid (Shopify, WooCommerce, Magento, BigCommerce, Wix, Squarespace, custom) + line: *"In-person and online, one set of books."*
- Build tab: developer portal teaser, API doc link, ISV partnership CTA.

Section CTA: `Explore all integrations →`.

## Section 7 — Industries Solutions

**Layout:** 3×3 grid of industry tiles (3 rows, 3 columns desktop; 1 column mobile).

Each tile = industry icon + name + one-sentence value + "Recommended Clover" + CTA link.

Featured industries (in priority order): Retail, Restaurant & QSR, Healthcare, Grocery & Convenience, Gas & Fleet, Professional Services, Non-Profit, Franchise / Multi-Location, eCommerce.

## Section 8 — Why CleverPays (the manifesto block)

**Layout:** Editorial layout, generous whitespace. Single column max-width 720px.

Four short pillars, each one paragraph:
1. **Bilingual by design.** Quebec-built. We treat French as a first language, not a translation.
2. **Merchant-first economics.** We make money when you stay. So we make sure you should stay.
3. **Clover specialists, not Clover-only.** We sell Clover when it fits and integrate when it doesn't.
4. **Operational, not theatrical.** No buried fees. No three-year locks. Named humans on real timelines.

CTA: `Read the full story →` to /about/why-cleverpays.

## Section 9 — Testimonials / Case Stories

**Layout:** Editorial card row, 3 cards on desktop, single-column slider on mobile.

Each card:
- Industry tag + region tag (Quebec / Ontario / U.S. East / etc.).
- One short pull quote (max 25 words).
- Merchant name + business + role.
- Outcome line (qualitative or quantitative — verified only).
- Link to full case study.

No cheesy auto-rotating slider. User-controlled only.

## Section 10 — Resources / Education Layer

**Layout:** Asymmetric grid — 1 large feature + 4 standard.

- Feature: *"Statement 101: How to read your processor's bill"* — the canonical lead-magnet article.
- Standards: Switch Guide, Clover Buyer's Guide, Effective Rate Explained, Security & Compliance overview.

Bottom link: `Browse the Resource Hub →`.

## Section 11 — Closing CTA

**Layout:** Full-width band, dark background.

Headline: *"Three ways to start."*

Three columns:
- **Upload your statement** → 24h review.
- **Book a demo** → 30-minute walkthrough.
- **Talk to a specialist** → bilingual EN/FR phone & chat.

Each with its own CTA button.

## Section 12 — Footer

Full specification in **Part G**.

## Sticky Element Layer

- Top: persistent nav with locale toggle.
- Bottom (mobile only): sticky bar with `Upload` + `Demo` after 30% scroll.
- Right-bottom: discreet chat affordance with bilingual greeting. Only loads after scroll past hero (perf budget).

## Homepage Component List
- HeroSplit
- TrustStripCompact
- CloverPlayArea (Part D)
- PricingTrustModule
- VaultCTABand (Part E)
- IntegrationsTabbedLogos
- IndustriesGrid
- ManifestoBlock
- TestimonialCardRow
- ResourceFeatureGrid
- ClosingCTABand
- FooterGlobal (Part G)
- StickyMobileCTA
- StickyChatAffordance

---

# Part D — Clover Play Area Specification

This is the site's signature interactive experience. Anchor name: **Clover Studio** (chosen for tactility and seriousness; better than "Play Area" in the merchant-trust register, better than "Lab" which signals beta/experimental).

## D.1 Goals

- Make hardware feel physically pressable.
- Help a merchant self-select the right device in under 90 seconds.
- Connect hardware → industry → solution → CTA without forcing a form.
- Work beautifully on mobile thumbs.

## D.2 Layout Modes

The module has three modes, switchable via a tab control at the top:

1. **Browse** (default): full device lineup as tactile cards.
2. **Compare**: side-by-side feature matrix.
3. **Recommend**: 4-question chooser that lands on a recommended device.

## D.3 Browse Mode

**Layout:** 2x3 grid on desktop showing 5 devices + 1 "Accessories" tile. Single-column horizontal swipe on mobile.

**Each device card contains:**
- Premium 3D-rendered hero image (front + 3/4 angle).
- Device name + one-line positioning (e.g., *"The countertop standard. Compact, capable, friendly to small footprints."*).
- 3 chip-style tags: best-for industry, mobility, price tier.
- Quick stats row: form factor, connectivity, screen size, weight.
- "Press to flip" affordance → reverse side shows top 5 features + "Best for" use cases.
- Two CTAs at card foot: `See full spec` + `Book demo`.

**Interactions:**
- Hover (desktop): card lifts 4px, soft underlay shadow expands, subtle inner light wash on the device render.
- Press: card depresses 2px, shadow tightens, ~80ms response.
- Click: opens flip animation (CSS 3D transform, 320ms, ease-out-cubic).
- Mobile: tap = flip; swipe sideways = next/previous device.
- Reduced-motion preference: flip becomes instant fade.

## D.4 Compare Mode

**Layout:** Sticky-header comparison table, max 4 devices selected. Selectable from a row of device thumbnails above the table.

**Compared dimensions:**
- Form factor / mobility
- Screen size
- Battery (yes/no, hours)
- Connectivity (Wi-Fi, LTE, Ethernet)
- Built-in printer
- Customer-facing display
- Best for (chips)
- Common industries
- Starting price tier (no exact $)
- CTA per device

Mobile: collapses to swipeable single-device columns with a fixed left "dimension" column.

## D.5 Recommend Mode

A 4-step chooser. Each step is a single question with 2–4 visual answer tiles.

1. **What type of business?** Retail / Restaurant / Service / Mobile / Multi-location.
2. **Where do customers pay?** At a counter / In motion / Both / Self-service.
3. **How many transactions a month?** <500 / 500–2k / 2k–10k / 10k+.
4. **Do you already have a POS you like?** Yes / No / Not sure.

Result screen:
- Recommended device + 1-line rationale.
- One alternate device + why.
- "Talk to a specialist" + "Book a Clover demo" CTAs.
- "Start over" link.

Logic is rule-based (not ML); spec the table in the CMS so non-engineers can tune it.

## D.6 Mobile Behavior

- Browse: horizontal carousel, 1 card per screen, snap-scroll, dot indicators below.
- Compare: swipeable single-device columns with sticky dimension list.
- Recommend: full-screen step-by-step, large tap targets (min 48px).

## D.7 Performance & Accessibility

- All device renders served as next-gen image formats with `<picture>` fallbacks; preload only the visible-on-first-paint hero.
- 3D transforms only on `will-change: transform` elements; remove `will-change` after interaction.
- All cards are buttons (`<button>` or `<a role="button">`) with proper labels for screen readers.
- Recommend flow announces step changes via `aria-live="polite"`.
- All interactions reachable by keyboard with visible focus rings.
- Compare mode: column headers correctly associated for screen readers.

## D.8 Design References in Words

- The card feel of Apple's product gallery, but quieter and more serious.
- The depth and shadow discipline of Linear's UI surfaces.
- The compare table density of Helcim's hardware pages, but with cleaner typography.
- The recommender flow of Mailchimp's plan finder, but without the playful illustration register.
- Hardware photography mood of a high-end watch brand's product page: deep blacks, controlled light, the device as the hero.

---

# Part E — Merchant Vault Specification

Final name: **Merchant Vault** (with subtitle: *Secure Statement & Setup Intake*). The word "Vault" earns its keep — it signals security, deliberateness, and ownership.

## E.1 Purpose

A first-class product feature for intake. Allows merchants to submit a real packet — statements, contracts, photos, pain points — and receive a 24-hour bilingual review.

This is the signature top-of-funnel asset and the primary conversion alternative to a generic demo form. Most processors don't have this. CleverPays should.

## E.2 Information Architecture

**Pages:**
- `/pricing/upload-statement` — entry point + marketing wrapper.
- `/vault/start` — flow step 1.
- `/vault/upload` — flow step 2.
- `/vault/details` — flow step 3.
- `/vault/confirm` — flow step 4.
- `/vault/thanks/[id]` — confirmation + next steps.
- `/vault/dashboard/[id]` — optional merchant portal (Phase 2) to track review status.

## E.3 Flow Screens

### Step 1 — Start
Hero: *"Let's take a real look at your setup."*
Three reassurances pinned visually:
- Encrypted in transit and at rest.
- Reviewed by 1–2 humans on our team only.
- Deleted on request; auto-purged after 90 days.

Two paths:
- **Quick path** (3 min): just a statement.
- **Full review** (5–8 min): statement + contract + photos + pain points.

Field 1: Email (validated).
Field 2: Preferred language (EN/FR radio).
Field 3: Preferred contact (email / phone / text).

CTA: `Continue →`.

### Step 2 — Upload
Drag-and-drop zone + "Choose Files" + "Take a Photo" (on mobile, opens camera).

Allowed file types: PDF, JPG, PNG, HEIC, WEBP. Max size: 25MB per file, 5 files total in v1.
Reject: executables, scripts, archives, office docs with macros.

For each uploaded file:
- Thumbnail preview (PDF first-page render or image).
- Filename (sanitized display, not the original).
- File type tag (statement, contract, POS photo, other).
- Replace / Remove buttons.

Progress: per-file progress bar + overall progress.

Below the upload zone, a friendly mini-explainer: *"Why we ask: statements show your real effective rate; contracts show your renewal terms; photos help us understand your countertop. We don't need anything else."*

CTA: `Continue →`.

### Step 3 — Details
- Business name + business type (dropdown of industries).
- Number of locations.
- Current processor (free-text + a small autocomplete with common names).
- Current POS (same).
- Approx. monthly card volume (range buckets, not exact).
- One free-text box: *"What's frustrating you about your current setup?"* (max 1000 chars, with a polite character counter).
- Optional: preferred review-back time (today / this week / no rush).

All fields except business name and pain-point box are optional in Quick Path.

### Step 4 — Confirm
Summary card showing:
- Files attached (count + types).
- Business basics.
- Preferred contact + language.
- Edit links per section.

Checkbox: *"I've read how my data is handled and stored."* (links to /vault/security inline).

CTA: `Submit for review →`.

### Confirmation page
- Plain confirmation: *"Your vault is in. You'll hear from [name or "our team"] within 24 hours."*
- Vault ID displayed + emailed.
- "Add a note later" link (Phase 2).
- Three next-step links: Browse Clover, Read Statement 101, Explore Integrations.

## E.4 Bilingual Copy Patterns

| English | French |
|---|---|
| Upload your statement | Téléverser votre relevé |
| Take a photo | Prendre une photo |
| What's frustrating you? | Qu'est-ce qui ne fonctionne pas? |
| Reviewed by 1–2 humans only | Examiné uniquement par 1 ou 2 membres de notre équipe |
| Deleted on request | Supprimé sur demande |
| Your vault is in. | Votre coffre est envoyé. |
| You'll hear from us within 24 hours. | Nous vous répondrons dans les 24 heures. |

Layout must accommodate 15–20% French expansion in labels and 25% in long-form sentences.

## E.5 Admin / Reviewer Workflow

Internal-only (not user-facing) but spec'd so the build is coherent:

Roles:
- **Submitter** (merchant): can upload, edit before submit, request deletion.
- **Reviewer** (sales/SE): can view, annotate, assign, change status.
- **Lead** (sales manager): all reviewer rights + reassign.
- **Admin**: full audit access + retention controls.
- **Support**: read-only access for support-triggered submissions.

States: `submitted → in-review → quote-drafted → quote-sent → won/lost/no-response → archived`.

Notifications: reviewer gets in-app + email when assigned. Merchant gets transactional email at `in-review`, `quote-drafted`, and `archived`.

SLAs:
- Auto-acknowledge within 5 minutes.
- Human first response within 24 business hours.
- Status published to the merchant portal (Phase 2).

## E.6 Success State & Post-Submit Engagement
- Confirmation page is calm, not celebratory. No confetti.
- Email follow-up at +5min (auto), +24h (human), +5 days (gentle nudge if no response).
- Merchant can reply to the +24h email with attachments to add to the vault.

---

# Part F — Pricing Section Specification

## F.1 Page Set

- `/pricing` — overview + philosophy.
- `/pricing/effective-rate` — explainer with calculator.
- `/pricing/statement-101` — education.
- `/pricing/scenarios` — three illustrative scenarios.
- `/pricing/switching` — switch guide + contract rescue.
- `/pricing/upload-statement` — entry to Merchant Vault.

## F.2 /pricing Structure

1. **Hero:** *"We tell you the truth about your statement."* Subhead reinforces: no tiered pricing tricks, no surprise renewals, plain-English quotes.
2. **Our philosophy:** 4 short pillars — interchange-plus when it fits, flat-rate when it fits, transparent quotes, no auto-renews.
3. **Effective-rate calculator (embedded):** merchant inputs monthly volume + average ticket + a checkbox for "I have integrated payments" / "I run an online store." Output: an illustrative effective rate range with a clear disclaimer + CTA to upload statement for a precise read.
4. **Sample scenarios:** three vertical cards (small restaurant, multi-channel retail, unattended operator). Each shows: setup, weighted "before" effective rate (range), weighted "after" effective rate (range), what changed (3 bullets). Heavy disclaimers.
5. **Fee glossary teaser:** 8 most-confusing fees with one-sentence definitions. Link to full glossary in Resources.
6. **Statement upload band:** big, dark CTA section identical to homepage Vault band.
7. **Switch guide entry:** 3-step explainer with link to /pricing/switching.
8. **FAQ:** 8–10 pricing-specific FAQs with schema.org FAQPage markup.
9. **Closing CTA band:** three options (Upload, Demo, Talk to a specialist).

## F.3 Effective Rate Calculator Spec
- Inputs: monthly volume ($), average ticket ($), channels (in-person / online / both), integration (yes/no).
- Outputs: estimated effective rate range, expressed as "X.XX% – Y.YY%".
- Hard-coded ranges per profile, sourced and approved before publish. **Do not invent the ranges.** Get them from a finance lead.
- Always render with: *"Illustrative only. We'll give you a real number when we read your statement."*
- "Send these results to my email" optional micro-CTA.

## F.4 Trust Copy
- *"Every quote includes line-by-line interchange and assessment costs. No buckets, no fluff."*
- *"We don't auto-renew you into a multi-year contract."*
- *"You'll never see a 'PCI non-compliance fee' from us without a plain-English reason and a way to fix it."*

## F.5 Disclaimers (mandatory)
- All effective-rate ranges and scenario figures are illustrative.
- Actual rates depend on card mix, business type, ticket distribution, and processor agreement.
- No savings claim should be expressed as a guarantee.
- All examples must include a footnote stating they are not customer-specific.

## F.6 CTAs
Primary on /pricing: **Upload Your Statement**.
Secondary: **Talk to a Specialist**.
Tertiary (text link): **Read Statement 101**.

---

# Part G — Footer System

The footer is a second navigation system, a trust reinforcement layer, and a conversion path. It should be *the most polished footer in the Canadian payments industry*. Implementation is non-trivial — budget for it.

## G.1 Structure (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│  TOP CTA BAND                                                   │
│  Headline + sub + two CTAs                                      │
├─────────────────────────────────────────────────────────────────┤
│  MAIN COLUMNS (6)                                               │
│  Solutions   Clover    Industries   Integrations   Resources    │
│  Company                                                        │
├─────────────────────────────────────────────────────────────────┤
│  TRUST + BILINGUAL STRIP                                        │
│  Trust badges · Bilingual service note · Secure intake note     │
├─────────────────────────────────────────────────────────────────┤
│  BOTTOM BAR                                                     │
│  © · Privacy · Terms · Accessibility · Cookies · Language       │
└─────────────────────────────────────────────────────────────────┘
```

## G.2 Top CTA Band
**Headline (EN):** *"Bring us your statement, your contract, or your questions. We'll show you what's actually happening."*
**Sub:** *"Bilingual review. 24-hour turnaround. No pressure."*
**CTAs:** `Upload Statement` (primary) · `Book a Demo` (secondary).

Background: deep navy with subtle radial accent.

## G.3 Main Columns

**Solutions**
- In-Person Payments
- Online & eCommerce
- Virtual Terminal
- Invoicing
- Integrated Payments
- Inventory Management
- Employee Management
- Business Reporting
- Unattended & Kiosk
- Pay-at-Pump & Fleet
- Gift Cards & Loyalty
- Merchant Cash Advance
- Fraud Protection

**Clover**
- Clover Overview
- Flex
- Mini
- Station Duo
- Kiosk
- Clover Integrated
- Accessories
- Compare Devices
- Recommender
- Book a Clover Demo

**Industries**
- Retail
- Restaurant & QSR
- Grocery & Convenience
- Gas & Fleet
- Healthcare
- Professional Services
- Non-Profit
- Multi-Location & Franchise
- eCommerce

**Integrations**
- All POS Integrations
- Shopify
- WooCommerce
- Magento
- Lightspeed
- Toast
- Square Migration
- Gateways
- Terminal Hardware
- Middleware
- Developer Portal
- API Docs

**Resources**
- Statement 101
- Switching Guide
- Clover Buyer's Guide
- Effective Rate Calculator
- Device Recommender
- FAQ
- Glossary
- Case Studies
- Security & Compliance

**Company**
- Our Story
- Why CleverPays
- Service Model
- Bilingual Service
- Security & Trust
- Partners
- Careers
- Contact
- Support

## G.4 Trust + Bilingual Strip

A horizontal row, subtle dividers, six elements:
- **Bilingual EN/FR by design.** Real French. Real humans.
- **PCI-DSS aware.** Compliant practices across the stack.
- **Secure intake.** Encrypted vault for statements and contracts.
- **Merchant-first.** No three-year auto-renew traps.
- **Canada-built.** Quebec roots. Nationwide reach. U.S.-ready.
- **Real humans.** Named team. 24h response on intake.

Each line gets a small, restrained mark (custom monoline SVG icons, not stock).

## G.5 Bottom Bar

Left: © 2026 CleverPays · Toronto / Montréal.
Center: Privacy · Terms · Accessibility · Cookies · PCI Compliance Notice.
Right: Language toggle (EN | FR) + region indicator (CA / US) [Phase 2].

## G.6 Mobile Behavior

- Top CTA band stacks vertically; both CTAs full width.
- Main columns become accordions, one per category, animated 200ms.
- Trust strip becomes a 2-column tight grid.
- Bottom bar wraps to two lines.
- Language toggle remains prominent in bottom bar (not buried).

## G.7 Visual Direction

- Background: deep near-black with a subtle navy undertone.
- Type: column heads in display weight at moderate size; links in body weight; strong tracking discipline.
- Hover on links: green underline animation, 120ms, never a color change that breaks contrast.
- Dividers: 1px lines at very low opacity, never feel like a basic grid.
- One restrained accent: a thin signal-cyan glow at the top edge of the footer where it meets the page, optional and very subtle.
- No icon clutter. No social-icon parade in the bottom bar — link socials, if at all, in the Company column with text.

## G.8 Why this footer earns its keep
- A first-time visitor at the bottom of a page sees the entire product universe without backing up.
- The bilingual + trust strip reinforces every page's core promise without being shouty.
- The CTA band makes the footer a real conversion surface, not a placeholder.

---

# Part H — Visual Design System

## H.1 Color Tokens

```
--cp-bg-deep:       #0A0E1A   (near-black with navy undertone — primary dark background)
--cp-bg-base:       #0F1626   (cards on dark surface)
--cp-bg-light:      #FFFFFF   (light surfaces)
--cp-bg-neutral:    #F5F7FA   (light-mode subtle background)

--cp-ink-primary:   #0A0E1A   (body type on light)
--cp-ink-secondary: #4A5365   (secondary body)
--cp-ink-muted:     #8A93A6   (muted utility)
--cp-ink-on-dark:   #FFFFFF
--cp-ink-on-dark-2: #B4BBCB   (secondary type on dark)

--cp-green-600:     #11B981   (primary accent: CTAs, brand)
--cp-green-500:     #25C78F   (hover)
--cp-green-200:     #BDF1DC   (washes, success backgrounds)

--cp-cyan-500:      #41E0FF   (signal accent — used sparingly: edges, focus glows)
--cp-cyan-100:      #D6F6FF

--cp-warn:          #F7A93B
--cp-err:           #E5484D

--cp-border-dark:   rgba(255,255,255,0.08)
--cp-border-light:  rgba(10,14,26,0.08)
```

Discipline:
- Green is the brand action color. Don't use it for non-action UI.
- Cyan is a signal accent only. Use for focus glow on dark, top-edge glow on footer, single-pixel accent lines on data viz.
- Avoid generic banking blue. Avoid gradient noise. Avoid crypto-bright neon.

## H.2 Typography

**Display & UI sans:** Inter (var), with weight range 400–700.
**Optional display face for hero moments:** Söhne Breit, or a comparable wide-display serif/sans (final choice subject to license review). Used only for the hero H1 on the homepage, the manifesto block, and the closing band.

**Type scale (rem, base 16px):**
```
display-1   4.5    5rem on lg screens
display-2   3.5
h1          2.75
h2          2.125
h3          1.625
h4          1.25
body-lg     1.125
body        1.0
body-sm     0.875
micro       0.75
```

**Tracking:**
- Display: -1.5% tracking
- Headings: -1% tracking
- Body: 0
- Micro / uppercase eyebrows: +6% tracking

**FR rendering:**
- Hyphenate paragraphs (`hyphens: auto`) in FR locale only on body sizes.
- Test all hero H1 options at FR length before approving.

## H.3 Spacing System

Base unit: 4px. Allowed steps: 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 120.
Never invent a one-off value.

Vertical rhythm: section padding standardizes at 80px (mobile) / 120px (desktop), with optional 56/80 for tight modules.

## H.4 Surfaces

**Light surface:** white card, 1px hairline border at `--cp-border-light`, 8px or 16px radius, soft drop shadow `0 1px 2px rgba(10,14,26,0.04), 0 8px 24px rgba(10,14,26,0.06)`.

**Dark surface:** `--cp-bg-base`, 1px border at `--cp-border-dark`, inner highlight via `inset 0 1px 0 rgba(255,255,255,0.04)`.

**Pressed state (Clover cards):** translate Y by 2px, shadow tightens by ~30%, border brightens 1 step.

**Glow state (focus on dark):** outline `2px solid --cp-cyan-500` + box-shadow `0 0 0 4px rgba(65,224,255,0.25)`.

## H.5 Buttons

**Primary (filled green):**
- Padding 12px 20px (compact) / 16px 28px (default).
- Radius 8px.
- Type: 1.0rem, weight 600.
- Hover: lighten 1 step + raise 1px shadow.
- Pressed: press 1px, darken 1 step.
- Disabled: `--cp-green-200` fill, `--cp-ink-muted` type.

**Secondary (outlined):**
- 1.5px border `--cp-green-600`, transparent fill.
- Hover: fill at `--cp-green-200` light surface, full green pill on dark.

**Tertiary (text link with arrow):**
- Green text, underline animates on hover (left-to-right, 160ms).

**Loading state:** spinner replaces label, disable interaction, retain width to prevent reflow.

## H.6 Cards

Device cards, industry cards, testimonial cards each have a distinct shape but share token bones (radius, shadow, padding).

Industry card: 4:3 aspect, icon + 2-line title + 2-line value + chip + arrow.
Testimonial card: portrait or initials avatar + quote + attribution.
Device card (Clover): see Part D.

## H.7 Motion Principles

- All motion serves comprehension, not decoration.
- Standard durations: 120, 200, 320, 480 ms. Never longer than 480ms for UI.
- Standard easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` (smooth-out).
- No long parallax. No animated heroes that delay content.
- `prefers-reduced-motion`: replace transforms with opacity-only fades; remove flips, replace with crossfades.

## H.8 Icons

Custom monoline icon set, 1.5px stroke at 24px size, rounded caps. No emoji. No bitmap icons. Maintain consistency with one source family across the site.

## H.9 Imagery

- Hardware: high-end product photography on controlled gradients. Clover devices always shown with realistic on-screen content (never blank screens).
- People: candid editorial photography of merchants in real environments (retail, restaurant, healthcare). No stock-trio of suits.
- Avoid:
  - Gradient blobs.
  - Cartoon illustrations of money / coins / cards.
  - "3D isometric scene" hero illustrations.

## H.10 Bilingual Considerations
- All components must render correctly in both EN and FR.
- Don't bake locale-specific strings into images. Use SVG with `<text>` only when bilingually maintained.
- Quote marks: « » in FR, " " in EN.
- Numbers: 1,234.56 in EN; 1 234,56 in FR.
- Dates: "March 5, 2026" in EN; « 5 mars 2026 » in FR.
- Currency: $ before in EN; $ after in FR (CAD convention varies — pick one and document).

---

# Part I — UI Component Inventory

Grouped by domain. Each component has a name, a one-line job, and rough spec status.

## I.1 Navigation
- **NavGlobal** — top bar with logo, primary nav, locale, CTAs.
- **NavMega** — full-width mega panels for Solutions / Clover / Pricing / Integrations / Industries / Resources.
- **NavMobile** — full-screen drawer with accordion sections + locale + CTAs.
- **StickyMobileCTA** — bottom-pinned dual CTA bar (Upload + Demo).
- **Breadcrumb** — schema-annotated trail, locale-aware.

## I.2 Hero & Bands
- **HeroSplit** — 60/40 left-copy, right-visual; homepage and lead pages.
- **HeroCentered** — single-column for category overviews.
- **VaultCTABand** — dark mid-page band with three input chips + CTA.
- **ClosingCTABand** — three-column closing band (Upload / Demo / Talk).
- **AnnouncementBar** — optional top strip for limited-time messages, dismissible.

## I.3 Cards
- **DeviceCard** — Clover device, pressable, flippable.
- **IndustryCard** — industry tile, asymmetric.
- **TestimonialCard** — editorial quote card.
- **SolutionTile** — solution category tile with icon + value.
- **IntegrationLogoTile** — logo + name + "Connect" chip.
- **ResourceCard** — article/guide preview.
- **FAQItem** — accordion item with schema.

## I.4 Selectors & Inputs
- **DeviceSelector** — for the Clover Recommender.
- **TabBar** — horizontal tabs for tabbed modules.
- **Toggle** — segmented control (pricing in-person / online / integrated).
- **PricingCalculator** — multi-input calculator with output ranges.
- **UploadZone** — drag-and-drop + choose + camera (Vault).
- **FormField** — labelled input with help text, error state, locale support.
- **FileChipList** — list of uploaded files with type tag and remove.

## I.5 Pricing Modules
- **PricingPhilosophy** — 4 pillars on the pricing overview.
- **PricingScenarioCard** — illustrative card with before/after rate range.
- **PricingTrustModule** — the homepage pricing band.
- **EffectiveRateCalculator** — embedded calculator component.
- **FeeGlossaryItem** — one-line fee + plain-English definition.

## I.6 Trust & Proof
- **TrustStripCompact** — 5–6 micro-proof row.
- **TrustStripWide** — footer trust strip.
- **TrustModule** — full section like "What happens after you upload."
- **BadgeRow** — compliance / security badges.

## I.7 Footer
- **FooterGlobal** — full footer component (Part G).

## I.8 Tables & Comparison
- **CompareTable** — Clover compare or processor compare.
- **DataTable** — generic 2D table for resource pages.
- **FeatureRow** — used inside compare tables.

## I.9 Utility
- **StickyChat** — discreet chat affordance.
- **LocaleSwitch** — EN/FR toggle.
- **ScrollProgress** — thin top progress bar on long resource articles.
- **CalloutBox** — info / warning / disclaimer.
- **Citation** — footnote/source link with hover preview.

## I.10 Forms & Vault
- **VaultStepStart** — entry step.
- **VaultStepUpload** — upload step.
- **VaultStepDetails** — details step.
- **VaultStepConfirm** — confirm step.
- **VaultProgressBar** — 4-step progress indicator.

---

# Part J — Security Architecture Notes

Security is the second pillar of trust (the first being clarity). Below is the security architecture for the Merchant Vault and the broader site.

## J.1 Upload Security Rules
- HTTPS only, HSTS preload-eligible config.
- Strict CSP with nonce-based script allowance.
- Content sniffing protection (`X-Content-Type-Options: nosniff`).
- File-type allowlist: PDF, JPG, PNG, HEIC, WEBP. Rejected types fail at upload edge with a clear message.
- Magic-number validation server-side (do not trust the extension or MIME).
- Per-file size cap: 25MB. Per-submission cap: 5 files.
- Filename sanitization: regenerate filenames on upload to `[vaultId]_[shortHash].[ext]`. Original filename kept as metadata only.
- Malware scanning at ingest (e.g., ClamAV or equivalent SaaS, depending on stack); files held in a staging bucket until scan completes; rejected files removed and flagged.
- No client-side trust: server re-validates all constraints.

## J.2 Storage
- Object storage with bucket policy denying public access; objects accessed only via signed URLs.
- Encryption at rest with managed keys.
- Bucket region matched to merchant locale where feasible (Canadian merchants → Canadian region for data residency posture).
- Separate buckets for `incoming` (post-scan), `archived`, and `quarantine` (malware-flagged).

## J.3 Auth & Access (RBAC)
Roles defined in Part E.5. Implementation:
- Reviewers authenticate via SSO with strong MFA.
- File access only via short-lived signed URLs scoped to a single object and a single reviewer's session.
- "Open file" actions logged with reviewer ID, timestamp, IP, and user-agent.
- No mass-download endpoints; bulk export requires admin role and is logged as a special event.
- Least privilege: reviewers can only see vaults assigned to them or unassigned vaults in their team.

## J.4 Audit Logging
Events logged immutably (append-only, separate datastore):
- Upload start / success / failure / scan result.
- File view / download / annotation.
- Vault state change (submitted, in-review, quote-drafted, sent, won/lost, archived, deleted).
- Permission change.
- Admin retention action.
- Unusual activity flags (e.g., 5+ files viewed in <10s by one reviewer).

Logs retained for 12 months minimum.

## J.5 Retention & Deletion
- Default retention: 90 days from last activity, then auto-archive (encrypted cold storage) for an additional 9 months, then permanent delete.
- Merchant can request deletion at any time via a vault-specific deletion link in email confirmations and the optional portal. Deletion processed within 7 calendar days; confirmation sent.
- Reviewer or admin cannot prevent deletion; deletion is a privacy right.
- Retention policy linked from /vault/security and /legal/privacy. Plain language version + legal version both available.

## J.6 Secure Error Handling
- No stack traces or filesystem paths in client-facing errors.
- Generic 4xx/5xx pages; specific details logged server-side with correlation IDs.
- Rate limit signed URL endpoints; 429 with clear retry guidance.
- Form errors localized in EN and FR.

## J.7 Secrets & Configuration
- No secrets in client bundles.
- Server-side secrets managed in a vault (e.g., AWS Secrets Manager / Doppler / 1Password Connect).
- Build-time public env vars clearly separated from server-only env vars.
- No third-party scripts that introduce data exfiltration risk on Vault pages (Vault pages run a hardened CSP that strips analytics, chat, and ad pixels).

## J.8 Security UX Language

Plain, calm, never hypey:
- *"Encrypted in transit and at rest."*
- *"We use signed URLs that expire after a short time."*
- *"Files are reviewed by one or two named members of our team."*
- *"Auto-purged after 90 days, sooner on request."*
- *"You can ask us to delete everything at any time."*

In FR:
- *« Chiffré en transit et au repos. »*
- *« Examiné par un ou deux membres nommés de notre équipe. »*
- *« Supprimé automatiquement après 90 jours, ou plus tôt sur demande. »*

## J.9 Risk Mitigation List
| Risk | Mitigation |
|---|---|
| Malicious file upload | Allowlist + magic-number validation + malware scan + staging quarantine |
| Path traversal via filename | Regenerate filenames on ingest |
| URL leakage | Short-TTL signed URLs, single-object scope, logged access |
| Insider abuse | RBAC + immutable audit log + anomaly detection |
| Data residency | Region-scoped storage; document residency posture |
| PII over-collection | Only ask for what's needed (Quick path < Full path) |
| Phishing post-submit | Confirmation email signed with DMARC-aligned domain; never link-shortened |
| Stale data lingering | Auto-purge + accessible deletion link |

---

# Part K — Technical Implementation Notes

## K.1 Recommended Stack

**Front-end:**
- Next.js 14+ with App Router, deployed on a serverless edge platform.
- React 18+. Server Components for static surfaces, Client Components for Clover Studio, Calculator, Vault flow.
- Tailwind CSS for the design token-mapped utility layer; component library wrapping primitives (Radix or shadcn-based) for accessible behavior; **never inline arbitrary styles**.
- Framer Motion (or equivalent) for the few motion moments — kept on a strict perf budget.

**CMS:**
- Headless CMS (Sanity or Contentful) for structured content. Required: native multilingual fields, content versioning, scheduled publish, role-based access for editors.
- Each content type modeled per Part L.
- Preview environment with branch deploys.

**Vault back-end:**
- API routes hosted alongside front-end (Next.js route handlers) for upload signing + status; longer-running tasks (scan, transform) on a dedicated worker (e.g., AWS Lambda + SQS or equivalent).
- Object storage: S3 / Cloud Storage with bucket policy + signed URL flow.
- Database: Postgres for vault state, reviewer assignments, audit references.
- Audit log: separate append-only store (e.g., a dedicated table with write-only role + downstream replication).

**Auth (internal reviewer side):**
- SSO via Google Workspace or Microsoft Entra (whichever the company uses); SCIM provisioning.
- MFA enforced.

**Email:**
- Transactional via Postmark / Resend / SES with DMARC + DKIM + SPF aligned.
- Templates bilingual; locale chosen from vault submission.

**Analytics:**
- Privacy-respecting analytics (e.g., Plausible or self-hosted Umami) on marketing pages.
- Funnel events on Vault flow (start, upload, details, confirm, submitted) without capturing file content.
- No third-party trackers on Vault pages.

## K.2 Multilingual Content Architecture
- Each content document has parallel EN + FR fields, with one canonical source per document.
- URL structure: locale prefix on FR routes (`/fr/clover/mini`), no prefix for EN canonical. Alternate: locale-on-subdomain — discuss with SEO lead; prefix is the safer default for the rewrite.
- `<link rel="alternate" hreflang="en-CA" />` and `<link rel="alternate" hreflang="fr-CA" />` on every translatable page + `x-default`.
- Language toggle preserves the current page (deep equivalence). If a page lacks an FR translation, fall back to a tagged "translation in progress" notice with a manual contact CTA — do not silently redirect to home.
- Editorial workflow: translations are paired drafts; FR translator role can edit only FR fields.

## K.3 Performance Budget

| Metric | Target |
|---|---|
| LCP (mobile, 4G) | < 2.0s |
| INP | < 200ms |
| CLS | < 0.05 |
| Initial JS (homepage) | < 180KB compressed |
| Initial JS (any page) | < 250KB compressed |
| Hero image weight | < 100KB compressed |
| Total weight (homepage above fold) | < 700KB |
| Time to first byte | < 400ms p75 |

Discipline:
- No animation library on routes that don't need it.
- Image: AVIF + WebP, `<picture>` fallback, native lazy-load.
- Fonts: subset; preload only display + 1 body weight; `font-display: swap`.
- Critical CSS inlined; rest deferred.
- Third-party scripts strictly off the critical path; chat widget loads after first interaction or after 3s idle.

## K.4 Accessibility Checklist
- All interactive elements reachable by keyboard with visible focus.
- Color contrast: 4.5:1 body, 3:1 large display.
- Forms: labels associated, errors announced (`aria-live`), required-state clear.
- Motion: respect `prefers-reduced-motion`.
- Carousels (testimonials, mobile Clover browse): user-controllable, pause-on-focus, keyboard arrow nav.
- Compare table: proper header association + caption.
- Vault flow: each step announced, progress communicated, errors recoverable without losing prior input.
- Language toggle: announces locale change.
- All non-text content has descriptive alt or is marked decorative.
- Skip-to-content link on every page.

## K.5 Progressive Enhancement Rules
- Site works without JS for content pages (server-rendered).
- Vault flow gracefully degrades: if JS fails, a fallback "submit by email" path is offered with a one-step email + file form.
- Calculator without JS shows static "Talk to us for a custom estimate" with phone + link.
- Recommender without JS shows a static "Compare Clover Devices" table link.
- Carousels without JS show the first item + a link to the rest.
- Reduced-motion users get fades instead of slides.

## K.6 Build Pipeline & QA Hooks
- CI runs: lint, type-check, unit, accessibility (axe), Lighthouse CI thresholds, visual regression on key pages.
- Preview deploys per PR with EN + FR locale toggle smoke test.
- Editorial preview environment for CMS changes.
- Pre-merge: PSI scores must meet performance budget on Home / Pricing / Clover / Vault.
- Pre-deploy: schema validation on JSON-LD, broken-link crawl, hreflang audit.

---

# Part L — SEO / AEO / GEO Notes

## L.1 Keyword Clusters

**Cluster 1: Statement & fees (top funnel, very high intent).**
- "how to read a credit card processing statement"
- "credit card processing fees explained"
- "effective rate credit card processing"
- "interchange plus vs flat rate"
- "merchant statement fees Canada"
- "tiered pricing processor"
- "switch credit card processor without penalty"

**Cluster 2: Clover (mid funnel, very high intent).**
- "Clover Flex vs Mini"
- "Clover Station Duo review"
- "Clover Kiosk Canada"
- "Clover for restaurants Canada"
- "Clover Integrated with [POS]"
- "Clover POS bilingue"

**Cluster 3: Switching (decision stage).**
- "switching from Square in Canada"
- "switching from Moneris"
- "best Clover dealer Canada"
- "credit card processor Quebec"
- "fournisseur de paiement bilingue"

**Cluster 4: Industry-specific.**
- "POS system for [industry] in [Quebec | Ontario | Canada]"
- "integrated payments for [restaurant / retail / healthcare]"
- "pay at pump fleet Canada"
- "unattended payment kiosk Canada"

**Cluster 5: Integration-specific (long tail, high intent).**
- "Shopify Canadian payment processor"
- "WooCommerce credit card processor Canada"
- "Lightspeed payment integration"
- "Toast payment integration Canada"

**Cluster 6: French-language (very low competition opportunity).**
- "passerelle de paiement bilingue"
- "fournisseur Clover Québec"
- "frais de traitement carte de crédit Québec"
- "intégration de paiement [PDV]"

## L.2 Page-Level Intent Map (priority pages)

| Page | Primary intent | Primary cluster | Secondary cluster |
|---|---|---|---|
| / | Brand + statement upload | C3 | C1 |
| /pricing | Education + intent capture | C1 | C3 |
| /pricing/statement-101 | Information | C1 | — |
| /pricing/effective-rate | Information + tool | C1 | — |
| /pricing/switching | Decision | C3 | C1 |
| /clover | Education + selection | C2 | C4 |
| /clover/compare | Selection | C2 | — |
| /clover/recommender | Decision tool | C2 | C4 |
| /clover/clover-vs-other-pos | Conquest | C2 | C3 |
| /industries/[vertical] | Vertical intent | C4 | C2 |
| /integrations/pos/[vendor] | Compatibility intent | C5 | C3 |
| /resources/guides/* | Information | various | C1 |

## L.3 Metadata Framework

For each page, structured templated metadata:
- `<title>`: `[Page Topic] — [Subhead, optional] | CleverPays` (≤60 char)
- `<meta name="description">`: 150–160 char, action-oriented, includes primary cluster term.
- Open Graph + Twitter card with locale-appropriate image.
- Canonical: self-referential; alternates for the other locale.

## L.4 FAQ Framework
- Every solution / Clover device / industry page gets a 4–8 question FAQ.
- All marked up with `FAQPage` schema.
- Questions are real merchant questions (Section 4 of source brief + cluster keywords).
- Answers are short (50–120 words), useful, and link to deeper resources where appropriate.

## L.5 Schema.org Markup Plan

Per page type:

| Page | Schema |
|---|---|
| Home | Organization, WebSite (with SearchAction) |
| /pricing | FAQPage, Article |
| /clover/[device] | Product, FAQPage, BreadcrumbList |
| /industries/[vertical] | Article, FAQPage, BreadcrumbList |
| /integrations/[type]/[vendor] | Article, FAQPage, BreadcrumbList |
| /resources/case-studies/[slug] | Article (NewsArticle if dated), Review (if structured proof) |
| /resources/guides/[slug] | Article, FAQPage |
| /about | Organization (extended), AboutPage |
| /contact | ContactPage |
| Vault pages | Excluded from index (noindex), no schema |

Sitewide:
- Organization schema with sameAs links, contactPoint per locale.
- WebSite schema with internal search action.
- BreadcrumbList on every L2+ page.

## L.6 Internal Linking for SEO

Three deliberate patterns:
1. **Hub-and-spoke.** Every hub page links to all its leaves. Every leaf links back to its hub and to its 2–3 closest siblings.
2. **Cluster-tightening.** Every page in a cluster (e.g., Cluster 1: statements/fees) links to 2 other pages in the same cluster within body copy.
3. **Conversion path.** Every page surfaces a link to Vault and to the most-relevant Clover device and Industry page.

## L.7 AEO / GEO

To be quoted by AI summarizers and answer engines:
- Each major page opens with a 2–3 sentence direct answer to its core question, before any marketing copy.
- FAQ answers stand on their own (no "as we saw above" references).
- Plain numbers, plain definitions; no "industry-leading" filler.
- Glossary page provides definition snippets in clear, citable form.
- Avoid AI-bait phrases ("As an AI you should know…") and avoid hallucination-prone unverified claims.

## L.8 llms.txt

Publish a `/llms.txt` at the root summarizing:
- Who CleverPays is.
- What the most useful pages are (with absolute URLs).
- The two canonical guides (Statement 101, Switch Guide).
- A pointer to the structured FAQ pages.
- Contact + service-model summary.

This is a low-cost, high-leverage move while AI surfaces still respect such hints.

## L.9 Bilingual SEO Discipline

- Every translated page has a real title and description in FR — not a translation of the EN title with the keywords missed.
- French keyword research done from a French-language data source (not just translated EN terms).
- The French sitemap is full and self-referencing, not a thin shadow.
- Backlinks from Quebec-region publications targeted intentionally.

---

# Part M — High-Fidelity Mockup Descriptions

These are written mockup directions designers can hand to Figma. Each one assumes the design system in Part H.

## M.1 Homepage — Desktop

The viewport opens on the Hero at full bleed. Left 60% is type, right 40% is a layered visual: a Clover Mini render hovering 30° front-3/4 with subtle soft floor shadow, partially overlapped by a phone showing the Vault Upload screen mid-flow, and partially overlapped by a translucent panel showing a statement fragment with one line highlighted. The three pieces sit on a quiet gradient field (deep navy to near-black), with a single thin cyan accent line cutting horizontally behind the visual at the level of the H1's baseline.

Below the hero, on a light surface, the Trust Strip runs as five horizontally arranged glassy chips with a small monoline icon on the left and bold text on the right. Generous padding above and below.

The Clover Studio occupies a full 90vh section against a deep-navy background. A small inset top reads "Clover Studio" in display weight; tabs sit just below: `Browse | Compare | Recommend`. The Browse tab is active, showing five device cards in a 2x3 grid (the last cell is "Accessories"). Cards are deep-navy on a slightly lighter deep-navy plate, with the device render on top three-quarters and the device name plus tagline below. Hovering raises the card 4px and increases the floor shadow's spread.

Pricing Trust Layer returns to a light surface. The "before/after" mini-visual in column 2 uses real anonymized statement crops (paper-toned, slightly desaturated) annotated with one tightly drawn callout line in green pointing to a fee, with a small chip near the callout saying *"This is the line we're talking about."*

The Vault CTA Band is full bleed, deep-navy with a subtle radial accent emanating from the top-left, three small icon-blocks in a row, a tall headline below them, and a single large green CTA button.

Integrations is tabbed: a light-surface card containing three tabs and underneath a logo grid laid out in 4 columns. Logos are evenly weighted monochrome with their color showing on hover.

Industries is a 3x3 grid on a light surface, with cards at 4:3 aspect ratio. Each tile has a quiet editorial photograph in the background, top-anchored, with a strong dark gradient bottom-half so the title and "Recommended Clover" line read crisply.

Manifesto block is a single column centered, max-width 720px, with the four pillars stacked. Type is large (h3-scale) and breathes generously.

Testimonials are a row of three cards with a small portrait avatar, a pull quote, an industry chip, and a "Read the story →" link.

Resources is asymmetric: one feature card (Statement 101) taking 8 columns and four standard cards taking 4 columns total, arranged in two stacked pairs.

Closing CTA band is deep-navy, three columns, each column with a small monoline icon at the top, a 2-line headline, a 2-line description, and a CTA.

Footer is the full Part G implementation, also deep-navy.

A subtle thin top edge of cyan glow marks the transition between the closing band and the footer.

## M.2 Homepage — Mobile

Hero collapses to a single column. The H1 is two lines, the subhead is three, and the visual stack now sits below the type as a single layered composition pinned at 320px tall. Both CTAs stack full-width, with `Upload Statement` on top.

The Trust Strip becomes 2 rows of 3 chips with reduced typography.

Clover Studio mobile: heading + tabs as a single sticky-within-section element. Browse shows one device card per screen with horizontal snap-scroll; dots indicate position. Each card is the same depth and pressed states as desktop, but with type sized for thumb reading. Recommend mode is full-screen single-question-per-step.

Pricing Trust Module becomes a vertical stack; the statement-crop callout is sized to thumb. Calculator (if surfaced here) is fully responsive.

Vault Band: stacks; CTA is full width.

Integrations becomes a single horizontal scrolling row of logo tiles per tab.

Industries: single column, full-width cards.

Manifesto, Testimonials, Resources, Closing — all stack and lean on whitespace.

Sticky bottom CTA appears at scroll 30%: a 2-button bar with `Upload` (filled green) and `Demo` (outlined). It hides on scroll-up to avoid covering footer.

## M.3 Merchant Vault — Upload Page (Mobile)

The screen is full-bleed deep-navy with a soft top-radial highlight.
At the very top: a logo, then a 4-step progress indicator (numbered, the second is active).
Below the progress, a tight headline: *"Add what you've got."*
Below that, a short reassurance line in muted secondary type.

The center is the UploadZone: a dashed border, rounded 12px, with two buttons stacked — `Take a Photo` (camera icon) and `Choose from device`. Above the zone, an instruction line in body type. Behind everything, a subtle cyan glow at the top corners.

Once a file is added, a FileChipList appears below the zone: a row per file with a 56x56 preview thumbnail, filename, type chip, and trash icon. The zone shrinks to a smaller "Add another" prompt.

A persistent footer bar contains `Back` (text link) and `Continue` (filled green CTA), separated.

A small "Why we ask" link sits above the footer bar; tapping it opens a bottom-sheet with the privacy + retention explainer.

## M.4 Clover Compare Page (Desktop)

The page opens with a compact hero: *"Compare Clover devices."* with a 2-line subhead and a small chip row of pre-selected devices.

Below the hero, a horizontal row of device thumbnails (5) with checkboxes; the user can select up to 4 to compare.

The compare table is the centerpiece: a sticky-header table with the dimension column pinned left and the device columns expanding right. Dimensions grouped: "At a glance," "Hardware," "Software," "Connectivity," "Best for," "Pricing tier," "Get it."

Cells are dense but readable. "Yes/No" values are rendered as quiet checkmarks and dashes; chips are used for industry fit; price tier is a 1–3 dot scale with hover tooltip.

Each device column has a CTA at the foot: `Book a Demo` (filled green) + `See full spec` (text link).

Below the table, a small module — *"Still not sure? Try the Recommender."* — links to the Recommender flow.

## M.5 Pricing Page (Desktop)

The hero is centered, with display-weight H1 *"We tell you the truth about your statement."* and a single-sentence subhead. Two CTAs: `Upload Statement` (filled green) and `Talk to a Specialist` (outlined).

Below, a four-column "Our philosophy" row, each column a paragraph headed by a monoline icon and a 3-word title.

The Effective Rate Calculator is the next section. Left half: three input rows (monthly volume slider + label, average ticket slider + label, channel segmented control). Right half: an output card showing the rate range in large display type, with a thin animated needle moving across a horizontal bar; below the range, the illustrative-only disclaimer in muted micro type.

The scenarios row is three editorial cards, each tagged with industry and region. Each card has a "before / after" pair shown as two small rate chips and three plain-English bullets describing what changed.

The fee glossary teaser is a tight grid of 8 cards, each a fee name in bold + a one-sentence definition.

The Vault Band (same as homepage) interrupts midway down the page.

The Switching teaser is a 3-step illustration row.

The FAQ section is a single column accordion list (8 items) marked up with FAQPage schema.

The Closing CTA band closes the page.

## M.6 Epic Footer (Desktop)

The footer begins with a full-width Top CTA Band on a deep-navy field with a subtle radial light at the top-center. A two-line headline reads:
*"Bring us your statement, your contract, or your questions."*
*"We'll show you what's actually happening."*
A short sub-line in muted type. Two CTAs side-by-side: `Upload Statement` (filled green) and `Book a Demo` (outlined cyan-on-dark).

A thin 1px line at very low opacity divides the band from the column section.

The column section presents 6 columns, evenly spaced, on a slightly cooler dark surface. Column headers are display weight at 1.125rem; links are body weight at 1rem. Hover on links draws a thin green underline left-to-right in 160ms.

Below the columns, the Trust Strip — 6 small items in a row, each a tiny monoline icon followed by 2–4 words. Dividers are 1px low-opacity vertical lines.

The Bottom Bar runs full width on near-black. Left: copyright, locations, locale. Center: legal links. Right: language toggle as a clean two-segment switch.

At the top edge of the footer, a 1px line of cyan glow at low intensity hints at a transition from page to footer — subtle, not loud.

The entire footer reads as composed, organized, and intentional — not a dumping ground.

---

# Part N — Final Implementation-Ready Build Brief

## N.1 What this section is

A condensed, role-by-role handoff that can be lifted directly into a Notion project doc or a kickoff deck. Every line here points back to an earlier part for detail.

## N.2 Roles & Their Marching Orders

### Product Designer
- Build Figma libraries against Part H tokens.
- Deliver: HeroSplit, Clover Studio (3 modes), Vault flow (4 steps + confirmation), Pricing Page, Closing Band, Footer Global — in EN and FR variants.
- Two responsive breakpoints minimum (320px, 1280px), with 768px tablet check.
- Component states: default, hover, pressed, focus, disabled, loading, error.
- Motion specs documented per component (duration + easing + reduced-motion fallback).
- Accessibility review embedded at component-spec stage (focus rings + contrast + alt + ARIA).

### Front-End Engineer
- Stack per Part K.1.
- Implement components per Part I, with Storybook stories per component, including all states.
- Performance budgets enforced via Lighthouse CI per Part K.3.
- Lock down third-party scripts: zero on Vault pages, deferred elsewhere.
- Build the Clover Studio with a strict perf budget; profile the flip animation on mid-tier Android.
- Build the Vault flow with progressive enhancement per Part K.5.

### CMS Engineer
- Implement content types per Part L (next section in this brief).
- Multilingual fields on every translatable property; locale fallback rules documented.
- Preview environment + role-based editorial workflow.
- Schema.org markup driven by content types where possible (e.g., Product fields on a Device document drive Product schema output).

### Copywriter
- Deliver EN + FR copy for: Home, Pricing (overview + 4 child pages), Clover (overview + 5 devices + compare + recommender result strings), 5 Industries (Retail, Restaurant, Grocery, Healthcare, Multi-Location), Vault (4 steps + confirmation + emails), About (4 child pages), 4 Resource guides (Statement 101, Switch Guide, Clover Buyer's Guide, Effective Rate Explained).
- Tone per Part 28 of source brief.
- Compliance review on every pricing-adjacent claim; every numeric claim must cite source or carry "illustrative" disclaimer.

### SEO Lead
- Keyword research per Part L.1 (and replicate in FR with FR-native data).
- Page-level metadata templates filled per Part L.3.
- Schema implementation per Part L.5.
- Internal linking audit pre-launch per Part L.6.
- llms.txt drafted per Part L.8.
- Quarterly content cadence proposed against Clusters 1, 3, 6 (highest leverage / lowest competition).

### Security Lead
- Implement Vault security architecture per Part J.
- Penetration test scope: Vault upload + signed URL flow + reviewer access path.
- Document retention policy + customer-facing summary; publish at /vault/security.
- Configure DMARC, DKIM, SPF; verify reviewer email path renders in major clients.
- Set up audit log monitoring + anomaly alerts.

### QA Lead
- Test matrix in Part N.4.
- Bilingual smoke per route on every PR preview.
- Accessibility checks (axe + manual keyboard) on critical flows.
- Vault flow tested with realistic file uploads (large PDFs, HEIC photos, multi-file submission).
- Performance regressions tracked in CI.
- Pre-launch full regression on Home, Pricing, Clover, Vault, Footer.

## N.3 Content Model Reference (per Part L)

| Type | Required fields | Multilingual fields |
|---|---|---|
| Device | name, slug, hero render, specs, best-for, industries, accessories, FAQ ref, price tier | name, tagline, body, best-for, FAQ Q&A |
| Industry | name, slug, hero image, value props, recommended devices, integrations, FAQ ref | name, hero, value props, body, FAQ Q&A |
| Solution | name, slug, icon, parent, value props, related, FAQ ref | name, value props, body, FAQ Q&A |
| Integration | name, slug, type (POS/eCom/Gateway/Hardware/Middleware), logo, vendor, status (live/coming), CTA path | name, body, FAQ Q&A |
| Testimonial | merchant, role, industry, region, quote, outcome, case study ref, photo | quote, outcome |
| Guide | title, slug, category, summary, body, related, FAQ ref | title, summary, body, FAQ Q&A |
| Pricing Scenario | profile name, channels, before range, after range, what changed | name, what changed |
| Partner Type | name, slug, value props, CTA | name, body |
| FAQ Item | question, answer, category | question, answer |
| Trust Proof | category, claim, source, expires | claim |
| CTA Block | label, target, style, eyebrow | label, eyebrow |

All types support: `seoTitle`, `seoDescription`, `ogImage`, `noindex` flag, `lastReviewed` date, `owner` (editor).

## N.4 QA / Pre-Launch Checklist

**Content**
- [ ] Every page has EN + FR.
- [ ] No "lorem ipsum" anywhere.
- [ ] All numeric claims sourced or marked illustrative.
- [ ] All testimonials approved by named merchants.
- [ ] Pricing disclaimers visible on every pricing-adjacent surface.
- [ ] Glossary covers every fee term used elsewhere on the site.

**Functional**
- [ ] Vault flow end-to-end submits in EN + FR on desktop + mobile.
- [ ] Calculator returns sane ranges across all input combinations.
- [ ] Clover Recommender returns a result for every combo (no dead branches).
- [ ] Compare table renders cleanly on 4 selected devices.
- [ ] Language toggle preserves deep equivalence on every page; falls back gracefully where translation is pending.
- [ ] All forms have proper validation, error recovery, and bilingual error messages.
- [ ] Email confirmations send within 30 seconds, render in Gmail/Outlook/Apple Mail.
- [ ] All CTAs route correctly; no dead links.

**Performance**
- [ ] Lighthouse score ≥ 90 (Performance) on Home, Pricing, Clover, Vault on mobile.
- [ ] LCP / INP / CLS within Part K.3 thresholds.
- [ ] Hero image weight verified on every hero page.
- [ ] Third-party scripts audited; Vault pages are clean.

**Accessibility**
- [ ] axe pass on every key page; manual keyboard sweep on Home, Vault, Clover Studio, Compare, Pricing.
- [ ] Skip-to-content link on every page.
- [ ] Focus visible everywhere.
- [ ] `prefers-reduced-motion` honored.
- [ ] All images have appropriate alt or `alt=""` if decorative.
- [ ] Color contrast verified across light and dark surfaces.

**SEO**
- [ ] Sitemap.xml generated and submitted.
- [ ] hreflang validated by external tool.
- [ ] Canonical correct on every page; no canonical loops.
- [ ] Schema validates in Rich Results Test on every templated page.
- [ ] Robots.txt allows everything except /vault/* (noindex) and /admin/* (disallow).
- [ ] llms.txt published.
- [ ] No-index correctly applied to thank-you, preview, and Vault pages.

**Security**
- [ ] Pen test passed.
- [ ] CSP enforced and tested.
- [ ] DMARC enforced.
- [ ] Audit log writing and queryable.
- [ ] Retention scheduler tested with mock data.
- [ ] Privacy page reflects actual data handling.

**Bilingual**
- [ ] Every locale toggle round-trips.
- [ ] FR layout tested at expansion-prone screens (Hero, Vault step 3, Pricing scenarios, Footer).
- [ ] FR forms accept accented input and validate accordingly.
- [ ] FR email templates render correctly.
- [ ] Date / number / currency formatting locale-correct.

## N.5 Risk Register & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| FR translation feels machine-translated | Medium | High | Pro FR copy editor reviews every key page; native QA review pre-launch |
| Vault adoption is lower than expected | Medium | High | A/B headline + CTA placement; surface Vault on every page; capture funnel events |
| Clover Studio degrades on low-end Android | Medium | Medium | Strict perf budget; CSS-only fallback for flip; reduced-motion path |
| Pricing claims invite legal exposure | Low | High | Every numeric and savings claim sourced or marked illustrative; legal review pre-launch |
| Security incident on Vault | Low | Critical | Pen test + audit log + tight RBAC + DMARC + bug bounty consideration |
| Footer becomes an afterthought | Medium | Medium | Budget design + dev hours for footer explicitly; treat as a section, not boilerplate |
| Content debt slows post-launch | High | Medium | Editorial cadence + owner + lastReviewed date on every page from day one |

## N.6 Phasing

**Phase 0 — Foundations (weeks 1–3)**
- Brand voice + token system locked.
- Component library v1 in Figma.
- CMS content modeling.
- IA + URL plan finalized.
- Performance and accessibility budgets agreed.

**Phase 1 — Core Experience (weeks 4–8)**
- Home, Pricing (overview + statement-101 + effective-rate + switching + upload), Clover (overview + 5 devices + compare + recommender), About (story + why + service + bilingual + security), Footer, Nav.
- Vault MVP (steps 1–4 + confirmation + reviewer email).

**Phase 2 — Industries, Integrations, Resources (weeks 9–12)**
- 5 Industry pages, Integrations hub + 8 vendor leaves, Resource hub + 4 flagship guides.
- Sitemap + schema implementation.
- Bilingual completion pass.

**Phase 3 — Polish & Launch (weeks 13–14)**
- Full QA pass per Part N.4.
- Pen test + retest.
- Soft launch with redirect map from old URLs.
- llms.txt + analytics + announcement.

**Phase 4 — Post-Launch (weeks 15+)**
- Merchant Vault portal (Phase 2: status tracking for merchants).
- Additional industries, integrations, guides on a quarterly cadence.
- Content debt reviews quarterly.

## N.7 Redirect Map (from current sitemap → new IA)

| Old path (representative) | New path | Status |
|---|---|---|
| /testimonials | /resources/case-studies | 301 |
| /clover-flex | /clover/flex | 301 |
| /clover-mini | /clover/mini | 301 |
| /clover-station | /clover/station-duo | 301 |
| /clover-kiosk | /clover/kiosk | 301 |
| /clover-integrated | /clover/integrated | 301 |
| /clover | /clover | 200 (rebuild in place) |
| /payment-processing | /solutions/in-person | 301 |
| /other-solutions | /solutions/in-person | 301 |
| /ingenico | /integrations/terminal-hardware/ingenico | 301 |
| /pax | /integrations/terminal-hardware/pax | 301 |
| /verifone | /integrations/terminal-hardware/verifone | 301 |
| /auth-net | /integrations/gateways/authorize-net | 301 |
| /bambora | /integrations/gateways/bambora | 301 |
| /nmi | /integrations/gateways/nmi | 301 |
| /ecommerce | /solutions/online | 301 |
| /virtual-terminals | /solutions/virtual-terminal | 301 |
| /virtual-terminal | /solutions/virtual-terminal | 200/canonical |
| /inventory-management | /solutions/inventory-management | 301 |
| /employee-management | /solutions/employee-management | 301 |
| /business-reporting | /solutions/business-reporting | 301 |
| /gift-cards | /solutions/gift-cards | 301 |
| /merchant-cash-advance | /solutions/merchant-cash-advance | 301 |
| /home | / | 301 |
| /business-solutions | /solutions | 301 |
| /pos-integrations | /integrations/pos | 301 |
| /unattended | /solutions/unattended | 301 |
| /pay-at-pump-fleet | /solutions/unattended/pay-at-pump-fleet | 301 |
| /website-services | /partners (deprecated as primary) | 301 |
| /franchise | /solutions/franchise | 301 |
| /integrated-pos | /solutions/integrated-payments | 301 |
| /customer-relationships | /solutions/customer-relationships | 301 |
| /fraud-protection | /solutions/fraud-protection | 301 |
| /retail | /industries/retail | 301 |
| /healthcare | /industries/healthcare | 301 |
| /industries | /industries | 200 (rebuild) |
| /restaurant-management | /industries/restaurant | 301 |
| /gas | /industries/gas-fleet | 301 |
| /grocery | /industries/grocery | 301 |
| /non-profits | /industries/non-profit | 301 |
| /pos-app-hardware | /clover/accessories (or /integrations/terminal-hardware) | 301 (review which target by URL traffic share) |
| /resources | /resources | 200 (rebuild) |
| /invoicing | /solutions/invoicing | 301 |
| /developers | /integrations/developers | 301 |
| /contact | /about/contact | 301 |
| /faq | /resources/faq | 301 |
| /privacy-policy-2 | /legal/privacy | 301 |

QA the redirect map for cycles and 3xx chains before launch.

## N.8 Definition of Done (DoD)

A page is done when it passes:
1. Content review (copy, claims, links, EN + FR).
2. Design QA (component fidelity, spacing, responsiveness).
3. Accessibility QA (keyboard + axe + reduced-motion).
4. Performance QA (within Part K.3 budgets for that route).
5. SEO QA (title, description, schema, internal links).
6. Bilingual QA (locale toggle, FR layout, hreflang).
7. Analytics QA (events firing correctly without capturing PII).
8. Stakeholder approval (product + brand).

## N.9 Discipline Reminders (apply continuously)

- If it's visually impressive but slows the site, reject it.
- If it's flashy but harms clarity, reject it.
- If it's secure in theory but confusing to merchants, redesign it.
- If it's elegant on desktop but weak on mobile, redesign it.
- If it's easy to build but feels cheap, redesign it.
- If it feels like a dealer brochure, rebuild it.

This is not "make a nicer homepage."
This is "build a category-leading merchant acquisition and trust platform for CleverPays."

When you think you're done, improve:
1. The organization.
2. The Merchant Vault.
3. The Clover Studio.
4. The Pricing Trust Layer.
5. The Footer.
6. The Mobile experience.
7. The security cues.
8. The EN/FR behavior.
9. The elegance of the interactions.

Then improve it again.

---

**End of Master Build Brief.**
