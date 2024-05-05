<template>
  <div>
    <h1 class="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center font-gothic">{{ titulo }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  titulo: String
})

</script>

<style>

</style>