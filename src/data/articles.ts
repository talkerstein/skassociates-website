export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string; // ISO date
  author: string;
  image: string;
  content: string;
}

const WAREHOUSE_IMG =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&h=900&fit=crop";
const STRATEGY_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop";
const DATA_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop";
const WORKING_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop";
const COMMUNITY_IMG =
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&h=900&fit=crop";
const DISTRIBUTION_IMG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop";

export const articles: Article[] = [
  {
    slug: "businessvision-end-of-life-migration-guide",
    title: "BusinessVision End-of-Life: What Your Migration Plan Should Look Like",
    excerpt:
      "BusinessVision support ends December 2026. Here is how to plan a calm, considered migration to Spire or Adagio.",
    category: "Migration",
    readTime: "8 min read",
    publishedAt: "2026-02-18",
    author: "Samuel Kopstick",
    image: WAREHOUSE_IMG,
    content: `If you are running BusinessVision today, you already know the headline: Sage has set an end-of-support date of December 2026. After that, no patches, no compliance updates, no answer from support when something breaks. That deadline sounds far away — until you actually sit down and map what a migration entails, at which point most owners realize they are already late.

I am writing this not to alarm anyone, but to do the opposite. A migration off BusinessVision is entirely manageable if you start now and approach it the way you would any other significant operational change: deliberately, with a plan, and without rushing the parts that matter.

## Start by assessing what you actually have

The first step is not picking a new platform. It is understanding your current one. Most BusinessVision installations I look at have accumulated fifteen or twenty years of customizations, workarounds, and one-off reports that nobody fully documented. Some of those customizations are essential. Many of them are vestigial — built to solve a problem that no longer exists.

Before you move anywhere, take inventory. What modules are you actually using? Which reports run regularly versus the ones that someone built once and nobody opens anymore? What integrations exist with shipping software, payment processors, or e-commerce? Which historical data do you need to keep accessible, and which can be archived? This is unglamorous work, but it determines everything that follows.

## Choose the destination based on your operations, not on marketing

For most BusinessVision users, the natural successor is either Spire or Adagio. Both are mature Canadian platforms with strong support communities, and both can handle the workflows BusinessVision was designed for. The right answer depends on what your business actually does.

Spire tends to be the better fit for distribution, wholesale, and manufacturing — anywhere inventory, purchasing, and sales orders are central to daily operations. It was designed for operations-driven businesses, and it shows in how the modules work together. Adagio tends to fit better when the accounting depth matters more than the operational complexity: professional services firms, not-for-profits, and businesses where financial controls and departmental reporting are the priority.

There are exceptions in both directions, which is why this decision is worth doing properly rather than reflexively. A bad platform choice locks you in for another decade.

## Plan the data migration carefully

The biggest mistake I see in BusinessVision migrations is treating the data move as a technical afterthought. It is the single most important part of the project. Customers, vendors, items, historical transactions, open invoices, outstanding purchase orders, work in progress — all of it needs to land cleanly in the new system, with the right account mappings and the right balances.

A proper migration plan includes a full data validation pass. Not "the file imported successfully" — actual reconciliation. AR aging in the new system matches AR aging in the old. Inventory quantities and costs match. Trial balance matches to the dollar. If those numbers do not tie, you have not migrated yet; you have only moved data.

## Build in time for testing and parallel running

Once the configuration is built and the data is loaded, do not flip the switch on Monday morning. Run both systems in parallel for at least one full close cycle. Enter the same transactions in both. Compare reports. Find the gaps before they are live problems.

This is the step companies are most tempted to skip because it feels redundant. It is not redundant. It is the difference between a calm transition and a chaotic one.

## Train people on the workflow, not the buttons

The final element that determines whether a migration succeeds is whether the team can actually do their jobs in the new system on day one. That comes down to training — but training done properly, not a generic webinar. Each role needs to walk through the specific workflows they perform every day. The AP clerk needs to enter a vendor bill end to end. The order desk needs to take a sales order through to invoice. The controller needs to close a period.

If you start now, you have time to do all of this properly. Quietly, deliberately, and without the panic that comes from a January 2027 hard deadline. Plenty of businesses leave it too late. You do not have to be one of them.`,
  },
  {
    slug: "spire-vs-adagio-which-fits-your-business",
    title: "Spire vs Adagio: A Plain-Language Guide to Choosing the Right Platform",
    excerpt:
      "Both are excellent. The right answer depends on your operations, your team, and what you actually need to report on.",
    category: "Platform Fit",
    readTime: "10 min read",
    publishedAt: "2026-01-22",
    author: "Samuel Kopstick",
    image: STRATEGY_IMG,
    content: `Whenever a prospective client calls and asks "should we go with Spire or Adagio?", my honest first answer is: I do not know yet, and you should be suspicious of anyone who answers that question before learning your business. Both platforms are genuinely good. The question is not which one is better in the abstract — it is which one fits the way your specific business operates.

Here is how I think through the choice, in plain language.

## The shortest version

Spire is built for operations-driven businesses. If you carry inventory, run purchase orders, ship sales orders, manage multiple warehouses, or do any kind of light manufacturing, Spire is almost always the right answer.

Adagio is built for accounting-driven businesses. If your primary need is strong financial controls, departmental reporting, fund accounting, or rigorous AP and AR workflows — and you do not have meaningful inventory complexity — Adagio is almost always the right answer.

That covers about 80 percent of decisions. The other 20 percent are the interesting cases.

## Where it gets interesting

Service businesses are the most common gray area. A consulting firm with no inventory is squarely an Adagio company. But a service business that also resells equipment, manages project materials, or tracks job costs across multiple cost centres might benefit from Spire's operational depth even though the inventory side is secondary.

Not-for-profits are usually Adagio because of fund accounting, but a not-for-profit running a thrift store, a food bank with donated inventory, or a social enterprise with real product flow might need Spire's inventory module. These hybrid cases require real analysis, not a default.

## What each platform actually does well

Spire's strengths are real-time inventory across multiple locations, integrated purchase-to-receive workflows, sales order processing that flows cleanly to shipping and invoicing, customer-specific pricing and discount structures, and dashboards that consolidate operations into views people actually use. The modules are tightly integrated, which means changes in one place propagate cleanly to others.

Adagio's strengths are deep AP and AR with proper approval workflows, departmental and fund-level reporting that holds up to audit scrutiny, a chart of accounts structure that can be configured for genuine analytical depth, batch posting and review processes that give controllers control rather than panic, and rock-solid bank reconciliation. Adagio's modular design means you only license what you need, which keeps the footprint clean.

## What each platform is not

Spire is not the right tool for a pure professional services firm that has no inventory and just needs strong accounting. It will work, but you will be paying for and looking at modules you do not use.

Adagio is not the right tool for a distribution business. It does have an inventory module, but the workflow depth required for real distribution operations is not where Adagio focuses. Trying to run a wholesale business on Adagio is forcing a tool to do work it was not designed for.

## The questions I actually ask

When a business is on the fence between the two, the questions that resolve it are usually these. How much of your team's daily work involves inventory, purchase orders, or sales orders? If the answer is "most of it", you are a Spire company. If the answer is "very little or none", you are an Adagio company.

How important is departmental or fund-level financial reporting? If you need a chart of accounts that can produce financials by department, location, fund, or program — without manual spreadsheet work — Adagio's structure is purpose-built for this. Spire can do departmental reporting, but Adagio does it better and more flexibly.

How does your team currently work? If your operations team and accounting team are essentially the same people, an integrated platform like Spire reduces friction. If they are separate functions with clear handoffs, Adagio's clean separation between operational data entry and accounting review tends to work better.

## The cost conversation

People often expect this section to settle the question. It usually does not. Both platforms are reasonably priced for what they deliver, and the implementation effort matters far more than the licensing cost over a five-year horizon. A poorly implemented cheaper platform costs far more than a well-implemented appropriate platform. Choose the right tool first; the dollars work out.

## When the answer is "neither yet"

Occasionally I tell a client that they are not ready to move off their current system. Maybe their processes are not well-defined enough that a migration would just port the chaos. Maybe their team is in the middle of a leadership transition. Maybe the timing means they would have to rush. In those cases the right answer is to do six months of process work first, then revisit the platform question.

That is the real plain-language answer: the platform choice is downstream of the business. Get the business clear first. The right platform tends to become obvious once you do.`,
  },
  {
    slug: "reporting-that-saves-hours",
    title: "From 35-Minute Reports to 30 Seconds: What Better Reporting Looks Like",
    excerpt:
      "A real-world case where a daily report went from 35 minutes to 30 seconds — and what that taught us about implementation.",
    category: "Case Study",
    readTime: "6 min read",
    publishedAt: "2025-12-09",
    author: "Samuel Kopstick",
    image: DATA_IMG,
    content: `One of our distribution clients used to start every morning the same way. The owner would arrive, pour coffee, sit down, and spend the next thirty-five minutes assembling a report. The report was important — it told him inventory positions, open orders, vendor commitments, and where the week was tracking against budget. He needed it. So he built it, one Excel formula at a time, exporting data from four different places and pasting it together.

Thirty-five minutes a day, five days a week, fifty weeks a year. That is roughly 150 hours annually — almost a month of full-time work — spent assembling a report that should have taken thirty seconds.

When we implemented Spire for them, the first thing we built was that report. Not the chart of accounts, not the inventory module — that report. Because the report was the proof. If we could replace those thirty-five minutes with a single click, every other change we proposed would be received with open ears. If we could not, nothing else would matter.

## Why the old report took 35 minutes

The report took 35 minutes because the data lived in four places and none of them talked to each other. Inventory was in one system, sales orders in another, purchase orders in a third, and the budget lived in a spreadsheet on the controller's laptop. Every morning he exported each one, cleaned them up, pasted them into a master workbook, and waited for the pivot tables to refresh.

This is the pattern I see in almost every business that complains about reporting. The problem is not the report. The problem is that the underlying data is not in one place. Once it is, reporting becomes nearly free.

## What we changed

We did not build a fancier report. We built a simpler one — but on top of integrated data. With Spire managing inventory, purchasing, sales orders, and the GL in a single database, the report became a saved view. Open the dashboard, see the numbers. Filter by warehouse, by product line, by sales rep. Drill into any cell to see the underlying transactions.

The total build time on the report itself was about four hours. The savings on the operational side was enormous and immediate.

## What this taught us about implementation

Three things, really.

First, the right place to start with any implementation is the highest-pain report. Not the most beautiful module, not the most impressive feature — the report that someone spends real time on every day. Solve that one, and you have earned the trust to solve everything else.

Second, the savings rarely come from the report itself. They come from the fact that the report is now correct, fast, and trusted. The owner stopped spending thirty-five minutes assembling. But more importantly, he stopped having quiet doubts about whether the numbers were right. That confidence changed how he made decisions during the rest of the day.

Third, the savings scale. The 150 hours a year was just the start. Once leadership saw what a single integrated view looked like, they started asking for others. Within six months, three more reports — month-end inventory valuation, sales rep performance, vendor payment forecasting — moved from manual assembly to dashboards. Each one saved hours per cycle.

## The lesson for any business

If you are spending real time assembling reports, the problem is almost never the report. It is the data. Fix the data layer — get your operations, inventory, sales, and accounting into one system that talks to itself — and reporting becomes trivial. Time savings of an hour a day per person are not unusual. Neither are decisions that get made faster because the numbers arrive in seconds instead of after the morning is half gone.

The 35-minute report is a useful diagnostic. If your business has one — and most do — that is where to start.`,
  },
  {
    slug: "implementation-mistakes-that-cost-you-years",
    title: "5 Implementation Mistakes That Cost Businesses Years of Pain",
    excerpt:
      "After 30 years of implementations, these are the patterns we see again and again. And how to avoid them.",
    category: "Implementation",
    readTime: "7 min read",
    publishedAt: "2025-11-14",
    author: "Samuel Kopstick",
    image: WORKING_IMG,
    content: `Over thirty years of implementing accounting and ERP software, certain mistakes show up again and again. They are not random. They follow patterns, and they cost businesses far more than the software itself ever did. Here are the five I see most often, and what to do instead.

## 1. Letting the software dictate the workflow

The most damaging mistake is treating the software as the master and your business as the apprentice. Teams will sit through a training session, hear how the platform expects a sales order to flow, and then quietly reorganize their entire process to match — even when the platform's default flow makes no sense for how their business actually works.

The result is a team that resents the system, processes that take longer than they did before, and an implementation that everyone privately considers a failure even though nobody says so out loud.

Good implementations work the other way around. We sit with the team, watch how the work actually happens, understand why it happens that way, and then configure the software around their workflow. Both Spire and Adagio are flexible enough to support how your business actually operates. The trick is doing the listening work first.

## 2. Trying to move all the data

This one is counterintuitive because it sounds responsible. Surely you want all your historical data in the new system, right? Wrong, most of the time.

Moving twenty years of transaction history into a new platform makes the new platform slow, clutters the views with information nobody uses, and introduces dozens of edge cases that complicate the migration unnecessarily. Old transactions from 2014 will not reconcile to today's chart of accounts, because the chart of accounts has evolved.

The right approach is usually: bring over open transactions, current-year activity, and master data. Archive the rest in a read-only export of the old system that anyone can search if they need to. You keep the history without dragging it into the new platform's working memory.

## 3. Skipping parallel runs

A parallel run means operating both the old and new systems side by side for one full close cycle. Same transactions go into both. At the end of the period, you reconcile.

It feels redundant. It is the single most important step in any migration.

Parallel running is where you find the configuration mistakes, the data mapping issues, and the workflow gaps that will absolutely show up in production but are dramatically cheaper to fix in parallel than after go-live. Every implementation I have seen go badly skipped this step. Every implementation I have seen go smoothly did it.

## 4. Underestimating training

Companies will spend six figures on software and implementation services and then try to train the team in a single afternoon. The result is predictable. People do not know the workflows. They make mistakes. They develop workarounds. Within three months, the system has been bent into shapes the implementer never intended, and nobody remembers why.

Training has to be role-specific, hands-on, and spread over time. Not a single session. A series. The AP clerk learns AP. The order desk learns order entry. The controller learns the close process. Each role walks through their actual workflow, with their actual data, until they can do it without hesitation.

Then — and this is the part people skip — there is a follow-up two weeks later, after the team has been using the system in production. Questions have come up. Workarounds have emerged. The follow-up session catches these before they calcify into bad habits.

## 5. Letting the implementer disappear after go-live

The cruellest pattern in our industry is the implementer who shows up for the project, hits go-live, collects the final invoice, and is never seen again. This is structurally the worst possible model, because the questions and issues that matter most show up two months, six months, or two years after go-live — when the team has internalized the platform enough to ask hard questions.

If your implementer is not still available a year later, you do not have a partner. You have a vendor. The relationships that produce great long-term outcomes are the ones where the implementer is on speed-dial five years on, because they understand your business, your configuration, and your history. That continuity is worth far more than the initial implementation fee.

## What these all have in common

If you read these five mistakes together, a pattern emerges. The mistakes that cost businesses years are not technical. They are relational and procedural. Listening properly. Migrating thoughtfully. Validating carefully. Training deeply. Staying available.

The technical work is the easy part. The discipline around it is what determines whether the implementation succeeds.`,
  },
  {
    slug: "non-profit-fund-accounting-essentials",
    title: "Fund Accounting for Non-Profits: What Adagio Does That Spreadsheets Can't",
    excerpt:
      "Grant tracking, board reporting, audit readiness — what real fund accounting looks like.",
    category: "Not-for-Profit",
    readTime: "9 min read",
    publishedAt: "2025-10-21",
    author: "Samuel Kopstick",
    image: COMMUNITY_IMG,
    content: `Most of the not-for-profits I have worked with started the same way: a passionate founder, a small board, a real mission, and accounting done in QuickBooks or Excel. That setup works for a while. It works until the first restricted grant arrives, or the first time a funder asks for a fund-level financial statement, or the first audit that asks pointed questions about how restricted balances are being tracked.

At that point, the limitations of general-purpose accounting tools become very visible, very quickly. This is the moment to consider real fund accounting — and for most organizations that means Adagio.

## What fund accounting actually means

Fund accounting is the practice of treating each pool of money — each fund — as if it had its own complete set of books. Each fund has its own assets, liabilities, revenue, and expenses, and the system tracks them separately while still rolling everything up into organization-wide statements.

This sounds simple. In practice, doing it correctly across restricted, temporarily restricted, and unrestricted funds, with grant-specific tracking layered on top, and program-level reporting on top of that, becomes genuinely complex. Spreadsheets can simulate it for a while, but the moment any of those layers interact — a restricted grant that funds a portion of a program, or a temporarily restricted balance that releases over time — spreadsheets start producing answers that nobody can fully defend in front of an auditor.

## What Adagio brings to the table

Adagio's strength for not-for-profits is that its chart of accounts can be structured for genuine analytical depth. You can configure segments for fund, program, department, and grant — and run any combination of them. A grant report shows everything tagged to that grant across every program. A program report shows everything in that program regardless of fund. A board financial statement shows the whole organization with fund-level columns. The same underlying data, sliced multiple ways, with no manual aggregation.

That structural capability is what spreadsheets cannot match. Once the chart of accounts is configured properly, the reports are essentially free. Without that structure, every report is a manual reassembly of data, and every reassembly is an opportunity to introduce errors that take days to find.

## Grant tracking that actually works

Grants are where most non-profit accounting falls apart. Each funder wants their report in a different format, with different fiscal periods, different expense categories, and different supporting documentation. If you try to satisfy all of these from a generic chart of accounts, you end up rebuilding the report for each grant from scratch.

Adagio's project and departmental costing modules let you tag every transaction — revenue and expense — to the specific grant it relates to. When a funder asks for a financial report on their grant, you run it. The data is there because it was captured at the moment of entry. Year-end consolidations across multiple grants happen the same way. The reports are not created — they are run.

## Audit readiness as a side effect

The single biggest practical benefit of moving to real fund accounting is that audit preparation stops being a project. With proper fund tracking, grant-level reporting, audit trails, and documented controls, the auditor can self-serve most of what they need. The first audit after a clean implementation typically runs two to three weeks shorter than before, and the auditor's management letter shifts from "we recommend you implement controls around restricted funds" to "we noted no significant deficiencies."

That difference shows up directly in audit fees, in staff hours during audit season, and — quietly but importantly — in how the board sees the finance function.

## Board reporting that does not require a weekend

Most not-for-profit finance leaders I have worked with used to spend the weekend before a board meeting assembling the financial package. Income statement, fund balances, budget-to-actual by program, grant status reports, cash position. Each piece pulled from a different source and reformatted into a unified package.

After moving to Adagio with proper fund configuration, that weekend disappears. The board package is a set of saved reports. You run them, glance at them, attach them to the agenda, and go home for dinner. The time savings are real, but the more valuable shift is what it does for the controller's confidence: the numbers being presented to the board are the same numbers in the system, with no manual reformatting in between.

## What the migration looks like

For a typical small to mid-size not-for-profit, an Adagio implementation runs three to four months end to end. The first month is mostly listening and chart-of-accounts design. The second month is configuration, data migration, and reporting setup. The third month is parallel running and training. By month four, the organization is operating fully in Adagio and the old system is archived.

The work is not glamorous, but it is genuinely transformational for finance teams that have been struggling with tools that were never built for their reality. Fund accounting is what not-for-profits actually need. The good news is that the right software makes it almost ordinary.`,
  },
  {
    slug: "distribution-real-time-inventory-visibility",
    title: "Real-Time Inventory Visibility: Why Distribution Companies Need It",
    excerpt:
      "How real-time inventory tracking changes daily operations — and why most companies aren't getting it.",
    category: "Distribution",
    readTime: "8 min read",
    publishedAt: "2025-09-08",
    author: "Samuel Kopstick",
    image: DISTRIBUTION_IMG,
    content: `If you run a distribution business and someone asks you "how much of SKU 4271 do you have on hand right now, across all locations?" — how long does it take you to answer? More importantly, how confident are you that the answer is correct?

For most distribution companies I work with, the honest answer is "a few minutes, and maybe seventy percent confident." A staff member checks the system, then mentally adjusts for the receiving that happened this morning but has not been posted yet, plus the shipment that left yesterday but might still be open, minus the damaged units in the corner of the warehouse that have not been written off.

This is not a system problem. It is the consequence of running a real-time business on near-real-time tools.

## What "real-time" actually means

Real-time inventory visibility means that the system reflects the physical state of the warehouse within seconds of any change. Receipts are scanned at the dock and inventory levels update immediately. Picks are scanned and the units come off available stock the moment they leave the bin. Transfers between locations show in transit until they are received at the destination. Damaged goods are flagged the moment they are pulled.

This is not theoretical. Spire does this natively. Adagio with the right inventory module does this. The technology has been mature for years. The reason most distribution businesses still operate on stale inventory data is not technological — it is procedural.

## Why most companies are not getting it

The most common reason is that the company implemented an ERP but never adjusted the operational processes around it. Receivers still wait until end of day to post everything in a batch. Pickers still write on paper and post quantities later. Transfers between locations happen physically before they are entered in the system, sometimes by days.

The system is real-time. The processes are not. The result is a system that knows what was true an hour ago, which for a distribution business is the same as not knowing.

The fix is mostly procedural. Scan at receipt. Pick to a handheld or to a printed list that gets confirmed immediately. Enter transfers when they leave, not when they are remembered. None of this requires new software. It requires deciding that inventory accuracy matters enough to enforce.

## What changes when you get it right

The first thing that changes is the conversation with customers. A customer calls asking if you have 200 units of something in stock. With real-time inventory, the answer is immediate and reliable. Without it, the answer is either a delay while someone checks, or a confident answer that turns out to be wrong, which is far worse.

The second thing that changes is purchasing. Real-time inventory makes reorder points actually work. When stock crosses the reorder threshold at 11 a.m. on a Tuesday, the system flags it and a purchase order can be generated. Without real-time data, reorder points fire late, leading either to stockouts or to safety stock levels much higher than necessary — which ties up working capital that could be doing something useful.

The third thing that changes is decision-making across the company. Sales reps know what they can sell. Operations knows what they need to make. Finance knows what is genuinely available to ship versus committed against open orders. The whole organization aligns around the same numbers because there is only one set of numbers, and it is correct.

## Multi-warehouse visibility

The benefit compounds in multi-warehouse operations. Without a single real-time view, each warehouse operates as its own island. A customer order arrives that the home warehouse cannot fill, even though there is plenty of stock in a sister location two hours away. Either the order gets backordered unnecessarily, or someone makes a manual phone call to check the other warehouse and arrange a transfer — turning a routine order into a project.

With real-time multi-warehouse visibility, the system routes the order to the location that can fulfill it, or splits it across locations automatically. The customer experience improves. The capital tied up in inventory drops because you no longer need to overstock each warehouse independently. Transfers happen because the system suggests them, not because someone got lucky on a phone call.

## What the implementation looks like

For a typical distribution company, moving to genuine real-time inventory takes about six to eight weeks of focused work. The first two weeks are process design — deciding what gets scanned where, by whom, at what point in the flow. The next two to three weeks are configuration and a pilot in one warehouse. The final weeks are rollout and training across all locations.

It is not a small project, but it is a knowable one. And the operational changes that follow — fewer stockouts, lower working capital, faster fulfillment, better forecasts — pay it back inside the first year.

If your business runs on inventory and your inventory data is not real-time, this is the single highest-leverage operational improvement available to you. It is worth doing properly.`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getOtherArticles(slug: string, limit = 2): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
