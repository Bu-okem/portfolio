<template>
  <div
    class="min-h-screen bg-background text-foreground font-body transition-all duration-500">
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      children: `if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }`,
    },
  ],
});
</script>
