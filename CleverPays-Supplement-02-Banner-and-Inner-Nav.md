# CleverPays — Supplement 02
**Homepage Merchant Tools Banner · Inner-Page Navigation Component**

Amends Parts C, H, and I of the Master Build Brief.

---

# 1. Homepage Merchant Tools Banner

## 1.1 Where it goes

In the original Part C homepage blueprint, the homepage runs 12 sections. We are **inserting a new section** between the Pricing Trust Layer (Section 4) and the Merchant Vault CTA (Section 5).

**New homepage section order:**

| # | Section | Purpose |
|---|---|---|
| 1 | Hero | Orientation + dual CTA |
| 2 | Quick Trust Strip | Proof |
| 3 | Clover Studio | Signature interactive |
| 4 | Pricing Trust Layer | Truth-telling on fees |
| **5** | **Merchant Tools Banner** | **Decision-support hand-off → Vault** |
| 6 | Merchant Vault CTA | Conversion |
| 7 | Integrations + Partnerships | Capability proof |
| 8 | Industries | Vertical proof |
| 9 | Why CleverPays | Manifesto |
| 10 | Testimonials | Social proof |
| 11 | Resources | Education |
| 12 | Closing CTA | Conversion |
| 13 | Footer | Second nav |

This placement is deliberate: Pricing Trust raises the question *"what am I actually paying?"*, the Tools Banner gives you the math, the Vault converts on the answer. The funnel reads as **Doubt → Math → Action.**

## 1.2 Section spec

**Type:** Full-width band. **Surface:** Light, not dark — provides relief between the dark Pricing Trust Layer and the dark Vault Band that follow. **Height:** ~auto; min 560px on desktop, ~auto on mobile.

### Layout (desktop, 1280px container)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  EYEBROW: Merchant Tools                                         │
│  H2: Real math. No fluff.                                        │
│  SUB: Six calculators that tell you what you're actually paying. │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ Tool card 1     │  │ Tool card 2     │  │ Tool card 3     │  │
│  │ Effective Rate  │  │ Hardware ROI    │  │ Cash Discount   │  │
│  │ [mini preview]  │  │ [mini preview]  │  │ [mini preview]  │  │
│  │ Open →          │  │ Open →          │  │ Open →          │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
│                                                                  │
│        [ See all merchant tools → /resources/tools ]             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Copy

**Eyebrow:** `MERCHANT TOOLS` / `OUTILS MARCHANDS`

**H2 (EN):** *"Real math. No fluff."*
**H2 (FR):** *« Du vrai calcul. Sans détour. »*

**Sub (EN):** *Six calculators that show you what you're actually paying — and what you could be paying. Use them before you ever talk to us.*

**Sub (FR):** *Six calculateurs qui montrent ce que vous payez vraiment — et ce que vous pourriez payer. Utilisez-les avant même de nous parler.*

**Tertiary text link:** *"See all merchant tools →"* / *« Voir tous les outils marchands → »* (link: `/resources/tools`)

### The three featured tool cards (rotating set, CMS-editable)

**Card 1 — Effective Rate Calculator**
- Icon: rate-graph monoline.
- Title: *"Effective Rate Calculator"* / *« Calculateur de taux effectif »*
- 1-line value: *"Estimate your blended rate in 30 seconds."* / *« Estimez votre taux mixte en 30 secondes. »*
- Mini preview: a small inline animation — a horizontal range bar with a moving indicator showing 2.10% → 2.60%. Loops slowly (3.5s, ease-in-out). Reduced-motion: static range bar.
- Chip row: `Used by retail · restaurant · online`.
- CTA: `Open →` → `/resources/tools/effective-rate-calculator`

**Card 2 — Hardware ROI Calculator**
- Icon: terminal + dollar monoline.
- Title: *"Hardware ROI"* / *« Rentabilité du matériel »*
- 1-line value: *"Lease vs buy, 3-year total cost."* / *« Location vs achat, coût total sur 3 ans. »*
- Mini preview: two tiny cost bars (lease taller, buy shorter), animated growing in on mount.
- Chip row: `Used by multi-location · franchise · enterprise`.
- CTA: `Open →` → `/resources/tools/hardware-roi-calculator`

**Card 3 — Cash Discount / Surcharge Estimator**
- Icon: split-flow monoline.
- Title: *"Cash Discount / Surcharge"* / *« Escompte au comptant / Frais supplémentaires »*
- 1-line value: *"See your savings if you implement a compliant program."* / *« Voyez vos économies avec un programme conforme. »*
- Mini preview: a small "before / after" two-column micro-chart.
- Chip row: `Used by retail · service · QSR`.
- CTA: `Open →` → `/resources/tools/cash-discount-calculator`

### Visual details

- Cards on light surface (`--cp-bg-light`) with the standard card shadow.
- Hover: card lifts 4px, shadow expands, mini-preview animation accelerates 1.4x.
- Icons use the green accent at 60% opacity in their default state; full opacity on hover.
- Chip row uses neutral chips (no green) to keep visual hierarchy clean — green is reserved for CTAs.
- The "See all merchant tools" link sits center-bottom, with a subtle right-arrow that nudges 4px on hover.

### Why this works
- **Live math is more convincing than a quote.** A merchant who has already estimated their rate is 3x more likely to upload a statement (industry pattern, validated on pricing tools across SaaS).
- **It feeds the Vault.** Each tool's result page ends with "Want the real number? Upload your statement →" — the calculators are top-of-funnel for the Vault, not a distraction from it.
- **It carries SEO weight.** Linking out from the homepage to six tool pages distributes link equity to the highest-converting templated pages on the site.

## 1.3 Mobile behavior

- Section padding: 56px vertical.
- Eyebrow + H2 + sub stack.
- Tool cards stack vertically, full-width, 16px gap.
- Mini previews remain — sized down to 80px tall.
- "See all merchant tools →" link below the stack.
- Reduced-motion: previews static.

## 1.4 Performance

- Mini-preview animations are pure CSS / inline SVG. No JS for the banner itself.
- Total band weight target: < 30KB (incl. SVG previews).
- Lazy-loads when within 200px of viewport.

## 1.5 Variant: optional inline mini-calculator (Phase 2)

Once the calculator pages are stable, consider replacing the first tool card on the homepage banner with a **live inline mini-calculator**: one slider (monthly volume) showing the rate range animating in real time. Three-second engagement → click-through to full calculator.

This is bait-the-click in the best sense: prove the tool works before they leave the homepage.

## 1.6 Components added to inventory (Part I)

- `MerchantToolsBanner` — the section component.
- `ToolPreviewCard` — generic card with icon, title, value line, mini-preview slot, chips, CTA.
- `MiniPreviewRangeBar` — Card 1's animated range bar.
- `MiniPreviewCostBars` — Card 2's animated cost comparison.
- `MiniPreviewBeforeAfter` — Card 3's animated before/after micro-chart.
- `InlineMiniCalculator` (Phase 2) — single-slider live preview.

---

# 2. Inner-Page Navigation (`InnerPageNav`)

A new first-class component for any page over ~800 words. Critical for: migration playbooks, integration vendor leaves, pricing pages, resource guides, About pages, security/compliance pages, FAQ index pages.

## 2.1 Job-to-be-done

Long pages without internal navigation **fail two audiences**:
1. The skimmer who wants to jump to "FAQ" or "Pricing considerations" without scrolling.
2. The screen-reader user who needs structural anchors.

Inner-page nav fixes both, and also improves dwell time and crawl-depth signals for SEO.

## 2.2 Visual placement

### Desktop (≥ 1024px)
- **Sticky right rail.** Pinned at the top of the content column.
- 220px wide.
- Anchored at the top of the article body, not the top of the viewport — appears once the user has scrolled past the hero.
- Sticks at `top: 100px` (under the global nav).
- Sits at the right of a 12-column grid where the article body is centered in 8 columns and the inner-nav takes 3 (with 1 column gutter).

### Tablet (640–1023px)
- **Collapsed-by-default accordion at the top of the article body**, below the hero.
- "Jump to a section" button → expands to show the full table of contents.
- Closes after user clicks a section.

### Mobile (< 640px)
- **Bottom-pinned button**, appears after 25% scroll, disappears after 90% scroll.
- Label: *"On this page"* / *« Dans cette page »*.
- Tap opens a bottom-sheet with the full table of contents.

## 2.3 Behavior

### Section detection

Two options, with a clear preference:

**Preferred:** explicit data attributes on H2s in the CMS. The author marks which H2s are "nav-worthy" (most are; some — like a closing CTA — are not). This avoids the typical "every H2 in the post becomes a nav item" mess.

**Fallback:** auto-detect all H2s (and optionally H3s for deeply nested pages like security/compliance) within `<article>`.

### Smooth scroll on click
- Scroll behavior: smooth, except when `prefers-reduced-motion` is set (then instant).
- Scroll offset: 100px to clear the sticky global nav.
- URL updates to include the section hash without page reload (`history.replaceState`) so deep-linking works.

### Active-section highlighting
- Uses IntersectionObserver to detect which section is most prominently in view.
- Threshold: section becomes "active" when its top crosses the top-third line of the viewport.
- Active item: green bar on the left (4px wide), green text, slightly heavier weight.
- Animation: 200ms ease for the green bar's vertical position (slides as you scroll).

### Progress indicator
- A thin 2px progress bar runs along the left edge of the inner-nav, showing how far through the article the user has scrolled. Reuses the existing `ScrollProgress` token.

### Bilingual

- Inner-nav labels are localized. CMS supports an explicit "Short label for inner-nav" field per H2; if absent, uses the H2 text truncated to 32 characters.
- "On this page" label localized: EN / FR.

## 2.4 Component spec

```
InnerPageNav
├── Header
│   └── "On this page" / "Dans cette page"
├── Body
│   └── List of section items
│       ├── Section label (truncated, locale-aware)
│       └── Optional nesting: H3s indented 12px (for guides)
├── Footer
│   ├── "Back to top" link
│   └── Optional: page-level CTA (e.g., "Upload your statement")
```

### Visual tokens

- Background: card surface (`--cp-bg-light` on light pages; `--cp-bg-base` on dark pages).
- Border: 1px `--cp-border-light` / `--cp-border-dark` per surface.
- Radius: 12px.
- Padding: 20px vertical, 16px horizontal.
- Section items: 36px tap target, 14px font, 1.4 line-height.
- Active state: 4px green left bar, 600 weight, full color.
- Inactive state: muted color, regular weight.
- Hover: full color, 1px ghost left bar.

## 2.5 Accessibility

- Wrapped in `<nav aria-label="On this page">` for screen readers.
- Each link uses real anchors (`<a href="#section-id">`), not click handlers — keyboard works natively.
- `aria-current="location"` on the active item.
- Mobile bottom-sheet: traps focus, restores on close.
- Reduced motion: instant scroll, no slide animation on active-bar position.

## 2.6 Where it appears (rollout list)

**Phase 1:**
- All migration playbooks (8 pages).
- All Clover device pages (5).
- All Pricing child pages (5).
- About child pages (Why CleverPays, Service Model, Bilingual Service, Security & Trust).
- Resource guides over 600 words.

**Phase 2:**
- Integration vendor leaves (80+).
- Industry pages (9).
- Solution pages (15+).

**Never:**
- Homepage.
- Vault flow pages.
- Calculator pages (already short and tool-focused).
- Contact / Support landing pages.

## 2.7 Inner-nav anchors for the Migration Playbooks

The Square and Stripe playbooks shipped in `CleverPays-Migration-Playbooks.md` use this exact set of H2s as inner-nav targets (after the Hero):

```
[Why merchants leave Square]
[What stays when you switch]
[What changes]
[What Square charges you that CleverPays doesn't]
[Contract considerations]
[The timeline]
[What to expect month 1 vs month 3]
[Pre-switch checklist]
[FAQ]
[Closing]
```

The Stripe playbook substitutes vendor-specific labels but keeps the same canonical sequence. **This sequence becomes the migration-playbook template** for all eight migration pages.

For inner-nav purposes, the CMS short labels would be:

```
EN                                FR
"Why leave"                       « Pourquoi partir »
"What stays"                      « Ce qui reste »
"What changes"                    « Ce qui change »
"What you stop paying"            « Ce que vous arrêtez de payer »
"Contracts"                       « Contrats »
"Timeline"                        « Échéancier »
"Month 1 vs Month 3"              « Mois 1 vs Mois 3 »
"Checklist"                       « Liste de vérification »
"FAQ"                             « FAQ »
"Get started"                     « Commencer »
```

## 2.8 Component added to inventory (Part I)

- `InnerPageNav` — the component itself.
- `InnerPageNavMobile` — the mobile bottom-sheet variant.
- `BackToTopLink` — small utility, also reusable elsewhere.

## 2.9 Tracking
- Fire an event when a user clicks a section in the inner-nav (`inner_nav_click` with `{page, section, locale}`).
- Use these to identify which sections are most-used → informs future page structure decisions across the site.

---

# 3. Summary of Brief Amendments

| Part | Change |
|---|---|
| **C** | Homepage gains Section 5: Merchant Tools Banner, between Pricing Trust Layer and Vault CTA. Sections 5–12 in original brief renumber to 6–13. |
| **H** | No design-token additions. Light card surface variant reused. |
| **I** | Components added: `MerchantToolsBanner`, `ToolPreviewCard`, three `MiniPreview*` variants, `InlineMiniCalculator` (Phase 2), `InnerPageNav`, `InnerPageNavMobile`, `BackToTopLink`. |
| **N** | Phase 1 deliverables now include the Merchant Tools Banner + InnerPageNav on all long-form pages. |

---

**End of Supplement 02.**
