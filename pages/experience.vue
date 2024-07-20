<template>
  <div v-if="isLoading" class="flex flex-col items-center gap-y-8">
    <ExperienceSkeleton />
    <ExperienceSkeleton />
    <ExperienceSkeleton />
  </div>
  <div
    v-else
    class="flex flex-col gap-y-[45px] lg:gap-y-[60px] lg:h-fit lg:mb-[40px]">
    <ExperienceCard
      v-for="experience in experiences"
      :institution="experience.fields.institution"
      :position="experience.fields.position"
      :startDate="experience.fields.startDate"
      :endDate="experience.fields.endDate" />
  </div>
  <div class="">
    <div v-if="isLoading" class=""></div>
    <a
      href="/"
      target="_blank"
      v-else
      class="capitalize font-light font-ubuntu text-[20px] flex items-center gap-x-2"
      >view resume <span v-html="link"></span
    ></a>
  </div>
</template>

<script setup>
const experiences = useExperience();
const isLoading = useExperienceLoading();

const link = `<svg width="20" height="20" viewBox="0 0 27 27" fill="black" class="fill-black dark:fill-light" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0.25C17.31 0.25 16.75 0.81 16.75 1.5C16.75 2.19 17.31 2.75 18 2.75H22.4824L12.1162 13.1162C11.6281 13.6043 11.6281 14.3957 12.1162 14.8838C12.3606 15.1282 12.68 15.25 13 15.25C13.32 15.25 13.6394 15.1282 13.8838 14.8838L24.25 4.51758V9C24.25 9.69 24.81 10.25 25.5 10.25C26.19 10.25 26.75 9.69 26.75 9V1.5C26.75 0.81 26.19 0.25 25.5 0.25H18ZM4.25 1.5C2.18187 1.5 0.5 3.18187 0.5 5.25V22.75C0.5 24.8181 2.18187 26.5 4.25 26.5H21.75C23.8181 26.5 25.5 24.8181 25.5 22.75V15.25C25.5 14.56 24.94 14 24.25 14C23.56 14 23 14.56 23 15.25V22.75C23 23.4394 22.4394 24 21.75 24H4.25C3.56063 24 3 23.4394 3 22.75V5.25C3 4.56063 3.56063 4 4.25 4H11.75C12.44 4 13 3.44 13 2.75C13 2.06 12.44 1.5 11.75 1.5H4.25Z"/>
</svg>
`;
</script>
