// ============================================================================
// SPECIALS & COUPONS — powers /specials, the homepage strip, and the
// exit-intent offer popup. EDIT FREELY — every claim becomes an email lead.
// ----------------------------------------------------------------------------
//   value  – the big text on the coupon ("$99", "$500 OFF", "FREE")
//   title  – what the offer is
//   desc   – one supporting sentence (sell the benefit)
//   fine   – fine print (kept honest: expiration, conditions)
//   featured – true = also shown on the homepage strip (keep ~3)
//
// The owner edits these in the admin console (/admin) — this file just
// loads what the CMS saved into src/content/settings/specials.json.
// ============================================================================
import data from "../content/settings/specials.json";

export type Special = {
  value: string;
  title: string;
  desc: string;
  fine: string;
  featured?: boolean;
};

export const specials: Special[] = data.specials;

export const featuredSpecials = specials.filter((s) => s.featured);
