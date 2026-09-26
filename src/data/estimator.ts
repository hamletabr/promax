// ============================================================================
// ONLINE ESTIMATOR — pricing & options (powers /estimate)
// ----------------------------------------------------------------------------
// EDIT THIS FILE to change prices or answer options — no code changes needed.
// All prices are in whole dollars. Each choice below shows [low, high] ranges.
// ============================================================================

export type SqftTier = { label: string; sub: string; low: number; high: number };
export type DuctPricing = { perDuctLow: number; perDuctHigh: number; min: number; max: number };
export type RepairRange = { label: string; low: number; high: number };

// Step 1 — house size → base system price range
export const sqftTiers: SqftTier[] = [
  { label: "Up to 600 sq ft", sub: "Condo / small home", low: 8000, high: 10000 },
  { label: "600 – 1,400 sq ft", sub: "Average single-family", low: 10000, high: 15000 },
  { label: "1,400 – 2,000 sq ft", sub: "Larger family home", low: 13000, high: 16000 },
  { label: "2,000+ sq ft", sub: "Large / two-story home", low: 16000, high: 20000 },
];

// Step 2 — floors (recorded on the lead; doesn't change the price)
export const floorOptions = ["1 floor", "2 floors", "3+ floors"];

// Step 3 — what matters most (multi-select; recorded on the lead)
export const priorityOptions = [
  "Staying on budget",
  "Energy efficiency",
  "Reliability / longevity",
  "Quiet operation",
  "Air quality",
  "Smart home controls",
];

// Step 4 — ductwork replacement: every duct adds this range to the estimate
export const ductPricing: DuctPricing = {
  perDuctLow: 600,
  perDuctHigh: 750,
  min: 1,   // stepper limits
  max: 30,
};

// Step 0 (Repair branch) — typical repair ranges shown instead of the
// install wizard. These are ballparks only — always confirmed on site.
export const repairRanges: RepairRange[] = [
  { label: "Capacitor / contactor replacement", low: 150, high: 350 },
  { label: "Blower / fan motor replacement", low: 350, high: 650 },
  { label: "Refrigerant leak repair", low: 400, high: 1200 },
  { label: "Control board replacement", low: 400, high: 900 },
  { label: "Furnace igniter replacement", low: 200, high: 450 },
];

export const disclaimer =
  "This is a ballpark range based on typical Promax installations in the San Jose area. " +
  "Your exact quote depends on equipment choice, home layout, and code requirements — " +
  "we confirm the final price with a free on-site visit before any work begins.";
