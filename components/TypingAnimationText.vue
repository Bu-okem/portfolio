<template>
	<div>
		<span class="inline" v-html="currentText"></span>
		<span class="inline animate-blink text-[1.5rem]">_</span>
	</div>
</template>

<script setup>
const props = defineProps({
	text: String,
});
const currentText = ref("");
const charIndex = ref(0);

const typing = () => {
	setInterval(() => {
		currentText.value = props.text.slice(0, charIndex.value);
		charIndex.value++;
		if (charIndex.value > props.text.length) {
			clearInterval();
		}
	}, 100);
};

onMounted(() => {
	typing();
});
</script>
