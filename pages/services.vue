<template>
  <div>
    
    <h1>Services Page</h1>
    
    <p>{{ useCount.count }}</p>
    
    <button @click="useCount.increment()" >
      +
    </button>

    <button @click="useCount.decrement()">
      -
    </button>

  </div>
</template>

<script lang="ts" setup>
const useCount = useCountStore()
</script>

<style>

</style>