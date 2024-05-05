<script setup lang="ts">

const colorMode = useColorMode()

colorMode.preference = 'dark'

</script>

<template>
  <div class="dark:bg-dark min-h-screen dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>

</style>
