<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '/src/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class=" bg-light-bg dark:bg-dark-bg dark:text-light  ">
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 4rem);
  overflow: auto;
}
</style>
