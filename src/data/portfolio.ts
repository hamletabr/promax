// ============================================================================
// OUR WORK / PORTFOLIO — Promax Service Group
// ----------------------------------------------------------------------------
// THIS FILE IS THE ONLY PLACE YOU EDIT to manage the portfolio page (/our-work).
//
// ── HOW TO ADD A JOB (the easy way) ──────────────────────────────────────────
// 1. Make a folder for the job under  src/images/portfolio/
//      e.g.  src/images/portfolio/willow-glen-mitsubishi/
// 2. Drop the photos straight in — FULL SIZE IS FINE. Photos taken on your
//    phone need no resizing: the site automatically shrinks them, converts
//    them to WebP, and sets their dimensions. Photos are shown in filename
//    order, so name them 01.jpg, 02.jpg, … to control the order. The first
//    one becomes the cover.
// 3. Add a short entry to `projects` below with  folder: "willow-glen-mitsubishi"
//    — you do NOT list the individual photos.
//
// ── THE FIELDS ───────────────────────────────────────────────────────────────
//   title    – short job name shown on the card (city + system works great)
//   path     – which category it belongs to, e.g. ["mini-splits", "multi-zone"]
//              (only use slugs from the `categories` tree below)
//   brand    – "Mitsubishi Electric", "Bryant", … Brand filter buttons are
//              built automatically from whatever you type here, so there is
//              no brand list to maintain — just spell it consistently.
//   location – city, e.g. "San Jose, CA"
//   date     – "YYYY-MM" (newest shown first)
//   summary  – 1–3 sentences. Mention the city, the equipment and the result —
//              Google indexes this text, so keep it descriptive.
//   folder   – folder name under src/images/portfolio/ (preferred), OR
//   images   – an explicit list of paths under public/ (used by the
//              placeholder entries below; `folder` wins if both are set).
//
// ── HOW TO ADD A CATEGORY ────────────────────────────────────────────────────
// Edit the `categories` tree below. Categories are organised BY SYSTEM TYPE,
// because that is how customers search. Brands are a separate filter row, so
// never add a brand as a category. Empty categories hide themselves, so you
// can build the tree out ahead of the photos.
// ============================================================================

import { statSync } from "node:fs";
import path from "node:path";
import type { ImageMetadata } from "astro";
import { locations } from "./locations";
import { exifDate } from "../lib/image-date";

const locationCities = locations.map((l) => l.city);

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
  /** Folder name under src/images/portfolio/ — photos are picked up automatically. */
  folder?: string;
  /** Explicit public/ paths. Only used when `folder` is not set. */
  images?: PortfolioImage[];
};

// ─── CATEGORY TREE ──────────────────────────────────────────────────────────
export const categories: PortfolioCategory[] = [
  {
    slug: "mini-splits",
    label: "Ductless Mini Splits",
    children: [
      { slug: "single-zone", label: "Single Zone" },
      { slug: "multi-zone", label: "Multi Zone" },
    ],
  },
  {
    slug: "ac-heat-pumps",
    label: "Central AC & Heat Pumps",
    children: [
      { slug: "air-conditioners", label: "Air Conditioners" },
      { slug: "heat-pumps", label: "Heat Pumps" },
    ],
  },
  { slug: "furnaces", label: "Furnaces" },
  { slug: "vrf-systems", label: "VRF / VRV Multi-Zone" },
  { slug: "ductwork", label: "Ductwork & Zoning" },
  {
    slug: "water-heaters",
    label: "Water Heaters",
    children: [
      { slug: "tank", label: "Tank" },
      { slug: "tankless", label: "Tankless" },
      { slug: "heat-pump-water-heaters", label: "Heat Pump Water Heaters" },
    ],
  },
  { slug: "commercial", label: "Commercial & Rooftop" },
  { slug: "other", label: "More Projects" },
  // Add more categories here — by SYSTEM TYPE, never by brand.
];

// ─── PROJECTS (newest first) ────────────────────────────────────────────────
// NOTE: the photos below are representative placeholders from the current
// site. Replace them with real installation photos in
// public/images/portfolio/ as described at the top of this file.
export const projects: PortfolioProject[] = [
  // Hand-written entries go here only when a job cannot be expressed as a
  // photo folder. Real work lives in src/images/portfolio/<job>/ — see
  // HOW-TO-ADD-PHOTOS.txt there. Never invent projects: the page presents
  // every card as a real installation.
];

// ─── helpers (no need to edit below this line) ──────────────────────────────

/**
 * Every photo under src/images/portfolio/, keyed by file path. Vite resolves
 * this at build time, which is what lets you add a job by dropping a folder of
 * photos in — no filenames to type out here.
 */
const portfolioFiles = import.meta.glob<ImageMetadata>(
  "/src/images/portfolio/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,avif}",
  { eager: true, import: "default" }
);

/** A photo ready for the page: either a build-optimised import or a public/ path. */
export type ResolvedImage = { source: ImageMetadata | string; alt: string };

/** Photos for a project — from its folder when set, otherwise its explicit list. */
export function imagesOf(p: PortfolioProject): ResolvedImage[] {
  const baseAlt = `${p.title} — ${p.location}`;

  if (p.folder !== undefined) {
    // "." = loose photos sitting directly in src/images/portfolio/
    const root = p.folder === ".";
    const prefix = root ? "/src/images/portfolio/" : `/src/images/portfolio/${p.folder}/`;
    const found = Object.keys(portfolioFiles)
      .filter((k) => k.startsWith(prefix) && (!root || !k.slice(prefix.length).includes("/")))
      // Same order as the folder shows in Finder: by filename, natural sort so
      // 2.jpg comes before 10.jpg. Rename a photo to change where it lands.
      .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
    if (found.length) {
      return found.map((k, i) => ({
        source: portfolioFiles[k],
        alt: found.length > 1 ? `${baseAlt} (photo ${i + 1})` : baseAlt,
      }));
    }
    // folder declared but no photos in it yet — fall through to `images`
  }

  return (p.images ?? []).map((img) =>
    typeof img === "string" ? { source: img, alt: baseAlt } : { source: img.src, alt: img.alt }
  );
}

/** Brand filter buttons are derived from the projects — nothing to maintain. */
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

// ─── Jobs added by dropping in a folder ─────────────────────────────────────
// A folder under src/images/portfolio/ that contains photos AND an info.txt is
// turned into a project automatically — nothing in this file needs editing.
// See src/images/portfolio/HOW-TO-ADD-PHOTOS.txt for the owner-facing version.

const infoFiles = import.meta.glob<string>("/src/images/portfolio/*/info.txt", {
  eager: true,
  query: "?raw",
  import: "default",
});

const KEYS: Record<string, string> = {
  title: "title",
  category: "category", path: "category", type: "category",
  brand: "brand", make: "brand",
  city: "city", location: "city",
  date: "date",
  summary: "summary", description: "summary",
};

/**
 * Parse an OPTIONAL "key: value" info.txt. Nothing here is required — it only
 * exists to override what we work out from the folder name.
 */
function parseInfo(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  let last = "";
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const m = /^([A-Za-z]+)\s*:\s*(.*)$/.exec(line);
    const key = m && KEYS[m[1].toLowerCase()];
    if (key) {
      out[key] = m[2].trim();
      last = key;
    } else if (last) {
      out[last] = `${out[last]} ${line}`.trim();
    }
  }
  return out;
}

// ─── Working things out from the folder name ────────────────────────────────
// The whole point: name a folder "Campbell furnace swap", drop photos in, done.
// First match wins, so the most specific patterns are listed first.

const CATEGORY_HINTS: [RegExp, string][] = [
  [/tankless/i, "water-heaters/tankless"],
  [/(heat.?pump.?water|hpwh)/i, "water-heaters/heat-pump-water-heaters"],
  [/(water.?heater|boiler|\btank\b)/i, "water-heaters/tank"],
  [/\b(vrf|vrv)\b/i, "vrf-systems"],
  [/(rooftop|\brtu\b|commercial|package.?unit)/i, "commercial"],
  [/(duct(work)?|zoning|damper|aeroseal|plenum)/i, "ductwork"],
  [/furnace/i, "furnaces"],
  [/(mini.?split|ductless|split).*(multi|dual|two|three|four|[2-9].?(zone|room|head)|zones)/i, "mini-splits/multi-zone"],
  [/(multi|dual|two|three|four|[2-9].?(zone|room|head)).*(mini.?split|ductless|split)/i, "mini-splits/multi-zone"],
  [/(mini.?split|ductless)/i, "mini-splits/single-zone"],
  [/heat.?pump/i, "ac-heat-pumps/heat-pumps"],
  [/(air.?condition|\bac\b|a\/c|condenser|cooling|coil)/i, "ac-heat-pumps/air-conditioners"],
];

// left = what you might type, right = how it should read on the site
const BRAND_HINTS: [RegExp, string][] = [
  [/mitsubishi/i, "Mitsubishi Electric"],
  [/bryant/i, "Bryant"],
  [/carrier/i, "Carrier"],
  [/trane/i, "Trane"],
  [/lennox/i, "Lennox"],
  [/daikin/i, "Daikin"],
  [/rheem/i, "Rheem"],
  [/goodman/i, "Goodman"],
  [/navien/i, "Navien"],
  [/(cooper|c&h)/i, "Cooper & Hunter"],
  [/fujitsu/i, "Fujitsu"],
];

const CITY_HINTS: string[] = [
  "San Jose", ...locationCities,
];

const firstMatch = (text: string, table: [RegExp, string][]) =>
  table.find(([re]) => re.test(text))?.[1];

const titleFromSlug = (slug: string) =>
  slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

/**
 * Newest photo in the folder decides the job date — no typing required.
 *
 * Prefers the EXIF capture date, because photos exported out of the macOS
 * Photos app all get today's file timestamp, which would otherwise stamp every
 * job with the day they were exported. Falls back to the file date when a
 * photo has no EXIF (screenshots, PNGs, already-processed images).
 */
function newestMonth(paths: string[]): string {
  let newest = 0;
  for (const rel of paths) {
    const abs = path.join(process.cwd(), rel.replace(/^\//, ""));
    const shot = exifDate(abs)?.getTime();
    let t = shot ?? 0;
    if (!t) {
      try {
        t = statSync(abs).mtimeMs;
      } catch {
        t = 0;
      }
    }
    if (t > newest) newest = t;
  }
  return new Date(newest || Date.now()).toISOString().slice(0, 7);
}

/** A "2026-07" or "2026 07" anywhere in the folder name pins the date by hand. */
function monthInName(name: string): string | undefined {
  const m = /\b(20\d{2})[-_. ](0[1-9]|1[0-2])\b/.exec(name);
  return m ? `${m[1]}-${m[2]}` : undefined;
}

function buildFolderProjects(): PortfolioProject[] {
  const validPaths = new Set(flattenCategories().map((c) => c.path.join("/")));
  const takenFolders = new Set(projects.map((p) => p.folder).filter(Boolean));
  const out: PortfolioProject[] = [];

  // group every photo by the folder it sits in ("" = dropped in loose)
  const byFolder = new Map<string, string[]>();
  for (const key of Object.keys(portfolioFiles)) {
    const rest = key.replace("/src/images/portfolio/", "");
    const folder = rest.includes("/") ? rest.slice(0, rest.indexOf("/")) : "";
    if (folder.startsWith("_")) continue;
    if (!byFolder.has(folder)) byFolder.set(folder, []);
    byFolder.get(folder)!.push(key);
  }

  for (const [folder, files] of [...byFolder].sort()) {
    if (takenFolders.has(folder)) continue; // described by hand in `projects`

    // loose photos, not in any folder — keep them rather than lose them
    if (folder === "") {
      out.push({
        title: "Recent Work",
        path: ["other"],
        location: "",
        date: newestMonth(files),
        summary: "",
        folder: ".",
      });
      continue;
    }

    const raw = infoFiles[`/src/images/portfolio/${folder}/info.txt`];
    const info = raw === undefined ? {} : parseInfo(raw);
    const name = folder.replace(/[-_]+/g, " ");

    // A folder named like "Beverly Dr" or "1234 Byron St" is a customer's
    // address. Publishing that next to photos of their house is a privacy
    // problem, so it is excluded until it gets a real title (info.txt) or a
    // descriptive name.
    const looksLikeStreet =
      /\b(dr|drive|st|street|ct|court|cir|circle|ln|lane|ave|avenue|blvd|rd|road|way|loop|pl|place|ter|terrace)\.?$/i.test(name.trim()) ||
      /^\d{2,6}\s+\w/.test(name.trim());
    if (looksLikeStreet && !info.title) {
      console.warn(
        `[portfolio] "${folder}" looks like a street address, so it is NOT on the site. ` +
          `Rename the folder to describe the job (e.g. "Mitsubishi 3 zone mini split") ` +
          `or add an info.txt with a title.`
      );
      continue;
    }

    // info.txt wins where it's filled in; otherwise read it off the folder name
    let category = (info.category || "").replace(/^\/+|\/+$/g, "");
    if (!validPaths.has(category)) {
      if (category) {
        console.warn(
          `[portfolio] "${folder}": info.txt category "${category}" isn't one we ` +
            `have, so the folder name was used instead.`
        );
      }
      category = firstMatch(name, CATEGORY_HINTS) ?? "other";
    }
    if (category === "other") {
      console.warn(
        `[portfolio] "${folder}" went under "More Projects" because the folder ` +
          `name doesn't say what the job was. Put a word like furnace, mini ` +
          `split, heat pump, ductwork, water heater or rooftop in the name.`
      );
    }

    out.push({
      title: info.title || titleFromSlug(folder),
      path: category.split("/"),
      brand: info.brand || firstMatch(name, BRAND_HINTS),
      location:
        info.city ||
        CITY_HINTS.find((c) => new RegExp(`\\b${c}\\b`, "i").test(name)) ||
        "",
      date:
        (/^\d{4}-\d{2}$/.test(info.date || "") ? info.date : undefined) ??
        monthInName(name) ??
        newestMonth(files),
      summary: info.summary || "",
      folder,
    });
  }
  return out;
}

export const folderProjects = buildFolderProjects();

/** Everything on the Our Work page: folder-added jobs plus hand-written ones. */
export const allProjects: PortfolioProject[] = [...folderProjects, ...projects];

/** True if a project belongs to (or under) the given category path. */
export function inCategory(project: PortfolioProject, path: string[]) {
  return path.every((slug, i) => project.path[i] === slug);
}

/** Count of projects under a category path (used to hide empty categories). */
export function countIn(path: string[]) {
  return allProjects.filter((p) => inCategory(p, path)).length;
}

/** Brand filter buttons are derived from the projects — nothing to maintain. */
export const brands = [
  ...new Set(allProjects.map((p) => p.brand).filter((b): b is string => Boolean(b))),
].sort((a, b) => a.localeCompare(b));

export function countBrand(brand: string) {
  return allProjects.filter((p) => p.brand === brand).length;
}

export const sortedProjects = [...allProjects].sort((a, b) => (a.date < b.date ? 1 : -1));
