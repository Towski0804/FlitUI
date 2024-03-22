<template>
  <div class="layout">
    <TopNav class="nav" :toggleAsideVisible="true" />
    <div class="content">
      <transition name="slide">
        <aside v-if="asideVisible">
          <h3>Doc</h3>
          <ol>
            <li>
              <router-link to="/doc/intro">Introduction</router-link>
            </li>
            <li>
              <router-link to="/doc/install">Install</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">Get Started</router-link>
            </li>
          </ol>
          <h3>Components</h3>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button</router-link>
            </li>
            <li>
              <router-link to="/doc/dialogue">Dialogue</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs</router-link>
            </li>
            <li>
              <router-link to="/doc/alert">Alert</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main @click="isMobile && (asideVisible = false)">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, inject, ref, onMounted, onUnmounted } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  },
  setup() {
    const asideVisible = inject('asideVisible') as Ref<boolean>
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    const isMobile = ref(window.innerWidth <= 500)
    const updateWidth = () => {
      const current = isMobile.value
      isMobile.value = window.innerWidth <= 500
      // if aside is visible and window is changed from mobile to desktop, then keep aside visible
      if (current && asideVisible.value) {
        return
      }
      if (current !== isMobile.value) {
        toggleAside()
      }
    }
    onMounted(() => {
      window.addEventListener('resize', updateWidth)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', updateWidth)
    })
    return { asideVisible, isMobile }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #3290ed;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  z-index: 10;
  background: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  transition: transform 0.3s ease;
  > h3 {
    margin: 10px 0px;
  }
  > ol {
    > li {
      padding: 8px 0;
    }
  }
  main {
    overflow: auto;
  }
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
