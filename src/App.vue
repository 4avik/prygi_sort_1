<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <div class="p-12">
    <router-view></router-view>
  </div>

</template>

