<template>
  <router-view />
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

<script>
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const deviceWidth = document.documentElement.clientWidth
    const asideVisible = ref(deviceWidth >= 500 ? true : false)
    provide('asideVisible', asideVisible)
  }
}
</script>
