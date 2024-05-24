<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ProductCard from "~/components/ProductCard.vue";

  definePageMeta({
    layout: 'products'
  })

  const { data: products } : { data: any } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Nuxt Kenkid | Merch',
    meta: [
      { name: 'description', content: 'Nuxt Kenkid Merch' },
    ]
  })
</script>

<style scoped>

</style>
