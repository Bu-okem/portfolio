<template>
  <div
    class="mt-[100px] mx-5 pb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <BlogPostCard
      v-for="post in posts"
      :key="post.title"
      :title="post.title"
      :date="post.date"
      :tags="post.tags" />
  </div>
</template>

<script setup>
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
