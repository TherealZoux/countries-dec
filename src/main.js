import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import router from '/src/router/index.js'


const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.mount('#app')

