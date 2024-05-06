<script setup lang="ts">

const colorMode = useColorMode()

// colorMode.preference = 'dark'
if(colorMode.preference === 'system'){
  colorMode.preference = 'dark'
}

</script>

<template>
  <div class="dark:bg-dark dark:text-white"
    :style="`max-heigh: 100vh + `">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>

</style>
