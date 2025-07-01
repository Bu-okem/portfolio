<template>
  <div class="grid grid-cols-1 lg:grid-cols-11 lg:h-full" role="main">
    <div
      class="relative p-6 pt-20 text-4xl lg:text-5xl lg:col-span-4 lg:row-end-2 lg:flex flex-col justify-end"
      role="banner">
      <h1 class="sr-only">Buokem - Software Developer</h1>
      <span aria-hidden="true" class="block overflow-hidden">
        <motion.h1
          :initial="{ y: 50 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="font-semibold font-header"
          >Software</motion.h1
        >
      </span>
      <span aria-hidden="true" class="block overflow-hidden">
        <motion.h1
          :initial="{ y: 50 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="font-light font-header"
          >Developer</motion.h1
        >
      </span>

      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute top-0 left-0 w-[1px] bg-accent hidden lg:block"></motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute bottom-0 left-0 w-full h-[1px] bg-accent"></motion.div>
      <!--  -->
    </div>
    <!--  -->
    <div
      class="relative p-6 pt-20 text-6xl hidden lg:col-span-3 lg:row-end-2 lg:flex flex-col justify-end">
      <span class="block overflow-hidden" aria-hidden="true">
        <motion.h1
          :initial="{ y: 54 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="text-6xl font-ubuntu-mono"
          aria-hidden="true"
          >b_</motion.h1
        >
      </span>
      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-accent"></motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ delay: 0.25, duration: 0.3 }"
        class="absolute bottom-0 left-0 w-full h-[1px] bg-accent"></motion.div>
      <!--  -->
    </div>
    <!--  -->

    <NuxtLink
      to="/about"
      class="group p-6 pt-[100px] lg:pl-10 lg:pb-14 lg:pr-20 relative lg:col-span-7 lg:row-end-3 lg:flex flex-col justify-end"
      aria-label="Learn more about me">
      <div
        class="h-fit absolute top-5 lg:top-16 right-5 lg:right-10 group-hover:lg:top-10 group-hover:lg:right-6 duration-300 overflow-hidden block">
        <motion.span
          :initial="{ y: 40 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.6, duration: 0.6 }"
          class="block">
          <Icon
            name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
            size="24" />
        </motion.span>
      </div>
      <div class="overflow-hidden">
        <p class="sr-only">{{ aboutText }}</p>
        <motion.div
          :initial="{ y: 10 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.8 }"
          class="text-xl lg:text-2xl font-extralight line-clamp-4 font-header">
          <span
            aria-hidden="true"
            class="overflow-hidden inline-block"
            v-for="(text, index) in aboutText.split(' ')"
            :key="index">
            <motion.h3
              :initial="{ y: 54 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.6, duration: 0.6 }"
              >{{ text }}<span>&nbsp;</span>
            </motion.h3>
          </span>
        </motion.div>
      </div>

      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ delay: 0.25, duration: 0.3 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-accent hidden lg:block">
      </motion.div>
      <motion.div
        :initial="{ width: 0 }"
        :animate="{ width: '100%' }"
        :transition="{ duration: 0.3 }"
        class="absolute bottom-0 left-0 h-[1px] w-[1px] bg-accent block lg:hidden">
      </motion.div>
      <!--  -->
    </NuxtLink>

    <!-- Featured projects and blogposts -->
    <section
      class="relative p-6 pb-0 lg:col-span-4 lg:row-end-3 lg:row-span-2 overflow-hidden"
      aria-labelledby="featured-projects">
      <h2 id="featured-projects" class="sr-only">Featured Projects</h2>
      <div ref="featuredContainer" class="grid grid-cols-1" role="list">
        <article
          v-for="item in featured"
          :key="item.name"
          class="relative group pt-5 pb-2"
          @click="toggleDescription(item)"
          role="listitem">
          <NuxtLink :to="item.link" class="block overflow-hidden">
            <motion.div
              :initial="{ y: 24 }"
              :animate="{ y: 0 }"
              :transition="{ delay: 0.6, duration: 0.6 }"
              class="flex items-center justify-between">
              <h3
                class="text-xl font-medium overflow-hidden group-hover:overflow-visible text-ellipsis whitespace-nowrap group-hover:whitespace-normal w-[80%] transition-all duration-300">
                {{ item.name }}
              </h3>
              <p class="text-xs opacity-50">{{ item.type }}</p>
            </motion.div>
          </NuxtLink>
          <div
            class="grid grid-cols-1 grid-rows-[0fr] overflow-hidden lg:group-hover:grid-rows-[1fr] transition-all duration-300"
            :class="{ 'grid-rows-[1fr]': item.showDesc.value }">
            <p class="line-clamp-4 pt-3">
              {{ item.description }}
            </p>
          </div>
          <!-- Grid lines -->
          <motion.div
            :initial="{ width: 0 }"
            :animate="{ width: '100%' }"
            :transition="{ duration: 0.6 }"
            class="bottom-0 left-0 h-[1px] bg-accent"></motion.div>
        </article>
      </div>
      <!-- Grid lines -->
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 left-0 h-full w-[1px] bg-accent hidden lg:block">
      </motion.div>
      <motion.div
        :initial="{ height: 0 }"
        :animate="{ height: '100%' }"
        :transition="{ duration: 0.6 }"
        class="absolute top-0 right-0 h-full w-[1px] bg-accent hidden lg:block">
      </motion.div>
      <!--  -->
    </section>
    <a
      href="https://wa.me/2348154387988" target="_blank"
      class="border border-accent mt-3 px-6 pt-[100px] pb-20 relative lg:hidden"
      aria-label="Contact me">
      <Icon
        name="streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
        size="24"
        class="absolute top-5 right-5" />
      <h2 class="text-4xl font-extralight font-header">
        <span class="font-semibold">Contact</span> Me
      </h2>
      <p class="sr-only">Click to contact me via whatsapp</p>
    </a>
  </div>
</template>

<script setup>
// Set the page title and meta description for better SEO and accessibility
useHead({
  title: 'Buokem - Software Developer',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio of Buokem, a skilled software developer with experience in modern web technologies.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
import { ref, onMounted } from 'vue';
import { delay, motion } from 'motion-v';

const aboutText = `As a software developer, I have had the privilege of working on a wide range of projects. My experience has taught me the importance of attention to detail, effective communication, and efficient problem-solving. I am passionate about building software that is both functional and enjoyable to use. I am always looking for new challenges and opportunities to grow as a developer.`;
// , from web applications to mobile apps
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
