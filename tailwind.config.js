/** @type {import('tailwindcss').Config} */
const { extractTwColorsToCssVars } = require('./utils/tailwind.customUtilities');


module.exports = {
	prefix: 'u-',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		//screens: {}, // declare theme screensizes
		//spacing: {}, // declare custom theme scales
		//lineHeight: {},
		extend: {
			colors: {
        ninja: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			],
		},
	},
	// official plugins https://tailwindcss.com/docs/plugins#official-plugins
	// https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
	plugins: [extractTwColorsToCssVars],
};
