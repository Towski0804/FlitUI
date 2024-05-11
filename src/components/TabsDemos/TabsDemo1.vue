<template>
  <Tabs v-model="selected">
    <Tab title="Nav Tab 1"> Content 1 </Tab>
    <Tab title="Nav Tab 2"> Content 2 </Tab>
  </Tabs>
</template>

<script lang="ts">
// import the Tabs and Tab components
import { Tabs, Tab } from 'cws-flitui'
import { ref } from 'vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selected = ref('Nav Tab 1')
    return {
      selected
    }
  }
}
</script>
