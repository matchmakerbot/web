import { defineConfig } from "windicss/helpers";

export default defineConfig({
	theme: {
		extend: {
			colors: {
				deep: {
					DEFAULT: "#273461",
					50: "#B9C2E3",
					400: "#394B8D",
					500: "#273461",
					700: "#1E284B",
					800: "#1A2240",
					900: "#151D35",
					1000: "#101527",
				},
			},
		},
		fontFamily: {
			heading: "Carter One, sans-serif",
			sans: "Lato, sans-serif",
			ptsans: "PT Sans, sans-serif",
		},
	},
	shortcuts: {
		heading: "font-heading !leading-[1.15]",
	},
});
