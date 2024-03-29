<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-wing"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">Doc</router-link>
      </li>
    </ul>
    <svg
      v-if="toggleAsideVisible"
      class="toggleAside"
      @click="toggleAside"
      :class="{ 'icon-change': iconChanged }"
    >
      <use :xlink:href="icon"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { Ref, computed, inject, ref, watch } from 'vue'

export default {
  props: {
    toggleAsideVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject('asideVisible') as Ref<boolean>
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    const iconChanged = ref(false)
    const icon = computed(() =>
      asideVisible.value ? '#icon-close' : '#icon-menu'
    )

    watch(
      () => asideVisible.value,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          iconChanged.value = true
          setTimeout(() => {
            iconChanged.value = false
          }, 300)
        }
      }
    )

    return { toggleAside, icon, iconChanged }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
  .icon-change {
    animation: fadeInOut 0.3s;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
