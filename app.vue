<template>
  <div
    class="min-h-screen bg-background text-body font-body transition-all duration-500">
    <MotionConfig reduce-motion="user">
      <NuxtLayout>
        <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
      </NuxtLayout>
    </MotionConfig>
  </div>
</template>

<script setup>
import { MotionConfig } from "motion-v";
import { themeBootstrapScript } from "~/lib/themes";

// Applies the stored theme before first paint. Generated from lib/themes.ts,
// so deleting a theme there automatically retires it here too.
useHead({
  // One place defines the title format. Pages set a bare name ("About") and
  // this appends the suffix; a page with no title gets the site default.
  titleTemplate: (title) => (title ? `${title} - Buokem` : "Buokem - Software Developer"),
  script: [{ children: themeBootstrapScript() }],
});
</script>
