<template>
  <div>
    <Button level="main">Main Button</Button>
    <Button kind="link" level="main">Main Link</Button>
    <Button kind="text" level="main">Main Text</Button>
  </div>
  <div>
    <Button>Normal Button</Button>
    <Button kind="link">Normal Link</Button>
    <Button kind="text">Normal Text</Button>
  </div>
  <div>
    <Button level="danger">Danger Button</Button>
    <Button kind="link" level="danger">Danger Link</Button>
    <Button kind="text" level="danger">Danger Text</Button>
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
