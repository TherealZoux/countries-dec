<script setup>
import Card from 'primevue/card';
import data from '/src/assets/data.json'
import { ref, computed, watch } from 'vue'
import Select from 'primevue/select';

// remove the shit
const pureWorld = ref(data.filter((data) => data.name !== "Israel"))
const searchData = ref("")
const countries = [{ naem: "Africa" }, { name: "America" }, { name: "Asia" }, { name: "Europe" }, { name: "Oceania" }]
const selectedRegion = ref("")

// Filter countries based on the search data
const searchCountries = computed(() => {
  return pureWorld.value.filter(country =>
    country.name.toLowerCase().includes(searchData.value.toLowerCase())
  );
});


</script>

<template>
  <section class="mb-8 pt-8 flex justify-between h-[5rem]">
    <div
      class="bg-light dark:bg-dark-elements w-[90%] sm:w-[22rem] justify-center flex sm:justify-start items-center px-4 rounded shadow">
      <i class="pi pi-search"></i>
      <input class="p-2 m-2 w-[90%]  sm:w-[100%] focus:outline-none  text-sm bg-light dark:bg-dark-elements"
        type="search" placeholder="Search for a country..." v-model="searchData">
    </div>

  </section>


  <section class="flex flex-row flex-wrap gap-16 justify-center ">
    <Card v-for="item in searchCountries" class=" w-[14rem] bg-light !rounded overflow-hidden !shadow-lg ">
      <template #header>
        <img alt="user header" class="h-[10rem]" :src="item.flags.png" />
      </template>
      <template #title>
        <h1 class="text-xl  bg-light dark:bg-dark-elements p-6 pb-0">{{ item.name }}</h1>
      </template>
      <template #content>
        <ul class="bg-light dark:bg-dark-elements p-6 pt-2">
          <li>Population: <span>{{ item.population }}</span></li>
          <li>Region: <span>{{ item.region }}</span></li>
          <li>Capital: <span>{{ item.capital }}</span></li>
        </ul>
      </template>
    </Card>
  </section>
</template>


<style lang="css" scoped>
li {
  font-weight: 600;
}

span {

  font-weight: 200;
}
</style>
