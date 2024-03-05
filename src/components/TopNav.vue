<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单 1</li>
      <li>菜单 2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  position: relative;
  z-index: 10;
  background: #fff;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>

<script lang="ts">
import { Ref, inject } from 'vue'

export default {
  setup() {
    const asideVisible = inject('asideVisible') as Ref<boolean>
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
  }
}
</script>
