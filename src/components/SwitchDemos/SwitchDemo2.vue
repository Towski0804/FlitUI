<template>
  <Switch v-model="active" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
// import the Switch component
import { Switch } from 'cws-flitui'
export default {
  components: { Switch },
  setup() {
    const active = ref(false)
    return { active }
  }
}
</script>
