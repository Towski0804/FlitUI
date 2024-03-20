<template>
  <h1>Tabs Examples</h1>
  <Demo
    title="Basic Tabs"
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
