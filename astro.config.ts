import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
// import nodejs from '@astrojs/node';
// import Inspect from 'vite-plugin-inspect';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://hellizart.netlify.app',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  adapter: netlify(),
  output: 'server',
  compressHTML: true,
  integrations: [UnoCSS({
    injectReset: true
  }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    vue({
    appEntrypoint: '/src/_app'
  })],
  vite: {
    css: {
      devSourcemap: true
    },
    plugins: [vue()
    // Inspect({
    //     build: true,
    //     outputDir: '.vite-inspect'
    // })
    ]
  }
});