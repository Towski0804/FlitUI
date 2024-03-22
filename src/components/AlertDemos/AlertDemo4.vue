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
import Alert from '../../lib/Alert.vue'
import Button from '../../lib/Button.vue'
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
