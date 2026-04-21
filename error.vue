<template>
  <div
    class="min-h-screen bg-background text-foreground font-body flex flex-col items-center justify-center px-5">
    <div class="text-center max-w-[600px]">
      <span class="block overflow-hidden">
        <motion.h1
          :initial="{ y: 160 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.1, duration: 0.6 }"
          class="text-7xl lg:text-9xl font-semibold font-header"
          >{{ error?.statusCode || 404 }}</motion.h1
        >
      </span>
      <span class="block overflow-hidden mt-4">
        <motion.p
          :initial="{ y: 80 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.3, duration: 0.6 }"
          class="text-xl lg:text-2xl font-extralight font-header text-secondary-text"
          >{{ error?.statusMessage || "Page not found" }}</motion.p
        >
      </span>
      <span class="block overflow-hidden mt-8">
        <motion.div
          :initial="{ y: 120 }"
          :animate="{ y: 0 }"
          :transition="{ delay: 0.5, duration: 0.6 }">
          <p class="text-secondary-text mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <NuxtLink
            to="/"
            class="inline-block px-6 py-3 border border-accent hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium"
            @click="handleError"
          >
            Back to Home
          </NuxtLink>
        </motion.div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { motion } from 'motion-v';

defineProps({
  error: Object,
});

useHead({
  title: 'Page Not Found - Buokem',
});

const handleError = () => clearError({ redirect: '/' });

useHead({
  script: [
    {
      children: `if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }`,
    },
  ],
});
</script>