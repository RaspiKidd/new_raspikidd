export default defineNuxtPlugin((nuxtApp) => {
    useHead({
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E4LPY0R90V');
          `,
        },
      ],
    });
  });