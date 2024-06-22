<template>
  <div
    class="duration-500 h-screen w-screen fixed top-0 left-0"
    :class="expanded ? 'bg-light dark:bg-dark z-30' : 'bg-transparent -z-10'"
    @click="expanded = false"></div>
  <div class="flex gap-x-[25px]">
    <div
      ref="elementRef"
      class="bg-gray-400 h-[198px] lg:h-[139px] w-[334px] lg:w-[257px] duration-500"
      :class="computedClass"
      :style="computedVar"
      @click="
        expanded = true;
        calculateDistance;
      "></div>
    <div class="hidden lg:block">
      <h3 class="font-ubuntu-condensed text-[40px]">Stock Afrika</h3>
      <p class="font-lato">React + Typescript</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const expanded = ref(false);
const { elementRef, distanceFromTop, distanceFromLeft, calculateDistance } =
  useDistanceFromTop();
const computedClass = computed(() => {
  return expanded.value
    ? `custom-absolute z-[35] translate lg:left-[56px] lg:h-[440px] lg:w-[50%]`
    : 'relative z-0';
});
const computedVar = computed(() => {
  return `--tw-translate-y: ${
    -distanceFromTop.value + 140
  }px; --tw-translate-x: ${-distanceFromLeft.value + 200}px);`;
});
</script>

<style scoped>
.translate {
  transform: translateY(var(--tw-translate-y));
}

.custom-absolute {
  animation-name: custom-absolute;
  animation-duration: 1s;
  /* animation-delay: 800ms; */
  /* animation-timing-function: ease-in-out; */
  position: absolute;
}
</style>
