<script setup>
import Card from 'primevue/card';
import data from '/src/assets/data.json'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import Select from '/src/components/SelectComponent.vue';

const route = useRoute();


// remove the shit
const pureWorld = ref(data.filter((data) => data.name !== "Israel"))
const countries = [{ naem: "Africa" }, { name: "America" }, { name: "Asia" }, { name: "Europe" }, { name: "Oceania" }]
const selectedRegion = ref("")
const searchData = ref("")
const loading = ref(true)

// Filter countries based on the search data
const searchCountries = computed(() => {
  // condition to know where we will search => in filtered countries or pureWorld
  if (!filteredCountries.value) {
    return pureWorld.value.filter(country =>
      country.name.toLowerCase().includes(searchData.value.toLowerCase())
    );
  }
  else {
    return filteredCountries.value.filter(country =>
      country.name.toLowerCase().includes(searchData.value.toLowerCase()))
  }
});
const filteredCountries = computed(() => {
  return pureWorld.value.filter(country =>
    country.region.toLowerCase().includes(selectedRegion.value.toLowerCase())
  );
});

const setSelectedRegion = (region) => {
  selectedRegion.value = region

}

setTimeout(() => {
  loading.value = false
}, 1500);





</script>

<template>
  <div class="absolute h-full flex justify-center items-center w-full bg-light dark:bg-dark-bg left-0 z-40"
    v-if="loading">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
  </div>
  <section
    class="pb-14 sm:pb-0 sm:mb-8 mb-16 pt-8 flex justify-between sm:items-center flex-col sm:flex-row gap-2 h-[5rem] w-[90%] mx-auto">
    <div
      class="bg-light dark:bg-dark-elements w-[90%] m-auto sm:m-0 sm:w-[22rem] justify-center flex sm:justify-start items-center px-4 rounded shadow">
      <i class="pi pi-search" style="color: gray;"></i>
      <input class="p-2 m-2 w-[90%]  sm:w-[100%] focus:outline-none  text-sm bg-light dark:bg-dark-elements"
        type="search" placeholder="Search for a country..." v-model="searchData">
    </div>

    <Select @setSelectedRegion="setSelectedRegion" />
  </section>
  {{ mouseY }}
  <section class="flex flex-row flex-wrap gap-16 justify-center pt-8" id="home">

    <router-link v-for="item in searchCountries" :to="item.name">
      <Card class=" w-[14rem] bg-light !rounded overflow-hidden !shadow-lg ">
        <template #header>
          <img alt="user header" class="h-[10rem] w-full" :src="item.flags.png" />
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
    </router-link>
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
