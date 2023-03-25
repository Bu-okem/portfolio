<template>
	<div
		class="h-[80vh] flex flex-col items-center justify-center text-dark text-center font-['Ubuntu_Mono',_'monospace']">
		<TypingTextAnimation
			text='<h2 class="text-[2rem] mb-5 inline">
						Hello,<br />
						I am Chibuokem
					</h2>
					<br />
					<h4 class="inline text-[1.15rem]">
						I am a Web Developer<br />
						To know more about me, click this button
					</h4>' />

		<section
			:class="[isVisible ? 'opacity-1' : 'opacity-0']"
			class="mt-[3em] h-[83.6px] text-dark flex flex-col items-center justify-between duration-1000">
			<icon name="arrow-down" class="animate-bounce" />
			<NuxtLink to="/about">
				<button
					class="bg-[#19161c] text-[1.15rem] flex items-center justify-around w-[125px] px-[0.5em] py-[0.3em] rounded">
					About Me
					<icon name="person" />
				</button>
			</NuxtLink>
		</section>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "home",
});
const isVisible = useVisiblity();
</script>

<style>
section > span > svg {
	height: 28px !important;
	width: 28px !important;
}
</style>
