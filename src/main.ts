import './lib/flit.scss'
import './index.scss'
import { router } from './router'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
