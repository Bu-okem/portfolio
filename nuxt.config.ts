// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.png',
        },
      ],
    },
  },

  plugins: ['~/plugins/vue-masonry-wall.ts'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/icon',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  googleFonts: {
    useStylesheet: true,
    families: {
      Figtree: '300..900',
      Unbounded: '200..900',
      'Ubuntu Mono': true,
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      API_TOKEN: process.env.API_TOKEN,
      AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
      PROJECTS_TABLE_ID: process.env.PROJECTS_TABLE_ID,
      WORK_EXPERIENCE_TABLE_ID: process.env.WORK_EXPERIENCE_TABLE_ID,
      FEATURED_TABLE_ID: process.env.FEATURED_TABLE_ID,
    },
  },
});
