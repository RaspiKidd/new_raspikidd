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
      ignore: ['/classes', '/ComingSoon', '/About'],
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
      script: [
        {
          src: "https://app.termly.io/resource-blocker/ffd35feb-c0cb-4a48-b926-9c008b06df78?autoBlock=on",
          type:"text/javascript"}
      ],
    },
  },

})