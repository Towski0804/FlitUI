<template>
  <div>
    <Button disabled>Disabled Button</Button>
    <Button kind="link" disabled>Disabled Link</Button>
    <Button kind="text" disabled>Disabled Text</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
