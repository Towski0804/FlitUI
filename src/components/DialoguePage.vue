<template>
  <h1>Dialogue Examples</h1>
  <Demo
    title="Dialogue"
    :component="DialogueDemo1"
    :rawCode="DialogueDemo1Raw"
  ></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import DialogueDemo1 from './DialogueDemos/DialogueDemo1.vue'
import DialogueDemo1Raw from './DialogueDemos/DialogueDemo1.vue?raw'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      DialogueDemo1,
      DialogueDemo1Raw
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
</style>
