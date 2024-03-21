<template>
  <h1>Tabs Examples</h1>
  <Demo
    title="Basic Tabs"
    description="To use the Tabs component, create and bind a ref object of type string to the <strong>v-model</strong> property to control the selected tab.</br>
    Then, create Tab components and set the <strong>title</strong> prop to the desired tab name, and write your content inside the Tab component."
    :component="TabsDemo1"
    :rawCode="TabsDemo1Raw"
  ></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import TabsDemo1 from './TabsDemos/TabsDemo1.vue'
import TabsDemo1Raw from './TabsDemos/TabsDemo1.vue?raw'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      TabsDemo1,
      TabsDemo1Raw
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
</style>
