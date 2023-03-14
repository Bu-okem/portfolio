<template>
	<AboutCard category="skills">
		<div
			class="grid grid-cols-2 md:grid-cols-4 gap-y-4 max-w-[695px] mx-auto pt-[2em]">
			<span v-for="(skill, index) in skills" :key="index" class="flex">
				<icon :name="skill.iconName" />
				<p class="ml-[0.2em]">{{ skill.name }}</p>
			</span>
		</div>
	</AboutCard>
</template>

<script setup>
const skills = ref([
	{
		name: "HTML",
		iconName: "html",
	},
	{
		name: "CSS",
		iconName: "css",
	},
	{
		name: "Javascript",
		iconName: "js",
	},
	{
		name: "TailwindCSS",
		iconName: "tailwind",
	},
	{
		name: "VueJS",
		iconName: "vue",
	},
	{
		name: "Nuxt3",
		iconName: "nuxt",
	},
	{
		name: "Jinja",
		iconName: "jinja",
	},
	{
		name: "Python",
		iconName: "python",
	},
	{
		name: "Flask",
		iconName: "flask",
	},
	{
		name: "SQL",
		iconName: "sql",
	},
]);
</script>
