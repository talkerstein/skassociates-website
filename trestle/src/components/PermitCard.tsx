import {
  MapPin,
  Phone,
  BadgeCheck,
  Hammer,
  CalendarDays,
  Lock,
  Zap,
  Droplets,
  Wind,
  Home,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type Permit = {
  id: string;
  trade: "electrical" | "plumbing" | "hvac" | "roofing" | "pool";
  scope: string;
  address: string;
  contractor: string;
  phone: string;
  license: string;
  licenseExpires: string;
  value: number;
  issuedAt: string;
  exclusiveRemaining: string;
  isClaimed?: boolean;
};

const TRADE_META: Record<
  Permit["trade"],
  { label: string; icon: React.ComponentType<{ className?: string }>; accent: string }
> = {
  electrical: { label: "Electrical", icon: Zap, accent: "text-spark-600 bg-spark-100" },
  plumbing: { label: "Plumbing", icon: Droplets, accent: "text-ink-700 bg-ink-100" },
  hvac: { label: "HVAC", icon: Wind, accent: "text-forge-700 bg-forge-100" },
  roofing: { label: "Roofing", icon: Home, accent: "text-spark-700 bg-spark-100" },
  pool: { label: "Pool", icon: Waves, accent: "text-ink-700 bg-ink-100" },
};

export function PermitCard({
  permit,
  className,
  compact,
}: {
  permit: Permit;
  className?: string;
  compact?: boolean;
}) {
  const meta = TRADE_META[permit.trade];
  const TradeIcon = meta.icon;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-bone-50 ring-1 ring-ink-900/10 shadow-card transition-all hover:shadow-card-lg hover:ring-ink-900/20",
        className,
      )}
    >
      {/* Top status bar */}
      <div className="flex items-center justify-between border-b border-ink-900/10 bg-ink-50/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-forge-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-forge-500" />
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-forge-700">
            Active project · Sealed
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
          Permit #{permit.id}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                meta.accent,
              )}
            >
              <TradeIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                {meta.label} · Issued {permit.issuedAt}
              </p>
              <h3 className="mt-0.5 text-[17px] font-semibold leading-snug text-ink-900">
                {permit.scope}
              </h3>
            </div>
          </div>
          <div className="shrink-0 rounded-md bg-ink-900 px-2.5 py-1 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-200">
              Value
            </p>
            <p className="font-mono text-[13px] font-semibold text-bone-50">
              ${permit.value.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Detail grid */}
        <dl
          className={cn(
            "mt-5 grid gap-x-6 gap-y-3 text-[14px]",
            compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2",
          )}
        >
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                Property
              </dt>
              <dd className="text-ink-800">{permit.address}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Hammer className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                Contractor
              </dt>
              <dd className="text-ink-800">{permit.contractor}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                Phone
              </dt>
              <dd className="font-mono text-[13.5px] text-forge-700">
                {permit.phone}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                License
              </dt>
              <dd className="font-mono text-[13px] text-ink-800">
                {permit.license}
                <span className="text-ink-400">
                  {" "}
                  · exp {permit.licenseExpires}
                </span>
              </dd>
            </div>
          </div>
        </dl>

        {/* Exclusivity footer */}
        <div className="mt-6 flex items-center justify-between rounded-lg border border-spark-500/20 bg-spark-50 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Lock className="h-4 w-4 text-spark-600" strokeWidth={2.25} />
            <div>
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-spark-700">
                Sealed for you
              </p>
              <p className="text-[13px] text-ink-800">
                <span className="font-mono font-semibold text-spark-700">
                  {permit.exclusiveRemaining}
                </span>{" "}
                left in your window · then rolls to Pool
              </p>
            </div>
          </div>
          <span className="hidden items-center gap-1.5 rounded-md bg-ink-900 px-2.5 py-1.5 text-[11.5px] font-medium text-bone-50 sm:inline-flex">
            <CalendarDays className="h-3.5 w-3.5" />
            7-day lock
          </span>
        </div>
      </div>
    </div>
  );
}

export const SAMPLE_PERMITS: Permit[] = [
  {
    id: "M2026-046382",
    trade: "electrical",
    scope: "200A service entrance upgrade",
    address: "4528 NW 7th St, Miami, FL 33126",
    contractor: "Manny's Electric LLC",
    phone: "(305) 555-0148",
    license: "EC13007942",
    licenseExpires: "2027-08-31",
    value: 14000,
    issuedAt: "2026-05-09",
    exclusiveRemaining: "4d 22h",
  },
  {
    id: "M2026-047119",
    trade: "roofing",
    scope: "Tile re-roof, ~28 squares — single family",
    address: "1820 SW 22nd Ave, Miami, FL 33145",
    contractor: "Cardenas Roofing Corp",
    phone: "(305) 555-0211",
    license: "CCC1330854",
    licenseExpires: "2026-12-31",
    value: 36500,
    issuedAt: "2026-05-10",
    exclusiveRemaining: "5d 14h",
  },
  {
    id: "M2026-046998",
    trade: "hvac",
    scope: "5-ton split system replacement + ductwork",
    address: "7301 SW 88th St, Kendall, FL 33156",
    contractor: "Bayline HVAC Services",
    phone: "(786) 555-0392",
    license: "CAC1819204",
    licenseExpires: "2027-04-30",
    value: 11200,
    issuedAt: "2026-05-10",
    exclusiveRemaining: "5d 06h",
  },
  {
    id: "M2026-047243",
    trade: "plumbing",
    scope: "Repipe — 3-bath single family, PEX-A",
    address: "915 NE 84th St, Miami, FL 33138",
    contractor: "Pending licensed sub assignment",
    phone: "(305) 555-0177",
    license: "CFC1428011",
    licenseExpires: "2027-02-28",
    value: 22800,
    issuedAt: "2026-05-11",
    exclusiveRemaining: "6d 11h",
  },
  {
    id: "M2026-047077",
    trade: "pool",
    scope: "New 14×28 gunite pool + spa, equipment pad",
    address: "230 Palmetto Dr, Coral Gables, FL 33134",
    contractor: "Solano Pools & Spa",
    phone: "(305) 555-0254",
    license: "CPC1459011",
    licenseExpires: "2027-09-30",
    value: 72500,
    issuedAt: "2026-05-09",
    exclusiveRemaining: "4d 18h",
  },
  {
    id: "M2026-047301",
    trade: "electrical",
    scope: "Tenant fit-out — 6 sub-panels, 3-phase service",
    address: "320 NW 24th St, Wynwood, FL 33127",
    contractor: "Arco Electric Contractors",
    phone: "(786) 555-0418",
    license: "EC13009110",
    licenseExpires: "2027-06-30",
    value: 58400,
    issuedAt: "2026-05-11",
    exclusiveRemaining: "6d 22h",
  },
];
