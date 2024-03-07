<template>
  <div>the demo of Button</div>
  <h1>Example 1</h1>
  <div>
    <Button>default kind</Button>
    <Button kind="button">button</Button>
    <Button kind="link">link</Button>
    <Button kind="text">text</Button>
  </div>
</template>
<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss"></style>
