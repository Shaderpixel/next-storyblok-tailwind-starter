/** @type {import('tailwindcss').Config} */
const { extractTwColorsToCssVars } = require('./utils/tailwind.customUtilities');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	prefix: 'u-',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		//screens: {}, // declare theme screensizes
		//spacing: {}, // declare custom theme scales
		//lineHeight: {},
		extend: {
			colors: {
				gfg: {
					primary: '#058ece',
					secondary: '#0091d0',
					tertiary: '#44494d',
					lightGray: '#666a6c',
					navText: '#252525',
					carouselActive: '#44494d',
					carousel: '#e0e0e0',
					body: '#555',
				},
			},
			spacing: {
				'5%': '5%',
				'6%': '6%',
			},
		},
		fontFamily: {
			sans: ['var(--font-open-sans)', ...fontFamily.sans],
			sansGotham: ['var(--font-gotham)', 'var(--font-open-sans)', ...fontFamily.sans],
		},
	},
	// official plugins https://tailwindcss.com/docs/plugins#official-plugins
	// https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
	plugins: [extractTwColorsToCssVars],
};
