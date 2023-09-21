<script setup>
import { products } from '../products.js'

const props = defineProps({
    productIndex: String
})
</script>

<template>
    <h1 class="text-2xl font-bold mb-6">{{ products[productIndex].name }}</h1>
    <p class="text-lg">Pakendiliik: {{ products[productIndex].packageType }}</p>
    <p class="text-lg">Jäätmetüüp: {{ products[productIndex].wasteType }}</p>
    <img :src="products[productIndex].image" alt="" class="mt-6 rounded lg drop-shadow-md">
</template>