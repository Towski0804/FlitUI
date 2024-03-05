<script setup lang="ts">
import Test from './components/Test.vue'
</script>

<template>
  <div>
    oh header |
    <router-link to="/">p1</router-link> |
    <router-link to="/222">p2</router-link>
  </div>
  <hr />
  <router-view />
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
