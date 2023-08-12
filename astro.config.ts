import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'
import Inspect from 'vite-plugin-inspect'
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    server: { host: '0.0.0.0', port: 3000 },
    adapter: nodejs({
        mode: 'standalone'
    }),
    output: 'hybrid',
    compressHTML: true,
    integrations: [
        UnoCSS({
            injectReset: true
        }),
        sitemap(),
        vue({
            appEntrypoint: '/src/_app'
        }),
    ],
    vite: {
        css: {
            devSourcemap: true
        },
        plugins: [
            vue(),
            // Inspect({
            //     build: true,
            //     outputDir: '.vite-inspect'
            // })
        ],
    }
});
