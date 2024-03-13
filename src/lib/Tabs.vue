<template>
  <div>Tabs component</div>
  <div class="flit-tabs">
    <div class="flit-tabs-nav">
      <div
        class="flit-tabs-nav-item"
        v-for="(title, index) in titles"
        :class="{ selected: modelValue === title }"
        :key="index"
        @click="select(title)"
      >
        {{ title }}
      </div>
    </div>
  </div>
  <div class="flit-tabs-content">
    <component
      class="flit-tabs-content-item"
      :is="current"
      :key="modelValue"
      v-if="current"
    ></component>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    modelValue: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default?.()
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Only Tab components are allowed')
      }
    })
    const current = computed(
      () => defaults?.filter((tag) => tag?.props?.title === props.modelValue)[0]
    )
    const titles = defaults?.map((tag) => tag?.props?.title)
    const select = (title: string) => {
      context.emit('update:modelValue', title)
    }
    return {
      defaults,
      titles,
      current,
      select
    }
  }
}
</script>

<style lang="scss">
$color: #333;
$border-color: #d9d9d9;
.flit-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: red;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
