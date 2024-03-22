<template>
  <div>
    <Button level="main">Main</Button>
    <Button kind="link" level="main">Main</Button>
    <Button kind="text" level="main">Main</Button>
  </div>
  <div>
    <Button>Normal</Button>
    <Button kind="link">Normal</Button>
    <Button kind="text">Normal</Button>
  </div>
  <div>
    <Button level="danger">Danger</Button>
    <Button kind="link" level="danger">Danger</Button>
    <Button kind="text" level="danger">Danger</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
  components: { Button }
}
</script>
