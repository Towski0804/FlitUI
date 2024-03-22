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
