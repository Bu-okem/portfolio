<template>
	<div class="max-w-[695px] mt-[2em] mx-auto">
		<span class="flex text-white mb-[0.4em]">
			<icon :name="iconName" />
			<p class="ml-[0.2em]">{{ cardHeader }}</p>
		</span>
		<div
			class="bg-[#16191c] bg-opacity-60 backdrop-blur text-slate-400 px-[1em] pb-[2em] rounded-sm">
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	category: String,
});
const category = props.category;
const cardHeader = ref("");
const iconName = ref("");

if (category === "certification") {
	cardHeader.value = "Certification";
	iconName.value = "paper";
} else if (category === "education") {
	cardHeader.value = "Education";
	iconName.value = "education";
} else if (category === "experience") {
	cardHeader.value = "Experience";
	iconName.value = "briefcase";
} else if (category === "skills") {
	cardHeader.value = "Skills";
	iconName.value = "tools";
}
</script>
