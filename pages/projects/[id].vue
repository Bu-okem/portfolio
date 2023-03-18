<template>
	<div class="max-w-[650px] mx-auto">
		<section class="text-white p-[1.5em]">
			<h2 class="text-[2.5rem] mb-[0.4em]">{{ project.name }}</h2>
			<h4 class="my-[1em]">{{ project.stack }}</h4>
			<h4>{{ project.description }}</h4>
		</section>
		<section class="p-[1.5em]">
			<div class="text-slate-400 flex justify-between w-[200px]">
				<a v-if="project.link" :href="project.link">
					<span class="flex items-center hover:text-white duration-500">
						<icon name="eye" />
						<p class="ml-[0.2em]">View</p>
					</span>
				</a>
				<a v-if="project.sourceCode" :href="project.sourceCode">
					<span class="flex hover:text-white duration-500">
						<icon name="github" />
						<p class="ml-[0.2em]">Source Code</p>
					</span>
				</a>
			</div>
		</section>
		<button
			@click="$router.back()"
			class="text-white border-b-2 ml-[1.5em] pr-1 pb-[0.3em] flex group">
			<icon
				name="arrow-back"
				class="block w-0 mr-1 overflow-x-hidden lg:group-hover:w-[18px] duration-700" />
			Back
		</button>
	</div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: project } = await useFetch(`/api/projects/${id}`);
</script>
