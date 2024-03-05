import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchPage.vue'
import Button from './components/ButtonPage.vue'
import Dialogue from './components/DialoguePage.vue'
import Tabs from './components/TabsPage.vue'
import DocRoot from './components/DocRootPage.vue'

const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: DocRoot },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialogue', component: Dialogue },
        { path: 'tabs', component: Tabs }
      ]
    }
  ]
})
