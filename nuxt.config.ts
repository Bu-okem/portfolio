// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Buokem',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ubuntu+Condensed&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side

    // Keys within public, will be also exposed to the client-side
    public: {
      API_TOKEN: process.env.API_TOKEN,
      AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
      PROJECT_TABLE_ID: process.env.PROJECT_TABLE_ID,
      EXPERIENCE_TABLE_ID: process.env.EXPERIENCE_TABLE_ID,
    },
  },
});
