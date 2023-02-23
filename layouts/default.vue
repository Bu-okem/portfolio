<template>
	<div class="bg-black min-h-screen">
		<header>
			<div class="fixed w-full p-[1em] flex justify-between">
				<div>
					<h2 class="text-[1.5rem] text-white">
						b<span class="hidden lg:inline">uokem</span>_
					</h2>
				</div>
				<div ref="nav">
					<div
						@click="navOpen = !navOpen"
						class="duration-[600ms] relative z-30 h-full w-[26px] cursor-pointer">
						<div
							:class="[
								navOpen
									? '!bg-transparent translate-x-[-35px] before:rotate-[40deg] before:origin-left before:translate-x-[35px] after:rotate-[-40deg] after:origin-left after:translate-x-[35px]'
									: '',
							]"
							class="duration-[700ms] before:duration-[700ms] after:duration-[700ms] bg-white h-[2px] w-[70%] absolute top-[50%] before:content-[''] before:bg-white before:h-[2px] before:w-[143%] before:absolute before:bottom-[8px] after:content-[''] after:bg-white after:h-[2px] after:w-[143%] after:absolute after:top-[8px]"></div>
					</div>
					<nav
						:class="[navOpen ? 'right-0' : 'right-[-50%]']"
						class="fixed top-0 text-white h-full w-[50%] bg-transparent backdrop-blur-md duration-700">
						<ul class="flex flex-col justify-around h-[33%] py-[2em]">
							<li
								v-for="(object, index) in navLinksObjects"
								:key="index"
								class="px-[1em]">
								<NuxtLink
									:to="`${object.link}`"
									@click="navOpen = false"
									class="capitalize"
									>{{ object.title }}</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<main class="pt-[5em] h-screen">
			<slot />
		</main>
	</div>
</template>

<script setup>
const navLinksObjects = [
	{ title: "home", link: "/" },
	{ title: "about", link: "/about" },
	{ title: "projects", link: "/projects" },
];
const nav = ref(null);
const navOpen = ref(false);
useDetectOutsideClick(nav, () => {
	navOpen.value = false;
});
</script>
