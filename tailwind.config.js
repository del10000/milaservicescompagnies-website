/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#D7F8FF',
					100: '#AAF0FF',
					200: '#7AE9FF',
					300: '#47E7FF',
					400: '#22E2F6',
					500: '#01D6E5',
					600: '#009BB3',
					700: '#006680',
					800: '#00384E',
					900: '#00131C',
				},
				secondary: {
					50: '#DFFFF3',
					100: '#B8F6E1',
					200: '#8EEED1',
					300: '#64E8BB',
					400: '#3CE1B2',
					500: '#24C7A4',
					600: '#179B88',
					700: '#0C6F69',
					800: '#004143',
					900: '#001818',
				},
				gradient: {
					50: '#00EDFC',
					100: '#6EE7B7',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
