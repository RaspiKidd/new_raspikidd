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
        '/coding-workshops-perth',
        '/hire-me',
        '/tutoring',
      ]
    }
  },

  app: {
    head: {
      script: [{src:"https://cdn-cookieyes.com/client_data/d6f0c1a00dd0dc1726c250ea/script.js"}],
    },
  },

})



