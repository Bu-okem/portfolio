<template>
  <div class="mt-[100px] mx-5 pb-9">
    <masonry-wall :items="loadingItems" :column-width="250" :gap="20">
      <template #default="{ item }">
        <div class="bg-muted rounded-sm p-4 animate-pulse">
          <div class="h-40 bg-accent/20 rounded-sm mb-4"></div>
          <div class="space-y-3">
            <div class="h-4 bg-accent/20 rounded w-3/4"></div>
            <div class="h-3 bg-accent/20 rounded w-1/2"></div>
            <div class="flex gap-2">
              <div class="h-6 bg-accent/20 rounded w-16"></div>
              <div class="h-6 bg-accent/20 rounded w-16"></div>
            </div>
          </div>
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script setup lang="ts">
const loadingItems = Array(8).fill({})
</script>