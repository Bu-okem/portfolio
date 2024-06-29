<template>
  <div class="flex flex-col gap-y-[45px] lg:gap-y-[60px] lg:h-fit lg:mb-[40px]">
    <ExperienceCard
      v-for="experience in experiences"
      :institution="experience.fields.institution"
      :position="experience.fields.position"
      :startDate="experience.fields.startDate"
      :endDate="experience.fields.endDate" />
  </div>
</template>

<script setup>
const experiences = useExperience();
</script>
