<template>
  <div
    class="block text-start border border-accent p-9 w-full cursor-pointer shadow-[0_0_10px_0_#5c5c5c24] hover:border-foreground hover:scale-105 hover:shadow-accent hover:shadow-[0_0_18px_0] transition-all duration-300 rounded-sm">
    <!-- _#5c5c5c24 -->
    <h4
      class="text-3xl font-medium font-header line-clamp-2"
      style="word-break: break-word">
      {{ name }}
    </h4>
    <p class="text-secondary-text py-9">
      {{ description }}
    </p>
    <span class="">{{ type }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  description: String,
  type: String,
});
</script>
