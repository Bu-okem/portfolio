<template>
	<div
		class="flex flex-col justify-around h-fit bg-[#16191c] my-[0.5em] p-[1em] rounded">
		<h3 class="text-white text-[2rem] capitalize">{{ projectName }}</h3>
		<h5 class="text-slate-400 my-2">{{ stack }}</h5>
		<div class="h-[75px] overflow-hidden overflow-ellipsis">
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
