<template>
  <motion.div
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6 }"
    class="mt-[100px] mx-5 pb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5">
    <BlogPostCard
      v-for="post in posts"
      :key="post.title"
      :title="post.title"
      :date="post.date"
      :tags="post.tags" />
  </motion.div>
</template>

<script setup>
import { motion } from 'motion-v';
useHead({
  title: 'Buokem - Blog',
});
const posts = [
  {
    title: 'Building a File Organiser using NodeJS',
    date: 'May 6, 2025',
    tags: ['NodeJS'],
  },
  {
    title: 'Building a Marketplace using MedusaJS and NextJS',
    date: 'May 6, 2025',
    tags: ['MedusaJS'],
  },
  {
    title: 'Building a File Organiser using NodeJS',
    date: 'May 6, 2025',
    tags: ['NodeJS'],
  },
  {
    title: 'Building a File Organiser using NodeJS',
    date: 'May 6, 2025',
    tags: ['NodeJS'],
  },
  {
    title: 'Building a File Organiser using NodeJS',
    date: 'May 6, 2025',
    tags: ['NodeJS'],
  },
];
</script>
