import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://hbfs-cloud.github.io',
  base: '/blog',
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
