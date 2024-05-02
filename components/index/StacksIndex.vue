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

const useColor = useColorMode()

const brandItems = ref([
  {
    title: 'Nuxt',
    image: nuxtLogo,
    dark: nuxtLogo,
    link: '#'
  },
  {
    title: 'Vue Js',
    dark: vueLogo,
    image: vueLogo,
    link: '#'
  },
  {
    title: 'Nest',
    dark: nestLogo,
    image: nestLogo,
    link: '#'
  },
  {
    title: 'Tailwind',
    dark: tailwindLogo,
    image: tailwindLogo,
    link: '#'
  },
  {
    title: 'Docker',
    image: dockerLogo,
    dark:  dockerLogoDark,
    link: '#',
  },
  {
    title: 'Postgresql',
    image: postgresLogo,
    dark:  postgresLogo,
    link: '#'
  },
  {
    title: 'Linux',
    image: ubuntuLogo,
    dark:  ubuntuLogo,
    link: '#'
  },
  {
    title: 'Node Js',
    image: nodeLogo,
    dark:  nodeLogo,
    link: '#'
  },
  {
    title: 'MongoDB',
    image: mongodbLogo,
    dark:  mongodbLogo,
    link: '#'
  },
  {
    title: 'Capacitor',
    image: capasitorLogo,
    dark:  capasitorLogo,
    link: '#'
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
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              ><!-- condicion ? exprSiVerdadero : exprSiFalso -->
                <NuxtImg v-show="useColor.value == 'dark'" :src="item.dark" :alt="`${item.title} logo`" class=" h-28 max-w-28" />

                <NuxtImg v-show="useColor.value == 'light'" :src="item.image" :alt="`${item.title} logo`" class=" h-28 " />
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