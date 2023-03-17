<template>
	<div class="bg-black min-h-screen fixed top-0 left-0 right-0 bottom-0">
		<div
			:class="[!isLoading ? 'opacity-0 scale-150 z-[-5] hidden' : '']"
			class="fixed z-30 h-screen w-screen bg-black text-[3rem] text-white flex items-center justify-center duration-500 ease-linear">
			<h2 class="animate-bounce">b_</h2>
		</div>
		<header>
			<div
				class="fixed z-20 w-full p-[1em] flex justify-between bg-gradient-to-b from-black to-transparent">
				<div class="flex z-30">
					<h2
						:class="[navOpen ? 'w-[88.1px] delay-[200ms]' : 'w-[15px]']"
						class="text-[1.5rem] text-white overflow-x-hidden whitespace-nowrap w-[15px] lg:w-[88.1px] duration-[600ms]">
						b<span class="">uokem</span>
					</h2>
					<h2 class="text-[1.5rem] text-white inline">_</h2>
				</div>
				<div ref="nav" class="lg:hidden">
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
						:class="[navOpen ? 'left-0' : 'left-[-100%]']"
						class="flex fixed top-0 text-white h-full w-1/2 bg-[#00000096] backdrop-blur-md duration-700">
						<ul
							class="relative top-[88px] left-[16px] flex flex-col justify-around h-[40%] py-[2em]">
							<li
								v-for="(object, index) in navLinksObjects"
								:key="index"
								class="px-[1em]">
								<NuxtLink
									:to="`${object.link}`"
									@click="navOpen = false"
									class="uppercase text-[1.2rem]"
									>{{ object.title }}</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<main class="pt-[5em] min-h-screen">
			<!-- <ToggleDarkMode /> -->
			<slot />
		</main>
	</div>
</template>

<script setup>
const isLoading = useLoadingIndicator();
setTimeout(() => (isLoading.value = false), 3000);
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
