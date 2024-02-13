/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",

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
                md: "clamp(0.875rem, 0.85rem + 0.125vw, 1rem)",
                lg: "clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem)",
                xl: "clamp(0.875rem, 0.8rem + 0.375vw, 1.25rem)",
                "2xl": "clamp(1rem, 0.925rem + 0.375vw, 1.375rem)",
                "3xl": "clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem)",
                "4xl": "clamp(1.25rem, 1.175rem + 0.375vw, 1.625rem)",
                "5xl": "clamp(1.375rem, 1.3rem + 0.375vw, 1.75rem)",
                "6xl": "clamp(1.5rem, 1.4rem + 0.5vw, 2rem)",
                "display-1": "clamp(1.625rem, 1.425rem + 1vw, 2.625rem)",

                button: [
                    "clamp(0.875rem, 0.8625rem + 0.0625vw, 0.9375rem)",
                    {
                        lineHeight: "clamp(0.78125rem, 0.6875rem + 0.4688vw, 1.25rem)",
                    },
                ],
            },

            // custom colors
            colors: {
                // bg color
                background: "#FAFAF2",

                // sidebar title
                "sidebar-title": "#AFC6C4",
                "slider-divider": "#578787",

                // admin color
                admin: "#6B6B6B",
                "avatar-border": "#979797",

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

            // spacing
            spacing: {
                6: "clamp(0.25rem, 0.225rem + 0.125vw, 0.375rem)",
                8: "clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)",
                10: "clamp(0.3125rem, 0.25rem + 0.3125vw, 0.625rem)",
                18: "clamp(1rem, 0.975rem + 0.125vw, 1.125rem)",
                12: "clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem)",
                13: "clamp(0.40625rem, 0.325rem + 0.4063vw, 0.8125rem)",
                14: "clamp(0.4375rem, 0.35rem + 0.4375vw, 0.875rem)",
                15: "clamp(0.46875rem, 0.375rem + 0.4688vw, 0.9375rem)",
                16: "clamp(0.5rem, 0.4rem + 0.5vw, 1rem)",
                20: "clamp(1.125rem, 1.1rem + 0.125vw, 1.25rem)",
                24: "clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)",
                28: "clamp(1.375rem, 1.3rem + 0.375vw, 1.75rem)",
                32: "clamp(1.25rem, 1.1rem + 0.75vw, 2rem)",
                35: "clamp(0.90625rem, 0.65rem + 1.2813vw, 2.1875rem)",
                80: "clamp(1.875rem, 1.25rem + 3.125vw, 5rem)",
            },

            // custom border radius
            borderRadius: {
                lg: "1.5rem",
                md: "1.25rem",
                sm: "1rem",
                vsm: "0.625rem",
            },

            // background gradient colors and images
            backgroundImage: {
                "slider-add-bg": "linear-gradient(136deg, rgba(255, 255, 255, 0.00) -10.41%, rgba(29, 139, 139, 0.93) 56.42%, rgba(255, 255, 255, 0.11) 116.95%)",
            },

            // box shadows
            boxShadow: {
                "layout-box": "0px 5px 30px 0px rgba(170, 170, 170, 0.06)",
                "authentication-box": "0px 5px 30px 0px rgba(0, 0, 0, 0.03)",
            },

            // screen
            screens: {
                sm: "575px",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
