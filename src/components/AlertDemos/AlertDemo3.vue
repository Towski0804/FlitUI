<template>
  <Alert
    type="success"
    message="This is a success alert."
    v-model="visible"
    closable
    top
  />
  <Button @click="toggleAlert()">Display Top Alert</Button>
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
