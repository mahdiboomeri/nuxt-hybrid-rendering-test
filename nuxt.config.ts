import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	nitro: {
		routes: {
			'/swr': { swr: 120 }, // Once on-demand each 10 minutes (via lambda)
		},
	},
});
