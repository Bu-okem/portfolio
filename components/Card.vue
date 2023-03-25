<template>
	<div
		class="flex flex-col justify-around h-fit bg-[#16191c] bg-opacity-60 backdrop-blur my-[0.25em] p-[1.8em] rounded-sm">
		<h3 class="text-white text-[1.6rem] capitalize">{{ projectName }}</h3>
		<h5 class="text-slate-400 my-2">{{ stack }}</h5>
		<div class="h-[75px] line-clamp-3">
			<p class="text-slate-400">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	projectName: String,
	stack: String,
	description: String,
});
</script>
