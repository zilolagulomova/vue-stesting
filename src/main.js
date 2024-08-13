import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icomoon/style.css'
import '/src/index.css'
const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
