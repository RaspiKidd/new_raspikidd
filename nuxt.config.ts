// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts', 
    '@storyblok/nuxt', 
    '@nuxt/content', 
    '@nuxtjs/sitemap',
  ],

  googleFonts: {
    families: {
      Ubuntu: [400, 500, 700],
      Nunito: [300, 400, 600, 700],
      'Source Code Pro': [400, 700],
      'Finger Paint': [400],
    },
    display: 'swap',
    preload: true,
},

  storyblok: {
    accessToken: process.env.STORYBLOK_KEY,
    //cacheProvider: 'memory',
  },

  site: {
    name: 'RaspiKidd',
    url: 'https://raspikidd.com/',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/',
        '/about',
        '/coding-workshops-perth',
        '/kids-coding-workshops-perth-waitlist',
        '/hire-me',
        '/tutoring',
        '/smarter-screen-time',
        '/learn',
      ]
    }
  },

  app: {
    head: {
      script: [{src:"https://cdn-cookieyes.com/client_data/d6f0c1a00dd0dc1726c250ea/script.js"}],
    },
  },

})