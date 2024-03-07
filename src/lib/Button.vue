<template>
  <button class="flit-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="flit-loadingSign"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    kind: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { kind, size, level } = props
    const classes = computed(() => {
      return {
        [`flit-kind-${kind}`]: true,
        [`flit-size-${size}`]: true,
        [`flit-level-${level}`]: true
      }
    })
    return {
      classes
    }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$radius: 4px;
$grey: grey;
.flit-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.flit-kind-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.flit-kind-text {
    border-color: transparent;
    box-shadow: none;
    &:hover,
    &:focus {
      background: #f5f5f5;
    }
  }
  &.flit-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.flit-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.flit-kind-button {
    &.flit-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.flit-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.flit-kind-link {
    &.flit-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.flit-kind-text {
    &.flit-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.flit-level-normal {
      color: $color;
      &:hover,
      &:focus {
        color: darken($color, 10%);
      }
    }
    &.flit-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.flit-kind-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.flit-kind-link,
  &.flit-kind-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .flit-loadingSign {
    width: 16px;
    height: 16px;
    border: 2px solid navy;
    border-top-color: transparent;
    border-radius: 50%;
    animation: flit-spin 1s linear infinite;
    margin-right: 3px;
  }
  @keyframes flit-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
