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
import { ref, onBeforeMount } from 'vue'


const icon = ref("pi pi-moon");
const theme = ref('light')


function toggleDarkMode() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value);

  document.documentElement.classList.toggle("dark")
  icon.value = icon.value = icon.value === 'pi pi-moon' ? 'pi pi-sun' : 'pi pi-moon';
}


onBeforeMount(() => {
  const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', 'light');
  if (savedTheme) {
    theme.value = savedTheme
  }
  if (theme.value === 'dark') {
    document.documentElement.classList.toggle("dark")
  }
})

</script>

<style lang="scss" scoped></style>
