import type { FaqItem } from "@/components/ui/faq";

/* ------------------------------------------------------------------ */
/*  Home — general questions about the practice                        */
/* ------------------------------------------------------------------ */
export const homeFaqs: FaqItem[] = [
  {
    q: "Do you work remotely or on-site?",
    a: "Both. We're based in Toronto and serve clients across Canada — most engagements run remotely, but we still travel for kickoffs, go-lives, and on-site training when it matters. Distance has never been the limiting factor on a good implementation.",
  },
  {
    q: "How long does an implementation typically take?",
    a: "A straightforward Spire or Adagio implementation usually lands between 4 and 12 weeks, depending on data complexity, the number of modules, and how ready your team is. Migrations with messy historical data or heavy customization push longer — we'll give you a real estimate after a discovery call, not a guess.",
  },
  {
    q: "What does an engagement usually cost?",
    a: "We work hourly for ongoing support and on fixed-fee phases for implementation milestones. Most full implementations for small to mid-market businesses fall in the low five-figure range. We'd rather scope it honestly up front than surprise you with a bill at the end.",
  },
  {
    q: "Do you only work with Spire and Adagio?",
    a: "Those are the primary platforms — but we also support PayDirt, Crystal Reports, and Excel/Access-based reporting layers, and we migrate clients from QuickBooks, BusinessVision, Sage 50, and others. If your problem is reporting or process, the software label matters less than the workflow underneath.",
  },
  {
    q: "What happens after go-live?",
    a: "Ongoing support is core to how we work, not an afterthought. Most clients stay on a month-to-month arrangement for questions, year-end help, new staff training, and report tweaks. You won't be handed off to a junior or a ticket queue — you keep the same person.",
  },
  {
    q: "How do I know if my business needs a system change?",
    a: "The usual signs: month-end reporting takes days instead of hours, your team has built workarounds in spreadsheets, inventory or AR numbers don't match between systems, or you've outgrown what QuickBooks or BusinessVision can do. If two or more sound familiar, it's worth a conversation.",
  },
];

/* ------------------------------------------------------------------ */
/*  Solutions overview                                                 */
/* ------------------------------------------------------------------ */
export const solutionsFaqs: FaqItem[] = [
  {
    q: "What's actually included in an implementation?",
    a: "Discovery, chart of accounts and module configuration, data migration, custom report build-out, integration setup, parallel testing, training, and go-live support. We don't bill separately for every conversation — the scope covers what's needed to get you running properly.",
  },
  {
    q: "Will you help us decide between Spire and Adagio?",
    a: "Yes — and it's the first conversation we have. The right answer depends on your inventory needs, reporting style, team size, and growth plans. We have no quota to push one over the other.",
  },
  {
    q: "Can you migrate our data from QuickBooks, BusinessVision, or Sage?",
    a: "Yes. We've done dozens of migrations from QuickBooks (Desktop and Online), BusinessVision, Sage 50, Simply Accounting, and a handful of custom systems. We map the chart of accounts, clean historical data where needed, and keep audit trails intact.",
  },
  {
    q: "Do you offer training without doing the implementation?",
    a: "Yes. If your system was set up by someone else and your team just needs to actually use it well, we run training engagements on their own. Same for refresher training when new staff join.",
  },
  {
    q: "What if our current system works but reporting is broken?",
    a: "That's a common engagement on its own. We'll rebuild the report layer — Crystal Reports, custom Excel exports, dashboards — without touching the accounting system underneath. Sometimes that's all you need.",
  },
  {
    q: "How does ongoing support pricing work?",
    a: "Hourly, billed against time actually used — no retainers you don't draw down. Most clients use somewhere between a few hours and a half-day a month, more around year-end.",
  },
];

/* ------------------------------------------------------------------ */
/*  Spire                                                              */
/* ------------------------------------------------------------------ */
export const spireFaqs: FaqItem[] = [
  {
    q: "What kind of business is Spire best for?",
    a: "Spire fits inventory-driven businesses — distribution, wholesale, light manufacturing, and product companies generally in the $2M-$50M range. If you're running serious inventory, multiple warehouses, or job costing alongside accounting, Spire was built for that.",
  },
  {
    q: "How is Spire different from QuickBooks?",
    a: "QuickBooks is general-purpose bookkeeping software. Spire is an operational ERP with real inventory, sales orders, purchase orders, production, and job costing — built so accounting and operations share one set of numbers. Once your inventory complexity passes a certain point, QuickBooks stops keeping up.",
  },
  {
    q: "Does Spire handle multi-location and multi-warehouse?",
    a: "Yes — multiple warehouses, bin locations, inter-warehouse transfers, and location-specific costing are all native. Multi-company is also supported, though it needs to be configured correctly from the start.",
  },
  {
    q: "Can Spire integrate with shipping and payment systems?",
    a: "Yes. Common integrations include shipping (FedEx, UPS, Canada Post via third-party tools), credit card processing, EDI, and e-commerce platforms. Some are out-of-the-box, others go through Spire's API — we'll tell you which path fits your case.",
  },
  {
    q: "What does Spire not do well?",
    a: "Heavy project accounting, complex multi-entity consolidations, payroll-as-core, and process manufacturing with bills of materials more than two levels deep — Spire can stretch into these, but it's not where it shines. We'll tell you if you're at that edge.",
  },
  {
    q: "Is Spire cloud-based or on-premise?",
    a: "Both options exist. Spire is traditionally on-premise (your server, your network), but cloud hosting through Spire-certified partners is available and increasingly common. Same software, different deployment.",
  },
];

/* ------------------------------------------------------------------ */
/*  Adagio                                                             */
/* ------------------------------------------------------------------ */
export const adagioFaqs: FaqItem[] = [
  {
    q: "What kind of business is Adagio best for?",
    a: "Adagio is the right fit for organizations that need genuine accounting depth — strong audit trails, sophisticated GL structure, multi-currency, fund accounting — without the operational complexity of a full ERP. Not-for-profits, professional service firms, and finance-led organizations get the most out of it.",
  },
  {
    q: "Is Adagio modular — do I have to buy everything?",
    a: "No, and that's one of its strengths. You start with Ledger and add only the modules you actually need — Payables, Receivables, Inventory, Order Entry, Job Cost, FX, and so on. You're not paying for capability you don't use.",
  },
  {
    q: "Does Adagio handle inventory?",
    a: "Yes — Adagio Inventory and Order Entry handle standard distribution workflows well. If your inventory is the heart of the business (multi-warehouse, EDI-heavy, lot tracking), Spire is usually a better fit. For lighter inventory alongside strong accounting, Adagio is excellent.",
  },
  {
    q: "How does Adagio compare to Sage 50 or QuickBooks Enterprise?",
    a: "Adagio has a deeper audit trail, stronger batch controls, and far better reporting flexibility than either — but a steeper initial learning curve. It's built for the accountant first, not the bookkeeper. If financial controls matter to you, the difference is significant.",
  },
  {
    q: "Is Adagio still being actively developed?",
    a: "Yes. Softrak Systems continues to release updates and new modules — most recently Adagio Cloud Acceptance and ongoing refinements across the suite. It's a mature product with a long-tail roadmap, not a legacy one in decline.",
  },
  {
    q: "How are Adagio updates and pricing handled?",
    a: "Adagio uses an annual upgrade plan (UP) — pay annually and you get all updates and version upgrades within that year. Licenses are perpetual. It's predictable and doesn't ratchet up the way some subscription ERPs do.",
  },
];

/* ------------------------------------------------------------------ */
/*  Implementation                                                     */
/* ------------------------------------------------------------------ */
export const implementationFaqs: FaqItem[] = [
  {
    q: "What does a typical implementation timeline look like?",
    a: "Discovery and design take 2-3 weeks, configuration and migration another 3-6, parallel testing and training 2-3, then go-live and stabilization. Total: typically 8-12 weeks for a mid-sized implementation. Simpler scopes finish faster; multi-entity or heavy-customization scopes run longer.",
  },
  {
    q: "What's involved in migrating from our current system?",
    a: "We extract master data (customers, vendors, items, GL), historical transactions where needed, and open balances. Then we clean, map, and import into the target system, with reconciliation at each step. Most clients bring 1-2 years of detail and summary balances for earlier periods.",
  },
  {
    q: "Who needs to be involved on our side?",
    a: "Usually a project sponsor (owner or CFO), a finance lead, and an operations lead if inventory is in scope. Roughly 4-8 hours a week of their time during active phases. The clearer their decision-making authority, the smoother the project runs.",
  },
  {
    q: "What happens if requirements change mid-project?",
    a: "Small adjustments — a new report, a tweak to a workflow — we absorb. Larger scope changes get written up, estimated, and approved before work starts. No surprises on the invoice.",
  },
  {
    q: "How do you reduce go-live risk?",
    a: "Parallel testing with real transactions before cutover, a written go-live checklist, a defined fallback plan, and on-call support the week of go-live. Most issues surface in parallel testing — that's the whole point of running it.",
  },
  {
    q: "Do you offer a hypercare period after go-live?",
    a: "Yes. The first 30 days post go-live are explicitly hypercare — faster response times, daily check-ins for the first week, and proactive monitoring of month-end close. After that we transition to standard ongoing support.",
  },
];

/* ------------------------------------------------------------------ */
/*  Training & support                                                 */
/* ------------------------------------------------------------------ */
export const trainingFaqs: FaqItem[] = [
  {
    q: "Do you train individuals or whole teams?",
    a: "Both. Role-based sessions for whole teams during implementation, and one-on-one training for new hires, power users, or specific workflows. We match the format to what the person actually needs to do in the system.",
  },
  {
    q: "Is training in-person, remote, or both?",
    a: "Both. Most training now runs over screen-share — it's more efficient and easier to record for later reference. We come on-site for kickoff sessions, hands-on warehouse or shop-floor training, and when a team simply learns better in a room together.",
  },
  {
    q: "Do you create custom training materials for our business?",
    a: "Yes — short, role-specific guides built around your actual workflows and screens, not generic vendor documentation. They live alongside your system so new staff have something real to learn from later.",
  },
  {
    q: "How do new staff get trained later?",
    a: "Either we run a session directly with them, or your internal power user trains them using the materials we built. Most clients use a hybrid — internal handles the basics, we come in for the trickier modules.",
  },
  {
    q: "Can you train our internal power user?",
    a: "Yes, and we encourage it. Every healthy implementation has someone internal who knows the system deeply. We invest extra time in that person so they can answer day-to-day questions without calling us first.",
  },
  {
    q: "What if we just need refresher training, not initial training?",
    a: "We do this often — usually a few targeted sessions on the modules or processes that have drifted. Pricing is hourly, scoped to what your team actually needs. No need to relearn the whole system.",
  },
];

/* ------------------------------------------------------------------ */
/*  Reporting & process                                                */
/* ------------------------------------------------------------------ */
export const reportingFaqs: FaqItem[] = [
  {
    q: "Can you build custom reports for us?",
    a: "Yes — that's a large part of what we do. Whether it's a sales analysis by territory, a margin report by product line, or a board-ready financial pack, we build reports that answer the actual question, not just dump data.",
  },
  {
    q: "Do you work with Crystal Reports?",
    a: "Extensively. Spire and Adagio both lean on Crystal for custom reporting, and we've written, fixed, and rebuilt more Crystal Reports than we can count. If you have legacy Crystal reports that no longer work or are too slow, we can usually salvage them.",
  },
  {
    q: "Can we export data to Excel cleanly?",
    a: "Yes — and we'll set up exports so the data comes out structured properly, not pivoted into PDFs masquerading as spreadsheets. For teams that live in Excel, we'll build pull-once-and-refresh workbooks tied to your system.",
  },
  {
    q: "Can you fix reports we already have that don't work right?",
    a: "Usually, yes. We'll review the existing report, figure out where the logic broke down, and either fix it in place or rebuild it cleaner. Often the issue is one bad join or a stale filter no one updated.",
  },
  {
    q: "What if our reports take 30+ minutes to run?",
    a: "That's almost always a query problem, not a hardware one. We rework the underlying logic, add the right indexes, or move heavy reports to a staged data layer. Long-running reports get measured in seconds after, not minutes.",
  },
  {
    q: "Do you build dashboards and KPIs?",
    a: "Yes — typically in Excel for finance-led teams, Power BI for those already invested in Microsoft, or a simple HTML dashboard for operations. We start from the decisions you need to make, then work backward to the metrics.",
  },
];

/* ------------------------------------------------------------------ */
/*  Industries (general)                                               */
/* ------------------------------------------------------------------ */
export const industriesFaqs: FaqItem[] = [
  {
    q: "Do you work with industries other than distribution, service, and not-for-profit?",
    a: "Yes. Those three are where the bulk of our work lives, but we've implemented for light manufacturing, construction sub-trades, professional firms, property management, and a few specialty verticals. If it runs on Spire or Adagio, we've likely seen it.",
  },
  {
    q: "How do you know our specific industry?",
    a: "Honestly — we don't claim to know your industry the way you do. What we know is how to ask the right questions and translate your workflows into the system. Industry-specific knowledge gets built quickly in the first two weeks of discovery.",
  },
  {
    q: "What if our business spans multiple industries?",
    a: "Common — many of our clients have a distribution arm and a service arm, or a retail and wholesale split. Both Spire and Adagio handle this well when configured properly, often through separate departments, divisions, or company files depending on reporting needs.",
  },
  {
    q: "Do you handle multi-entity and multi-company setups?",
    a: "Yes. Multi-company is supported in both platforms with different trade-offs. We'll help you decide whether to run separate companies with consolidation, divisions within one company, or inter-company workflows — each has implications for reporting and audit.",
  },
  {
    q: "Can you help with industry-specific compliance reporting?",
    a: "We handle the common ones — CRA filings, NFP fund reporting, audit trails for regulated sectors, sales tax across provinces. For highly specialized compliance (e.g., pharmaceutical, financial services), we'll work alongside your industry advisors rather than pretend to replace them.",
  },
];

/* ------------------------------------------------------------------ */
/*  Distribution                                                       */
/* ------------------------------------------------------------------ */
export const distributionFaqs: FaqItem[] = [
  {
    q: "Can Spire or Adagio handle multi-warehouse inventory?",
    a: "Spire handles it natively — multiple warehouses, bin locations, transfers, and warehouse-specific costing all built in. Adagio handles multi-location inventory but with less depth on bin-level tracking. For serious multi-warehouse operations, Spire is almost always the right call.",
  },
  {
    q: "What about EDI integration with major customers?",
    a: "Yes — we've connected Spire to all the major Canadian retail EDI requirements (Loblaw, Costco, Walmart, Sobeys, etc.) through third-party EDI providers. The accounting side is straightforward; the trickier piece is mapping their item codes to yours, which we work through during setup.",
  },
  {
    q: "How do you handle landed cost calculations?",
    a: "Both Spire and Adagio support landed cost — freight, duty, brokerage, and exchange — allocated to inventory at receipt. We'll set up the allocation rules (by weight, value, or volume) that match how your business actually thinks about cost.",
  },
  {
    q: "Do you set up cycle counting and inventory accuracy programs?",
    a: "Yes — we configure cycle count workflows, ABC classification, and variance reporting. The bigger win is usually building the discipline around them: who counts what, how often, and what happens when counts don't match. Software is the easy part.",
  },
  {
    q: "What about light manufacturing or kitting?",
    a: "Spire handles light manufacturing and kitting well — bills of materials, production orders, and assemble-to-order workflows. For multi-level BOMs with routing and labour costing, we'll honestly assess whether Spire can stretch that far or whether you need something heavier.",
  },
];

/* ------------------------------------------------------------------ */
/*  Service                                                            */
/* ------------------------------------------------------------------ */
export const serviceFaqs: FaqItem[] = [
  {
    q: "How do you handle job costing?",
    a: "Adagio JobCost and Spire's Job Costing module both work — choice depends on the rest of your stack. We set up cost categories, WIP accounting, and progress billing to match how you actually quote and invoice projects. The goal is real-time job margin visibility, not month-end surprises.",
  },
  {
    q: "What about time tracking integration?",
    a: "We integrate with common time-tracking tools (Harvest, TSheets/QuickBooks Time, Replicon, and a few custom setups) so billable hours flow into job costing without re-keying. For smaller teams, time entry directly in Spire or Adagio is often simpler.",
  },
  {
    q: "Can you set up project profitability reporting?",
    a: "Yes — by job, by client, by service line, by project manager. The hard part isn't the report, it's making sure cost data is captured cleanly at the source. We work on both sides.",
  },
  {
    q: "Do you handle retainer or recurring billing?",
    a: "Yes — recurring invoice templates, retainer drawdown tracking, and deferred revenue recognition. For subscription-style billing at scale we sometimes pair with a dedicated tool that feeds the accounting system, depending on volume.",
  },
  {
    q: "What about multi-currency or multi-entity service firms?",
    a: "Both platforms handle multi-currency natively. For multi-entity firms (e.g., separate ops and holding companies, or US/Canadian sides), we design the structure up front — separate company files with consolidation is usually cleaner than trying to do it within one file.",
  },
];

/* ------------------------------------------------------------------ */
/*  Not-for-profit                                                     */
/* ------------------------------------------------------------------ */
export const nonprofitFaqs: FaqItem[] = [
  {
    q: "Do you set up fund accounting?",
    a: "Yes — fund accounting is one of the main reasons NFPs choose Adagio. We configure the GL with fund segments, departmental dimensions, and restricted-vs-unrestricted tracking so your statements come out audit-ready without manual rework.",
  },
  {
    q: "Can Adagio handle restricted vs. unrestricted funds?",
    a: "Yes — through proper GL segmentation and reporting structure. Restricted, temporarily restricted, and unrestricted funds each get their own reporting view, with proper inter-fund transfers when grant conditions are met. This is bread-and-butter Adagio for NFPs.",
  },
  {
    q: "What about grant tracking and reporting?",
    a: "We typically set this up using job costing or departmental segments tied to each grant — so you can produce funder-specific reports showing spending against budget, restricted balances, and remaining commitments. Every grant gets its own clean trail.",
  },
  {
    q: "How about board-ready financial statements?",
    a: "Yes — comparative monthly and YTD statements, budget-to-actual by fund, and the standard NFP statement formats (financial position, operations, changes in net assets). We build them so they go straight to the board pack without finance team rework.",
  },
  {
    q: "Do you understand audit requirements for NFPs in Canada?",
    a: "Yes — ASNPO reporting, CRA T3010 filings, and the typical audit trail expectations from Canadian NFP auditors. We've gone through enough year-end audits with clients to know what auditors will ask for and how to set the system up so it's there when they do.",
  },
];

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export const aboutFaqs: FaqItem[] = [
  {
    q: "How long has Samuel been doing this?",
    a: "Over 30 years working with mid-market accounting and ERP systems — first as an internal controller and systems lead, then in independent consulting. Hundreds of implementations across Spire, Adagio, and the platforms that came before them.",
  },
  {
    q: "What's Samuel's background before consulting?",
    a: "Accounting and finance roles in distribution and service businesses before moving into systems work full-time. The consulting practice grew out of solving these problems from the inside first — so the advice comes from someone who's lived with the systems, not just sold them.",
  },
  {
    q: "Why work with a boutique firm vs. a big consulting practice?",
    a: "Because you get the same person from discovery through go-live and into ongoing support. No handoffs, no junior staff learning on your time, no slide decks that bill at a senior rate. The trade-off is we say no to engagements that don't fit — we're not trying to be everywhere.",
  },
  {
    q: "Do you have client references?",
    a: "Yes — happy to share references that match your size, industry, and platform after a first conversation. Most of our work comes through referrals from existing clients, which tells you what you need to know.",
  },
  {
    q: "What size businesses do you typically serve?",
    a: "Small to mid-market — roughly $2M to $75M in revenue, 10 to 250 staff. Below that, the full implementation cost is hard to justify; above it, you're usually looking at a different class of ERP. Most clients sit in the $5M-$30M range.",
  },
];

/* ------------------------------------------------------------------ */
/*  Case studies                                                       */
/* ------------------------------------------------------------------ */
export const caseStudiesFaqs: FaqItem[] = [
  {
    q: "Can we talk to past clients?",
    a: "Yes — after a first conversation, we'll connect you with references that match your size, industry, and platform. Most clients are happy to take a 20-minute call from someone considering the same path.",
  },
  {
    q: "Are the results in these case studies typical?",
    a: "The wins shown are real, but every business is different. What's typical is the pattern — clearer reporting, less manual rework, faster month-end. The size of the gain depends on how broken the starting point is and how committed your team is to using the new process.",
  },
  {
    q: "What kind of business sees the biggest ROI from a Spire or Adagio implementation?",
    a: "Businesses where reporting takes days, where the team has built a parallel universe in Excel, or where inventory and accounting don't agree — those see the fastest payback. Often within the first year just from time saved at month-end.",
  },
  {
    q: "How long until we see results?",
    a: "Day-to-day workflow improvements show up the week after go-live. Reporting and analytical wins typically land 1-3 months in, once a real month-end has run on the new system. The bigger structural improvements — better margin visibility, cleaner inventory accuracy — show up over 6-12 months.",
  },
  {
    q: "What's the most common reason engagements succeed?",
    a: "A committed internal champion. Software and consulting can only carry a project so far — the engagements that go best are the ones where someone on your side owns the outcome and pushes through the inevitable friction. Everything else is secondary.",
  },
];
