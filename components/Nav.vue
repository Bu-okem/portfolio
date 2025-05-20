<template>
  <nav
    class="fixed 3xl:absolute z-50 top-0 left-0 right-0 lg:right-auto overflow-hidden transition-all duration-700 border-b border-solid border-accent 3xl:border-l"
    :class="
      isOpen
        ? 'h-[calc(100vh+2px)] border-b lg:border-b-0'
        : 'h-0 border-b-0 lg:h-screen'
    ">
    <div class="flex flex-col h-screen w-screen lg:w-auto bg-background">
      <ul class="text-2xl lg:text-base relative top-[30%] ml-5 lg:mr-5">
        <li v-for="link in links" :key="link.name" class="duration-300">
          <NuxtLink
            @click="toggleMenu"
            :to="link.href"
            :class="
              link.href !== $route.fullPath
                ? 'opacity-40 font-normal'
                : 'font-semibold'
            "
            class="hover:opacity-100 transition-all duration-300"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
  <header
    class="sticky top-0 z-50 w-full lg:w-fit bg-background flex items-center justify-between px-5 py-6 3xl:bg-transparent">
    <h1 class="text-2xl font-ubuntu-mono">b_</h1>
    <div class="lg:hidden">
      <button v-if="!isOpen" @click="toggleMenu">
        <Icon name="hugeicons:menu-02" size="24" />
      </button>
      <button v-if="isOpen" @click="toggleMenu">
        <Icon name="jam:close" size="24" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { NuxtLink } from '#components';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
