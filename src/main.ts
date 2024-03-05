import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
