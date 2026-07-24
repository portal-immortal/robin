import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import icon from 'astro-icon';

// https://astro.build/config
//
// Deployment target: GitHub Pages with a custom domain (robin.ponpes.id)
// A CNAME file in /public makes GitHub Pages serve the custom domain,
// so `base` stays "/" (no repo-name subpath needed, unlike project pages
// served from https://<user>.github.io/<repo>/).
export default defineConfig({
  site: 'https://robin.ponpes.id',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  compressHTML: true,

  integrations: [
    icon({
      include: {
        mdi: ['*'],
        ph: ['*'],
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    // astro-compress must run last so it can minify the final output
    compress({
  CSS: false,
  HTML: {
    'html-minifier-terser': {
      removeComments: true,
    },
  },
  Image: false,
  JavaScript: true,
  SVG: true,
}),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
    },
  },
});
