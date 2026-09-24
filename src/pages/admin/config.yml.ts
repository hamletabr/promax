export const prerender = true;

/**
 * The admin console's config, served at /admin/config.yml.
 *
 * `local_backend` lets the console edit files on a developer's own machine
 * without logging in. Sveltia only ever honours it on localhost, but it is
 * emitted in dev only so the setting never reaches the public site at all.
 */
const CONFIG = `# ============================================================================
#  Admin console for promax-service.com  (/admin)
#
#  Anything listed here is editable by the owner in the browser. Anything NOT
#  listed stays safely in code — that deliberately includes the SEO-tuned
#  service and city page copy.
# ============================================================================

backend:
  name: github
  repo: hamletabr/promax
  branch: main

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

publish_mode: simple

collections:
  # ── Specials & coupons ────────────────────────────────────────────────────
  - name: specials
    label: "Specials & Coupons"
    description: "The coupons on /specials, the homepage strip and the exit popup."
    files:
      - name: specials
        label: "Coupons"
        file: "src/content/settings/specials.json"
        fields:
          - name: specials
            label: "Coupons"
            label_singular: "Coupon"
            widget: list
            summary: "{{fields.value}} — {{fields.title}}"
            fields:
              - { name: value, label: "Big text (e.g. $99, FREE)", widget: string }
              - { name: title, label: "Offer title", widget: string }
              - { name: desc, label: "Description", widget: text }
              - { name: fine, label: "Fine print", widget: text }
              - name: featured
                label: "Also show on the homepage"
                widget: boolean
                default: false
                required: false
                hint: "Keep about three of these switched on."

  # ── Promo bar + exit offer ────────────────────────────────────────────────
  - name: promo
    label: "Promo Bar & Popup"
    files:
      - name: promo
        label: "Promo bar and exit popup"
        file: "src/content/settings/promo.json"
        fields:
          - name: promoBar
            label: "Top promo bar"
            widget: object
            fields:
              - { name: enabled, label: "Show the bar", widget: boolean, default: true }
              - { name: text, label: "Message", widget: string }
              - { name: cta, label: "Button text", widget: string }
              - { name: href, label: "Button link", widget: string, hint: "e.g. /specials" }
          - name: exitOffer
            label: "Exit popup (shown when a visitor is about to leave)"
            widget: object
            fields:
              - { name: enabled, label: "Show the popup", widget: boolean, default: true }
              - { name: headline, label: "Headline", widget: string }
              - { name: sub, label: "Supporting text", widget: text }
              - { name: offer, label: "The offer", widget: string }

  # ── Business details ──────────────────────────────────────────────────────
  - name: business
    label: "Phone, Hours & Email"
    files:
      - name: business
        label: "Business details"
        file: "src/content/settings/business.json"
        fields:
          - { name: phone, label: "Phone number", widget: string, hint: "Shown everywhere and used for the call buttons." }
          - { name: email, label: "Email address", widget: string }
          - { name: hours, label: "Opening hours", widget: string }
          - { name: hoursShort, label: "Short hours (for tight spaces)", widget: string }
          - { name: license, label: "License number", widget: string }
          - { name: serviceArea, label: "Service area", widget: string }

  # ── Reviews ───────────────────────────────────────────────────────────────
  - name: reviews
    label: "Customer Reviews"
    files:
      - name: reviews
        label: "Reviews"
        file: "src/content/settings/reviews.json"
        fields:
          - name: reviews
            label: "Reviews"
            label_singular: "Review"
            widget: list
            summary: "{{fields.name}} — {{fields.service}}"
            fields:
              - { name: id, label: "Short id (letters and hyphens)", widget: string }
              - { name: name, label: "Customer name", widget: string }
              - { name: rating, label: "Stars", widget: number, default: 5, min: 1, max: 5, value_type: int }
              - { name: text, label: "What they said", widget: text }
              - { name: date, label: "When (as Google shows it)", widget: string, required: false }
              - { name: service, label: "Service", widget: string, required: false }
              - { name: location, label: "City", widget: string, required: false }
              - { name: source, label: "Source", widget: string, required: false, default: "Google" }
              - { name: featured, label: "Show on the homepage", widget: boolean, default: false, required: false }
              - { name: tech, label: "Technician mentioned", widget: string, required: false }
              - { name: ownerResponse, label: "Your reply", widget: text, required: false }
              - { name: photo, label: "Job photo", widget: image, required: false }
              - { name: truncated, label: "Google cut the text off", widget: boolean, default: false, required: false }
              - { name: ownerResponseTruncated, label: "Reply was cut off", widget: boolean, default: false, required: false }
              - { name: googlePhotos, label: "Photos they posted on Google", widget: number, required: false, value_type: int }
              - { name: avatar, label: "Avatar image", widget: image, required: false }

  # ── Blog ──────────────────────────────────────────────────────────────────
  - name: blog
    label: "Blog Posts"
    folder: "src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{slug}}"
    extension: md
    format: frontmatter
    fields:
      - { name: title, label: "Title", widget: string }
      - { name: seoTitle, label: "Shorter title for Google", widget: string, required: false, hint: "Only needed if the title above is longer than about 60 characters." }
      - { name: description, label: "Summary for search results", widget: text, hint: "Aim for 140-155 characters." }
      - { name: date, label: "Date", widget: datetime, date_format: "YYYY-MM-DD", time_format: false, picker_utc: true }
      - { name: image, label: "Header image", widget: image }
      - { name: tags, label: "Tags", widget: list, required: false }
      - { name: body, label: "Post", widget: markdown }
`;

export function GET() {
  const local = import.meta.env.DEV ? "\nlocal_backend: true\n" : "";
  return new Response(CONFIG + local, {
    headers: { "content-type": "text/yaml; charset=utf-8" },
  });
}
