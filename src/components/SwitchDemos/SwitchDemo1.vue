<template>
  <Switch v-model="active" />
</template>

<script lang="ts">
import { ref } from 'vue'
// import Switch from your own path
import Switch from '../../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const active = ref(true)
    return { active }
  }
}
</script>
