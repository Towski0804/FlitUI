<template>
  <Button @click="toggle">Open Dialogue</Button>
  <Dialogue
    v-model="visible"
    :confirm="confirm"
    :cancel="cancel"
    title="Write your own title"
  >
    <div>Write your own content</div>
  </Dialogue>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Button } from 'cws-flitui'
// import the Dialogue component
import { Dialogue } from 'cws-flitui'
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
