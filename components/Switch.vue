<template>
  <div
    @mouseenter="() => (isOpen = true)"
    @mouseleave="() => (isOpen = false)"
    class="fixed bottom-5 right-6 flex flex-col items-center justify-center">
    <div
      class="bg-background h-10 w-10 border border-solid border-accent rounded-full cursor-pointer flex items-center justify-center z-10">
      <Icon name="solar:pallete-2-outline" size="24" />
    </div>

    <!-- Theme Dots Container -->
    <div
      class="pb-3 absolute bottom-8 w-full flex justify-center overflow-hidden transition-all duration-500 ease-in-out bg-background rounded-full border border-accent"
      :style="{
        maxHeight: isOpen ? `${themes.length * 2.5}rem` : '0px',
        opacity: isOpen ? 1 : 0,
      }">
      <div class="flex flex-col items-center gap-2 py-2">
        <span
          v-for="theme in themes"
          :key="theme.name"
          @click="selectTheme(theme)"
          class="dot"
          :style="{ backgroundColor: theme.vars.background }"></span>
      </div>
    </div>
  </div>
</template>
<!-- :class="
            isOpen
              ? `-translate-y-${(themes.length - index) * 4} opacity-100`
              : `translate-y-${themes.length - index + 3} opacity-0`
          " -->
<script setup>
const isOpen = ref(false);
const { allThemes, applyThemeVars, setDark, setLight } = useTheme();
const themes = [
  {
    name: 'light',
    vars: {
      background: 'oklch(0.98 0 0)',
      foreground: 'oklch(0.2 0 0)',
      accent: 'oklch(0.72 0 0)',
      'secondary-text': 'oklch(0.556 0 0)',
      border: 'oklch(0.85 0 0)',
    },
  },
  ...allThemes,
  {
    name: 'dark',
    vars: {
      background: 'oklch(0.23 0 0)',
      foreground: 'oklch(0.985 0 0)',
      accent: 'oklch(0.47 0 0)',
      'secondary-text': 'oklch(0.7 0 0)',
      border: 'oklch(0.47 0 0)',
    },
  },
];

// Refactored theme selection logic
const selectTheme = (theme) => {
  if (theme.name === 'light') {
    setLight();
    applyThemeVars(theme.vars);
  } else if (theme.name === 'dark') {
    setDark();
    applyThemeVars(theme.vars);
  } else {
    applyThemeVars(theme.vars);
  }
  // isOpen.value = false;
};
</script>

<style scoped>
.dot {
  background-color: var(--color-background);
  border: solid 1px var(--color-accent);
  border-radius: 50%;
  display: block;
  min-height: 1rem;
  min-width: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.dot:hover {
  transform: scale(1.1); /* Example hover effect */
}
</style>
