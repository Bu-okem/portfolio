<template>
  <div class="mx-5 lg:mx-10 py-10">
    <slot />
    <Switch />
  </div>
</template>

<script setup>
import Switch from '@/components/Switch.vue';
useHead({
  title: 'Buokem — Software Developer',
});
</script>
