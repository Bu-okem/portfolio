<template>
  <section class="relative min-h-screen mt-10">
    <!-- Left side skeleton -->
    <div class="lg:w-[26vw] lg:fixed mb-6">
      <div
        class="h-12 w-3/4 bg-accent/20 rounded mb-5 lg:mb-10 animate-pulse"></div>
      <div class="h-4 w-3/4 bg-accent/20 rounded mb-2 animate-pulse"></div>
      <div class="h-3 w-1/4 bg-accent/20 rounded animate-pulse"></div>
    </div>

    <!-- Right side skeleton -->
    <div class="lg:w-2/3 lg:absolute right-0 top-0 h-full">
      <div class="w-full h-[400px] bg-accent/20 rounded-sm animate-pulse"></div>
      <div class="flex gap-3 mt-5">
        <div class="w-16 h-6 bg-accent/20 rounded-sm animate-pulse"></div>
        <div class="w-16 h-6 bg-accent/20 rounded-sm animate-pulse"></div>
        <div class="w-16 h-6 bg-accent/20 rounded-sm animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
