import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/scripts/remarkReadingTime.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffercbs.me',
  ouput: 'static',
  markdown: {
    drafts: true,
    syntaxHighlight: 'prism',
    rehypePlugins: [remarkReadingTime],
  },
  integrations: [
    compress(),
    tailwind(),
    svelte(),
    sitemap(),
    mdx({
      drafts: true,
    }),
  ],
});
