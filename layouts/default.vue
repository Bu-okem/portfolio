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
        'Portfolio of Buokem, a skilled software developer with experience in modern web technologies.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Buokem - Software Developer' },
    {
      property: 'og:description',
      content: 'Portfolio of Buokem, a skilled software developer with experience in modern web technologies.',
    },
    { property: 'og:site_name', content: 'Buokem' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Buokem - Software Developer' },
    {
      name: 'twitter:description',
      content: 'Portfolio of Buokem, a skilled software developer with experience in modern web technologies.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
