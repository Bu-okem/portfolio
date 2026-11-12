<template>
  <div>
    <Nav />
    <div
      class="lg:fixed 3xl:absolute lg:left-[100px] lg:w-[calc(100%-100px)] 3xl: lg:h-full lg:top-0 lg:overflow-y-scroll 3xl:border-x 3xl:border-border">
      <slot />
      <Footer />
      <Switch />
    </div>
  </div>
</template>

<script setup>
import Switch from '@/components/Switch.vue';

useHead({
  meta: [
    {
      name: 'description',
      content:
        'Buokem — Full-stack Software Engineer architecting fast, resilient web products and cloud-backed systems in TypeScript, Vue/Nuxt, React/Next.js, and Node.js.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Buokem — Software Engineer' },
    {
      property: 'og:description',
      content:
        'Full-stack Software Engineer architecting fast, resilient web products and cloud-backed systems in TypeScript, Vue/Nuxt, React/Next.js, and Node.js.',
    },
    { property: 'og:site_name', content: 'Buokem' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Buokem — Software Engineer' },
    {
      name: 'twitter:description',
      content:
        'Full-stack Software Engineer architecting fast, resilient web products and cloud-backed systems in TypeScript, Vue/Nuxt, React/Next.js, and Node.js.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
