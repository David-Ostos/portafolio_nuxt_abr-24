// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
/*   
  nitro: {
    prerender: {
      routes: ['/services','/about', '/', '/projects']
    }
  }, */
/*   routeRules: { // hibrido para especificar el comportamiento de cada vista
    '/': { prerender: true },
    '/about': { ssr: true },
    '/services': { ssr: false },
    '/projects': { prerender: true },
  }, */
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vesp/nuxt-fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['moon', 'sun'],
      brands: ['linkedin', 'github', 'whatsapp','square-js' ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  // css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
  }
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

})
