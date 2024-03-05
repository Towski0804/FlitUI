import { router } from './router'
import App from './App.vue'
import { createApp } from 'vue'
import './index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
