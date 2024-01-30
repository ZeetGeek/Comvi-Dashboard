/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/layout/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			// custom fonts family
			fontFamily: {
				manrope: "(var(--font-manrope))",
			},

			// custom font sizes
			fontSize: {
				vsm: ["0.75rem"],
				sm: ["0.875rem"],
				md: ["1rem"],
				lg: ["1.125rem"],
				xl: ["1.25rem"],
				"2xl": ["1.375rem"],
				"3xl": ["1.5rem"],
				"4xl": ["1.625rem"],
				"5xl": ["1.7rem"],
				"6xl": ["2rem"],
			},

			// custom colors
			colors: {
				// bg color
				background: "#FAFAF2",

				// sidebar title
				"sidebar-title": "#AFC6C4",
				"slider-divider": "#578787",

				// admin color
				"admin" : "#6B6B6B",
				"avatar-border" : "#979797",

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
				dark: "#18120F",
			},

			// custom border radius
			borderRadius: {
				lg: "1.5rem",
				md: "1.25rem",
			},

			// background gradient colors and images
			backgroundImage: {
				"slider-add-bg": "linear-gradient(136deg, rgba(255, 255, 255, 0.00) -10.41%, rgba(29, 139, 139, 0.93) 56.42%, rgba(255, 255, 255, 0.11) 116.95%)",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
