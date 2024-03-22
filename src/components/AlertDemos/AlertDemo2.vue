<template>
  <Alert
    type="success"
    message="This is a success alert."
    v-model="visible"
    closable
  />
</template>

<script lang="ts">
import Alert from '../../lib/Alert.vue'
import Button from '../../lib/Button.vue'
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
