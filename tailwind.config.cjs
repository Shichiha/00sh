/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'body': "sans-serif",
				'heading': "Inter, sans-serif",
			},
			colors: {
				'accent-light': '#d926a9',
				'accent-dark': '#1fb2a6',

				'primary-light': '#fff',
				'primary-dark': '#1a1a1a',

				'secondary-light': '#202020',
				'secondary-dark': '#202020',

				'tertiary-light': '#e5e7eb',
				'tertiary-dark': '#202020',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
