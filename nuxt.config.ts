// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head:{
      meta:[
        {property: "og:title", content: "David Ostos - portafolio"},
        {property: "og:description", content: "Portafolio de mis habilidades y experiencias"},
        {property: "og:image", content: "https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg"},
        {property: "og:url", content: "https://davidostos.netlify.app/"}

      ],
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
    preference: 'system',
    fallback: 'dark',
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