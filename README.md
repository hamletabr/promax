# Promax Service Group — Astro site

Website for Promax Service Group, a licensed HVAC contractor in San Jose, CA.
Static site built with Astro — fast, SEO-optimized, host-independent.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview
```

## Deploy

`npm run build` produces a plain static site in `dist/` — upload it to any
static host (Vercel, Cloudflare Pages, GitHub Pages, shared hosting, S3…).
No server, no environment variables, no host-specific features required.

After launch: add the site to [Google Search Console](https://search.google.com/search-console)
and submit `https://promax-service.com/sitemap-index.xml`.

## Lead routing (estimator + contact form) — 5-minute setup

Both the **online estimator** (`/estimate`) and the **contact form** POST every
lead to one configurable endpoint. Until it's configured, they gracefully fall
back to opening the visitor's email app with the lead pre-filled.

1. Create a free account at [formspree.io](https://formspree.io) → **New form**.
2. Set the form's notification email. Two options:
   - your regular inbox (`support@promax-service.com`), or
   - **Housecall Pro**: use your HCP lead-intake email so submissions appear
     as leads automatically (in HCP: Settings → Leads / online booking intake
     address), or set a Gmail forwarding rule from your inbox into it.
     For deeper integration later, Zapier has a Formspree → Housecall Pro zap.
3. Copy the endpoint (`https://formspree.io/f/xxxxxxx`) into `formEndpoint`
   in [src/data/site.ts](src/data/site.ts).

Every estimator lead includes: name, phone, email, city, house size, floors,
priorities, ductwork answer + duct count, and the exact price range shown.

## AI chat widget (bottom-right corner)

Every page has a chat button. Out of the box it answers from built-in company
knowledge (services, hours, price ranges) — no setup needed. To upgrade it to
a real LLM (free):

1. Create a free Gemini API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
2. Restrict the key to `https://promax-service.com/*` (Application
   restrictions → Websites) so nobody else can use it.
3. Paste it into `ai.geminiApiKey` in [src/data/site.ts](src/data/site.ts).

Either way, the **"Send this conversation to our team"** button emails the
full transcript + the visitor's name/phone through the same lead endpoint as
the forms — so chat conversations become leads too.

## Editing content — everything lives in `src/data/`

| File | What it controls |
|---|---|
| `site.ts` | phone, email, hours, license, stats, badges, nav, **lead endpoint**, **promo bar**, **exit-offer popup**, AI chat key |
| `estimator.ts` | **estimator pricing**: sqft tiers & ranges, per-duct cost, options |
| `specials.ts` | **coupons** on /specials, the homepage strip & exit popup |
| `services.ts` | all 22 service pages (copy, SEO titles/descriptions, FAQs) |
| `locations.ts` | 15 Bay Area city pages |
| `portfolio.ts` | **Our Work page** — categories, subcategories & projects |
| `reviews.ts` | customer reviews (homepage + /reviews page) |
| `../content/blog/*.md` | **blog posts** — add a .md file and it appears on /blog |

### Adding portfolio projects (Our Work page)

1. Drop job photos into a new folder under `public/images/portfolio/`
   (e.g. `public/images/portfolio/willow-glen-mitsubishi/`).
2. Open `src/data/portfolio.ts` and add a project entry — full step-by-step
   instructions are at the top of that file. Categories and subcategories
   (HVAC → Mitsubishi/Bryant → Single Zone / Multi Zone → VRV / Ductless,
   Water Heaters, …) are defined in the same file and fully editable.

## Structure

```
src/
  data/            # ← all editable content (see table above)
  layouts/
    Layout.astro   # SEO head (canonical, OG, schema.org HVACBusiness JSON-LD)
  components/      # Header, Footer, heroes, FAQ (FAQPage schema), Gallery teaser…
  pages/
    index.astro                # homepage
    estimate.astro             # online estimator wizard (instant price range)
    our-work.astro             # filterable portfolio + lightbox
    specials.astro             # coupons w/ claim-to-lead modal
    financing.astro            # financing plans + rebate explainers
    reviews.astro              # all reviews + aggregate rating schema
    about.astro  emergency.astro
    blog/                      # blog index + posts (content collection)
    contact.astro              # contact form (lead endpoint + mailto fallback)
    thank-you.astro  404.astro
    privacy-policy.astro  terms-of-service.astro
    services/[slug].astro      # generates all service pages (Service schema)
    locations/[slug].astro     # generates all location pages
  styles/global.css            # design tokens (Trust & Authority system)
public/
  robots.txt  og-image.jpg  apple-touch-icon.png
  images/                      # photos; images/portfolio/ for job photos
.claude/skills/ui-ux-pro-max/  # design-intelligence skill used for the redesign
```

Design system: "Signage" — brand orange + true black + white + neutral greys,
Barlow Condensed display + Barlow UI/body (industrial work-truck-lettering
voice). Built with the impeccable, taste, animations, and ui-ux-pro-max skills
(all installed under `.claude/skills/` — reuse them for future design work).
Motion follows the animations skill: custom ease-out curves, sub-300ms UI
transitions, press feedback on buttons, staggered reveals that never gate
content visibility.

SEO built in: per-page titles & meta descriptions, canonical URLs, Open Graph +
Twitter cards, schema.org JSON-LD (HVACBusiness, Service, FAQPage, Breadcrumbs,
ImageGallery), `sitemap-index.xml` (auto-generated at build), robots.txt.

## After launch (SEO checklist)

- Submit the sitemap in Google Search Console.
- Keep the Google Business Profile phone/hours identical to the site.
- Add real installation photos to the portfolio regularly — Google rewards
  fresh, geo-relevant content.
- Ask happy customers for Google reviews and add them to `src/data/reviews.ts`.
