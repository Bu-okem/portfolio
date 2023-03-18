// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/supabase",
		"@nuxtjs/device",
		"@nuxt/devtools",
	],
	device: {
		refreshOnResize: true,
	},
	app: {
		head: {
			title: "Buokem",
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "favicon.png",
				},
			],
		},
		layoutTransition: {
			name: "layout",
			mode: "out-in",
		},
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	},
});
