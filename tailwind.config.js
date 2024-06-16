const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
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
      colors: {
        light: '#EDEDED',
        dark: '#131313',
      },
      fontFamily: {
        lato: ['"Lato"', ...fontFamily.sans],
        ubuntu: ['"Ubuntu"', ...fontFamily.sans],
        'ubuntu-condensed': ['"Ubuntu Condensed"', ...fontFamily.sans],
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
