<template>
	<div>
		<div
			class="select-none text-slate-500 text-[calc(3.3rem_+_6vw)] uppercase font-semibold text-center opacity-20 overflow-hidden whitespace-nowrap pulse lg:hidden">
			About Me
		</div>
		<section class="text-white mx-[1em]">
			<h4 class="text-[1.2rem] text-center mb-[1.57em] max-w-[696px] mx-auto">
				Hello, I'm Chibuokem, a web-developer based in Port Harcourt. I have
				rich experience in web design and customization
			</h4>
			<a
				href="https://www.dropbox.com/s/5cujrs3d6kbhp0d/Chibuokem-Obiegbulem_Resume.pdf?dl=0"
				target="_blank"
				class=""
				download="Chibuokem-Obiegbulem_Resume">
				<button
					class="bg-[#19161c] w-[90%] max-w-[320px] py-[0.5em] px-[1em] mb-[1em] mx-auto rounded-sm flex justify-center lg:hover:scale-105 duration-300">
					<icon name="download-rounded" /> Download Resume
				</button>
			</a>
			<div class="flex justify-around w-[160px] mx-auto">
				<a
					v-for="(button, index) in buttons"
					:key="index"
					:href="button.link"
					target="_blank"
					class="lg:hover:scale-105 duration-300">
					<icon :name="button.iconName" :button="true" />
				</a>
			</div>
		</section>
		<section class="text-white mx-[1em]">
			<Skills />
		</section>
		<section class="mx-[1em] py-[2em]">
			<Certification />
			<Education />
			<Experience />
		</section>
	</div>
</template>

<script setup>
const buttons = ref([
	{
		link: "https://github.com/bu-okem",
		iconName: "github",
	},
	{
		link: "https://linkedin.com/in/chibuokem-obiegbulem",
		iconName: "linkedin",
	},
	{
		link: "mailto:chiobiegbulem@gmail.com",
		iconName: "mail",
	},
]);
</script>
