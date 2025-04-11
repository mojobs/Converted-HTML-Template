
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueBodyClass from 'vue-body-class';






const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
