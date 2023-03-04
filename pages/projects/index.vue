<template>
	<div>
		<div
			class="fixed z-0 text-slate-500 text-[4.9rem] uppercase font-semibold text-center opacity-20 overflow-hidden pulse">
			Projects
		</div>
	</div>

	<section
		class="flex flex-wrap max-w-[1050px] relative mx-auto mt-[6em] pb-[4em]">
		<NuxtLink
			v-for="(project, key) in projects"
			:key="key"
			:to="`projects/${key}`"
			class="w-[90%] max-w-xs mx-auto">
			<Card
				:projectName="project.name"
				:stack="project.stack"
				:description="project.description" />
		</NuxtLink>
	</section>
</template>

<script setup>
const { data: projects } = await useFetch("/api/projects");
const client = useSupabaseClient();
</script>

<style>
.pulse {
	animation: pulse 8s infinite;
}

@keyframes pulse {
	50% {
		opacity: 0.38;
	}
}
</style>
