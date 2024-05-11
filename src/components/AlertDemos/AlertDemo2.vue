<template>
  <Alert
    type="success"
    message="This is a success alert."
    v-model="visible"
    closable
  />
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
      visible: true
    }
  },
  methods: {}
}
</script>
