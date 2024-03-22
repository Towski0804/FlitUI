<template>
  <Alert type="success" message="This is a success alert." v-model="visible" />
  <Alert type="info" message="This is a info alert." v-model="visible" />
  <Alert type="warning" message="This is a warning alert." v-model="visible" />
  <Alert type="error" message="This is a error alert." v-model="visible" />
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
