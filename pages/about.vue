<template>
	<div>
		<div
			class="select-none text-slate-500 text-[calc(3.3rem_+_6vw)] uppercase font-semibold text-center opacity-20 overflow-hidden whitespace-nowrap pulse">
			About Me
		</div>
		<section class="text-white mx-[1em]">
			<h4 class="text-[1.2rem] text-center mb-[1.57em]">
				Hello, I'm Chibuokem, a web-developer based in Port Harcourt. I have
				rich experience in web design and customization
			</h4>
			<button
				class="bg-[#19161c] w-[90%] max-w-[320px] py-[0.5em] px-[1em] mb-[1em] mx-auto rounded-sm flex justify-center">
				<icon name="download-rounded" /> Download Resume
			</button>
			<div class="flex justify-around w-[160px] mx-auto">
				<a href="https://github.com/bu-okem">
					<icon name="github" button="true" />
				</a>
				<a href="https://linkedin.com/in/chibuokem-obiegbulem">
					<icon name="linkedin" button="true" />
				</a>
				<a href="mailto:chiobiegbulem@gmail.com">
					<icon name="mail" button="true" />
				</a>
			</div>
		</section>
		<section class="mx-[1em] my-[2em]">
			<div class="bg-[#16191c] p-[1em] rounded-sm">
				<span class="text-slate-400 flex">
					<icon name="paper" />
					<p class="ml-[0.2em]">Certificate</p>
				</span>
			</div>
		</section>
	</div>
</template>

<script setup></script>

<style>
svg {
	width: 22px;
	height: 22px;
}
</style>
