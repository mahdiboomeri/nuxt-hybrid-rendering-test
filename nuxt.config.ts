// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    // Fully static on build (using wildcards)
    "/blog/**": { swr: 60 * 1000 },
    // CSR
    "/client": { ssr: false },
    // Static on build
    "/prerender": { static: true },
    // Redirect to /ssr
    "/redirectToSSR": { redirect: "/ssr" },
    // On-damand
    "/swr": { swr: 6000 },
  },
});
