export default defineNuxtPlugin((nuxtApp) => {
    useHead({
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-FM9JG7YE71",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FM9JG7YE71');
          `,
        },
      ],
    });
  });