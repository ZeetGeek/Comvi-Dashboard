/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			// custom fonts
			fontFamily: {
				manrope: "(var(--font-manrope))",
			},

			// custom colors
			colors: {
				// primary color
				primary: "#036666",
				"primary-light": "#15CAB8",
				"primary-lighten": "#F4FFFF",
				"primary-lightest": "#EBF0ED",

				// secondary color
				secondary: "#FF8548",

				// actions colors
				warning: "#FEC600",
				"warning-light": "#FFFBF0",
				danger: "#E2362F",
				"danger-light": "#FFF3F4",
				info: "#44A6E9",
				"info-light": "#F1F7FF",

				// light color
				light: "#fafafa",
			},

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
