<template>
  <div class="flex flex-col gap-5" :class="isAbsolute && 'absolute'">
    <Project />
    <Project />
    <Project />
  </div>
</template>

<script setup>
const isAbsolute = useIsAbsolute();
</script>
