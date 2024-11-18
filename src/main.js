import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import router from '/src/router/index.js'



createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(Aura)
  .mount('#app')

