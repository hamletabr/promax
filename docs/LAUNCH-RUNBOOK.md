# promax-service.com cutover runbook (WordPress on SiteGround → Astro on Cloudflare Pages)

Current state (verified 2026-09-24): nameservers ns1/ns2.siteground.net; WordPress 6.8.9
served via Google Cloud LB IPs; Google Workspace email on the domain; GTM-5WRQ9STK.

## 0. Before touching DNS (owner)
- Create a free Cloudflare account → Workers & Pages → Create → Pages → Connect to Git →
  `hamletabr/promax`, branch `main`. Framework preset: Astro. Build `npm run build`,
  output `dist`, Node 22. Deploy. You get `<project>.pages.dev`.
- In Pages → Settings → Environment variables: none required.
- Review the site on the pages.dev URL. `/admin` will show the Sveltia login (GitHub
  OAuth not wired yet — see §4).

## 1. Add the domain to Cloudflare WITHOUT moving nameservers yet
- Cloudflare → Add a site → promax-service.com → Free plan. Cloudflare scans and imports
  existing records; VERIFY these exist in the new zone before proceeding (they carry email):
  - MX   @   1  smtp.google.com
  - TXT  @   v=spf1 include:_spf.google.com ~all
  - TXT  @   apple-domain-verification=rNZtWUpVVg1RednTq7hod9FkNjXuKJGohLmpqayJb-w
  - TXT  _dmarc   v=DMARC1; p=none; rua=mailto:postmaster@promax-service.com, mailto:dmarc@promax-service.com; pct=100; adkim=s; aspf=s
    (the old zone also had a misplaced DMARC record on the apex — drop that one)
  - Any DKIM record (google._domainkey) — check Google Admin → Apps → Gmail → Authenticate email
- Delete the imported A/AAAA/CNAME records for @ and www that point at the old host.
- Pages → Custom domains → add `promax-service.com` and `www.promax-service.com`.
  Cloudflare creates the CNAME records automatically inside this zone.
- Search Console: Settings → Ownership → Domain name provider → add the google-site-verification
  TXT to the Cloudflare zone now (so verification survives the move).

## 2. Move nameservers (the actual cutover — pick a quiet time)
- At the registrar (check `whois promax-service.com`), set nameservers to the two Cloudflare
  gives you. Propagation is minutes to a few hours; the old site keeps serving until then.
- Cloudflare SSL/TLS → Full (strict); Edge Certificates → Always Use HTTPS on; Automatic
  HTTPS Rewrites on.
- Rules → Redirect Rules → add `www.promax-service.com/*` → `https://promax-service.com/$1` 301
  (or the reverse — pick one canonical host; the site uses the apex).

## 3. Within the first hour after DNS flips
- `curl -I https://promax-service.com/heat-pump/` → 301 → /services/heat-pump/
- `curl -I https://promax-service.com/locations-sanmateo/` → 301 → /locations/san-mateo/
- Send email to and from support@promax-service.com — confirms MX/SPF survived.
- Search Console → Sitemaps → submit https://promax-service.com/sitemap-index.xml
- GTM: open tagmanager.google.com → GTM-5WRQ9STK → Preview on the live site → confirm tags fire.
- Google Business Profile: website URL unchanged; confirm address = 3033 Kaiser Dr Unit D,
  Santa Clara 95051 (matches new schema).
- Pages → Analytics: confirm traffic. Watch Search Console Coverage for 404s for two weeks.

## 4. Admin console login (after launch, 20 minutes)
- Sveltia needs a GitHub OAuth app + a tiny auth worker. Cloudflare Workers → create from
  https://github.com/sveltia/sveltia-cms-auth (deploy button), set GITHUB_CLIENT_ID/SECRET
  from a GitHub OAuth App whose callback is the worker URL, and `ALLOWED_DOMAINS=promax-service.com`.
- Add `base_url: https://<worker>.workers.dev` under `backend:` in src/pages/admin/config.yml.ts.
- Optional but recommended: Zero Trust → Access → Applications → self-hosted →
  `promax-service.com/admin*`, policy: emails you allow. Free for ≤50 users.
- Owner needs a GitHub account added as a collaborator (write) on hamletabr/promax; turn on 2FA.

## Alternative: stay on SiteGround (simpler cutover — no DNS change)

The site is a folder of static files, so the existing SiteGround account can
serve it. Nothing about DNS or email changes.

1. GitHub → Settings → Secrets and variables → Actions → add `FTP_HOST`,
   `FTP_USERNAME`, `FTP_PASSWORD` from a SiteGround FTP account
   (Site Tools → Files → FTP Accounts → create one for the site).
2. Site Tools → Backups → create a backup of the WordPress site (this is the rollback).
3. Site Tools → File Manager → `public_html` → delete the WordPress files
   (`wp-*`, `index.php`, `.htaccess`, `xmlrpc.php`…). The database can stay.
4. GitHub → Actions → "Deploy to SiteGround" → Run workflow. It builds and
   uploads `dist/` — including `.htaccess`, which carries the 301 map,
   HTTPS/canonical-host redirect, headers and caching.
5. Same checks as §3: `curl -I https://promax-service.com/heat-pump/` → 301,
   `/locations-sanmateo/` → 301, submit the sitemap, confirm GTM fires.
6. Every later push (admin-console edits, new photo folders) deploys itself.

Rollback: Site Tools → Backups → restore. Migrate to Cloudflare Pages later
if you want to drop the hosting bill; the repo already carries both configs.

## 5. Leave WordPress up for 30 days (don't cancel SiteGround yet)
- Keeps a rollback: set nameservers back and the old site returns.
- After 30 days with clean Search Console, cancel.

## Still owed by the owner (site works without, but better with)
- Formspree form ID → src/data/site.ts formEndpoint (until then every form routes to the
  Housecall Pro booking page, which works today).
- Confirm business email: old site used info@, new site says support@.
- Financing partner name / representative APR / apply link → src/pages/financing.astro TODO.
- Cities for the 5 portfolio jobs (add `city:` lines to their info.txt).
