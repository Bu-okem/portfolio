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
    const dateA = convertToIsoDate(a.fields.endDate || a.fields.startDate);
    const dateB = convertToIsoDate(b.fields.endDate || b.fields.startDate);
    console.log({
      'date A': dateA,
      'date B': dateB,
    });

    // For ascending order (oldest first)
    return dateA.localeCompare(dateB);
  });
};

// const sortExperience = (experiences) => {
//   return experiences.sort((a, b) => {
//     // Get end dates or fall back to start dates
//     const dateA = new Date(a.fields.endDate || a.fields.startDate);
//     const dateB = new Date(b.fields.endDate || b.fields.startDate);

//     // Sort in ascending order (oldest first)
//     return dateA - dateB;
//   });
// };
const sortedExperience = computed(() => sortExperience(experience.value || []));
</script>
