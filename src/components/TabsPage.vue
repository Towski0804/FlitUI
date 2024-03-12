<template>
  <Tabs>
    <Tab title="Nav Tab 1"> Content 1 </Tab>
    <Tab title="Nav Tab 2"> Content 2 </Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default {
  components: {
    Tabs,
    Tab
  }
}
</script>
