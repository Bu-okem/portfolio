<template>
	<div>
		<div
			class="fixed z-0 text-slate-500 text-[4.9rem] uppercase font-semibold text-center opacity-20 overflow-hidden pulse">
			Projects
		</div>
	</div>

	<section class="flex flex-wrap max-w-[1050px] relative mx-auto mt-[6em]">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</section>
</template>

<script setup></script>

<style>
.pulse {
	animation: pulse 8s infinite;
}

@keyframes pulse {
	50% {
		opacity: 0.38;
	}
}
</style>
