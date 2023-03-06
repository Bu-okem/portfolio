<template>
	<div
		class="h-[80vh] flex flex-col items-center justify-center text-white text-center">
		<TypingAnimationText
			text='<h2 class="text-[2rem] mb-5 inline">
			Hello,<br />
			I am Chibuokem
		</h2>
		<br />
		<h4 class="inline">I am a Web Developer<br />
				To know more about me, click this button</h4>' />

		<section class="mt-[3em]">
			<NuxtLink to="/about">
				<button
					:class="[isVisible ? 'block' : 'hidden']"
					class="bg-white text-black p-[0.3em] rounded duration-200">
					About Me
				</button>
			</NuxtLink>
		</section>
	</div>
</template>

<script setup></script>
