<template>
  <div>
    <Button loading>loading</Button>
    <Button>loading complete</Button>
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
  align-items: flex-end;
  margin-bottom: 20px;
}
div:last-of-type {
  margin-bottom: 0;
}
</style>
