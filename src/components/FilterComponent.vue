<template>
  <div class="relative w-[12rem] ml-6 sm:ml-0 sm:w-64">
    <!-- Dropdown Button -->
    <button @click="toggleDropdown"
      class="w-full flex justify-between h-[100%]  p-[15px] items-center px-4  bg-light dark:bg-dark-elements  rounded-lg  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none shadow-md">
      {{ selectedRegion || 'Filter by Region' }}
      <i :class="selectedRegion ? 'pi pi-times' : ' pi pi-angle-down'"
        @click="selectedRegion = ''; $emit('setSelectedRegion', selectedRegion)"></i>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="absolute mt-2 w-full bg-light dark:bg-dark-elements rounded-lg shadow-lg z-10">
      <ul class="py-2 text-sm text-gray-700">
        <li v-for="region in regions" :key="region"
          @click="selectRegion(region); $emit('setSelectedRegion', selectedRegion)"
          class="px-4  py-2 hover:bg-gray-300 cursor-pointer">
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive variables
const isOpen = ref(false);
const selectedRegion = ref(null);

// Regions list
const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectRegion = (region) => {
  selectedRegion.value = region;
  isOpen.value = false;
};
</script>

<style>
/* Tailwind styles are used; no additional custom CSS is needed. */
</style>
