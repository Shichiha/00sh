/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Accent colors (for buttons, links, etc.)
				'accent-dark': '#ff007f',
				'accent-light': '#9F7AEA',
				// Primary colors (for backgrounds, etc.)
				'primary-light': '#fdf6e3',
				'primary-dark': '#242430',
				// Secondary colors (for when you need a little more contrast)
				'secondary-light': '#eee8d5',
				'secondary-dark': '#1d1d26',
				
				// Tertiary colors (for text, borders, etc.)
				'tertiary-light': '#000000',
				'tertiary-dark': '#8894b3',
				// Quaternary colors (for subtitles, etc.)
				'quaternary-light': '#4e4e4e',
				'quaternary-dark': '#626c85',

			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
