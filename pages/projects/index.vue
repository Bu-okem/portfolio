<template>
	<div class="lg:hidden">
		<div
			class="select-none fixed z-0 w-full text-slate-500 text-[calc(3.5rem_+_6vw)] uppercase font-semibold text-center opacity-20 overflow-hidden pulse">
			Projects
		</div>
	</div>

	<section class="w-full relative mt-[6em] pb-[4em] lg:mt-0">
		<NuxtLink
			v-for="(project, key) in projects"
			:key="key"
			:to="`projects/${key}`"
			class="block w-[90%] max-w-[450px] mx-auto lg:max-w-[650px]">
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
