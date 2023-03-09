<template>
	<AboutCard category="certification">
		<AboutCardContent
			v-for="(certificate, index) in certifications"
			:key="index"
			:header="certificate.certification"
			:paragraph="certificate.institution"
			:footer="certificate.dateIssued" />
	</AboutCard>
</template>

<script setup>
const { data: certifications } = await useFetch("/api/about/certifications");
// certificate = { certification, institution, dateIssued }
</script>
