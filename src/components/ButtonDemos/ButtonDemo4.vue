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

<style lang="scss" scoped>
div {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
}
div:last-of-type {
  margin-bottom: 0;
}
</style>
