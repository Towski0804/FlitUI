<template>
  <Button @click="toggle">Open Dialogue</Button>
  <Dialogue
    v-model="visible"
    :confirm="confirm"
    :cancel="cancel"
    title="Write your own title"
    :onClickOverlay="false" <!-- Add this line -->
    <div>Write your own content</div>
  </Dialogue>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../../lib/Button.vue'
import Dialogue from '../../lib/Dialogue.vue'
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
    const confirm = (): Boolean => {
      return false
    }
    const cancel = () => {}
    return {
      visible,
      toggle,
      confirm,
      cancel
    }
  }
}
</script>
