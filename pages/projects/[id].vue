<template>
	<div>
		<section>
			<div class="h-[350px] w-[350px] m-4 bg-gray-700">
				<h3>{{ project.name }} Image</h3>
			</div>
		</section>
		<section>
			<h2 class="text-white">{{ project.name }}</h2>
		</section>
	</div>
</template>

<script setup>
//PortfolioDB.c0m
const { id } = useRoute().params;
const { data: project } = await useFetch(`/api/projects/${id}`);
</script>
