# CleverPays — Supplement 01
**Integrations as a Flagship Pillar · Site Search · Merchant Calculators**

This supplement amends Parts B, D, I, K, L, and N of the Master Build Brief. Where it conflicts with the original, this supplement wins.

---

# 1. Integrations: From Subsection to Flagship Pillar

## 1.1 What changes

In the original brief, Integrations was one mega-nav column among seven, with ~20 leaves. We are now treating it as a **first-class product category** with its own directory architecture, programmatic SEO model, and growth motion. Target: launch with **80–120 integrations** structured properly, with a content engine to add 5–10 per month.

This is a defensible moat. Most Canadian processors have a "logo wall" with a sentence underneath. We're going to have a real **integrations directory** that ranks, converts, and grows on its own.

## 1.2 New IA for Integrations

```
/integrations                                  hub (directory + featured + filters + search)
/integrations/compare                          compare any two integrations or processors
/integrations/[category]                       category page (directory + filters)
/integrations/[category]/[vendor]              vendor leaf (the meat)
/integrations/migrations/from-[competitor]    migration playbooks (Square, Stripe, etc.)
/integrations/developers                       portal
/integrations/developers/docs
/integrations/developers/sandbox
/integrations/developers/webhooks
/integrations/developers/partner-program
```

## 1.3 Category Map

Twenty categories. The right number, because each one is a real merchant question and a real SEO cluster.

| # | Category | Why it earns its keep | Initial vendors (sample) |
|---|---|---|---|
| 1 | **eCommerce Platforms** | Highest organic search value | Shopify, Shopify Plus, WooCommerce, Magento / Adobe Commerce, BigCommerce, Wix, Squarespace, Webflow, Ecwid, PrestaShop, OpenCart, Custom (API) |
| 2 | **Payment Gateways** | Where most "vs" searches happen | Authorize.Net, Paysafe, Bambora (Worldline), Windcave, NMI, Spreedly, Braintree, Stripe (migration), Cybersource, Adyen, Checkout.com, Helcim |
| 3 | **POS Systems** | Largest merchant install base to convert | Clover, Lightspeed Retail, Lightspeed Restaurant, Toast, TouchBistro, Square (migration), Aloha, Aldelo, NCR Aloha, Heartland, Talech, Revel, POSIM, IT Retail, AmberPOS, Maitre'D |
| 4 | **Terminal Hardware** | Stops the vendor pages from stranding | Clover lineup, Ingenico (Lane 3000/5000/7000/8000, Move 5000, Tetra), Pax (A920, A77, A60, A930, S300/S500, Q-series), Verifone (V400m, V400c, P400, M-series), Castles, Newland, BBPOS WisePOS E |
| 5 | **Accounting & ERP** | High-intent B2B SEO | QuickBooks Online, QuickBooks Desktop, Sage 50, Sage 100, Sage Intacct, Xero, FreshBooks, NetSuite, Microsoft Dynamics 365 Business Central, SAP Business One, Acomba, Acomba X |
| 6 | **Restaurant Operations** | Restaurants over-index in Quebec/Canada | 7shifts, Push Operations, MarketMan, Restaurant365, OpenTable, Resy, Tock, ChowNow, UberEats, DoorDash Drive, SkipTheDishes, Ritual |
| 7 | **Retail Operations & Inventory** | Multi-channel retailers | Stocky, Cin7, Shopify POS Inventory, eSync, Katana, Linnworks, Vend (Lightspeed X-Series), Erply |
| 8 | **Loyalty / CRM / Marketing** | Bridges payments to growth | Smile.io, Yotpo, Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Salesforce, Zoho, Constant Contact, Square Loyalty |
| 9 | **Booking & Scheduling** | Service businesses | Calendly, Acuity, Mindbody, Booker, Square Appointments, Setmore, Vagaro, GlossGenius |
| 10 | **Healthcare Practice** | Strong Quebec opportunity | Jane App, Clinicmaster, OSCAR EMR, Cliniko, Practice Better, NexJ, TELUS Health |
| 11 | **Hospitality & PMS** | Hotels, B&Bs, vacation rentals | Cloudbeds, Mews, RoomKeyPMS, Little Hotelier, RMS Cloud, WebRezPro, innRoad |
| 12 | **Shipping & Fulfillment** | eCommerce attach | ShipStation, Easyship, Sendle, Canada Post Snap Ship, Stallion Express, ShipBob, Shippo |
| 13 | **Fraud & Risk** | Higher-tier merchants | Kount, Signifyd, Riskified, Sift, Forter, Stripe Radar (migration angle) |
| 14 | **Tax Compliance** | Sales-tax-heavy verticals | TaxJar, Avalara, Vertex, Sovos |
| 15 | **Identity & Onboarding** | KYC / KYB workflows | Persona, Onfido, Trulioo, Equifax Canada, Plaid Identity |
| 16 | **Reporting & Analytics** | Multi-location operators | Looker Studio, Tableau, Power BI, Domo, Glew |
| 17 | **Subscriptions & Recurring** | SaaS, DTC subscription | Recurly, Maxio (Chargify), Recharge, Bold Subscriptions, Stripe Billing (migration) |
| 18 | **Middleware & iPaaS** | Custom integration paths | Zapier, Make, n8n, Workato, Tray.io, Boomi, MuleSoft |
| 19 | **Banking & Treasury** | Treasury / settlement | Plaid, MX, Interac, EFT Canada |
| 20 | **Industry-Specialized** | Vertical-specific glue | Wayne / Gilbarco (gas), Mitchell / Shop-Ware (auto), Vagaro / Booker (salons), Treez / Cova (cannabis), Mindbody (fitness), ServiceTitan (trades) |

This is the **launch** scope. You can add a 21st category (e.g., Government / B2B procurement) when a real customer asks for it — never before.

## 1.4 The Integrations Hub Page (/integrations)

A real directory, not a logo wall.

**Layout:**

1. **Hero** — *"300+ ways to connect CleverPays."* Sub: *"Bring your current systems. Bring your future plans. We'll meet you where you are."* Single CTA: `Talk to a specialist`. No demo button — this page exists to drive directory exploration.
2. **Search bar (prominent).** Auto-suggest as you type. See Section 2.
3. **Filter rail (left, desktop) / Filter drawer (mobile):**
   - Category (multi-select)
   - Industry fit (multi-select)
   - Integration type: Direct / API / Middleware / Migration
   - Setup complexity: 1–5 dots
   - Status: Live / Coming soon / On request
4. **Featured row** — 6 hand-curated tiles (e.g., Shopify, WooCommerce, Authorize.Net, Lightspeed, QuickBooks, Jane App). Editorial control via CMS.
5. **All integrations grid** — paginated, 24 per page. Each tile shows logo, name, category chip, 1-line value, status chip.
6. **Migration spotlight** — *"Switching from Stripe? Square? Moneris? We have a playbook."* Links to /integrations/migrations/* pages.
7. **Developer entry point** — *"Building something? Talk to our developer team."* Links to /integrations/developers.
8. **Closing CTA band** — same as homepage.

## 1.5 The Vendor Leaf Template (/integrations/[category]/[vendor])

Every vendor page is a **real, ranked page** — not a stub. 800–1,500 words, structured, useful.

**Required sections in this order:**

1. **Hero** — Vendor logo + name + integration type chip + status chip. H1: *"[Vendor] + CleverPays."* Sub: 2-line value prop tailored to this combination. Two CTAs: `Get a quote for this setup` (primary) + `Talk to a specialist` (secondary).
2. **What this integration does** — 3 short paragraphs in plain English. What flows where. What the merchant sees.
3. **Setup at a glance** — small grid: time to set up, complexity dots, prerequisites, ongoing maintenance burden.
4. **How merchants actually use it** — 2–3 short scenarios. Real-feeling. (e.g., for Shopify: "A Quebec retailer with one storefront and a Shopify site uses CleverPays in-person and Authorize.Net online, with one consolidated batch.")
5. **What's included / what's not** — explicit list. Avoid surprises post-sale.
6. **Costs & prerequisites** — what the merchant needs to have, what it costs to set up (or "no setup fee"), monthly costs if any. **Truthful.**
7. **Industries that use this combo most** — links to relevant industry pages.
8. **Related integrations** — *"Pairs well with"* tiles. Tight cluster signal for SEO.
9. **Migration angle** (only on vendor pages where applicable, e.g., for competing processors' gateways) — *"Coming from [competitor]? Here's the playbook."*
10. **FAQ** — 5–8 questions, FAQPage schema.
11. **Closing CTA** — `Get a quote for [Vendor] + CleverPays` + `Talk to a specialist`.

## 1.6 The Category Page Template (/integrations/[category])

Halfway between hub and leaf.

1. **Hero** — category name + one-line value prop. Two CTAs: `Talk to a specialist` + `See all categories`.
2. **What this category means for merchants** — 2 paragraphs. Educational.
3. **Choosing the right [category]** — short decision aid (e.g., "If you sell online and in-person, you want eCommerce platforms with deep POS sync — see Shopify, Lightspeed").
4. **Filter + search within this category** — narrow controls.
5. **Vendor grid** — all live vendors in the category.
6. **Coming soon** — vendors on the roadmap.
7. **Don't see what you use?** — `Tell us what you need` link to a short form. This is product-discovery gold.
8. **FAQ + closing CTA.**

## 1.7 Migration Playbooks (/integrations/migrations/from-[competitor])

High-value SEO + sales asset. Pages to launch with:

- `/integrations/migrations/from-square`
- `/integrations/migrations/from-stripe`
- `/integrations/migrations/from-moneris`
- `/integrations/migrations/from-helcim`
- `/integrations/migrations/from-chase-paymentech`
- `/integrations/migrations/from-global-payments`
- `/integrations/migrations/from-tdmerchant`
- `/integrations/migrations/from-elavon`

Each is a real playbook: what stays, what changes, what your contract probably says, timeline, data portability, hardware swap-out, what to expect on month 1 vs month 3, a checklist, and a `Start your switch` CTA tied to the Merchant Vault.

## 1.8 Surfacing Integrations Across the Site

Integrations should appear everywhere it's relevant — not buried in one tab.

- **Homepage** — dedicated tabbed module (already specced).
- **Every solution page** — *"Works with"* logo row tailored to the solution.
- **Every industry page** — *"Most common integrations for [industry]"* row.
- **Every Clover device page** — *"Connects to"* row (POS, eCommerce, ERP).
- **Pricing pages** — *"Pricing depends on your integration footprint — tell us what you run."*
- **Resources** — top-level guide: *"How CleverPays connects to your existing stack."*
- **Footer** — full Integrations column.
- **Mega nav** — promoted from one column to three columns within the Integrations panel.

## 1.9 Content Engine: Adding 5–10 Integrations / Month

To scale this honestly, the build needs:

- **CMS content type `Integration`** with all fields above (Part L of master brief).
- **Programmatic page template** — one template renders every vendor leaf from CMS data; no engineering touch needed to ship a new one.
- **Editorial checklist** — every new integration must include: logo (vector), real description (no marketing copy from the vendor's site verbatim), setup-complexity rating, accurate prerequisites, 2 scenarios, 5+ FAQ items.
- **Quarterly audit** — refresh top 20 by traffic; mark stale ones.
- **Status flags** — Live / Beta / Coming soon / On request. Status is visible everywhere; no "fake live" pages.

## 1.10 Compare Two Integrations (/integrations/compare)

A small but high-converting tool. Pick any two — same category or cross-category — and see a side-by-side: setup, cost, complexity, industries, what's included, what's not. Generates a shareable URL (`/integrations/compare/shopify-vs-woocommerce`). SEO-friendly.

Pre-build the top 30 comparisons (CMS-driven, indexed):

- shopify-vs-woocommerce
- authorize-net-vs-stripe
- paysafe-vs-bambora
- windcave-vs-authorize-net
- bambora-vs-nmi
- clover-vs-lightspeed
- toast-vs-touchbistro
- quickbooks-vs-xero
- jane-app-vs-clinicmaster
- shipstation-vs-easyship
- (...)

These are programmatic SEO pages with **honest** comparisons. Don't fabricate; the bar is "I'd want this read about my product if it were ours."

## 1.11 Integrations Updates to Master Brief Parts

| Part | Change |
|---|---|
| B (IA) | Integrations gets its own three-column mega panel + Migrations sub-tree + Compare entry + Developers sub-tree. |
| C (Homepage) | Integrations tabbed module gets a 4th tab: "Migrations" — surface playbooks. |
| I (Components) | Add: `IntegrationDirectoryGrid`, `IntegrationFilterRail`, `IntegrationLeafTemplate`, `IntegrationCompareCard`, `MigrationPlaybookHero`, `WorksWithLogoRow`. |
| L (SEO) | Add Cluster 7: integrations long-tail (vendor + "Canada"); Cluster 8: migration long-tail ("switch from X"). Both are huge. |
| N (Phasing) | Phase 1 ships hub + 30 vendor leaves + 5 migration playbooks. Phase 2 expands to 80+. Phase 4 is the steady cadence. |

---

# 2. Site Search

## 2.1 Why a real search matters now

With 300+ integration pages, dozens of resources, and a bilingual surface, browse-only nav fails. Search becomes the second-most-used navigation tool after the top bar. Get this wrong and the integrations directory is dead weight.

## 2.2 Recommended Architecture

**Two layers:**

1. **Index search** — keyword + filter, returns ranked results across the entire content corpus.
2. **AI assistant** — RAG-based "Ask CleverPays" that answers in plain English, citing source pages. Optional Phase 2.

## 2.3 Index Search: Tool Choice

| Option | Pros | Cons | Recommendation |
|---|---|---|---|
| **Pagefind** | Static, free, no infra, runs at build time | Limited faceting, smaller corpus scaling | Good for resources-only search |
| **Typesense (self-hosted)** | Fast, faceted, multilingual, open source, ~$30/mo infra | Self-managed | **Recommended primary** |
| **Meilisearch** | Similar to Typesense, great DX | Smaller ecosystem | Strong alternative |
| **Algolia** | Best relevance, best DX, no infra | Expensive at scale ($500+/mo as corpus grows) | Defensible if budget allows |

**Recommendation:** Typesense self-hosted, with the same index powering both the integrations directory filter and the global search.

## 2.4 Search UX

### Entry points
- **Top nav icon** — magnifier in the top-right, always visible.
- **Cmd/Ctrl+K** — opens a command-palette overlay (power-user move).
- **Inline within the integrations directory** — scoped to integrations.
- **Inline within /resources** — scoped to resources.

### The overlay
- Full-width on mobile, ~640px centered on desktop.
- Search input on top with locale-aware placeholder: *"Search integrations, Clover devices, guides…"* / *« Rechercher des intégrations, des appareils Clover, des guides… »*
- Scope tabs below input: `All · Integrations · Solutions · Clover · Industries · Resources`.
- Live results as the user types (debounced 120ms).
- Result types visually differentiated:
  - **Integration** result: vendor logo + name + category chip.
  - **Solution / Industry** result: icon + name + 1-line value.
  - **Clover device** result: tiny device thumbnail + name + price tier.
  - **Resource** result: article icon + title + read-time.
- Keyboard navigation: arrow keys move, Enter opens, Esc closes, Cmd+Enter opens in new tab.
- Empty state: "Popular searches" + "Recent guides."
- No-results state: *"We don't have a page for that yet. Tell us what you're looking for →"* — captures product feedback.

### Suggestions to include in empty state (rotating by locale)
- *"shopify integration"*
- *"clover flex vs mini"*
- *"switch from square"*
- *"effective rate calculator"*
- *"authorize.net setup"*
- *"healthcare POS Quebec"*

## 2.5 Indexing rules

- Every CMS document of types Page / Solution / Industry / Device / Integration / Guide / FAQItem is indexed.
- French and English are separate indexes; locale toggle filters to the active locale.
- Field weights: title (highest), category, body, tags, FAQ Q&A (lower).
- Synonyms file:
  - "shopify" ↔ "ecommerce", "online store"
  - "clover" ↔ "POS", "terminal"
  - "frais" ↔ "fees", "taux"
  - "passerelle" ↔ "gateway"
- Stop words handled per locale; French stopword list explicitly tested.
- Re-index on every CMS publish; full reindex nightly.

## 2.6 AI Assistant (Phase 2, "Ask CleverPays")

A small, scoped answer box that:
- Lives at `/ask` and as an optional toggle inside the search overlay.
- Answers only from indexed content (RAG over the Typesense / vector store).
- Always cites the 2–3 source pages.
- Refuses to answer outside-scope questions (politics, legal advice, pricing it can't verify).
- Bilingual.
- Logs queries (anonymized) for content-gap analysis. **Do not** index PII.
- Disclaimer always visible: *"AI-generated. Verify any specific numbers with a CleverPays specialist."*

### Why this matters
Merchants ask AI assistants questions like "what's the difference between Pax A920 and Verifone V400m for a Quebec restaurant?" — if CleverPays answers that well on its own site with citations, it captures both the SEO and the AEO surface.

## 2.7 Analytics on Search

Track (without capturing PII):
- Top queries weekly.
- No-result queries → directly feed the content backlog.
- Click-through-rate per result position.
- Query → conversion (search → Vault submission, search → demo).

## 2.8 Search Components (added to Inventory)

- `SearchTriggerNav` — magnifier icon + Cmd+K hint.
- `SearchOverlay` — the full overlay.
- `SearchInput` — input with locale-aware placeholder + debounce + clear.
- `SearchScopeTabs` — scope filter row.
- `SearchResultItem` — variant per type.
- `SearchEmptyState` — popular + recent.
- `SearchNoResults` — content-gap CTA.
- `AskCleverPays` — Phase 2 RAG component.

---

# 3. Merchant Calculators

## 3.1 Why a Family of Calculators

The original brief specced one: Effective Rate. We're going to launch with **five flagship calculators**, with a backlog of 8 more to add over time. Together they form a "Tools" hub at `/resources/tools` — a calculator library that ranks on its own and feeds the Merchant Vault.

**Design rules that apply to every calculator:**
- Range outputs, not single numbers. (Builds trust; reflects reality.)
- Mandatory disclaimer band: *"Illustrative only. We'll give you a real number when we read your statement."*
- Save / share / email-me-the-results option on every calculator.
- Tied to the Merchant Vault: every result page has *"Want a precise read? Upload your statement →"*.
- Inputs are sliders + steppers + segmented controls — never naked number fields where avoidable.
- Bilingual. FR labels rendered correctly with French number formatting (`1 234,56`).
- Accessible: every input labelled, keyboard navigable, screen-reader announces output changes via `aria-live`.
- Mobile thumb-first.

## 3.2 The Tool Hub: /resources/tools

A simple grid of calculator cards with: icon, name, 1-line value, "Used by [retail / restaurant / multi-location / online]" chips, and `Open →`. Search within tools. Filter by industry.

## 3.3 Flagship Calculators (Launch)

### Calc 1 · Effective Rate Calculator
**What it does:** estimates the effective rate (everything-in-cost-per-dollar) range a merchant is likely paying or could pay.

**Inputs:**
- Monthly card volume — slider, $5K to $5M.
- Average ticket — slider, $5 to $500.
- Channel mix — segmented control: In-person / Online / Both (with split slider).
- Integration footprint — checkbox: "I run an integrated POS or eCommerce stack."
- Card mix profile — 3-option chooser: "Mostly debit" / "Mixed" / "Mostly premium credit."

**Output:**
- Big rate range, e.g., **2.45% – 2.85%** (illustrative).
- One sentence interpretation: *"For a profile like yours, processors typically land in this band. Most of the variation comes from card mix and channel split."*
- Sparkline showing how the range moves if you shift one input.
- CTA: `Get a precise read — upload your statement`.

**Page slug:** `/resources/tools/effective-rate-calculator`

---

### Calc 2 · Hardware ROI & TCO
**What it does:** compares lease vs buy on Clover hardware (or any terminal) and shows 3-year total cost of ownership.

**Inputs:**
- Number of devices — stepper, 1 to 50.
- Device type — chooser: Mini / Flex / Station Duo / Kiosk / Other.
- Current monthly lease cost (if any) — stepper.
- Financing option — segmented: Pay outright / 12-month / 24-month / 36-month.

**Output:**
- 3-year total cost: Lease scenario vs Buy scenario.
- Monthly cost line chart.
- Crossover month (when buy becomes cheaper than lease).
- CTA: `Talk to a Clover specialist about your fleet`.

**Page slug:** `/resources/tools/hardware-roi-calculator`

---

### Calc 3 · Cash Discount / Surcharge Estimator
**What it does:** shows the savings a merchant could see by implementing a compliant cash discount or surcharge program.

**Inputs:**
- Monthly card volume — slider.
- Current effective rate — slider, 1.50% to 4.00%, default 2.50%.
- Province / state — dropdown (rules differ by jurisdiction; result references applicable rules).
- Program type — segmented: Cash discount / Surcharge.

**Output:**
- Estimated monthly fee reduction in $ range.
- Estimated annualized.
- **Compliance callout box** — explicit, prominent: *"Surcharge rules differ by province and card network. We help you set this up compliantly. This is an estimate, not legal advice."*
- CTA: `Talk to us about implementing this`.

**Page slug:** `/resources/tools/cash-discount-calculator`

---

### Calc 4 · Multi-Location Consolidation Calculator
**What it does:** shows the operational and financial value of consolidating payments across locations.

**Inputs:**
- Number of locations — stepper, 2 to 100.
- Average monthly volume per location — slider.
- Currently consolidated? — Yes / No / Partially.
- Reporting needs — checkboxes: real-time dashboard / accounting export / per-manager access / chargeback ops.

**Output:**
- Estimated time savings (hours/month, range).
- Estimated reduction in negotiated rate (range, illustrative, with disclaimer).
- A small "Capabilities you unlock" list driven by which reporting needs are checked.
- CTA: `Talk to us about your multi-location setup`.

**Page slug:** `/resources/tools/multi-location-calculator`

---

### Calc 5 · Total Cost of Acceptance (Blended)
**What it does:** breaks down the merchant's true cost of accepting payments — interchange, assessments, processor markup, monthly fees, hardware, software, PCI — into a single blended rate per dollar processed.

**Inputs:**
- Monthly volume.
- Card mix (debit / credit / premium credit / international) — four sliders that sum to 100%.
- Channel mix.
- Monthly software fees.
- Monthly hardware lease / financing.
- Annual PCI fees.
- Any other recurring processor fees.

**Output:**
- Blended cost as a single rate, e.g., **2.78%**.
- Pie chart breaking that rate into its sources.
- *"What this tells you"* — 3 sentences in plain English.
- *"What we'd typically change"* — 3 bullets (qualitative, illustrative).
- CTA: `Upload your statement for a precise breakdown`.

**Page slug:** `/resources/tools/total-cost-of-acceptance`

---

## 3.4 Backlog Calculators (Phase 2+)

In rough priority order. Each is a real merchant-intent page that ranks.

### Calc 6 · Interchange-Plus vs Flat-Rate Decider
Tells the merchant which model is likely to favor them given their card mix and volume.

### Calc 7 · Online vs In-Person Blended Estimator
For multi-channel merchants. Inputs: % online, % in-person, integrated y/n, average ticket per channel. Output: blended rate range.

### Calc 8 · Restaurant Tip Pool / Tip-Out Calculator
Daily / shift tool, soft conversion play. Inputs: total tips, role mix (server, bar, kitchen, host), allocation rules. Output: per-person breakdown. Saves staff a real headache and earns trust.

### Calc 9 · Subscription / Recurring Billing Margin Calculator
For SaaS / DTC subscription merchants. Inputs: MRR, churn, average ticket, card mix. Output: payment cost as % of MRR + impact on contribution margin.

### Calc 10 · Cross-Border & FX Cost Calculator
For merchants taking USD or international cards. Inputs: volume by currency, settlement currency. Output: estimated cross-border + conversion cost + suggested mitigations.

### Calc 11 · MCA / Clover Capital Repayment Estimator
Inputs: requested amount, daily card volume, repayment % (default 10%). Output: estimated daily holdback + estimated payoff time. Standard MCA disclosures pinned.

### Calc 12 · PCI Compliance Cost Avoidance
Inputs: monthly PCI non-compliance fee on current statement. Output: annualized cost. CTA: *"We help you get compliant — and that fee goes away."*

### Calc 13 · Chargeback Cost Calculator
Inputs: volume, average ticket, current chargeback rate. Output: estimated annual cost of chargebacks (fees + lost goods + admin). CTA: connects to Fraud Protection page.

## 3.5 Calculator Components (added to Inventory)

- `CalcShell` — common wrapper with title, intro, disclaimer band, save/share.
- `CalcInputSlider` — labelled slider with min/max, current-value bubble, locale-aware formatting.
- `CalcInputStepper` — number stepper with +/-.
- `CalcInputSegmented` — segmented control for channel mix, payment type, etc.
- `CalcInputDistributionSlider` — 3- or 4-segment slider summing to 100% (for card mix, channel mix).
- `CalcOutputRange` — large range display with hover for "what affects this."
- `CalcOutputBreakdown` — pie or stacked bar.
- `CalcSparkline` — small inline chart for "if you shift this input."
- `CalcDisclaimerBand` — mandatory.
- `CalcCTAFooter` — Vault CTA + alternative.
- `CalcSaveShare` — email me / share link / copy URL.
- `CalcComplianceCallout` — used by jurisdiction-sensitive calcs (Cash Discount / Surcharge).

## 3.6 SEO & Schema for Calculators

- Each calculator page is indexed, with proper title + description per Part L.
- Schema: `WebApplication` + `HowTo` markup describing what the calculator does and what inputs it accepts.
- Internal links from every page in the relevant cluster.
- Each calculator gets a 300–500 word explainer above the fold for SEO + AEO (don't make the page all-tool, all-input).

## 3.7 Privacy & Trust on Calculators

- No login required to use any calculator.
- Inputs not stored unless the user opts into "email me the results."
- If results are emailed, store only the inputs + outputs + email — never tied to PII beyond email.
- Calculator state persisted in `localStorage` only, never sent to server until the user explicitly hits save/share.
- Bilingual privacy microcopy beneath the disclaimer band.

---

# 4. Updates to the Phasing

The original phasing in Part N.6 still holds at the top level. Inside each phase, integrations + search + calculators slot in like this:

**Phase 1 (weeks 4–8) — adds:**
- Integrations hub + 30 vendor leaves + 5 migration playbooks.
- Site search (index layer only, Typesense).
- Effective Rate Calculator + Total Cost of Acceptance Calculator (the two highest-value).

**Phase 2 (weeks 9–12) — adds:**
- Expand to 80+ integration vendor leaves.
- Compare tool (`/integrations/compare`) with first 15 pre-built comparisons.
- Hardware ROI + Cash Discount + Multi-Location calculators.
- Tools hub.

**Phase 3 (weeks 13–14) — adds:**
- Search overlay polish + Cmd+K + analytics on search queries.
- Calculator email-me-results delivery.

**Phase 4 (post-launch quarterly) — adds:**
- 5–10 new integration leaves / month (CMS-driven, no engineering).
- 2 new calculators / quarter.
- AI assistant ("Ask CleverPays") in Phase 4 once content corpus is rich enough to RAG against.

---

**End of Supplement 01.**
