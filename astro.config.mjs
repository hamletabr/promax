// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://promax-service.com',
  // Old WordPress URLs -> new paths. public/_redirects gives true 301s on
  // Cloudflare Pages / Netlify; this block makes every other host emit a
  // redirect page too, so no ranking URL 404s at cutover.
  redirects: {
    "/air-conditioner-installation": "/services/air-conditioner-installation",
    "/air-conditioner-maintenance": "/services/air-conditioner-maintenance",
    "/air-conditioner-repair": "/services/air-conditioner-repair",
    "/air-conditioner": "/services/air-conditioner",
    "/contact-us": "/contact",
    "/ductless-split-systems": "/services/ductless-split-systems",
    "/furnace-installation": "/services/furnace-installation",
    "/furnace-repair": "/services/furnace-repair",
    "/furnace": "/services/furnace",
    "/heat-pump": "/services/heat-pump",
    "/hvac-ductwork": "/services/hvac-ductwork",
    "/hvac-installation": "/services/hvac-installation",
    "/hvac-repair": "/services/hvac-repair",
    "/hvac": "/services/hvac",
    "/indoor-air-quality-system": "/services/indoor-air-quality-system",
    "/locations-atherton": "/locations/atherton",
    "/locations-belmont": "/locations/belmont",
    "/locations-campbell": "/locations/campbell",
    "/locations-cupertino": "/locations/cupertino",
    "/locations-fremont": "/locations/fremont",
    "/locations-los-altos": "/locations/los-altos",
    "/locations-los-gatos": "/locations/los-gatos",
    "/locations-milpitas": "/locations/milpitas",
    "/locations-mountain-view": "/locations/mountain-view",
    "/locations-palo-alto": "/locations/palo-alto",
    "/locations-redwood-city": "/locations/redwood-city",
    "/locations-sanmateo": "/locations/san-mateo",
    "/locations-santa-clara": "/locations/santa-clara",
    "/locations-saratoga": "/locations/saratoga",
    "/locations-sunnyvale": "/locations/sunnyvale",
    "/rooftop-package-unit": "/services/rooftop-package-unit",
    "/vrf-installation-system": "/services/vrf-installation-system",
    "/water-heater-installation": "/services/water-heater-installation",
    "/water-heater-repair": "/services/water-heater-repair",
    "/water-heater-replacement": "/services/water-heater-replacement",
    "/water-heater": "/services/water-heater",
    "/zone-control-system": "/services/zone-control-system",
  },

  integrations: [
    sitemap({
      // keep utility pages out of the sitemap
      filter: (page) => !page.includes('/thank-you') && !page.includes('/admin'),
    }),
  ],
});
