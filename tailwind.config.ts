import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: "375px",
			tablet: "768px",
			desktop: "1440px",
		},
		container: {
			center: true,
			screens: {
				mobile: "100%",
				tablet: "100%",
				desktop: "1280px",
			},
			padding: {
				DEFAULT: "1rem", // 16px
				mobile: "2rem", // 32px
				tablet: "2rem", // 32px
				desktop: "1rem", // 16px
			},
		},
		extend: {
			fontFamily: {
				noto: ["var(--font-noto)"],
			},
			colors: {
				iron: {
					50: "#f9fafa",
					100: "#f7f7f8",
					200: "#eef0f1",
					300: "#e3e5e8",
					400: "#dadde2",
					500: "#d2d6db",
					600: "#a2aab4",
					700: "#717e8e",
					800: "#4d5660",
					900: "#272b30",
					950: "#121417",
				},
			},
			boxShadow: {
				"testimonial-card":
					"0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
				"blog-card":
					"0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);",
			},
		},
	},
	plugins: [],
};

export default config;
