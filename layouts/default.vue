<template>
	<div class="bg-black h-screen">
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
						:class="[navOpen ? 'rotate-[360deg]' : '']"
						class="duration-[600ms] relative z-30 h-[100%] w-[26px] cursor-pointer">
						<div
							:class="[
								navOpen
									? 'before:hidden after:rotate-[-90deg] after:top-0 rotate-45 top-[15px]'
									: '',
							]"
							class="duration-[1000ms] bg-white h-[2px] w-full absolute top-[25%] before:content-[''] before:bg-white before:h-[2px] before:w-full before:absolute before:top-[8px] after:content-[''] after:bg-white after:h-[2px] after:w-full after:absolute after:top-[16px]"></div>
					</div>
					<nav
						:class="[navOpen ? 'right-0' : 'right-[-50%]']"
						class="fixed top-0 text-white h-full w-[50%] bg-teal-600 backdrop-blur-md duration-700">
						<ul class="flex flex-col justify-around h-[33%] py-[2em]">
							<li v-for="link in navLinks" :key="link" class="px-[1em]">
								<NuxtLink
									v-if="link === 'home'"
									to="/"
									@click="navOpen = false"
									class="capitalize"
									>{{ link }}</NuxtLink
								>
								<NuxtLink
									v-else
									:to="`/${link}`"
									@click="navOpen = false"
									class="capitalize"
									>{{ link }}</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<main class="pt-[5em] h-full">
			<slot />
		</main>
	</div>
</template>

<script setup>
const navLinks = ["home", "about", "projects"];
const nav = ref(null);
const navOpen = ref(false);
useDetectOutsideClick(nav, () => {
	navOpen.value = false;
});
</script>
