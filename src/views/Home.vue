<template>
  <div>
    <div class="topnavAndBanner">
      <div>
        <TopNav />
        <div class="flit-banner">
          <h1>FlitUI</h1>
          <h2>Fast & Elegant</h2>
          <p class="actions">
            <a href="https://github.com/Towski0804/FlitUI" class="navButton"
              >Star Me</a
            >
            <router-link to="doc" class="navButton">Get Started</router-link>
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
.topnav {
  background: none;
  box-shadow: none;
}
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
      margin: 20px 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
    }
    > .navButton {
      transition: all 0.3s ease;
    }
    > .navButton:hover {
      box-shadow:
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 30px #fff,
        0 0 40px #fff;
    }
  }
}
.features {
  margin: 40px auto;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      width: 360px;
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
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 49%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 30%;
        margin: 16px 16px;
      }
    }
  }
}
</style>
