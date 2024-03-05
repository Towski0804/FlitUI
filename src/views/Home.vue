<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>FlitUI</h1>
      <h2>Fast & Elegant</h2>
      <p class="actions">
        <a href="https://github.com/Towski0804/FlitUI">Star Me</a>
        <router-link to="doc">Get Started</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped></style>
