<template>
  <iframe :src="Resume" width="100%" height="655px"> </iframe>
</template>

<script setup>
definePageMeta({
  layout: 'pdf',
});

import Resume from '@/assets/resume.pdf';
</script>
