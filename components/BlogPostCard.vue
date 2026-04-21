<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="min-h-[240px] flex flex-col justify-between gap-8 h-full border border-accent p-6 shadow-[0_0_10px_0_#5c5c5c24] cursor-pointer hover:border-foreground hover:scale-[1.03] hover:shadow-accent hover:shadow-[0_0_18px_0] transition-all duration-300 rounded-sm"
    :aria-label="`Read blog post: ${title}`">
    <div>
      <h2
        class="text-2xl lg:text-3xl font-semibold line-clamp-3 font-header"
        style="word-break: break-word">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="text-sm text-secondary-text mt-3 line-clamp-3 font-light leading-relaxed">
        {{ description }}
      </p>
    </div>
    <div class="text-xs text-secondary-text flex flex-wrap items-center justify-between gap-2">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-1 border border-accent rounded-sm">
          {{ tag }}
        </span>
      </div>
      <p>{{ date }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  link: String,
  date: String,
  description: String,
  tags: Array,
});
</script>
