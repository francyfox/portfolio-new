import {
    defineConfig, presetAttributify, presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                'src/**/*.{js,ts}',
            ],
            // exclude files
            // exclude: []
        }
    },
    shortcuts: {
        'badge': 'px-1 color-white/90 transition-colors bg-orange-5 hover:bg-orange-6 border-rd',
        'badge__blue': 'bg-blue-5 hover:bg-blue-6',
        'badge__green': 'bg-green-5 hover:bg-green-6',
        'badge__random': 'text-shadow-xl',
    },
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})