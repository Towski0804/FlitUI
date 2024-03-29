<template>
  <template v-if="modelValue">
    <teleport to="body">
      <div class="flit-dialogue-overlay" @click="onClickOverlay"></div>
      <div class="flit-dialogue-wrapper">
        <div class="flit-dialogue">
          <header>
            {{ title }}
            <span @click="close" class="flit-dialogue-close"></span>
          </header>
          <main>
            <slot />
          </main>
          <footer>
            <Button level="main" @click="confirm">OK</Button>
            <Button @click="cancel"> Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: 'Tips'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    onClickOverlay: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const close = () => {
      context.emit('update:modelValue', false)
    }
    const onClickOverlay = () => {
      if (props.onClickOverlay) {
        close()
      }
    }
    const confirm = () => {
      if (props.confirm?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      close()
    }
    return {
      close,
      onClickOverlay,
      confirm,
      cancel
    }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.flit-dialogue {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
