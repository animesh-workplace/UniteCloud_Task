/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['Inter', 'system-ui']

module.exports = {
	darkMode: 'class',
	theme: { fontFamily: fontFamily },
	content: [
		'./pages/**/*.vue',
		'./layouts/**/*.vue',
		'./nuxt.config.{js,ts}',
		'./plugins/**/*.{js,ts}',
		'./components/**/*.{js,vue,ts}',
	],
}
