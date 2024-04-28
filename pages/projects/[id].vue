<template>
  <div>
      <h1>Projectv id number: {{ projectId }}</h1>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "projects"
})
  const route = useRoute()
  const projectId = ref(route.params.id)

</script>

<style>

</style>