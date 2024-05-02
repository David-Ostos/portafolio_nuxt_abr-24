// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head:{
      link: [
        { rel: "preconnect" , href: "https://fonts.gstatic.com" },
        { rel: "stylesheet" , href: "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap"}
      ],
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vesp/nuxt-fontawesome',
    "@nuxt/image"
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
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
  }
})