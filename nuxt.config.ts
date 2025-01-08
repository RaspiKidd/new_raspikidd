// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt',
    '@nuxtjs/sitemap',
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_KEY,
    //cacheProvider: 'memory',
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/Classes',
        '/HireMe',
      ]
    }
  },

  app: {
    head: {
      script: [{src:"https://cdn-cookieyes.com/client_data/bdea172743202246b46b4050/script.js"}],
    },
  },

})



