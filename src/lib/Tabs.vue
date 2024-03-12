<template>
  <div>Tabs component</div>
  <div v-for="(title, index) in titles" :key="index">{{ title }}</div>
  <component
    v-for="(tab, index) in defaults"
    :is="tab"
    :key="index"
  ></component>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default?.()
    defaults?.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Only Tab components are allowed')
      }
    })
    const titles = defaults?.map((tag) => tag?.props?.title)
    return {
      defaults,
      titles
    }
  }
}
</script>
