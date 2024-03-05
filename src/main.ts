import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Test },
    { path: '/222', component: Test2 }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
