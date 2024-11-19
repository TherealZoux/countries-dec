import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: ()=> import('/src/views/HomeView.vue') },
  { path: '/:name', component: ()=> import('/src/views/CountryView.vue') },
]

 const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
