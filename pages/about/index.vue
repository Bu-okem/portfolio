<template>
  <main class="pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20 min-h-[72vh]">
    <h1 class="sr-only">About Buokem — Software Engineer</h1>
    <section class="h-[50vh] text-4xl font-semibold font-header text-heading" aria-labelledby="hero-heading">
      <div>
        <h2 id="hero-heading" class="sr-only">{{ heroText1 }} {{ heroText2 }}</h2>
        <span aria-hidden="true" class="overflow-hidden inline-block" v-for="(text, index) in heroText1.split(' ')"
          :key="index">
          <motion.span :initial="{ y: 54 }" :animate="{ y: 0 }"
            :transition="{ delay: 0.3 + index * 0.04, duration: 0.6 }" class="block">{{ text }}<span>&nbsp;</span>
          </motion.span>
        </span>
      </div>
      <div>
        <span aria-hidden="true" class="overflow-hidden inline-block" v-for="(text, index) in heroText2.split(' ')"
          :key="index">
          <motion.span :initial="{ y: 54 }" :animate="{ y: 0 }"
            :transition="{ delay: 0.3 + index * 0.04, duration: 0.6 }" class="font-extralight">{{ text
            }}<span>&nbsp;</span>
          </motion.span>
        </span>
      </div>
    </section>
    <section class="pt-60 max-w-[850px]" aria-labelledby="about-me">
      <h2 id="about-me" class="sr-only">Engineering Philosophy</h2>
      <div class="font-light leading-9 space-y-6 text-lg">
        <motion.p v-for="(paragraph, index) in aboutParagraphs" :key="index" :initial="{ opacity: 0, y: 24 }"
          :while-in-view="{ opacity: 1, y: 0 }" :inViewOptions="{ once: true }"
          :transition="{ delay: 0.15 + index * 0.12, duration: 0.6 }">
          {{ paragraph }}
        </motion.p>
      </div>
    </section>
    <section class="pt-32" aria-labelledby="experience">
      <span class="overflow-hidden block mb-9">
        <motion.h2 id="experience" :initial="{ y: 40 }" :while-in-view="{ y: 0 }"
          :transition="{ delay: 0.3, duration: 0.6 }" :inViewOptions="{ once: true }"
          class="block text-4xl font-semibold font-header text-heading">
          Experience
        </motion.h2>
      </span>
      <div>
        <div v-for="(exp, index) in sortedExperience" :key="exp._id || exp.id || index" class="mb-20">
          <span class="overflow-hidden block">
            <motion.p :initial="{ y: 24 }" :while-in-view="{ y: 0 }"
              :transition="{ delay: 0.2 + index * 0.04, duration: 0.6, repeat: 0 }" :inViewOptions="{ once: true }"
              class="text-xl text-secondary-text">{{ exp.company }}</motion.p>
          </span>
          <div class="my-6">
            <h3 class="sr-only">{{ exp.position }}</h3>
            <span aria-hidden="true" class="overflow-hidden inline-block"
              v-for="(text, wordIndex) in exp.position.split(' ')" :key="wordIndex">
              <motion.span :initial="{ y: 50 }" :while-in-view="{ y: 0 }" :inViewOptions="{ once: true }"
                :transition="{ delay: 0.25 + wordIndex * 0.04, duration: 0.6 }"
                class="block mb-4 lg:my-1 text-3xl lg:text-5xl font-semibold font-header text-heading">
                {{ text }}<span>&nbsp;</span>
              </motion.span>
            </span>
          </div>

          <div class="overflow-hidden mb-6">
            <motion.div :initial="{ y: 20 }" :while-in-view="{ y: 0 }" :inViewOptions="{ once: true }"
              :transition="{ delay: 0.3, duration: 0.6 }" class="flex text-secondary-text">
              <p class="tracking-wide">{{ exp.startDate }}</p>
              <span class="mx-2">—</span>
              <p class="tracking-wide">
                {{ exp.endDate ? `${exp.endDate}` : 'Present' }}
              </p>
            </motion.div>
          </div>
          <p v-if="exp.description" class="font-light leading-9 tracking-wide max-w-[780px]">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { api } from "~/convex/_generated/api";
import { useConvexHttpClient } from "convex-vue";
import { motion } from 'motion-v';

// Fetched here rather than in the layout so only this page pays for it, and
// over the HTTP client so the work history is in the server-rendered HTML.
const convex = useConvexHttpClient();
const { data: experience } = await useAsyncData("work-experience", () =>
  convex.query(api.workExperience.get)
);

// Set page metadata for SEO and accessibility
useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content:
        'About Buokem — Full-stack Software Engineer building resilient, high-craft web applications and cloud backends.',
    },
  ],
});

const heroText1 = `Hi, I'm Buokem — a Software Engineer.`;
const heroText2 = 'I architect and ship products for the web.';

const aboutParagraphs = [
  "I'm a product-focused Full-Stack Software Engineer specializing in TypeScript, Vue/Nuxt, React/Next.js, Node.js, and modern cloud backends. I build end-to-end systems where performance, accessibility, and clean domain modeling are treated as first-class requirements rather than afterthoughts.",
  "Whether architecting real-time data flows, crafting tactile interfaces with zero layout shift, or untangling complex product constraints, I focus on shipping software that holds up under production load and feels effortless to the people using it.",
];

const sortExperience = (experiences) => {
  // Convert "Month YYYY" to ISO format "YYYY-MM-DD"
  const convertToIsoDate = (dateString, isEndDate = false) => {
    if (!dateString || /^present$/i.test(dateString.trim())) {
      return isEndDate ? '9999-12-31' : '2000-01-01';
    }

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
      // may: '05',
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
    const match = dateString.trim().match(monthYearRegex);

    if (match) {
      const monthName = match[1].toLowerCase();
      const year = match[2];
      const month = months[monthName];

      if (month && year) {
        return `${year}-${month}-01`;
      }
    }

    // For any other format, try to parse and convert to ISO
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    } catch (e) {
      console.error('Error parsing date:', dateString, e);
    }

    return '2000-01-01';
  };

  return [...experiences].sort((a, b) => {
    const endA = convertToIsoDate(a.endDate, true);
    const endB = convertToIsoDate(b.endDate, true);

    if (endA !== endB) {
      // Descending order (newest / current roles first)
      return endB.localeCompare(endA);
    }

    const startA = convertToIsoDate(a.startDate, false);
    const startB = convertToIsoDate(b.startDate, false);
    return startB.localeCompare(startA);
  });
};

const sortedExperience = computed(() => sortExperience(experience.value || []));
</script>
