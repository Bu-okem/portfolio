<template>
  <div class="grid grid-cols-1 lg:grid-cols-11 lg:h-full">
    <div
      class="border-b lg:border-l border-accent p-6 pt-20 text-4xl lg:text-5xl lg:col-span-4 lg:row-end-2 lg:flex flex-col justify-end">
      <h1 class="font-semibold font-header">Software</h1>
      <h1 class="font-light font-header">Developer</h1>
    </div>
    <!--  -->
    <div
      class="border-b border-l border-accent p-6 pt-20 text-6xl hidden lg:col-span-3 lg:row-end-2 lg:flex flex-col justify-end">
      <h1 class="text-6xl font-ubuntu-mono">b_</h1>
    </div>
    <!--  -->

    <NuxtLink
      to="/about"
      class="group border-b lg:border-b-0 lg:border-l border-accent p-6 pt-[100px] lg:pl-10 lg:pb-14 lg:pr-20 relative lg:col-span-7 lg:row-end-3 lg:flex flex-col justify-end">
      <Icon
        name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
        size="24"
        class="absolute top-5 lg:top-16 right-5 lg:right-10 group-hover:lg:top-10 group-hover:lg:right-6 duration-300" />
      <h3 class="text-xl lg:text-2xl font-extralight line-clamp-4 font-header">
        As a software developer, I have had the privilege of working on a wide
        range of projects, from web applications to mobile apps. My experience
        has taught me the importance of attention to detail, effective
        communication, and efficient problem-solving. I am passionate about
        building software that is both functional and enjoyable to use. I am
        always looking for new challenges and opportunities to grow as a
        developer.
      </h3>
    </NuxtLink>

    <!-- Featured projects and blogposts -->
    <div
      class="lg:border-x border-accent p-6 pb-0 lg:col-span-4 lg:row-end-3 lg:row-span-2 overflow-hidden">
      <div ref="featuredContainer" class="grid grid-cols-1">
        <div
          v-for="item in featured"
          :key="item.name"
          class="group pt-5 pb-2 border-b border-accent"
          @click="toggleDescription(item)">
          <NuxtLink :to="item.link">
            <div class="flex items-center justify-between">
              <h3
                class="text-xl font-medium overflow-hidden group-hover:overflow-visible text-ellipsis whitespace-nowrap group-hover:whitespace-normal w-[80%] transition-all duration-300">
                {{ item.name }}
              </h3>
              <p class="text-xs opacity-50">{{ item.type }}</p>
            </div>
          </NuxtLink>
          <div
            class="grid grid-cols-1 grid-rows-[0fr] overflow-hidden lg:group-hover:grid-rows-[1fr] transition-all duration-300"
            :class="{ 'grid-rows-[1fr]': item.showDesc.value }">
            <p class="line-clamp-4 pt-3">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/contact"
      class="border-y border-accent mt-3 px-6 pt-[100px] pb-20 relative lg:hidden">
      <Icon
        name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
        size="24"
        class="absolute top-5 right-5" />
      <h3 class="text-4xl font-extralight font-header">
        <span class="font-semibold">Contact</span> Me
      </h3>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const featured = [
  {
    name: 'File Organiser',
    description:
      'A CLI tool to help you quickly sort your files into folders based on their extension, date created, size or type.',
    link: '/projects/recGHgjA3HLSZjNy2',
    type: 'project',
    showDesc: ref(false),
  },
  {
    name: 'Stock Afrika',
    description:
      'Stock Afrika is a vibrant stock photography platform celebrating African culture, people, and landscapes. As one of the developers, I designed this site to display high-quality, authentic images showcasing Africa’s diversity—from bustling markets and stunning landscapes to modern urban life and traditional heritage.',
    link: '/projects/recLVqW9TsJjfvLay',
    type: 'project',
    showDesc: ref(false),
  },
  {
    name: 'Verbally Yours',
    description:
      'Verbally Yours is coaching platform built to help professionals find direction, confidence, and fulfillment in their careers. Through personalized coaching sessions, reflective exercises, and actionable strategies, Verbally Yours empowers individuals to articulate their goals, own their strengths, and navigate career transitions with clarity.',
    link: '/projects/rec9bzItJN86uGdck',
    type: 'project',
    showDesc: ref(false),
  },
];

// Use template ref for the container
const featuredContainer = ref(null);

// Track if we're on mobile
const isMobile = ref(false);

// Check device width and set up click outside handler
onMounted(() => {
  // Initial check
  isMobile.value = window.innerWidth < 1024;

  // Set up resize listener
  window.addEventListener('resize', () => {
    const wasMobile = isMobile.value;
    const isNowDesktop = window.innerWidth >= 1024;

    isMobile.value = window.innerWidth < 1024;

    // If transitioning from mobile to desktop, close all descriptions
    if (wasMobile && isNowDesktop) {
      featured.forEach((item) => {
        if (item.showDesc.value) {
          item.showDesc.value = false;
        }
      });
    }
  });

  // Set up document click listener for mobile
  document.addEventListener('click', (event) => {
    if (!isMobile.value) return;

    // Check if click is outside the container
    if (
      featuredContainer.value &&
      !featuredContainer.value.contains(event.target)
    ) {
      // Close all descriptions
      featured.forEach((item) => {
        if (item.showDesc.value) {
          item.showDesc.value = false;
        }
      });
    }
  });
});

// Toggle description visibility on mobile
const toggleDescription = (item) => {
  // Use the reactive isMobile value instead of directly checking window.innerWidth
  // This prevents SSR errors since window is not available during server rendering
  if (isMobile.value) {
    item.showDesc.value = !item.showDesc.value;
  }
};
</script>
