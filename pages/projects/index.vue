<template>
	<div>
		<div class="lg:hidden">
			<div
				class="select-none fixed z-0 top-20 w-full text-slate-500 text-[calc(3.5rem_+_6vw)] uppercase font-semibold text-center opacity-20 overflow-hidden pulse">
				Projects
			</div>
		</div>

		<section class="w-full relative mt-[6em] pb-[4em] lg:mt-0">
			<NuxtLink
				v-for="(project, key) in projects"
				:key="key"
				:to="`projects/${key}`"
				class="block relative w-[90%] max-w-[450px] mx-auto z-10 lg:max-w-[650px] lg:hover:scale-105 lg:hover:opacity-100 lg:hover:z-30 lg:duration-200">
				<Card
					:projectName="project.name"
					:stack="project.stack"
					:description="project.description" />
			</NuxtLink>
		</section>
	</div>
</template>

<script setup>
const { data: projects } = await useFetch("/api/projects");
const client = useSupabaseClient();
</script>
