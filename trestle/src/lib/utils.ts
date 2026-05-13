import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const SITE = {
  name: "Trestle",
  tagline: "Active construction projects. Locked to one trade for 7 days.",
  description:
    "Trestle is a SaaS pipeline that turns freshly-issued building permits into verified active projects — buyers ready to break ground, budgets committed, exclusively yours for 7 days.",
  url: "https://trestle.work",
  email: "hello@trestle.work",
  phone: "(305) 555-0148",
  city: "Miami, FL",
  social: {
    linkedin: "https://www.linkedin.com/company/trestle-work",
  },
};

export const TRADES = [
  {
    slug: "electrical",
    name: "Electrical",
    short: "Electrical contractors",
    icon: "Zap",
    weekly: 124,
    examples:
      "200A service upgrades, panel changes, EV charger installs, tenant fit-outs, generator wiring, commercial sub-panels.",
    licenseClass: "EC / ER",
    avgValue: 14000,
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    short: "Plumbing contractors",
    icon: "Droplets",
    weekly: 89,
    examples:
      "Whole-home repipes, water heater replacements, sewer laterals, gas lines, new construction rough-in, water filtration.",
    licenseClass: "CFC",
    avgValue: 11400,
  },
  {
    slug: "hvac",
    name: "HVAC",
    short: "HVAC contractors",
    icon: "Wind",
    weekly: 71,
    examples:
      "Split system replacements, ductwork, mini-splits, rooftop units, refrigeration, commercial mechanical.",
    licenseClass: "CAC",
    avgValue: 16800,
  },
  {
    slug: "roofing",
    name: "Roofing",
    short: "Roofing contractors",
    icon: "Home",
    weekly: 102,
    examples:
      "Tile re-roofs, shingle replacements, flat-roof TPO, leak repairs, commercial reroofs, hurricane straps.",
    licenseClass: "CCC",
    avgValue: 28200,
  },
  {
    slug: "pool",
    name: "Pool",
    short: "Pool contractors",
    icon: "Waves",
    weekly: 38,
    examples:
      "New gunite pools, spa additions, equipment pad rebuilds, resurfacing, pool heaters, deck and tile.",
    licenseClass: "CPC",
    avgValue: 24500,
  },
] as const;

export type Trade = (typeof TRADES)[number];

export const MARKETS = {
  live: ["Miami-Dade County", "City of Miami", "Coral Gables"],
  next: ["Hialeah", "Doral", "Fort Lauderdale", "Broward County"],
  roadmap: ["Tampa", "Orlando", "Jacksonville", "Atlanta", "Houston", "Phoenix"],
};

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    credits: 5,
    perLead: 60,
    blurb: "Solo subs testing the channel.",
    bestFor: "Single trade, single county.",
    features: [
      "5 exclusive active projects / month",
      "1 trade, 1 county",
      "Phone + license enrichment",
      "7-day exclusive lock",
      "Email + SMS project delivery",
      "Self-serve dashboard access",
    ],
    popular: false,
    checkoutHref: "/get-started?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: 599,
    credits: 12,
    perLead: 50,
    blurb: "Established subs serving multiple counties.",
    bestFor: "Multi-trade allowed.",
    features: [
      "12 exclusive active projects / month",
      "Up to 2 trades, 2 counties",
      "Phone + license enrichment",
      "7-day exclusive lock",
      "Priority match queue",
      "Weekly territory digest",
      "Two-user team access",
    ],
    popular: true,
    checkoutHref: "/get-started?plan=growth",
  },
  {
    id: "pro",
    name: "Pro",
    price: 999,
    credits: 25,
    perLead: 40,
    blurb: "Multi-county shops running sales teams.",
    bestFor: "Highest match priority.",
    features: [
      "25 exclusive active projects / month",
      "Unlimited trades + counties",
      "Phone + license enrichment",
      "7-day exclusive lock",
      "Top-of-queue match priority",
      "Daily email digest",
      "CSV export + webhook + GHL sync",
      "Five-user team access",
    ],
    popular: false,
    checkoutHref: "/get-started?plan=pro",
  },
  {
    id: "pool",
    name: "Pool",
    price: 200,
    credits: null,
    perLead: null,
    blurb: "Older, non-exclusive inventory at volume.",
    bestFor: "Volume over freshness.",
    features: [
      "Unlimited 7+ day-old projects",
      "All trades, all Trestle markets",
      "Phone + license stripped",
      "Shared with other Pool members",
      "Email project delivery",
    ],
    popular: false,
    checkoutHref: "/get-started?plan=pool",
  },
];

export const TRUST_LINES = [
  "Permit data sourced from public government systems",
  "Contractor licenses cross-checked against FL DBPR",
  "Phone numbers verified against licensed-contractor registries",
  "Stripe-secured payments, cancel anytime",
];
