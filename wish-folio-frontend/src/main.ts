import './assets/main.css'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.wf-dark-theme',
    },
  },
})
app.use(ToastService)

app.mount('#app')
