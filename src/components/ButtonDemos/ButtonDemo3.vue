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
    <Button level="warning">Warning</Button>
    <Button kind="link" level="warning">Warning</Button>
    <Button kind="text" level="warning">Warning</Button>
  </div>
  <div>
    <Button level="error">Error</Button>
    <Button kind="link" level="error">Error</Button>
    <Button kind="text" level="error">Error</Button>
  </div>
</template>

<script lang="ts">
// import the Button component
import { Button } from 'cws-flitui'
export default {
  components: { Button }
}
</script>
