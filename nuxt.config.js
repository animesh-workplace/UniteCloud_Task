export default {
	head: {
		title: 'UniteCloud_Tasks',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	components: true,
	axios: { baseURL: '/' },
	modules: ['@nuxtjs/axios'],
	tailwindcss: { viewer: false },
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
	css: ['@/assets/css/main.css', 'static/css/style.css'],
	plugins: [{ src: '@/plugins/plugin-aos', ssr: false }],
	buildModules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/svg'],
	googleFonts: {
		preload: true,
		prefetch: true,
		download: true,
		display: 'swap',
		preconnect: true,
		overwriting: false,
		families: {
			Inter: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		},
	},
}
