<template>
  <div
    @mouseenter="() => (isOpen = true)"
    @mouseleave="() => (isOpen = false)"
    class="fixed bottom-5 right-6 flex flex-col items-center justify-center z-40">
    <div
      class="bg-background h-10 w-10 border border-solid border-border rounded-full cursor-pointer flex items-center justify-center z-10"
      aria-label="Toggle theme palette">
      <Icon name="solar:pallete-2-outline" size="24" />
    </div>

    <!-- Theme Dots Container -->
    <div
      class="pb-3 absolute bottom-8 w-full flex justify-center overflow-hidden transition-all duration-500 ease-in-out bg-background rounded-full border border-border"
      :style="{
        maxHeight: isOpen ? `${themes.length * 2.5}rem` : '0px',
        opacity: isOpen ? 1 : 0,
      }"
      role="group"
      aria-label="Theme options">
      <div class="flex flex-col items-center gap-2 py-2">
        <button
          v-for="theme in themes"
          :key="theme.name"
          type="button"
          @click="selectTheme(theme)"
          class="dot"
          :class="{ 'dot-active': theme.name === activeTheme }"
          :style="{ backgroundColor: theme.vars.background }"
          :title="label(theme.name)"
          :aria-label="`Switch to ${label(theme.name)} theme`"
          :aria-current="theme.name === activeTheme ? 'true' : undefined"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { themes, activeTheme, applyTheme, resolveStoredTheme } = useTheme();

const isOpen = ref(false);

onMounted(() => {
  // The inline script in app.vue already painted the right theme; this syncs
  // the picker's highlight and clears a stored theme that no longer exists.
  const theme = resolveStoredTheme();
  if (theme) activeTheme.value = theme.name;
});

const selectTheme = (theme) => {
  applyTheme(theme);
  isOpen.value = false;
};

const label = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).split('-').join(' ');
</script>

<style scoped>
.dot {
  background-color: var(--color-background);
  border: solid 1px var(--color-border);
  border-radius: 50%;
  display: block;
  min-height: 1rem;
  min-width: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.dot:hover,
.dot:focus-visible {
  transform: scale(1.2);
  outline: 1px solid var(--color-foreground);
  outline-offset: 2px;
}

.dot-active {
  outline: 2px solid var(--color-foreground);
  outline-offset: 2px;
}
</style>

