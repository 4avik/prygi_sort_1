<script setup>
import { products } from '../products.js'

const props = defineProps({
    productIndex: String
})
</script>

<template>
    <p>{{ products[productIndex].name }}</p>
    <p>{{ products[productIndex].packageType }}</p>
    <p>{{ products[productIndex].wasteType }}</p>
</template>