<template>
  <TopNav />
  <div class="content">
    <aside v-if="asideVisible">
      <h2>Components</h2>
      <ol>
        <li>
          <router-link to="/doc/swich">Switch</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs</router-link>
        </li>
      </ol>
    </aside>
    <main>Content</main>
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
aside {
  background: rgb(163, 219, 237);
  width: 180px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
