<template>
  <div
    class="block text-start border border-border p-9 w-full cursor-pointer shadow-[0_0_10px_0_#5c5c5c24] bg-background hover:border-foreground hover:scale-105 hover:shadow-accent hover:shadow-[0_0_18px_0] transition-all duration-300 rounded-sm"
  >
    <div class="flex items-center justify-between gap-2 mb-4 text-xs uppercase tracking-wider text-secondary-text">
      <span>{{ type }}</span>
      <span v-if="role" class="italic truncate max-w-[65%]">{{ role }}</span>
    </div>
    <h2
      class="text-3xl font-medium font-header text-heading line-clamp-2 capitalize"
      style="word-break: break-word"
    >
      {{ name }}
    </h2>
    <p class="text-secondary-text py-6 font-light leading-relaxed">
      {{ description }}
    </p>
    <div v-if="stack && stack.length" class="flex flex-wrap gap-1.5 pt-2">
      <span
        v-for="tech in stack.slice(0, 4)"
        :key="tech"
        class="px-2 py-0.5 border border-border/70 rounded-sm text-xs text-secondary-text"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  name: String,
  description: String,
  type: String,
  role: String,
  stack: {
    type: Array,
    default: () => [],
  },
});
</script>
