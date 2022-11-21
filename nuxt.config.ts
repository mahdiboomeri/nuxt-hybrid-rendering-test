// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	nitro: {
		routes: {
			'/swr': { swr: true }, // Once on-demand each 10 minutes (via lambda)
			'/redirectToSSR': { redirect: '/ssr' },
		},
		prerender: {
			routes: [
				'/blog',
				'/blog/:id',
				'/blog/category/**'
			],
		},
	},
});
