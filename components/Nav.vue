<template>
  <nav
    class="sticky top-0 z-50 lg:z-0 bg-grain-pattern bg-light dark:bg-dark p-[20px] flex items-center justify-between border-b lg:border-b-0 lg:border-r border-solid border-b-black lg:border-r-black dark:border-b-light lg:dark:border-r-light lg:w-[43px]">
    <h3 class="font-ubuntu text-[30px] lg:hidden">b_</h3>
    <div
      class="flex items-center gap-x-[16px] lg:gap-x-[32px] lg:w-full lg:-rotate-90 lg:relative lg:-top-52 lg:flex-row-reverse">
      <span v-for="(navLink, index) in navLinks" :key="index" class="">
        <nuxt-link :to="navLink.link" class="flex items-baseline gap-1">
          <span
            class="block h-[10px] w-[10px] border border-solid border-black dark:border-light rounded-full"></span>
          {{ navLink.title }}
        </nuxt-link>
      </span>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { title: 'about', link: '/' },
  { title: 'experience', link: '/experience' },
  { title: 'projects', link: '/projects' },
];
</script>
