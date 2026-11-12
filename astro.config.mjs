// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { tableWrap, stripComments } from './src/lib/markdown-plugins.mjs';

/**
 * GitHub Pages settings.
 * - User site (repo "mathischarlo.github.io"): site = https://mathischarlo.github.io, base = '/'
 * - Project site (repo "portfolio"):          site = https://mathischarlo.github.io, base = '/portfolio'
 * All internal links go through `url()` in src/lib/url.ts, so changing `base` is enough.
 */
export default defineConfig({
  site: 'https://mathischarlo.github.io',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  // The whole stylesheet is small (~35 kB): inlining it removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
  markdown: {
    processor: satteri({ mdastPlugins: [tableWrap, stripComments] }),
  },
});
