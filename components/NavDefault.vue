<template>
        <header class=" w-full  ">
        <div class="container">
          <div class=" flex items-center justify-between">
  
            <!-- logo -->
            <div class="w-60 max-w-full px-4">
              <a href="https://www.nuxt.com" target="_blank" class="block w-full py-5">
                <img
                  src="/assets/images/nuxt-logo-1CCC5F38FD-seeklogo.com.png"
                  alt="logo"
                  class="dark:hidden h-12"
                />
                <img
                  src="/assets/images/nuxt-logo-1CCC5F38FD-seeklogo.com.png"
                  alt="logo"
                  class="hidden dark:block h-12"
                />
              </a>
            </div>
  
            <!-- nav -->
            <div class="flex w-full items-center justify-between px-4">
              <div>
                <button
                  @click="toggleNavbar"
                  ref="dropdownButtonRef"
                  id="navbarToggler"
                  class="absolute right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    class="relative my-[6px] block h-[2px] w-[30px] text-dark bg-body-color dark:bg-white"
                  ></span>
                  <span
                    class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                  ></span>
                  <span
                    class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                  ></span>
                </button>
                <nav
                  :class="{ hidden: !open }"
                  id="navbarCollapse"
                  class="z-10 absolute right-4 top-[67px] w-full max-w-[250px] rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow transition-all lg:static lg:bg-transparent lg:block lg:w-full lg:max-w-full lg:shadow-none xl:ml-11 lg:dark:bg-transparent"
                >
                  <ul class="block lg:flex">
                    <template v-for="(item, index) in navLinkItems" :key="index">
                      <li>
                        <NuxtLink
                          v-if="item.href"
                          :to="item.href"
                          class="flex py-2 text-base font-medium text-dark dark:text-white hover:text-primary lg:ml-10 lg:inline-flex"
                        >
                          {{ item.text }}
                        </NuxtLink>
                      </li>
                    </template>
                    <div class="lg:ml-10 text-end">
                      <button v-show="colorMode.preference === 'light'"
                        @click="colorMode.preference = 'dark'"
                        class="text-3xl "
                      >
                        <font-awesome icon="moon" />
                      </button>
      
                      <button v-show="colorMode.preference === 'dark'"
                        @click="colorMode.preference = 'light'"
                        class="text-3xl"
                      >
                      <font-awesome :icon="['fas', 'sun']" />
                      </button>
                    </div>
                  </ul>
                </nav>
              </div>
              <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
                <ButtonPrimary link="login" contenido="Iniciar Sesión" />
              </div>
            </div>
          </div>
        </div>
      </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue';

const colorMode = useColorMode()
const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)
if(colorMode.preference === 'system'){
  colorMode.preference = 'dark'
}

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Inicio', href: '/' },
  { text: 'Sobre Mi', href: '/about' },
  { text: 'Servicios', href: '/services' },
  { text: 'Proyectos', href: '/projects' }
])

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>

</style>