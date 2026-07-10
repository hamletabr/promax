// ============================================================================
// OUR WORK / PORTFOLIO — Promax Service Group
// ----------------------------------------------------------------------------
// THIS FILE IS THE ONLY PLACE YOU EDIT to manage the portfolio page (/our-work).
//
// ── HOW TO ADD PHOTOS ────────────────────────────────────────────────────────
// 1. Create a folder for the job under  public/images/portfolio/
//      e.g.  public/images/portfolio/willow-glen-mitsubishi/
// 2. Drop your .jpg / .png photos in it (phone photos are fine — keep each
//    under ~500 KB if you can; resize before uploading for a faster site).
// 3. Add a project entry below and list the photos in `images`.
//
// ── HOW TO ADD A PROJECT ─────────────────────────────────────────────────────
// Copy any block between { ... } in `projects`, paste it at the TOP of the
// list (newest first), and edit the fields:
//   title    – short job name shown on the card (city + system works great)
//   path     – where it lives in the category tree below, from broadest to
//              most specific, e.g. ["hvac", "mitsubishi", "multi-zone", "ductless"]
//              (only use slugs that exist in `categories`)
//   brand    – equipment brand shown as a badge (free text: "Mitsubishi", "Bryant", …)
//   location – city, e.g. "San Jose, CA"
//   date     – "YYYY-MM" (used for sorting; newest shown first)
//   summary  – 1–3 sentences. Mention the city, the equipment, and the result —
//              this text is indexed by Google, so keep it descriptive.
//   images   – photo paths; the FIRST one is the cover.
//              Either plain strings, or { src, alt } to give a photo its own
//              alt text (better for SEO — describe what's in the photo).
//
// ── HOW TO ADD A CATEGORY / SUBCATEGORY ──────────────────────────────────────
// Edit the `categories` tree below. `slug` must be unique among siblings,
// lowercase, hyphenated. Nest as deep as you need with `children`.
// Categories with no projects are hidden automatically, so you can build the
// tree out ahead of time.
// ============================================================================

export type PortfolioCategory = {
  slug: string;
  label: string;
  children?: PortfolioCategory[];
};

export type PortfolioImage = string | { src: string; alt: string };

export type PortfolioProject = {
  title: string;
  path: string[]; // category slugs, broadest → most specific
  brand?: string;
  location: string;
  date: string; // "YYYY-MM"
  summary: string;
  images: PortfolioImage[];
};

// ─── CATEGORY TREE ──────────────────────────────────────────────────────────
export const categories: PortfolioCategory[] = [
  {
    slug: "hvac",
    label: "HVAC",
    children: [
      {
        slug: "mitsubishi",
        label: "Mitsubishi",
        children: [
          { slug: "single-zone", label: "Single Zone" },
          {
            slug: "multi-zone",
            label: "Multi Zone",
            children: [
              { slug: "vrv-systems", label: "VRV Systems" },
              { slug: "ductless", label: "Ductless" },
            ],
          },
        ],
      },
      {
        slug: "bryant",
        label: "Bryant",
        children: [
          { slug: "single-zone", label: "Single Zone" },
          {
            slug: "multi-zone",
            label: "Multi Zone",
            children: [
              { slug: "vrv-systems", label: "VRV Systems" },
              { slug: "ductless", label: "Ductless" },
            ],
          },
        ],
      },
      { slug: "furnaces", label: "Furnaces" },
      { slug: "heat-pumps", label: "Heat Pumps" },
      { slug: "ductwork", label: "Ductwork" },
      { slug: "rooftop-units", label: "Rooftop Units" },
    ],
  },
  {
    slug: "water-heaters",
    label: "Water Heaters",
    children: [
      { slug: "tank", label: "Tank" },
      { slug: "tankless", label: "Tankless" },
      { slug: "heat-pump-water-heaters", label: "Heat Pump Water Heaters" },
    ],
  },
  // Add more top-level categories here, e.g.:
  // { slug: "commercial", label: "Commercial", children: [ ... ] },
];

// ─── PROJECTS (newest first) ────────────────────────────────────────────────
// NOTE: the photos below are representative placeholders from the current
// site. Replace them with real installation photos in
// public/images/portfolio/ as described at the top of this file.
export const projects: PortfolioProject[] = [
  {
    title: "Mitsubishi Ductless Multi-Zone — 3 Rooms",
    path: ["hvac", "mitsubishi", "multi-zone", "ductless"],
    brand: "Mitsubishi Electric",
    location: "San Jose, CA",
    date: "2026-05",
    summary:
      "Three-zone Mitsubishi ductless mini split installation in a San Jose ranch home with no existing ductwork. One outdoor condenser feeds three wall-mounted indoor heads for quiet, room-by-room heating and cooling.",
    images: [
      { src: "/images/hva6.jpg", alt: "Mitsubishi ductless mini split multi-zone installation in San Jose" },
      { src: "/images/hv1.jpg", alt: "Wall-mounted ductless mini split indoor unit installed by Promax" },
      { src: "/images/duc-photo-min.jpg", alt: "Promax technician installing a ductless split system" },
    ],
  },
  {
    title: "Mitsubishi Single-Zone Mini Split — Garage Conversion",
    path: ["hvac", "mitsubishi", "single-zone"],
    brand: "Mitsubishi Electric",
    location: "Santa Clara, CA",
    date: "2026-04",
    summary:
      "Single-zone Mitsubishi hyper-heat mini split for a Santa Clara garage conversion ADU. Full electrical hookup, condensate management, and a clean line-set run — installed to Mitsubishi Diamond Contractor standards.",
    images: [
      { src: "/images/duc-photo-min.jpg", alt: "Single-zone Mitsubishi mini split installation in Santa Clara" },
      { src: "/images/hva2.jpg", alt: "Outdoor condenser unit for a single-zone ductless system" },
    ],
  },
  {
    title: "VRV/VRF Multi-Zone System — Office Building",
    path: ["hvac", "mitsubishi", "multi-zone", "vrv-systems"],
    brand: "Mitsubishi Electric",
    location: "Sunnyvale, CA",
    date: "2026-03",
    summary:
      "Commercial VRF (VRV) installation across two floors of a Sunnyvale office. Variable refrigerant flow gives each zone independent temperature control while cutting energy use versus the old rooftop package units.",
    images: [
      { src: "/images/vrf-photo-min.jpg", alt: "VRF VRV multi-zone system installation in Sunnyvale office" },
      { src: "/images/hva7.jpg", alt: "VRV system outdoor units installed by Promax Service Group" },
    ],
  },
  {
    title: "Bryant High-Efficiency AC + Coil Replacement",
    path: ["hvac", "bryant", "single-zone"],
    brand: "Bryant",
    location: "Campbell, CA",
    date: "2026-02",
    summary:
      "Full Bryant air conditioner replacement in Campbell: new high-efficiency condenser, matched evaporator coil, refrigerant line flush, and a smart thermostat — installed by a Bryant Premier Dealer.",
    images: [
      { src: "/images/hva1.jpg", alt: "Bryant high-efficiency air conditioner installation in Campbell" },
      { src: "/images/hva2.jpg", alt: "New Bryant AC condenser installed on a concrete pad" },
    ],
  },
  {
    title: "Bryant Ducted Multi-Zone System with Zoning Dampers",
    path: ["hvac", "bryant", "multi-zone", "ductless"],
    brand: "Bryant",
    location: "Los Gatos, CA",
    date: "2026-01",
    summary:
      "Two-story Los Gatos home upgraded to a Bryant multi-zone system with motorized dampers and dual thermostats — no more freezing downstairs while upstairs overheats.",
    images: [
      { src: "/images/zone-photo-min.jpg", alt: "Bryant multi-zone HVAC system with zoning dampers in Los Gatos" },
      { src: "/images/hva10.jpg", alt: "Zone control panel wiring for a multi-zone HVAC system" },
    ],
  },
  {
    title: "96% AFUE Furnace Replacement",
    path: ["hvac", "furnaces"],
    brand: "Bryant",
    location: "San Jose, CA",
    date: "2025-12",
    summary:
      "Replaced a failing 20-year-old furnace in San Jose with a 96% AFUE two-stage Bryant furnace. New plenum, sealed flue, and combustion safety testing — finished in a single day.",
    images: [
      { src: "/images/furnace-photo-min.jpg", alt: "High-efficiency furnace replacement in a San Jose home" },
      { src: "/images/hva3.jpg", alt: "New gas furnace installed and vented to code" },
    ],
  },
  {
    title: "Whole-Home Heat Pump Conversion (All-Electric)",
    path: ["hvac", "heat-pumps"],
    brand: "Mitsubishi Electric",
    location: "Cupertino, CA",
    date: "2025-11",
    summary:
      "Gas furnace to all-electric heat pump conversion in Cupertino, which qualified for TECH Clean California rebates while program funding was still available. The homeowner now heats and cools with one efficient system.",
    images: [
      { src: "/images/heat-pump-photo-min.jpg", alt: "All-electric heat pump conversion installation in Cupertino" },
      { src: "/images/hva4.jpg", alt: "New heat pump outdoor unit replacing a gas furnace system" },
    ],
  },
  {
    title: "Full Ductwork Replacement + Aeroseal",
    path: ["hvac", "ductwork"],
    location: "Milpitas, CA",
    date: "2025-10",
    summary:
      "Complete attic duct replacement in Milpitas: new R-8 insulated ducts, balanced airflow room to room, and sealed connections that cut the homeowner's energy loss by roughly 25%.",
    images: [
      { src: "/images/hvac-ductwork-photo-min.jpg", alt: "New insulated HVAC ductwork installation in a Milpitas attic" },
      { src: "/images/hva9.jpg", alt: "Sealed and insulated duct runs installed by Promax" },
    ],
  },
  {
    title: "Commercial Rooftop Package Unit Swap",
    path: ["hvac", "rooftop-units"],
    location: "San Jose, CA",
    date: "2025-09",
    summary:
      "Crane-set replacement of two aging rooftop package units for a San Jose retail building, including new curbs, gas and electrical hookups, and startup commissioning.",
    images: [
      { src: "/images/rooftop-photo-min.jpg", alt: "Commercial rooftop HVAC package unit replacement in San Jose" },
      { src: "/images/hva8.jpg", alt: "Rooftop package unit installed on a commercial building" },
    ],
  },
  {
    title: "Tankless Water Heater Upgrade",
    path: ["water-heaters", "tankless"],
    brand: "Navien",
    location: "Saratoga, CA",
    date: "2025-08",
    summary:
      "Swapped a leaking 50-gallon tank for a Navien condensing tankless water heater in Saratoga — endless hot water, new gas line sizing, and earthquake-code strapping and venting.",
    images: [
      { src: "/images/water-heater-photo-min.jpg", alt: "Navien tankless water heater installation in Saratoga" },
      { src: "/images/hva5.jpg", alt: "New tankless water heater mounted and plumbed by Promax" },
    ],
  },
  {
    title: "Heat Pump Water Heater (Rebate-Eligible)",
    path: ["water-heaters", "heat-pump-water-heaters"],
    location: "Mountain View, CA",
    date: "2025-07",
    summary:
      "Installed a 65-gallon heat pump water heater in Mountain View, qualifying the homeowner for utility rebates. Uses about 70% less energy than the electric tank it replaced.",
    images: [
      { src: "/images/hva5.jpg", alt: "Heat pump water heater installation in Mountain View" },
      { src: "/images/water-heater-photo-min.jpg", alt: "Rebate-eligible heat pump water heater installed by Promax" },
    ],
  },
];

// ─── helpers (no need to edit below this line) ──────────────────────────────

export function normalizeImage(img: PortfolioImage, fallbackAlt: string) {
  return typeof img === "string" ? { src: img, alt: fallbackAlt } : img;
}

export function coverOf(p: PortfolioProject) {
  return normalizeImage(p.images[0], `${p.title} — ${p.location}`);
}

/** Flatten the category tree into [{ path, label, depth, fullLabel }] in display order. */
export function flattenCategories(
  cats: PortfolioCategory[] = categories,
  parentPath: string[] = [],
  parentLabels: string[] = []
): { path: string[]; label: string; fullLabel: string; depth: number }[] {
  const out: { path: string[]; label: string; fullLabel: string; depth: number }[] = [];
  for (const c of cats) {
    const path = [...parentPath, c.slug];
    const labels = [...parentLabels, c.label];
    out.push({ path, label: c.label, fullLabel: labels.join(" · "), depth: path.length });
    if (c.children) out.push(...flattenCategories(c.children, path, labels));
  }
  return out;
}

/** True if a project belongs to (or under) the given category path. */
export function inCategory(project: PortfolioProject, path: string[]) {
  return path.every((slug, i) => project.path[i] === slug);
}

/** Count of projects under a category path (used to hide empty categories). */
export function countIn(path: string[]) {
  return projects.filter((p) => inCategory(p, path)).length;
}

export const sortedProjects = [...projects].sort((a, b) => (a.date < b.date ? 1 : -1));
