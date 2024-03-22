<template>
  <div>
    <Button disabled>Button</Button>
    <Button kind="link" disabled>Link</Button>
    <Button kind="text" disabled>Text</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
