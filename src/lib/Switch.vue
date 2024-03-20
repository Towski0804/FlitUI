<template>
  <button
    class="flit-switch"
    :class="{ 'flit-checked': modelValue }"
    @click="toggle"
    :disabled="disabled"
  >
    <span></span>
  </button>
  <div>{{ modelValue }}</div>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const toggle = () => {
      context.emit('update:modelValue', !props.modelValue)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 24px;
$h2: $h - 4px;
.flit-switch {
  height: $h;
  width: calc($h * 2);
  border: none;
  background: grey;
  border-radius: calc($h/2);
  position: relative;
  transition: background 250ms;
  &[disabled] {
    cursor: not-allowed;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: left 250ms;
  }
  &.flit-checked {
    background: #4cb9fa;
  }
  &.flit-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
}
</style>
