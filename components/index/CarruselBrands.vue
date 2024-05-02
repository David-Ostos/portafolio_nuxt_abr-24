<template>
<div class="relative w-full flex overflow-x-hidden" ref="carousel">
    <div :style="{ transform: `translateX(-${index * 100}%)` }" class="flex transition-transform duration-500 ease-in-out" ref="carouselTrack">
      <div class="w-full flex-none text-center p-4" v-for="(brand, i) in brands" :key="i">
        <h2 class="font-bold text-lg mb-2">{{ brand.title }}</h2>
        <img :src="brand.icon" :alt="`${brand.title} logo`">
      </div>
    </div>
    <button class="absolute top-0 bottom-0 left-0 w-10 text-white" @click="prev">‹</button>
    <button class="absolute top-0 bottom-0 right-0 w-10 text-white" @click="next">›</button>
  </div>
</template>

<script lang="ts" setup>
import vueLogo from '~/assets/logos/icons8-vue.js.png'
import nestLogo from '~/assets/logos/icons8-nestjs-logo.svg'

const brands = ref([
  {
    title: 'Vue.js',
    icon: vueLogo
  },
  {
    title: 'Nest.js',
    icon: nestLogo
  }
])

let index = ref(0);
let intervalId: any;

const carousel = ref();
const carouselTrack = ref();

const moveToSlide = (currentSlide: any) => {
  carouselTrack.value.style.transform = `translateX(-${currentSlide * 100}%)`;
};

const prev = () => {
  index.value--;
  if (index.value < 0) {
    index.value = brands.value.length - 1;
  }
  moveToSlide(index.value);
};

const next = () => {
  index.value++;
  if (index.value === brands.value.length) {
    index.value = 0;
  }
  moveToSlide(index.value);
};

onMounted(() => {
  intervalId = setInterval(next, 3000); // Cambia de slide cada 3 segundos
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style>

</style>