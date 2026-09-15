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
  script: [{ children: themeBootstrapScript() }],
});
</script>
