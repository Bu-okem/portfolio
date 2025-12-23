<template>
  <main class="pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20">
    <h1 class="sr-only">About Buokem - Software Developer</h1>
    <section class="h-[50vh] text-4xl font-semibold font-header" aria-labelledby="hero-heading">
      <div class="">
        <h2 id="hero-heading" class="sr-only">{{ heroText1 }} {{ heroText2 }}</h2>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in heroText1.split(' ')"
          :key="index">
          <motion.h1
            :initial="{ y: 54 }"
            :animate="{ y: 0 }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            >{{ text }}<span>&nbsp;</span>
          </motion.h1>
        </span>
      </div>
      <div class="">
        <p class="sr-only">{{ heroText2 }}</p>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in heroText2.split(' ')"
          :key="index">
          <motion.h1
            :initial="{ y: 54 }"
            :animate="{ y: 0 }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="font-extralight"
            >{{ text }}<span>&nbsp;</span>
          </motion.h1>
        </span>
      </div>
    </section>
    <section class="pt-60" aria-labelledby="about-me">
      <h2 id="about-me" class="sr-only">About Me</h2>
      <div class="font-light leading-9">
        <p class="sr-only">{{ aboutText }}</p>
        <span
          aria-hidden="true"
          class="overflow-hidden inline-block"
          v-for="(text, index) in aboutText.split(' ')"
          :key="index">
          <motion.p
            :initial="{ y: 40 }"
            :while-in-view="{ y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ delay: 0.3, duration: 0.6 }"
            class="my-1">
            {{ text }}<span>&nbsp;</span>
          </motion.p>
        </span>
      </div>
    </section>
    <section class="pt-32" aria-labelledby="experience">
      <h2 id="experience" class="sr-only">Work Experience</h2>
      <span class="overflow-hidden block mb-9">
        <motion.h3
          :initial="{ y: 40 }"
          :while-in-view="{ y: 0 }"
          :transition="{ delay: 0.3, duration: 0.6 }"
          :inViewOptions="{ once: true }"
          class="text-4xl font-semibold font-header"
          aria-hidden="true">Experience</motion.h3>
      </span>
      <div>
        <div v-for="exp in sortedExperience" :key="exp.id" class="mb-20">
          <span class="overflow-hidden block">
            <motion.p
              :initial="{ y: 24 }"
              :while-in-view="{ y: 0 }"
              :transition="{ delay: 0.3, duration: 0.6, repeat: 0 }"
              :inViewOptions="{ once: true }"
              class="text-xl"
              >{{ exp.company }}</motion.p
            >
          </span>
          <div class="my-6">
            <h3 class="sr-only">{{ exp.position }}</h3>
            <span
              aria-hidden="true"
              class="overflow-hidden inline-block"
              v-for="(text, index) in exp.position.split(' ')"
              :key="index">
              <motion.h3
                :initial="{ y: 50 }"
                :while-in-view="{ y: 0 }"
                :inViewOptions="{ once: true }"
                :transition="{ delay: 0.3, duration: 0.6 }"
                class="mb-4 lg:my-1 text-3xl lg:text-5xl font-semibold font-header">
                {{ text }}<span>&nbsp;</span>
              </motion.h3>
            </span>
          </div>

          <div class="overflow-hidden mb-6">
            <motion.span
              :initial="{ y: 20 }"
              :while-in-view="{ y: 0 }"
              :inViewOptions="{ once: true }"
              :transition="{ delay: 0.3, duration: 0.6 }"
              class="flex">
              <p class="tracking-wide">{{ exp.startDate }}</p>
              <span class="mx-2"> - </span>
              <p class="tracking-wide">
                {{ exp.endDate ? `${exp.endDate}` : 'Present' }}
              </p>
            </motion.span>
          </div>
          <p class="font-extralight leading-9 tracking-wide">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { api } from "../convex/_generated/api";
import { motion } from 'motion-v';
import { useExperience } from '~/composables/states';

const experience = useExperience();

// Set page metadata for SEO and accessibility
useHead({
  title: 'About - Buokem',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Buokem, a skilled software developer with experience in modern web technologies.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});

const heroText1 = `Hi there, I'm Buokem, a Software Developer.`;
const heroText2 = 'I build things for the web.';

const aboutText =
  'As a software developer, I have had the privilege of working on a wide range of projects. My experience has taught me the importance of attention to detail, effective communication, and efficient problem-solving. I am passionate about building software that is both functional and enjoyable to use. I am always looking for new challenges and opportunities to grow as a developer.';
//  , from web applications to mobile apps

const sortExperience = (experiences) => {
  // Convert "Month YYYY" to ISO format "YYYY-MM-DD"
  const convertToIsoDate = (dateString) => {
    if (!dateString) return '2000-01-01';

    const months = {
      january: '01',
      february: '02',
      march: '03',
      april: '04',
      may: '05',
      june: '06',
      july: '07',
      august: '08',
      september: '09',
      october: '10',
      november: '11',
      december: '12',
      jan: '01',
      feb: '02',
      mar: '03',
      apr: '04',
      may: '05',
      jun: '06',
      jul: '07',
      aug: '08',
      sep: '09',
      oct: '10',
      nov: '11',
      dec: '12',
    };

    // Check if it's already in ISO format
    if (/^\d{4}-\d{2}-\d{2}/.test(dateString)) {
      return dateString;
    }

    // Try to parse "Month YYYY" format
    const monthYearRegex = /^([a-z]+)\s+(\d{4})$/i;
    const match = dateString.match(monthYearRegex);

    if (match) {
      const monthName = match[1].toLowerCase();
      const year = match[2];
      const month = months[monthName];

      if (month && year) {
        // Return ISO format date (YYYY-MM-DD)
        return `${year}-${month}-01`;
      }
    }

    // For any other format, try to parse and convert to ISO
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const year = date.getFullYear();
        // getMonth() is 0-indexed, so I added 1 and padded with leading zero
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    } catch (e) {
      console.error('Error parsing date:', dateString, e);
    }

    return '2000-01-01';
  };

  return experiences.sort((a, b) => {
    const dateA = convertToIsoDate(a.endDate || a.startDate);
    const dateB = convertToIsoDate(b.endDate || b.startDate);

    // For ascending order (oldest first)
    return dateA.localeCompare(dateB);
  });
};

// const sortExperience = (experiences) => {
//   return experiences.sort((a, b) => {
//     // Get end dates or fall back to start dates
//     const dateA = new Date(a.endDate || a.startDate);
//     const dateB = new Date(b.endDate || b.startDate);

//     // Sort in ascending order (oldest first)
//     return dateA - dateB;
//   });
// };
const sortedExperience = computed(() => sortExperience(experience.value || []));
</script>
