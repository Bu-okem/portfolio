<template>
	<AboutCard category="experience">
		<AboutCardContent
			v-for="(item, index) in experience"
			:key="index"
			:header="item.position"
			:paragraph="item.institution"
			:footer="item.duration" />
	</AboutCard>
</template>

<script setup>
const { data: experience } = await useFetch("/api/about/experience");
// item = {position, institution, duration}
</script>
