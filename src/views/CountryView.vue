<script setup>
import data from '/src/assets/data.json'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'


const route = useRoute()
const name = route.path.split('/')[1];
const loading = ref(true)


const country = computed(() => {
  return data.find(item => item.name.toLowerCase() === name.toLowerCase())
});


setTimeout(() => {
  loading.value = false
}, 1500);


</script>


<template>

  <div class="absolute h-full flex justify-center items-center w-full bg-light dark:bg-dark-bg left-0 z-40"
    v-if="loading">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
  </div>
  <section class=" h-[100%] relative  w-full overflow-scroll pb-32 flex flex-col gap-16 pt-14 ">
    <div class=" w-[90%] mx-auto">
      <router-link to="/" class="w-fit ml-4 md:ml-0 ">
        <button
          class="flex bg-light dark:bg-dark-elements   shadow-[0px_0px_3px_2px_#00000024] w-28 p-2 rounded gap-2 items-center justify-center">
          <i class="pi pi-arrow-left "></i> Back</button>
      </router-link>
    </div>
    <div class="flex flex-col lg:flex-row  gap-12 sm:gap-24 w-[90%]  mx-auto mt-0  ">
      <div class="lg:w-[50%]">
        <img :src="country.flags.svg" alt="country flag" class="w-full">
      </div>
      <div class="flex flex-col gap-8 justify-center">
        <h1 class="text-3xl">{{ country.name }}</h1>
        <div class="flex flex-col sm:flex-row  gap-12">
          <ul class="flex flex-col flex-wrap text-[16px] font-normal gap-2">
            <li>Native Name: <span> {{ country.nativeName }}</span> </li>
            <li>Population: <span> {{ country.population }} </span></li>
            <li>Region: <span> {{ country.region }}</span></li>
            <li>Sub Region: <span> {{ country.subregion }}</span></li>
            <li v-if="country.capital">Capital: <span> {{ country.capital }}</span></li>
          </ul>
          <ul class="flex flex-col flex-wrap text-[16px] font-normal gap-2">
            <li>Top Level Domain: <span> {{ country.topLevelDomain[0] }}</span></li>
            <li v-if="country.currencies">Currencies: <span> {{ country.currencies[0].name }}</span></li>
            <li>
              Languages: <span class="" v-for="lang in country.languages"> {{ lang.name }}, </span>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-bold flex gap-1 items-center w-full flex-wrap ">Border Countries: <span
              class=" bg-light dark:bg-dark-elements  shadow-[0px_0px_3px_2px_#00000024] w-10 p-1 rounded ml-2 "
              v-for="border in country.borders"> {{ border }}
            </span> </p>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="css">
li {
  font-weight: 600;
}

span {
  font-weight: 300;

}
</style>
