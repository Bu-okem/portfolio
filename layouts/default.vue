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
import axios from 'axios';
import Switch from '@/components/Switch.vue';
import { useConfig } from '~/composables/useConfig';
import { useExperience, useFeatured } from '~/composables/states';
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
const config = useConfig();
const experience = useExperience();
const featured = useFeatured();

const headers = {
  Authorization: `Bearer ${config.apiKey}`,
};

const fetchExperience = async () => {
  try {
    const res = await axios.get(
      `https://api.airtable.com/v0/${config.base}/${config.experienceTableId}`,
      {
        headers: headers,
      }
    );
    const { records } = res.data;
    experience.value = records;
  } catch (err) {
    console.log('Error loading experience', err);
  }
};
const fetchFeatured = async () => {
  try {
    const res = await axios.get(
      `https://api.airtable.com/v0/${config.base}/${config.featuredTableId}`,
      {
        headers: headers,
      }
    );
    const { records } = res.data;
    featured.value = records;
  } catch (err) {
    console.log('Error loading featured', err);
  }
};

// fetchExperience();
// fetchFeatured();
</script>
