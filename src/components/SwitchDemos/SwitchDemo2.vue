<template>
  <Switch v-model="active" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const active = ref(false)
    return { active }
  }
}
</script>
