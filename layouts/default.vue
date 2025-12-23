<template>
  <div>
    <Nav />
    <div
      class="lg:fixed 3xl:absolute lg:left-[100px] lg:w-[calc(100%-100px)] 3xl: lg:h-full lg:top-0 lg:overflow-y-scroll 3xl:border-x 3xl:border-accent">
      <slot />
      <Switch />
    </div>
  </div>
</template>

<script setup>
import { api } from "../convex/_generated/api";
import Switch from '@/components/Switch.vue';
import { useExperience } from '~/composables/states';

useHead({
  title: 'Buokem — Software Developer',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio of Buokem, a skilled software developer with experience in modern web technologies.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
const { data } = useConvexQuery(api.workExperience.get);
const experience = useExperience();
watchEffect(() => {
  if (data.value) {
    experience.value = data.value;
  }
});
</script>
