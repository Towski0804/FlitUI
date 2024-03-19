<template>
  <div class="layout">
    <TopNav class="nav" :toggleAsideVisible="true" />
    <div class="content">
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
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  },
  setup() {
    const asideVisible = inject('asideVisible')
    return { asideVisible }
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
  border-right: 1px solid rgba(102, 102, 102, 0.5);
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
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
</style>
