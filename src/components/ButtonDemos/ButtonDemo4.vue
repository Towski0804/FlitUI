<template>
  <div>
    <Button disabled>Button</Button>
    <Button kind="link" disabled>Link</Button>
    <Button kind="text" disabled>Text</Button>
  </div>
</template>

<script lang="ts">
// import the Button component
import { Button } from 'cws-flitui'
export default {
  components: { Button }
}
</script>
