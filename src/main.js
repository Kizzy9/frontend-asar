import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(router) // Menambahkan router ke aplikasi
app.mount('#app')