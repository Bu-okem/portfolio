<template>
  <div class="relative flex gap-x-[60px] max-w-[495px]">
    <h5
      class="w-fit lg:w-[30%] font-light font-ubuntu text-[20px] absolute bottom-0 right-0 lg:relative">
      {{ getDuration(startDate, endDate) }}
    </h5>
    <div class="">
      <h4
        class="font-ubuntu-condensed capitalize text-[25px] mb-[22px] leading-[normal]">
        {{ position }}
      </h4>
      <h5 class="font-light font-ubuntu capitalize text-[20px]">
        {{ institution }}
      </h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  institution: String,
  position: String,
  startDate: String,
  endDate: String,
});

const institution = props.institution;
const position = props.position;
const startDate = props.startDate;
const endDate = props.endDate;

const getDuration = (startDate, endDate = null) => {
  if (!startDate) {
    throw new Error('startDate is required');
  }

  if (!endDate) {
    return `${startDate} - `;
  }

  const startParts = startDate.split(' ');
  const endParts = endDate.split(' ');

  if (startParts[1] === endParts[1]) {
    return `${startParts[0]} - ${endDate}`;
  }

  return `${startDate} - ${endDate}`;
};
</script>
