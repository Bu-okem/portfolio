<template>
	<AboutCard category="education">
		<AboutCardContent
			v-for="(item, index) in education"
			:key="index"
			:header="item.institution"
			:paragraph="item.degree"
			:footer="item.duration" />
	</AboutCard>
</template>

<script setup>
const { data: education } = await useFetch("/api/about/education");
// item = {institution, degree, duration}
</script>
