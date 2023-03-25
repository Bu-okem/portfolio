module.exports = {
	darkMode: "class",
	plugins: [require("@tailwindcss/line-clamp")],
	theme: {
		backgroundColor: {
			dark: "#000000",
			light: "#f5f5f5",
			card: {
				dark: "#16191c",
				light: "f5f5f5",
			},
		},
		colors: {
			button: {
				dark: "#16191c",
				light: "#d8d8d8",
			},
		},
		textColor: {
			dark: "#ffffff",
			light: "#333333",
			card: {
				dark: "#94a3b8",
				light: "#333333",
			},
		},
	},
};
