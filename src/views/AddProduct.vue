<template>
    <div>
        <div>
            <label>Toote nimi: </label>
            <input v-model="name" type="text">
        </div>
        <div>
            <label>Pakendi liik: </label>
            <input v-model="packageType" type="text">
        </div>
        <div>
            <label>Jäätme liik: </label>
            <input v-model="wasteType" type="text">
        </div>
        <button @click="addProduct">LISA</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { addProduct as addProductToData } from '../products.js';

const name = ref('');
const packageType = ref('');
const wasteType = ref('');

const addProduct = () => {
    const product = {
        id: Date.now(),
        name: name.value,
        packageType: packageType.value,
        wasteType: wasteType.value,
    };
    
    addProductToData(product);

    name.value = '';
    packageType.value = '';
    wasteType.value = '';
};
</script>


