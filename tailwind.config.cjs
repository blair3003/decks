/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'space': ['"Space Mono"', 'monospace'],
			'fira': ['"Fira Sans"', 'sans-serif'],
			'fira-extra': ['"Fira Sans Extra Condensed"', 'sans-serif'],
		},
	},
	plugins: [],
}
