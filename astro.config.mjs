import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.market-watch.xyz',
  integrations: [mdx()],
  output: 'static',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
