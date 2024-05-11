<template>
  <Alert
    type="warning"
    message="This is a Warning alert."
    v-model="visible"
    closable
    top
    autoClose
  />
  <Button @click="toggleAlert()">Display AutoClose Alert</Button>
</template>

<script lang="ts">
// import the Alert component
import { Alert, Button } from 'cws-flitui'
export default {
  components: {
    Button,
    Alert
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleAlert() {
      this.visible = !this.visible
    }
  }
}
</script>
