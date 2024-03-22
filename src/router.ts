import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchPage.vue'
import Button from './components/ButtonPage.vue'
import Dialogue from './components/DialoguePage.vue'
import Tabs from './components/TabsPage.vue'
import Alert from './components/AlertPage.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'

const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: Intro },
        { path: 'install', component: Install },
        { path: 'get-started', component: GetStarted },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialogue', component: Dialogue },
        { path: 'tabs', component: Tabs },
        { path: 'alert', component: Alert }
      ]
    }
  ]
})
