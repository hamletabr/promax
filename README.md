# Promax Service Group — Astro site

Rebuild of the Promax HVAC (San Jose) website in Astro, migrated from WordPress.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview
```

## Structure

```
src/
  data/
    site.ts         # business info (phone, email, hours, promos, brands, nav)
    services.ts     # 21 service pages (11 marked primary -> homepage grid)
    locations.ts    # 15 Bay Area city pages
  layouts/
    Layout.astro    # <head> SEO + Header + Footer
  components/
    Header.astro     Footer.astro
    PageHero.astro   # inner-page hero
    PromoBadges.astro  WhyChooseUs.astro  Stages.astro
    FAQ.astro  CallBanner.astro
  pages/
    index.astro                 # homepage
    contact.astro
    privacy-policy.astro  terms-of-service.astro
    services/[slug].astro       # generates all service pages
    locations/[slug].astro      # generates all location pages
  styles/global.css             # brand design tokens + base styles
public/images/                  # logo, favicon, hero + service photos (from old site)
```

Edit content in `src/data/*.ts` — pages regenerate automatically.

## Brand
- Orange `#de6800` / `#fe5e00`, amber `#ffb300`, slate `#2f3a45`
- Fonts: Poppins (headings) + Inter (body), via Google Fonts

## TODO before launch
- Wire the contact form to a backend (Formspree / Netlify Forms / API route).
- Swap placeholder testimonials in `src/pages/index.astro` for real reviews.
- Confirm business hours (old site listed both 7AM–10PM and 8AM–8PM).
- Add `@astrojs/sitemap` and per-page JSON-LD LocalBusiness schema for SEO.
- Replace remaining stock service photos with branded ones if desired.
