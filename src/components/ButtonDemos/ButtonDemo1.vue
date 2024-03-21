<template>
  <div>
    <Button>Button</Button>
    <Button kind="link">link</Button>
    <Button kind="text">text</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
