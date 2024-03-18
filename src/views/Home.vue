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
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>Powered by Vue 3</h3>
          <p>Built with Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>Written in TypeScript</h3>
          <p>Source code is written in TypeScript (with non-strict checking)</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-bulb"></use>
          </svg>
          <h3>Readable Code</h3>
          <p>Source code for each component is highly concise</p>
        </li>
      </ul>
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
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr 1fr;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
