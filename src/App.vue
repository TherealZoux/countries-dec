<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
  icon.value = icon.value = icon.value === 'pi pi-moon' ? 'pi pi-sun' : 'pi pi-moon';


}

const icon = ref("pi pi-moon");



</script>

<template>
  <header class="flex justify-between sm:px-[4rem] p-4 dark:bg-dark-elements dark:text-light items-baseline  ">
    <h1 class="text-2xl">Where in the World?</h1>
    <button @click="toggleDarkMode"
      class="font-medium text-lg border-[1px] border-dark-bg dark:border-[#585f63] w-[30px] h-[1.7rem] rounded-[4px] ">
      <i :class="icon"></i>
    </button>
  </header>
  <main class="min-h-[100vh]  bg-light-bg dark:bg-dark-bg dark:text-light sm:px-[4rem] ">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
