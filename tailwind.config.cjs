/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				accent: {
					dark: '#ffed4a',
					light: '#ffa600'
				},
				primary: {
					dark: '#111',
					light: '#fff'
				},
				secondary: {
					dark: '#151515',
					light: '#f5f5f5'
				},
				tertiary: {
					dark: '#222',
					light: '#d9d9d9'
				},
				quaternary: {
					dark: '#a0aec0',
					light: '#cbd5e0'
				},
				text: {
					dark: '#fff',
					light: '#000'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
