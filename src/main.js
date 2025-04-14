import '@/assets/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '@/assets/css/style.css'
import '@/assets/sass/style.scss'

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/style.css'
import '@/assets/img/favicon.ico'
import '@/assets/img/apple-touch-icon-72x72.png'
import '@/assets/img/apple-touch-icon-114x114.png'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'







const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
