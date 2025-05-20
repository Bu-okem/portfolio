<template>
  <div class="pb-20 mt-[150px] lg:mt-[200px] mx-5 lg:mx-20">
    <section class="h-[50vh]">
      <h1 class="text-4xl font-semibold font-header">
        Hi there, I’m Buokem, a Software Developer.
        <span class="block font-extralight">I build things for the web.</span>
      </h1>
    </section>
    <section class="pt-60">
      <p class="font-extralight leading-9">
        As a software developer, I have had the privilege of working on a wide
        range of projects, from web applications to mobile apps. My experience
        has taught me the importance of attention to detail, effective
        communication, and efficient problem-solving. I am passionate about
        building software that is both functional and enjoyable to use. I am
        always looking for new challenges and opportunities to grow as a
        developer.
      </p>
    </section>
    <section class="pt-32">
      <h3 class="mb-9 text-4xl font-semibold font-header">Experience</h3>
      <div>
        <div v-for="exp in sortedExperience" :key="exp.id" class="mb-20">
          <p class="text-xl">{{ exp.fields.institution }}</p>
          <h3 class="my-6 text-3xl lg:text-5xl font-semibold font-header">
            {{ exp.fields.position }}
          </h3>
          <span class="flex">
            <p class="mb-6 tracking-wide">{{ exp.fields.startDate }}</p>
            <span class="mx-2"> - </span>
            <p class="mb-6 tracking-wide">
              {{ exp.fields.endDate ? `${exp.fields.endDate}` : 'Present' }}
            </p>
          </span>
          <p class="font-extralight leading-9 tracking-wide">
            {{ exp.fields.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useExperience } from '~/composables/states';

useHead({
  title: 'Buokem - About',
});

const experience = useExperience();

const sortExperience = (experiences) => {
  const months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  // Parse "Month YYYY" format safely across all browsers
  const parseMonthYear = (dateString) => {
    if (!dateString) return 0;

    try {
      const parts = dateString.toLowerCase().trim().split(/\s+/);

      if (parts.length >= 2) {
        const month = months[parts[0]];
        // Get the last element as the year (in case there are spaces)
        const year = parseInt(parts[parts.length - 1], 10);

        if (!isNaN(month) && !isNaN(year)) {
          // Create a date object for the first day of the month
          return new Date(year, month, 1).getTime();
        }
      }
    } catch (e) {
      console.error('Error parsing date:', dateString, e);
    }

    return 0;
  };

  return experiences.sort((a, b) => {
    // Get end dates or fall back to start dates
    const timeA = parseMonthYear(a.fields.endDate || a.fields.startDate);
    const timeB = parseMonthYear(b.fields.endDate || b.fields.startDate);

    // Sort in ascending order (oldest first)
    return timeA - timeB;
  });
};

const sortedExperience = computed(() => sortExperience(experience.value || []));
</script>
