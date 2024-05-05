<template>
    <div class=""> 
    <!-- ====== Hero Section Start -->
    <div class=" relative bg-white dark:bg-dark pt-[120px] pb-[110px]">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-start ">
          <div class="w-full px-4 lg:w-5/12">
            <div class="hero-content">
              <div
              class="mt-12 mb-12 text-4xl font-medium text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl font-gothic" 
              >
              <p><span><b>BIENVENIDOS</b></span></p>
              <p><span class="lg:tracking-wide" >Soy David <b>Ostos</b></span></p>
              <p class="leading-[0]"><span class="text-2xl lg:text-3xl lg:uppercase">Programador Full-Stack <b class="text-js" ><font-awesome :icon="['fab', 'square-js']" bounce style="--fa-animation-duration: 2s;"/></b></span> </p>
            </div>

            <div class="">
              <p class="mb-12 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Desarrollador Full Stack enfocado en soluciones, con experiencia en JavaScript. Realizo PWA y apps híbridas con Capacitor.js, y manejo de Apache y Linux Server. Conocimientos en AWS, NestJS, Vue.js, Docker y TypeORM. Resuelvo desafíos técnicos con creatividad y eficiencia.
              </p>

            </div>

              <ul class="flex flex-wrap items-center">
                <li>
                  <ButtonPrimary link="/about" contenido="Sobre Mí"/>
                </li>
              </ul>
              <div class="clients pt-16">
                <h6
                  class="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6"
                >
                  Redes Sociales
                  <span class="inline-block w-8 h-px ml-3 bg-primary"></span>
                </h6>
                <div class="flex items-center gap-4 xl:gap-[50px]">
                  <a
                    v-for="(client, index) in clients"
                    :key="index"
                    :href="client.link"
                    class="block py-3 text-[50px]"
                    target="_blank"
                  >
                  <font-awesome :icon="[client.logo[0], client.logo[1]]"  />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden px-4 lg:block lg:w-1/12"></div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                  alt="hero"
                  class="max-w-full lg:ml-auto -scale-x-100"
                />
                <span class="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#00dc82" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#00dc82" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#00dc82" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#00dc82" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#00dc82" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#00dc82" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#00dc82" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#00dc82" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#00dc82" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#00dc82" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#00dc82" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#00dc82" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#00dc82" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#00dc82" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#00dc82" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#00dc82" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#00dc82" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#00dc82" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#00dc82" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#00dc82" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#00dc82" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#00dc82" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#00dc82" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#00dc82" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#00dc82" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Hero Section End -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ButtonPrimary from './ButtonPrimary.vue';

const clients = ref([
  {
    name: 'GitHub',
    logo: ['fab', 'github'],
    link: 'https://github.com/David-Ostos'
  },
  {
    name: 'Linkedin',
    logo: ['fab','linkedin'],
    link: 'https://www.linkedin.com/in/david-ostos/'
  },
  {
    name: 'UIdeck',
    logo: ['fab','whatsapp'],
    link: 'https://wa.link/rzg8sd'
  }
])
</script>

<style>

</style>