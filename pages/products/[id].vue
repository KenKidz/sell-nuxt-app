<template>
  <div>
    <Head>
      <Title>Nuxt Kenkid | {{product.title}}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup lang="ts">
import ProductDetails from "~/components/ProductDetails.vue";

const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const {data: product} : {data: any } = await useFetch(uri, {key: id})

if(!product.value) {
  throw createError({status: 404, statusMessage: 'Product not found', fatal: true})
}

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>
