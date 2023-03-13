<template>
	<div
		class="h-[80vh] flex flex-col items-center justify-center text-white text-center font-['Ubuntu_Mono',_'monospace']">
		<TypingTextAnimation
			text='<h2 class="text-[2rem] mb-5 inline">
						Hello,<br />
						I am Chibuokem
					</h2>
					<br />
					<h4 class="inline text-[1.2rem]">
						I am a Web Developer<br />
						To know more about me, click this button
					</h4>' />

		<section class="mt-[3em] h-[33.6px]">
			<NuxtLink to="/about">
				<button
					:class="[isVisible ? 'opacity-1' : 'opacity-0']"
					class="bg-[#19161c] text-white text-[1.2rem] flex items-center justify-around w-[125px] px-[0.5em] py-[0.3em] rounded duration-1000">
					About Me
					<icon name="person" color="white" />
				</button>
			</NuxtLink>
		</section>
	</div>
</template>

<script setup>
const isVisible = useVisiblity();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
</style>
