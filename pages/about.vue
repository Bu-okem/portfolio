<template>
	<div>
		<div
			class="select-none text-slate-500 text-[calc(3.3rem_+_6vw)] uppercase font-semibold text-center opacity-20 overflow-hidden whitespace-nowrap pulse lg:hidden">
			About Me
		</div>
		<section class="text-white mx-[1em]">
			<h4 class="text-[1.2rem] text-center mb-[1.57em]">
				Hello, I'm Chibuokem, a web-developer based in Port Harcourt. I have
				rich experience in web design and customization
			</h4>
			<a
				href="https://www.dropbox.com/s/p3m79g4o8g31fcs/Chibuokem-Obiegbulem_Resume.pdf?dl=0"
				class=""
				download="Chibuokem-Obiegbulem_Resume">
				<button
					class="bg-[#19161c] w-[90%] max-w-[320px] py-[0.5em] px-[1em] mb-[1em] mx-auto rounded-sm flex justify-center">
					<icon name="download-rounded" /> Download Resume
				</button>
			</a>
			<div class="flex justify-around w-[160px] mx-auto">
				<a href="https://github.com/bu-okem">
					<icon name="github" :button="true" />
				</a>
				<a href="https://linkedin.com/in/chibuokem-obiegbulem">
					<icon name="linkedin" :button="true" />
				</a>
				<a href="mailto:chiobiegbulem@gmail.com">
					<icon name="mail" :button="true" />
				</a>
			</div>
		</section>
		<section class="mx-[1em] py-[2em]">
			<Certification />
			<Education />
			<Experience />
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
