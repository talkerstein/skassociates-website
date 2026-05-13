import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { PermitCard, SAMPLE_PERMITS, type Permit } from "@/components/PermitCard";

export const metadata: Metadata = {
  title: "Sample active projects — What lands in your dashboard",
  description:
    "Seventeen illustrative Trestle active projects styled exactly like real records. Scope, address, contractor, phone, license, value, and the 7-day exclusive seal.",
};

// Build an expanded sample feed by varying the base data
const EXPANDED: Permit[] = [
  ...SAMPLE_PERMITS,
  {
    id: "M2026-046511",
    trade: "electrical",
    scope: "Panel change · 200A to 320A meter combo",
    address: "8210 NW 33rd St, Doral, FL 33122",
    contractor: "Vega Power & Light",
    phone: "(305) 555-0382",
    license: "EC13008204",
    licenseExpires: "2027-03-31",
    value: 9800,
    issuedAt: "2026-05-08",
    exclusiveRemaining: "3d 11h",
  },
  {
    id: "M2026-047410",
    trade: "plumbing",
    scope: "Water heater replacement · 75-gal gas",
    address: "1245 SW 22nd St, Miami, FL 33145",
    contractor: "Atlantic Plumbing Co",
    phone: "(305) 555-0610",
    license: "CFC1429876",
    licenseExpires: "2026-11-30",
    value: 4400,
    issuedAt: "2026-05-11",
    exclusiveRemaining: "6d 18h",
  },
  {
    id: "M2026-047012",
    trade: "hvac",
    scope: "Mini-split install · 3-zone · ductless",
    address: "330 Sunset Dr, South Miami, FL 33143",
    contractor: "Climaire Comfort Services",
    phone: "(786) 555-0299",
    license: "CAC1821008",
    licenseExpires: "2027-07-31",
    value: 12500,
    issuedAt: "2026-05-09",
    exclusiveRemaining: "4d 09h",
  },
  {
    id: "M2026-046822",
    trade: "roofing",
    scope: "Shingle re-roof · 22 squares · GAF",
    address: "6011 SW 88th Pl, Kendall, FL 33156",
    contractor: "Stronghold Roofing FL",
    phone: "(305) 555-0144",
    license: "CCC1331902",
    licenseExpires: "2027-05-31",
    value: 21800,
    issuedAt: "2026-05-09",
    exclusiveRemaining: "4d 02h",
  },
  {
    id: "M2026-047188",
    trade: "pool",
    scope: "Resurface + tile · 16×32 existing pool",
    address: "1422 Coral Way, Miami, FL 33145",
    contractor: "Azul Pool Co",
    phone: "(305) 555-0744",
    license: "CPC1460199",
    licenseExpires: "2027-01-31",
    value: 18900,
    issuedAt: "2026-05-10",
    exclusiveRemaining: "5d 16h",
  },
  {
    id: "M2026-047332",
    trade: "electrical",
    scope: "Generator wiring · 22kW standby",
    address: "910 NE 78th St, Miami, FL 33138",
    contractor: "Beacon Electric Group",
    phone: "(305) 555-0820",
    license: "EC13007650",
    licenseExpires: "2027-09-30",
    value: 17200,
    issuedAt: "2026-05-11",
    exclusiveRemaining: "6d 07h",
  },
  {
    id: "M2026-046744",
    trade: "plumbing",
    scope: "Sewer lateral replacement · 60 ft",
    address: "215 NW 35th Ave, Miami, FL 33125",
    contractor: "Florida Drain Specialists",
    phone: "(786) 555-0511",
    license: "CFC1430044",
    licenseExpires: "2026-08-31",
    value: 8400,
    issuedAt: "2026-05-08",
    exclusiveRemaining: "3d 22h",
  },
  {
    id: "M2026-047099",
    trade: "hvac",
    scope: "Rooftop unit replacement · 7.5 ton",
    address: "2100 Coral Way, Miami, FL 33145",
    contractor: "Tropic Air Mechanical",
    phone: "(305) 555-0228",
    license: "CAC1819900",
    licenseExpires: "2027-02-28",
    value: 28500,
    issuedAt: "2026-05-10",
    exclusiveRemaining: "5d 11h",
  },
  {
    id: "M2026-046900",
    trade: "roofing",
    scope: "Flat roof TPO · 4,200 sq ft commercial",
    address: "740 NE 79th St, Miami, FL 33138",
    contractor: "MetroSeal Roofing",
    phone: "(305) 555-0341",
    license: "CCC1330099",
    licenseExpires: "2027-04-30",
    value: 67400,
    issuedAt: "2026-05-09",
    exclusiveRemaining: "4d 14h",
  },
  {
    id: "M2026-047140",
    trade: "pool",
    scope: "Pool heater install · gas, 400k BTU",
    address: "3315 Devon Rd, Coconut Grove, FL 33133",
    contractor: "Equinox Pool Services",
    phone: "(305) 555-0466",
    license: "CPC1459277",
    licenseExpires: "2027-08-31",
    value: 5900,
    issuedAt: "2026-05-10",
    exclusiveRemaining: "5d 04h",
  },
  {
    id: "M2026-046580",
    trade: "electrical",
    scope: "Commercial service entrance · 800A",
    address: "525 NE 1st Ave, Miami, FL 33132",
    contractor: "Apex Electric Services",
    phone: "(786) 555-0918",
    license: "EC13008811",
    licenseExpires: "2026-12-31",
    value: 84200,
    issuedAt: "2026-05-08",
    exclusiveRemaining: "3d 18h",
  },
];

const TRADE_TABS = [
  { slug: "all", label: "All trades" },
  { slug: "electrical", label: "Electrical" },
  { slug: "plumbing", label: "Plumbing" },
  { slug: "hvac", label: "HVAC" },
  { slug: "roofing", label: "Roofing" },
  { slug: "pool", label: "Pool" },
];

export default function SamplePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone-50">
        <div className="absolute inset-0 bg-grid-ink opacity-50" aria-hidden />
        <div className="absolute inset-0 bg-hero-spot" aria-hidden />
        <Container size="wide" className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel variant="forge">Sample leads</SectionLabel>
              <h1 className="mt-4 text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-[58px]">
                What lands in your dashboard.
              </h1>
              <p className="mt-5 text-pretty text-[17px] leading-relaxed text-ink-600">
                These are illustrative records styled exactly like the real
                feed. Real leads include verified phone and license data on
                89.4% of sub-permits. Phone numbers shown here are masked for
                privacy.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <LinkButton href="/get-started" variant="primary" size="lg" withArrow>
                Get instant access
              </LinkButton>
              <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-500 lg:text-right">
                Stripe-secured · Cancel anytime
              </p>
            </div>
          </div>

          <div
            id="electrical"
            className="mt-10 flex flex-wrap gap-2 border-t border-ink-900/10 pt-6"
          >
            {TRADE_TABS.map((t, i) => (
              <a
                key={t.slug}
                href={t.slug === "all" ? "#all" : `#${t.slug}`}
                className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  i === 0
                    ? "border-ink-900 bg-ink-900 text-bone-50"
                    : "border-ink-900/15 text-ink-700 hover:bg-ink-900/5"
                }`}
              >
                {t.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="all" className="scroll-mt-24 bg-bone-50 pb-24">
        <Container size="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXPANDED.map((p) => (
              <PermitCard key={p.id} permit={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 text-bone-100 sm:py-24">
        <Container size="narrow" className="text-center">
          <Lock className="mx-auto h-7 w-7 text-spark-400" />
          <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-bone-50 sm:text-[42px]">
            Real active projects unlock when you claim a credit.
          </h2>
          <p className="mt-5 text-pretty text-[17px] leading-relaxed text-ink-200">
            On your account, the phone and license fields are live — and the
            lead disappears from every other subscriber&apos;s feed the moment
            you claim it.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <LinkButton href="/get-started" variant="spark" size="lg" withArrow>
              Get instant access
            </LinkButton>
            <LinkButton href="/pricing" variant="inverse" size="lg">
              See pricing
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
