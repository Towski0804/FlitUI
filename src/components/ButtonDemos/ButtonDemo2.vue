<template>
  <div>
    <h3>kind=button(default)</h3>
    <Button size="big">Big</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <h3>kind=link</h3>
    <Button kind="link" size="big">Big</Button>
    <Button kind="link">Normal</Button>
    <Button size="small" kind="link">Small</Button>
  </div>
  <div>
    <h3>kind=text</h3>
    <Button size="big" kind="text">Big</Button>
    <Button kind="text">Normal</Button>
    <Button size="small" kind="text">Small</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
