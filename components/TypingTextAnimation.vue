<template>
	<div class="h-[156px]">
		<span class="inline" v-html="currentText"></span>
		<span class="inline text-[1.5rem]" :class="[isBlinking ? 'blink' : '']"
			>_</span
		>
	</div>
</template>

<script setup>
const props = defineProps({
	text: String,
});
const currentText = useAnimationText();
const charIndex = useAnimationTextIndex();
const isBlinking = ref(true);
const isVisible = useVisiblity();

const typing = () => {
	isBlinking.value = false;
	setInterval(() => {
		currentText.value = props.text.slice(0, charIndex.value);
		charIndex.value++;
		if (charIndex.value > props.text.length) {
			isBlinking.value = true;
			isVisible.value = true;
		}
	}, 100);
};

typing();
</script>

<style scoped>
.blink {
	animation: blink 1s infinite;
	position: relative;
	z-index: 0;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}
</style>
