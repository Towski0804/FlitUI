<template>
  <h1>Dialogue Examples</h1>
  <Demo
    title="Basic Usage"
    description="You can add a Dialogue component to your app by importing and adding the <strong>Dialogue</strong> component to your app.</br>
    Then:</br>
    1. Bind a ref object to the <strong>v-model</strong> attribute to control the visibility of the Dialogue.</br>
    2. You can define the <strong>confirm</strong> and <strong>cancel</strong> methods to handle the user's confirmation and cancellation actions.</br>
    3. You can also define the <strong>title</strong> attribute to set the title of the Dialogue.
    "
    :component="DialogueDemo1"
    :rawCode="DialogueDemo1Raw"
  ></Demo>
  <Demo
    title="Disable Overlay Click Quitting"
    description="You can set the <strong>onClickOverlay</strong> attribute to <strong>false</strong>, to disable the overlay click event."
    :component="DialogueDemo2"
    :rawCode="DialogueDemo2Raw"
  >
  </Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import DialogueDemo1 from './DialogueDemos/DialogueDemo1.vue'
import DialogueDemo1Raw from './DialogueDemos/DialogueDemo1.vue?raw'
import DialogueDemo2 from './DialogueDemos/DialogueDemo2.vue'
import DialogueDemo2Raw from './DialogueDemos/DialogueDemo2.vue?raw'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      DialogueDemo1,
      DialogueDemo1Raw,
      DialogueDemo2,
      DialogueDemo2Raw
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
</style>
