<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '/src/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="min-h-[100vh]  bg-light-bg dark:bg-dark-bg dark:text-light sm:px-[4rem] ">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
