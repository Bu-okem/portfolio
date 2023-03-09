<template>
	<div class="py-[1em] border-b-2 border-b-black">
		<h3 class="text-[1.3rem] text-white">{{ props.header }}</h3>
		<h4>{{ props.paragraph }}</h4>
		<p class="text-[0.8rem]">{{ props.footer }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
	header: String,
	paragraph: String,
	footer: String,
});
</script>
