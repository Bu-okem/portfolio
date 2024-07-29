<template>
  <iframe :src="Resume" width="100%" height="655px"> </iframe>
</template>

<script setup>
definePageMeta({
  layout: 'pdf',
});

useSeoMeta({
  title: "Buokem's Resume",
  ogTitle: "Buokem's Resume",
  ogDescription: "Buokem's resume",
  ogImage: '/urlImg.png',
  ogUrl: 'https://buokem.vercel.app/resume',
  twitterTitle: "Buokem's Resume",
  twitterDescription: "Buokem's resume",
  twitterImage: '/urlImg.png',
  twitterCard: 'summary',
});

import Resume from '@/assets/resume.pdf';
</script>
