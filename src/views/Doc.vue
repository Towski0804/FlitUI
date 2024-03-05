<template>
  <TopNav />
  <div class="content">
    <aside>Sidebar</aside>
    <main>Content</main>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>
