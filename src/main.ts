import './lib/flit.scss'
import './index.scss'
import { router } from './router'
import App from './App.vue'
import { createApp } from 'vue'
import 'github-markdown-css/github-markdown.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
