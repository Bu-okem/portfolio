<template>
  <div
    class="min-h-[240px] flex flex-col justify-between gap-12 h-full border border-accent p-6 shadow-[0_0_10px_0_#5c5c5c24] cursor-pointer hover:border-foreground hover:scale-105 hover:shadow-accent hover:shadow-[0_0_18px_0] transition-all duration-300 rounded-sm">
    <h2
      class="text-3xl font-semibold line-clamp-3 font-header"
      style="word-break: break-word">
      {{ title }}
    </h2>
    <div class="text-xs opacity-50 flex justify-between">
      <p
        v-for="tag in tags"
        :key="tag"
        class="px-2 py-1 border border-accent rounded-sm">
        {{ tag }}
      </p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  tags: Array,
});
</script>
