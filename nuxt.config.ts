// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "favicon.png",
        },
      ],
    },
  },

  plugins: ["~/plugins/vue-masonry-wall.ts"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/icon",
    "@vueuse/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "convex-nuxt",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],

  site: {
    // Set NUXT_SITE_URL in the host's env (Vercel project settings). Without
    // it the module falls back to the incoming request's origin, which works
    // but cannot produce absolute URLs at build time.
    url: process.env.NUXT_SITE_URL,
  },

  sitemap: {
    // Project pages are dynamic, so they come from Convex at request time.
    sources: ["/api/__sitemap__/urls"],
  },

  icon: {
    // The @iconify-json/* collections are devDependencies: at build time the
    // source is scanned and only the icons actually referenced are inlined,
    // so no collection JSON ships to the server and the page no longer hits
    // the Iconify API at runtime. Anything the scan misses still falls back
    // to the API rather than failing.
    clientBundle: { scan: true },
    serverBundle: false,
  },

  image: {
    // "auto" resolves to the platform provider - Vercel's image CDN today.
    // Moving host is an env change, not a code change: set
    // NUXT_IMAGE_PROVIDER=cloudflare (plus image.cloudflare.baseURL) on
    // Cloudflare, since that one is not auto-detectable.
    provider: "auto",
    // Project screenshots are served from Convex storage, a remote origin, so
    // it has to be allowlisted before it can be optimised.
    domains: [process.env.CONVEX_URL].filter(Boolean) as string[],
  },
  convex: {
    url: process.env.CONVEX_URL,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  googleFonts: {
    useStylesheet: true,
    families: {
      Figtree: "300..900",
      Unbounded: "200..900",
      "Ubuntu Mono": true,
    },
  },
  runtimeConfig: {
    // Server-side only. Project and work-experience data comes from Convex;
    // the Airtable keys that used to live here went with it.
    mediumUsername: process.env.MEDIUM_USERNAME,
  },
});
