<template>
  <div role="status" aria-label="Loading projects">
    <!-- Filters skeleton matching pages/projects/index.vue -->
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6 animate-pulse">
      <div class="flex flex-wrap gap-2">
        <div
          v-for="w in ['w-14', 'w-20', 'w-24', 'w-16']"
          :key="w"
          class="h-[34px] border border-border rounded-sm bg-accent/20"
          :class="w"
        ></div>
      </div>
      <div class="h-[34px] w-32 border border-border rounded-sm bg-accent/20"></div>
    </div>

    <!-- Masonry wall skeleton matching ProjectCard.vue layout & responsive columnWidth -->
    <masonry-wall
      :items="loadingItems"
      :column-width="columnWidth"
      :gap="8"
      :ssr-columns="1"
    >
      <template #default="{ item }">
        <div
          class="block text-start border border-border p-9 w-full shadow-[0_0_10px_0_#5c5c5c24] bg-background rounded-sm animate-pulse"
        >
          <!-- Type & Role header -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="h-3 w-16 bg-accent/20 rounded-xs"></div>
            <div class="h-3 w-24 bg-accent/20 rounded-xs"></div>
          </div>

          <!-- Project Title (text-3xl) -->
          <div class="h-8 bg-accent/20 rounded-xs" :class="item.titleWidth"></div>

          <!-- Short Description (py-6) -->
          <div class="py-6 space-y-2.5">
            <div class="h-4 w-full bg-accent/20 rounded-xs"></div>
            <div class="h-4 w-11/12 bg-accent/20 rounded-xs"></div>
            <div
              v-if="item.extraLine"
              class="h-4 w-2/3 bg-accent/20 rounded-xs"
            ></div>
          </div>

          <!-- Stack badges (pt-2) -->
          <div class="flex flex-wrap gap-1.5 pt-2">
            <div
              v-for="(badgeWidth, idx) in item.badges"
              :key="idx"
              class="h-5 border border-border/70 bg-accent/20 rounded-sm"
              :class="badgeWidth"
            ></div>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script setup lang="ts">
const { width: windowWidth } = useWindowSize({ initialWidth: 1024 });
const columnWidth = computed(() => {
  if (windowWidth.value >= 1536) return 420;
  if (windowWidth.value >= 1024) return 350;
  if (windowWidth.value >= 640) return 300;
  return 280;
});

const loadingItems = [
  { titleWidth: "w-3/4", extraLine: true, badges: ["w-14", "w-16", "w-12"] },
  { titleWidth: "w-1/2", extraLine: false, badges: ["w-16", "w-14", "w-20"] },
  { titleWidth: "w-2/3", extraLine: true, badges: ["w-12", "w-16", "w-14", "w-12"] },
  { titleWidth: "w-3/5", extraLine: false, badges: ["w-16", "w-12"] },
  { titleWidth: "w-4/5", extraLine: true, badges: ["w-14", "w-20", "w-16"] },
  { titleWidth: "w-2/3", extraLine: false, badges: ["w-12", "w-14", "w-16"] },
];
</script>