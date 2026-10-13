import { services } from "../data/services";
import { locations } from "../data/locations";
import { site } from "../data/site";

export const prerender = true;

/**
 * /llms.txt — a plain-text index for AI engines (llmstxt.org). Generated from
 * the same data as the pages, so it never drifts.
 */
export function GET() {
  const base = site.url;
  const primary = services.filter((s) => s.primary);
  const rest = services.filter((s) => !s.primary);
  const line = (s: { slug: string; name: string; metaDesc: string }) =>
    `- [${s.name}](${base}/services/${s.slug}/): ${s.metaDesc}`;

  const body = `# ${site.name}

> Licensed HVAC contractor (CSLB C-20 #1133885) serving San Jose and Santa Clara County, California. Mitsubishi Diamond Contractor, Bryant Factory Authorized Dealer, Navien Service Specialist. ${site.promises.repair}. ${site.promises.estimate}. ${site.promises.diagnostic}. Phone ${site.phone}. Online booking: ${site.bookingUrl}

## Core services

${primary.map(line).join("\n")}

## More services

${rest.map(line).join("\n")}

## Service areas

- [All service areas](${base}/locations/)
${locations.map((l) => `- [HVAC in ${l.city}](${base}/locations/${l.slug}/)`).join("\n")}

## Other pages

- [Instant estimate](${base}/estimate/): repair ranges and installation price ranges for San Jose homes
- [Emergency service](${base}/emergency/): ${site.promises.repair}
- [Specials & coupons](${base}/specials/)
- [Financing & rebates](${base}/financing/)
- [Our work](${base}/our-work/): photos of completed installations
- [Reviews](${base}/reviews/)
- [Blog](${base}/blog/)
- [Contact](${base}/contact/)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
