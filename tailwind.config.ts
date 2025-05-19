import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni-moda': ['Bodoni Moda', ...defaultTheme.fontFamily.sans],
        'bricolage-grotesque': [
          'Bricolage Grotesque',
          ...defaultTheme.fontFamily.sans,
        ],
        figtree: ['Figtree', ...defaultTheme.fontFamily.sans],
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.sans],
        'nunito-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
        'playfair-display': [
          'Playfair Display',
          ...defaultTheme.fontFamily.sans,
        ],
        'plus-jakarta-sans': [
          'Plus Jakarta Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
        'space-grotesk': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        unbounded: ['Unbounded', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
