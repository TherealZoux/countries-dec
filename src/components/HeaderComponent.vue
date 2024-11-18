<template>
  <header class="flex justify-between sm:px-[4rem] p-4 dark:bg-dark-elements dark:text-light items-baseline  ">
    <h1 class="text-lg sm:text-2xl">Where in the World?</h1>
    <button @click="toggleDarkMode"
      class="font-medium text-lg border-[1px] border-[#dfdfdf] dark:border-[#5d5f63] w-[30px] h-[1.7rem] rounded-[4px] ">
      <i :class="icon"></i>
    </button>
  </header>
</template>

<script setup>

import { ref } from 'vue'

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark")
  icon.value = icon.value = icon.value === 'pi pi-moon' ? 'pi pi-sun' : 'pi pi-moon';


}

const icon = ref("pi pi-moon");



</script>

<style lang="scss" scoped></style>
