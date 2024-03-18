<template>
  <div>
    <div class="topnavAndBanner">
      <div>
        <TopNav />
        <div class="flit-banner">
          <h1>FlitUI</h1>
          <h2>Fast & Elegant</h2>
          <p class="actions">
            <a href="https://github.com/Towski0804/FlitUI">Star Me</a>
            <router-link to="doc">Get Started</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-bulb"></use>
      </svg>
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

<style lang="scss" scoped>
.flit-banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    145deg,
    rgba(251, 250, 241, 1) 0%,
    #b1e3f7 78%,
    rgba(177, 227, 247, 0.7525603991596639) 99%
  );
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
    margin: 0 16px;
  }
}
</style>
