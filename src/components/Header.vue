<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { products } from '../products.js'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { Bars3Icon } from '@heroicons/vue/24/outline';

const message = ref('');
let showNav = false;

function filterByTerm() {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(message.value.toLowerCase());
  })
}

function hideAllDropdown() {
    document.getElementById('dropdown').classList.add('hidden');
    document.getElementById('dropdown').classList.remove('flex');
    
    showNav = false;
    document.getElementById('nav').classList.remove('flex')
    document.getElementById('nav').classList.add('hidden')
}

watch(message, (newMessage) => {
  if(newMessage.length > 0) {
    document.getElementById('dropdown').classList.remove('hidden');
    document.getElementById('dropdown').classList.add('flex');
  } else {
    document.getElementById('dropdown').classList.add('hidden');
    document.getElementById('dropdown').classList.remove('flex');
  }
})

function toggleNav() {
    if(!showNav) {
        showNav = true;
        document.getElementById('nav').classList.remove('hidden')
        document.getElementById('nav').classList.add('flex')
    } else {
        showNav = false;
        document.getElementById('nav').classList.remove('flex')
        document.getElementById('nav').classList.add('hidden')
    }
}
</script>

<template>
  <header class="bg-[#A0C49D] h-24 drop-shadow-md flex justify-around items-center w-screen">
    <img src="../assets/recycle-symbol 1.png" class="w-12" alt="">
    <div class="flex justify-end items-center">
      <MagnifyingGlassIcon class="absolute h-4 mr-2" />
      <input class="flex h-9 rounded-md border border-input bg-[#E1ECC8] border-[#A0C49D] px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder-black" 
      type="text" placeholder="Otsi toodet..." v-model="message" v-on:keyup="filterByTerm()">
    </div>
    <Bars3Icon class="text-[#F7FFE5] w-12" @click="toggleNav()" />
  </header>
  <div class="w-screen flex-col absolute hidden bg-[#70926D]" id="nav">
    <RouterLink to="/" class="p-4 text-[#C4D7B2] text-xl" @click="hideAllDropdown()">ÜLDINFO</RouterLink>
    <p class="p-4 text-[#C4D7B2] text-xl">PIIRKONDADE INFO</p>
    <p class="p-4 text-[#C4D7B2] text-xl">MEIST</p>
  </div>
  <div v-if="filterByTerm().length === 0" class="w-screen flex-col absolute bg-[#F7FFE5]">
    <p class="p-4">No results found!</p>
  </div>
  <div class="w-screen flex-col absolute hidden bg-[#F7FFE5]" id="dropdown">
    <router-link :to="{ path: '/product', query: { productIndex: products.findIndex(item => item.id === product.id) } }" v-for="product in filterByTerm()" class="p-4 border-b" @click="hideAllDropdown()">
        {{ product.name }}
    </router-link>
  </div>
</template>