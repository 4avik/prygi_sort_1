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

<template>
    <div class="p-4">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Toote nimi:</label>
            <input id="name" v-model="name" type="text" placeholder="Sisesta nimi" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="packageType">Pakendi liik:</label>
            <input id="packageType" v-model="packageType" type="text" placeholder="Sisesta pakendi liik" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="wasteType">Jäätme liik:</label>
            <input id="wasteType" v-model="wasteType" type="text" placeholder="Sisesta jäätme liik" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button @click="addProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            LISA
        </button>
    </div>
</template>
