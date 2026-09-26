// ============================================================
// Customer reviews — Promax Service Group (Google Business Profile)
// ------------------------------------------------------------
// Collected 2026-06. Star ratings were not shown in the source
// paste; all reviews are clearly positive so `rating` is set to 5
// (verify against Google if exact stars matter).
//
// `date` keeps Google's relative wording as shown.
// `truncated` = the original text was cut off with "… More" on
//   Google; paste the full version to complete it.
// `googlePhotos` = how many photos this reviewer attached on
//   Google. These are the reviews we can pair with a real photo.
// `photo` is blank for now — drop files in /public/images/reviews/
//   and fill this in when we map reviews -> photos.
// ============================================================

import data from "../content/settings/reviews.json";

export type Review = {
  id: string;
  name: string;
  rating: number;              // 1–5
  date?: string;               // as shown on Google, e.g. "7 months ago"
  text: string;
  truncated?: boolean;         // true if Google text was cut off ("… More")
  source?: string;             // "Google" | "Yelp" | "Thumbtack" ...
  location?: string;
  service?: string;            // inferred from the review text
  category?: "hvac" | "electrical" | "handyman"; // classified from the review text
  featured?: boolean;          // show on the homepage (keep this to ~3 best HVAC reviews)
  tech?: string;               // technician mentioned, if any
  googlePhotos?: number;       // # of photos this reviewer posted on Google
  ownerResponse?: string;      // business reply
  ownerResponseTruncated?: boolean;
  photo?: string;              // mapped job photo, e.g. "/images/reviews/sam-1.jpg"
  avatar?: string;
};

export const reviews: Review[] = data.reviews as Review[];

export default reviews;
