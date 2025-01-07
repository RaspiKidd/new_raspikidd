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
        '/Submissions',
        '/ContactUs',
        '/Magazines',
        '/SignUp',
      ]
    }
  },

  app: {
    head: {
      script: [{src:"https://cdn-cookieyes.com/client_data/bdea172743202246b46b4050/script.js"}],
    },
  },

  plugins: ['~/plugins/google-analytics.client.ts'],

  sitemap: {
    hostname: 'https://micromag.raspikidd.com', // Replace with your Netlify domain or custom domain
    gzip: true, // Optional: enable gzip compression for the sitemap
    routes: [
      '/',
      '/Magazines',
      '/Contribute',
      '/ContactUs',
      '/Guidelines',
      '/Submissions',
      '/Issue1',
      '/Issue2',
      '/Issue3',
      '/Issue4',
      '/Issue5',
      '/Issue6',
      '/Issue7',
      '/Issue8',
    ]
  }

})



