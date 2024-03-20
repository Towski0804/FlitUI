<template>
  <div>
    <div>
      <h3>Level=main</h3>
      <Button level="main">Main Button</Button>
      <Button kind="link" level="main">Main Link</Button>
      <Button kind="text" level="main">Main Text</Button>
    </div>
    <div>
      <h3>Level=normal</h3>
      <Button>Normal Button</Button>
      <Button kind="link">Normal Link</Button>
      <Button kind="text">Normal Text</Button>
    </div>
    <div>
      <h3>Level=danger</h3>
      <Button level="danger">Danger Button</Button>
      <Button kind="link" level="danger">Danger Link</Button>
      <Button kind="text" level="danger">Danger Text</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
