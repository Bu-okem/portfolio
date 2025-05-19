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
  return experiences.sort((a, b) => {
    // Get end dates or fall back to start dates
    const dateA = new Date(a.fields.endDate || a.fields.startDate);
    const dateB = new Date(b.fields.endDate || b.fields.startDate);

    // Sort in ascending order (oldest first)
    return dateA - dateB;
  });
};

const sortedExperience = computed(() => sortExperience(experience.value || []));
</script>
