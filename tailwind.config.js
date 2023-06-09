/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			delicious: ['Delicious Handrawn'],
		},
		extend: {
			colors: {
				// ...
				green: {
					DEFAULT: '#00f260',
				},
				// ...
			},
		},
	},
	plugins: [],
};
