<template>
  <footer
    class="px-[20px] absolute bottom-4 lg:bottom-16 lg:-left-[52.8px] flex items-center gap-4 lg:-rotate-90">
    <span class="flex items-center gap-1 cursor-pointer" @click="setLight">
      <span
        class="h-[10px] w-[10px] border border-solid border-black dark:border-light bg-black dark:bg-dark"></span>
      <p class="">light</p>
    </span>
    <span class="flex items-center gap-1 cursor-pointer" @click="setDark">
      <span
        class="h-[10px] w-[10px] border border-solid border-black dark:border-light dark:bg-light"></span>
      <p class="">dark</p>
    </span>
  </footer>
</template>

<script setup lang="ts">
const { setDark, setLight } = useTheme();
</script>
