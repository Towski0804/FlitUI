<template>
  <Switch :value="active" @input="active = $event" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const active = ref(true)
    return { active }
  }
}
</script>
