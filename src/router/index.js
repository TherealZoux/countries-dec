import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '/src/views/HomeView.vue'
import CountryView from '/src/views/CountryView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/country', component: CountryView },
]

 const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router
