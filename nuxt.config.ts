// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
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
	},
});
