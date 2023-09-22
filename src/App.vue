<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <div class="p-6">
    <router-view></router-view>
  </div>

</template>

