<script setup lang="ts">
import { ref } from 'vue'

import nuxtLogo from '/images/nuxt-logo-1CCC5F38FD-seeklogo.com.png'
import vueLogo from '/logos/icons8-vue-js.svg'
import tailwindLogo from '/logos/icons8-tailwind-css.svg'
import nestLogo from '/logos/icons8-nestjs-logo.svg'
import dockerLogo from '/logos/icons8-docker-ligth.svg'
import dockerLogoDark from '/logos/icons8-docker-dark.svg'
import postgresLogo from '/logos/icons8-postgresql-ligth.svg'
import ubuntuLogo from '/logos/icons8-ubuntu-96.png'
import nodeLogo from '/logos/icons8-node-js.svg'
import mongodbLogo from '/logos/icons8-mongodb.svg'
import capasitorLogo from '/logos/capacitorjs-pngrepo-com.png'
import apacheLogo from '/logos/apache-pngrepo-com.png'

const useColor = useColorMode()

const brandItems = ref([
  {
    title: 'Nuxt Js',
    image: nuxtLogo,
    dark: nuxtLogo,
    link: 'https://nuxt.com/'
  },
  {
    title: 'Vue Js',
    dark: vueLogo,
    image: vueLogo,
    link: 'https://vuejs.org/'
  },
  {
    title: 'Nest Js',
    dark: nestLogo,
    image: nestLogo,
    link: 'https://nestjs.com/'
  },
  {
    title: 'Tailwind',
    dark: tailwindLogo,
    image: tailwindLogo,
    link: 'https://tailwindcss.com/'
  },
  {
    title: 'Docker',
    image: dockerLogo,
    dark:  dockerLogoDark,
    link: 'https://www.docker.com/',
  },
  {
    title: 'Postgresql',
    image: postgresLogo,
    dark:  postgresLogo,
    link: 'https://www.postgresql.org/'
  },
  {
    title: 'Linux Ubuntu',
    image: ubuntuLogo,
    dark:  ubuntuLogo,
    link: 'https://ubuntu.com/'
  },
  {
    title: 'Node Js',
    image: nodeLogo,
    dark:  nodeLogo,
    link: 'https://nodejs.org/'
  },
  {
    title: 'MongoDB',
    image: mongodbLogo,
    dark:  mongodbLogo,
    link: 'https://www.mongodb.com/'
  },
  {
    title: 'Capacitor Js',
    image: capasitorLogo,
    dark:  capasitorLogo,
    link: 'https://capacitorjs.com/'
  },
  {
    title: 'Apache',
    image: apacheLogo,
    dark:  apacheLogo,
    link: 'https://www.apache.org/'
  }
])

function mezclar(a: any, b: any) {
  return 0.5 - Math.random();
}
brandItems.value.sort(mezclar);

</script>

<template>
  <!-- ====== Brands Section Start -->
  <section class="bg-white py-20 dark:bg-dark lg:py-[120px]">
    <h1 class="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center font-gothic">Stack de Tecnologías</h1>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <template v-for="(item, index) in brandItems" :key="index">
              <a
                :href="item.link"
                target="_blank"
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              ><!-- condicion ? exprSiVerdadero : exprSiFalso -->
                <NuxtImg size="112px" preload loading="eager" :title="item.title" v-show="useColor.value == 'dark'" :src="item.dark" :alt="`${item.title} logo`" class=" h-28 " />

                <NuxtImg size="112px" preload loading="eager" :title="item.title" v-show="useColor.value == 'light'" :src="item.image" :alt="`${item.title} logo`" class=" h-28 " />
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Brands Section End -->
</template>


<style>

</style>