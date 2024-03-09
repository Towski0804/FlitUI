<template>
  <div>Dialogue Component</div>
  <Button @click="toggle">Open Dialogue</Button>
  <Dialogue :visible="visible">888</Dialogue>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Dialogue from '../lib/Dialogue.vue'
export default {
  components: {
    Button,
    Dialogue
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      toggle
    }
  }
}
</script>
