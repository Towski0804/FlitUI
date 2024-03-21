<template>
  <div class="flit-tabs">
    <div class="flit-tabs-nav" ref="container">
      <div
        class="flit-tabs-nav-item"
        v-for="(title, index) in titles"
        :class="{ selected: modelValue === title }"
        :key="index"
        @click="select(title)"
        :ref="
          (el) => {
            if (title === modelValue) {
              selectedItem = el as HTMLDivElement
            }
          }
        "
      >
        {{ title }}
      </div>
      <div class="flit-tabs-nav-indicator" ref="indicator"></div>
    </div>
  </div>
  <div class="flit-tabs-content">
    <component :is="current" :key="modelValue"></component>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    modelValue: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement | null>(null)
    const indicator = ref<HTMLDivElement | null>(null)
    const container = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      watchEffect(() => {
        if (selectedItem.value && indicator.value && container.value) {
          const { width } = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const { left: left1 } = container.value.getBoundingClientRect()
          const { left: left2 } = selectedItem.value.getBoundingClientRect()
          const left = left2 - left1
          indicator.value.style.left = left + 'px'
        }
      })
    })

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
      select,
      selectedItem,
      indicator,
      container
    }
  }
}
</script>

<style lang="scss">
$blue: #24a0ed;
$color: #333;
$border-color: #d9d9d9;
.flit-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
