<template>
  <div>
    <Button size="big">Big</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <Button kind="link" size="big">Big</Button>
    <Button kind="link">Normal</Button>
    <Button size="small" kind="link">Small</Button>
  </div>
  <div>
    <Button size="big" kind="text">Big</Button>
    <Button kind="text">Normal</Button>
    <Button size="small" kind="text">Small</Button>
  </div>
</template>

<script lang="ts">
// import the Button component
import { Button } from 'cws-flitui'
export default {
  components: { Button }
}
</script>
