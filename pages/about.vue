<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eius, error eveniet explicabo fuga, fugiat illo iste itaque iure, magnam molestias nesciunt nihil quam quibusdam vel vero vitae voluptatum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eius, error eveniet explicabo fuga, fugiat illo iste itaque iure, magnam molestias nesciunt nihil quam quibusdam vel vero vitae voluptatum.</p>
    <div>{{data}}</div>
  </div>
</template>

<script setup lang="ts">
  const {data} = await useFetch('/api/currency/EUR');
</script>

<style scoped>

</style>
