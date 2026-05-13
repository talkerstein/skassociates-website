# CleverPays — Migration Playbooks
**High-intent conquest pages. Written to rank, convert, and tell the truth.**

Two playbooks below: **Switching from Square** and **Switching from Stripe**. Both follow the same canonical structure so the page template is reusable for the other six migration pages (Moneris, Helcim, Chase, Global Payments, TD Merchant, Elavon).

Each playbook is sized to ~1,400 words of actual page copy — enough to rank, useful enough to read.

Every `## H2` is an anchor for the InnerPageNav component (spec'd in the companion document).

---

# Playbook 1 — Switching from Square

**URL:** `/integrations/migrations/from-square`
**Locale:** publish in EN + FR (full translation, not machine-translated).
**Schema:** Article + FAQPage + BreadcrumbList.
**Target queries (cluster 3):** "switching from Square Canada", "Square alternative Canada", "Square processing fees too high", "leave Square processor", "Square vs Clover", "fournisseur alternatif à Square".

---

## Hero

**Eyebrow:** Migration Playbook · Square → CleverPays

**H1 (EN):** *"Switching from Square. Honestly."*
**H1 (FR):** *« Quitter Square. Honnêtement. »*

**Sub (EN):** *Square is a fine starting point. It's not always the right finishing point. Here's exactly what changes — and what stays — when you move your payments to CleverPays.*

**Sub (FR):** *Square est un bon point de départ. Ce n'est pas toujours le bon point d'arrivée. Voici ce qui change — et ce qui reste — quand vous déplacez vos paiements vers CleverPays.*

**Primary CTA:** `Start your switch` → opens Merchant Vault with `?from=square` prefill.
**Secondary CTA:** `Talk to a specialist`.

---

## Why merchants leave Square

Most merchants don't leave Square because Square is broken. They leave because they outgrew it.

The patterns we see most often:

- **Effective rates above 2.6%** as volume crosses ~$25K/month, with no negotiation path.
- **Fund holds** that interrupt cash flow, particularly during sales spikes or chargeback events.
- **Hardware lock-in** — Square Stand, Square Terminal, and Square Register only run Square. There's no path to take that hardware to another processor.
- **No interchange visibility** — Square publishes a single rate. You can't see what's actually flowing to Visa/Mastercard vs Square's markup.
- **Reporting limits** at multi-location scale — Square's dashboard hits walls when you have 5+ locations and consolidated GL needs.
- **Premium card surcharges** — Square's flat rate quietly subsidizes you on premium cards, but you're also overpaying on debit and standard credit.

None of those are "Square is bad." They're "Square is built for a stage you've moved past."

## What stays when you switch

You keep:

- **Your customers.** Card-on-file data can be exported from Square in PCI-compliant form via Square's data export tools. CleverPays imports tokenized card data into the new gateway with vault-to-vault migration where both gateways support it.
- **Your transaction history.** Square exports CSV + PDF of all transactions, refunds, disputes, and deposits. We help you archive and reconcile to your accounting system before cutover.
- **Your menu, catalog, and inventory data.** Square exports product data; depending on which POS you move to (Clover, Lightspeed, Toast, custom), we map fields and import.
- **Your eCommerce site.** Square Online (Weebly) merchants who keep their site can stay there — we move only the gateway. Merchants ready to leave Square Online migrate to Shopify, WooCommerce, or BigCommerce as a separate workstream (we help).
- **Your appointments and bookings.** Square Appointments data exports; we connect a comparable scheduling tool (Acuity, Booker, Mindbody) to the new processor.
- **Your loyalty list.** Square Loyalty exports member lists. We connect Smile.io, Square Loyalty's data into a new program, or build a custom one through partners.

## What changes

- **Hardware.** Square hardware only runs Square. You'll move to Clover (Mini, Flex, Station Duo, Kiosk) or another supported terminal. We help you choose, source, and provision.
- **Processor + pricing model.** Flat-rate becomes interchange-plus (or stays flat-rate if it fits better — CleverPays runs both). You see the actual interchange line + assessments + processor markup on every statement.
- **Cash flow timing.** Square's standard is next-business-day. CleverPays settles same-day or next-business-day depending on bank and time of cutoff — generally faster than Square's instant-deposit-with-fee.
- **Funds holds policy.** You'll get a real underwriting profile rather than algorithmic holds. Holds become rare and predictable.
- **Support model.** Phone + email + chat with named team members, EN/FR. Not a ticket queue.

## What Square charges you that CleverPays doesn't

- **Premium card surcharge** baked into flat rate — you're paying ~2.6% even on debit, where interchange is well under 1%.
- **Instant-deposit fee** (~1.5%) if you want your money faster than next business day.
- **Online-payment surcharge** (~2.9% + $0.30) — flat across all cards, with no interchange visibility.
- **Chargeback fees** — Square charges $0 to file but absorbs the dispute fee into its margin.

We don't claim a specific saving. We tell you what it actually looks like once we read your statement.

## Contract considerations

This is the easy part: **Square doesn't lock you into a multi-year processing contract.** You can leave any time.

What to check:

1. **Hardware financing.** If you financed a Square Register or Terminal through Square Capital, your equipment debt remains until paid. (Often payable off; we help model the math.)
2. **Square Capital loans.** If you have an active merchant cash advance from Square Capital, leaving Square does not cancel the loan but does affect Square's daily repayment mechanism. Square will reach out to settle terms. We help you understand the impact before you decide.
3. **Square Online subscription.** If you're on Square Online plus tiers (Plus, Premium), your site stays until you cancel the subscription. Site stays live; only the payment processor changes.
4. **Auto-renewing software adds-ons.** Square Loyalty, Square Marketing, Square Payroll — cancel each separately if you're moving away.

## The timeline

A typical 1–3 location merchant moves in **2 weeks**. Multi-location (5–25 locations) is **4–6 weeks**. Enterprise (25+) is project-managed.

**Week 1 — Discovery & Decision**
- Upload your latest Square statement + setup photos to the Merchant Vault.
- We review and return a written quote in 24 hours.
- Pick your hardware lineup. Confirm POS direction (Clover, Lightspeed, integrated).

**Week 2 — Provision & Ship**
- Hardware is ordered, programmed, and shipped (or picked up locally in Quebec/Ontario).
- Your CleverPays processing account is underwritten + activated.
- Catalog + inventory + customer data is exported from Square and imported to the new POS.
- We schedule cutover.

**Week 2/3 — Cutover**
- Hardware arrives. Quick install (most retail counters: under 30 minutes per device).
- You run a few test transactions; we monitor the first 24 hours.
- Square hardware is decommissioned (and can be returned via Square's policy or repurposed; varies by device).

**Week 3+ — Reconcile**
- First Square statement and first CleverPays statement compared.
- We send you a side-by-side: what changed, what saved, what didn't.

## What to expect month 1 vs month 3

**Month 1:**
- New hardware, new login, new statement format.
- A learning bump for staff (training docs provided EN/FR).
- One settlement cycle to confirm timing.

**Month 3:**
- Pricing model is normalized.
- Your real effective rate is on the statement, line by line.
- You're in our reporting dashboards.
- If you operate multiple locations, your consolidated view is live.

## Pre-switch checklist

- [ ] Pull last 3 months of Square statements.
- [ ] Export Square transaction history (CSV + PDF).
- [ ] Export Square customer list and tokenized card data (where applicable).
- [ ] Export Square catalog / menu / inventory.
- [ ] Document Square hardware in use and decide what to replace.
- [ ] Confirm Square Capital balance (if any) and plan for repayment.
- [ ] List integrations Square is wired into (accounting, ecommerce, loyalty, scheduling).
- [ ] Choose your CleverPays specialist (one named human, EN or FR).
- [ ] Confirm bank account for settlements.
- [ ] Confirm rollout plan (single-day or staged for multi-location).

## FAQ

**Will my customers notice?**
Only that the receipt looks different and tap/insert speed may improve. Card-on-file customers continue to work without re-authentication if we vault-to-vault migrate.

**Can I keep my Square Online site?**
Yes. We replace only the payment processor. Your site stays live during the entire migration. (If you also want to migrate off Square Online, we help — separately.)

**What about Square Loyalty?**
Member data exports. You can re-launch loyalty on Smile.io, Yotpo, or a comparable platform that connects to the new POS.

**Does CleverPays cover hardware financing?**
We offer purchase outright, 12/24/36-month financing, and lease-to-own depending on volume and credit profile. We don't push lease-only; we model the math for you with our Hardware ROI Calculator.

**Will my deposits speed up?**
Usually yes. Square's free tier is next-business-day. CleverPays standard settles same-day or next-business-day at no extra charge.

**What's the realistic savings?**
We won't quote a number until we read your statement. Square merchants in our experience commonly see effective-rate reductions; specifics depend on card mix, ticket size, and current volume. Upload your statement for a precise read.

**Do I have to use Clover?**
No. We're Clover specialists, but we work with Lightspeed, Toast, TouchBistro, integrated payments to your existing POS, or a custom build through our developer integrations.

**What about EN/FR support?**
First-language EN or FR support from the first call to month 36. Not translated. Not a routing trick.

## Closing

If you're spending more than 2.5% effective and processing more than $25K/month on Square, the math usually moves. The only way to know yours is to read your statement.

**Primary CTA:** `Upload your Square statement →`
**Secondary CTA:** `Talk to a specialist (EN/FR)`

---

# Playbook 2 — Switching from Stripe

**URL:** `/integrations/migrations/from-stripe`
**Locale:** publish in EN + FR.
**Schema:** Article + FAQPage + BreadcrumbList.
**Target queries (cluster 3):** "switching from Stripe Canada", "Stripe alternative Canada", "Stripe to Authorize.Net migration", "Stripe fees Canada", "Stripe pour entreprises canadiennes alternative".

---

## Hero

**Eyebrow:** Migration Playbook · Stripe → CleverPays

**H1 (EN):** *"Leaving Stripe. Without the drama."*
**H1 (FR):** *« Quitter Stripe. Sans drame. »*

**Sub (EN):** *Stripe built the modern payments API. It also priced itself for venture-backed companies, not for everyone. Here's how to move your processing — keeping your stack, your tokens, and your customers.*

**Sub (FR):** *Stripe a bâti l'API de paiement moderne. Mais sa tarification est conçue pour des entreprises financées par capital de risque, pas pour tout le monde. Voici comment déplacer votre traitement — en gardant votre pile technique, vos jetons et vos clients.*

**Primary CTA:** `Start your switch` → Merchant Vault with `?from=stripe` prefill.
**Secondary CTA:** `Talk to our developer team`.

---

## Why merchants leave Stripe

Stripe is the best-engineered processor in the market. That doesn't make it the cheapest, the most negotiable, or the best fit for every business.

The patterns we see most often:

- **Flat 2.9% + 30¢ doesn't scale** above ~$50K/month. No negotiated interchange-plus, no volume discount path unless you're operating at unicorn scale.
- **Risk holds and account reviews** that pause settlement on businesses Stripe deems "higher risk" — even when those businesses are well-run.
- **Currency conversion costs** when accepting non-CAD that aren't transparent and aren't negotiable.
- **No real human support** at standard pricing tiers. Email + community + AI bots, no named contact.
- **Stripe Tax, Stripe Billing, Stripe Identity** stack up — useful features, but the bundle gets expensive fast.
- **Vendor concentration risk** — running everything on Stripe means a single Stripe policy change can affect billing, identity, and acceptance simultaneously.

Stripe is great. Stripe is also expensive at scale. Those statements coexist.

## What stays when you switch

Stripe has the most portable customer data in the industry. This is, frankly, one of the reasons it stays competitive — they make leaving possible. We use that:

- **Your customer records + tokenized cards.** Stripe offers a documented PCI-compliant data export with proper attestation. CleverPays imports tokens into the new gateway (Authorize.Net CIM, NMI Customer Vault, Paysafe vault, Bambora's profile vault, etc.).
- **Your subscription billing schedule.** If you use Stripe Billing, we move recurring schedules to a comparable system (Recurly, Maxio/Chargify, ChargeOver, or self-hosted Stripe Billing + alternative gateway via Spreedly).
- **Your checkout UX.** You don't have to rebuild your checkout. We swap the SDK underneath: `stripe.js` → `Accept.js` (Authorize.Net), `Collect.js` (NMI), Hosted Payment Page (Paysafe), or Spreedly (any gateway, single integration).
- **Your webhooks structure.** Most modern gateways emit equivalent events. We map your Stripe webhooks to the destination gateway's event model and provide a transition shim.
- **Your fraud rules.** Stripe Radar rules export as JSON. We translate the equivalent rules into Kount, Signifyd, Sift, or the destination gateway's native fraud tools.
- **Your tax setup.** Stripe Tax replaces with TaxJar or Avalara — both have better Canadian provincial sales tax coverage anyway.

## What changes

- **Processor + pricing model.** Flat-rate becomes interchange-plus by default. You see what flows where.
- **Payment SDK on your site.** If you're using Stripe Elements or Checkout, you'll integrate a new front-end SDK. Effort is real but bounded — typically 1–3 weeks of developer time depending on complexity.
- **Subscription management UI.** If you use Stripe's customer portal, you'll move to a comparable portal in the new billing system. Customers see a new branded portal that we help configure.
- **Dispute handling.** Stripe's dispute UI is excellent. The new gateway's UI may be less polished but functionally equivalent; we provide training.
- **Connected accounts (Stripe Connect).** If you operate a marketplace, this is the hardest migration. We have a separate playbook for it and may recommend staying on Connect while moving non-marketplace flows.

## The hardest cases (be honest)

We tell you upfront:

- **Pure Stripe Connect marketplaces** with hundreds of connected accounts and split flows — moving is possible but expensive. Sometimes the right answer is "stay on Connect for the marketplace, move other flows."
- **Heavy Stripe Issuing or Stripe Treasury usage** — these are Stripe-native products with no clean equivalents in most gateways. Migration may not be the right move; pricing optimization is.
- **International expansion built on Stripe's 40+ country presence** — if you're processing in many countries, Stripe's global footprint may be worth more than its rate. We help you decide.

If your case is one of these, we'll tell you. The Merchant Vault review is honest by design.

## Contract considerations

The easiest part of leaving Stripe: **there is no contract.** Stripe operates month-to-month with no termination penalty.

Things to check:

1. **Active subscription billing schedules.** Your existing subscribers continue to bill on Stripe until you migrate them. We plan a graceful cutover.
2. **Stripe Capital balance.** If you have an outstanding Stripe Capital loan, it remains in repayment. Leaving Stripe processing does not erase the balance.
3. **Stripe Identity / Atlas / Sigma subscriptions.** Cancel each separately.
4. **Stored payment methods that customers expect to "just work."** Plan your communication: customers will get one email explaining the change.

## The timeline

A typical SaaS / DTC / online-services business migrates in **3–6 weeks**, dominated by developer time on the new SDK.

**Week 1 — Discovery**
- Upload Stripe dashboard exports + a description of your integration to the Merchant Vault.
- We map your existing Stripe footprint (Payments, Billing, Connect if any, Tax, Radar) and recommend a destination gateway.
- Pick your destination: Authorize.Net, Paysafe, NMI, Bambora, Windcave, Adyen-compatible, or Spreedly (gateway-agnostic).

**Week 2 — Sandbox & SDK Integration**
- Your developers build against the destination gateway's sandbox.
- We provide reference implementations + integration support.
- Webhooks are mapped + tested.

**Week 3 — Customer & Token Migration**
- Stripe vault export submitted (under PCI attestation).
- Tokens imported to destination gateway.
- Test transactions on a small subset of customers.

**Week 4 — Cutover**
- New SDK pushed to production.
- Subscriptions migrated in batches (we recommend batching by billing cycle).
- Old Stripe flow remains live as fallback for 7 days.

**Week 5+ — Stripe wind-down**
- Pending Stripe disputes resolved.
- Final Stripe settlement received.
- Stripe account deactivated (or kept dormant for historical access).

## What to expect month 1 vs month 3

**Month 1:**
- Developer focus on edge cases (refunds, partial captures, decline retries).
- A spike in customer-support questions ("why does this look different?").
- One full billing cycle to confirm subscription stability.

**Month 3:**
- Pricing model fully normalized.
- Real effective rate visible on every statement.
- Fraud rules tuned in destination gateway.
- Customer portal and webhooks fully owned by you, not Stripe.

## Pre-switch checklist

- [ ] Export Stripe customer + payment method data (PCI-compliant attestation).
- [ ] Export transaction history (CSV via Stripe Dashboard or Sigma).
- [ ] Document your Stripe integration points: Payments, Billing, Connect, Identity, Tax, Radar.
- [ ] Identify all webhooks your application consumes from Stripe.
- [ ] Audit Stripe Apps and Marketplace integrations.
- [ ] Inventory team members with Stripe Dashboard access.
- [ ] Document fraud rules in Radar.
- [ ] Choose destination gateway (Authorize.Net, NMI, Paysafe, Bambora, Windcave, Spreedly).
- [ ] Decide migration approach: cutover (all at once) or staged (by customer cohort).
- [ ] Confirm bank account for settlement.
- [ ] Plan customer communication.

## FAQ

**Will my customers have to re-enter card details?**
No, if you migrate to a gateway that accepts Stripe token import (Authorize.Net CIM, NMI Vault, Paysafe Vault, Spreedly). Yes, if you choose a gateway that doesn't — we tell you up front which is which.

**How much developer time should I budget?**
For a single-gateway swap (Stripe Payments → Authorize.Net or NMI): 1–3 engineering weeks for a typical SaaS / DTC team. For full Stripe Billing + Payments migration: 4–8 weeks. We provide reference code and integration support.

**Can I keep Stripe Billing and just change the underlying gateway?**
Yes — via Spreedly. Stripe Billing can connect to a non-Stripe gateway through Spreedly's universal token vault. This is the lowest-effort migration path for subscription businesses and is often what we recommend.

**What about international payments?**
CleverPays partners with multiple gateways with strong international acceptance (Paysafe, Adyen-compatible, Windcave for Australasia, Bambora for European cards). We map your volume and recommend the right combination.

**Will my chargeback rate change?**
Not directly. Chargeback rate is a function of your business and your fraud rules, not the processor. We help you port (and improve) your fraud configuration.

**Does CleverPays support Stripe-style developer tooling?**
Through our gateway partners — yes. NMI and Authorize.Net both have robust APIs, webhooks, and SDKs. Stripe's DX is best-in-class; we don't pretend otherwise, but we provide the tooling and the human support to fill the gap.

**Is this worth it under $25K/month volume?**
Often no. Below ~$25K/month, Stripe's all-in tooling typically beats negotiated interchange-plus on a total-cost basis. We'll tell you that honestly when we read your numbers.

## Closing

Stripe is excellent. It's also expensive when you're scaled, profitable, and looking at unit economics. We've moved engineering-led teams off Stripe before, and we'll be honest with you about whether it's the right move for yours.

**Primary CTA:** `Upload your Stripe summary →`
**Secondary CTA:** `Book 30 minutes with our developer team`

---

# Notes on Template Reuse for the Other Six Playbooks

The same H2 spine works for:

- **Moneris** — emphasis on contract lock-ins, hardware ownership, statement decoding.
- **Helcim** — emphasis on overlap (both are interchange-plus); when CleverPays wins is on bilingual support and broader integration depth.
- **Chase Paymentech** — emphasis on enterprise contract negotiation, dedicated support.
- **Global Payments** — emphasis on getting out of long-dated contracts, hardware swap.
- **TD Merchant Services** — emphasis on bilingual + Quebec presence + integration capability.
- **Elavon** — emphasis on operational support model + multi-location reporting.

For each, modify these sections:
- "Why merchants leave [X]" — vendor-specific patterns.
- "What changes / What stays" — vendor-specific portability.
- "Contract considerations" — vendor-specific contract terms.
- "The timeline" — vendor-specific complexity.
- "FAQ" — vendor-specific recurring questions.

Everything else (hero pattern, CTAs, schema, internal links, InnerPageNav) is shared.

---

**End of Migration Playbooks.**
