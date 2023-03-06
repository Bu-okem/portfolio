<template>
	<div>
		<section class="text-white p-[1.5em]">
			<h2 class="text-[2.5rem] mb-[0.4em]">{{ project.name }}</h2>
			<h4 class="my-[1em]">{{ project.stack }}</h4>
			<h4>{{ project.description }}</h4>
		</section>
	</div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: project } = await useFetch(`/api/projects/${id}`);
</script>
