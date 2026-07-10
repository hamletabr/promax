// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://promax-service.com',
  integrations: [
    sitemap({
      // keep utility pages out of the sitemap
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
});
