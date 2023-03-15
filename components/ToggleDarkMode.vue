<template>
	<div
		@click="toggleDark()"
		class="fixed z-40 right-4 bottom-8 bg-gray-400 dark:bg-[#16191c] h-12 w-12 rounded-full cursor-pointer flex justify-center items-center text-black dark:text-white">
		t
	</div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
