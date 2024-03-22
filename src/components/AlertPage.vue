<template>
  <Demo
    title="Basic Usage"
    description="There are four types of alerts: <strong>success, info, warning, and error</strong>.</br>
    To use it: </br>
    1. Set the <strong>type</strong> prop to one of the four types, and the <strong>message</strong> you want to display.</br>
    2. Bind a Boolean value to the <strong>v-model</strong> prop to show or hide the alert.</br>"
    :component="AlertDemo1"
    :rawCode="AlertDemoRaw1"
  ></Demo>
  <Demo
    title="Closable Alert"
    description="You can add a close button to the alert by adding a <strong>closable</strong> attribute to the component."
    :component="AlertDemo2"
    :rawCode="AlertDemoRaw2"
  ></Demo>
  <Demo
    title="Alert at top"
    description="You can let the alert slide in from the top by adding a <strong>top</strong> attribute to the component."
    :component="AlertDemo3"
    :rawCode="AlertDemoRaw3"
  ></Demo>
  <Demo
    title="Auto Close Alert"
    description="You can make the alert close automatically after a few seconds by adding a <strong>autoClose</strong> attribute to the component."
    :component="AlertDemo4"
    :rawCode="AlertDemoRaw4"
  ></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import AlertDemo1 from './AlertDemos/AlertDemo1.vue'
import AlertDemoRaw1 from './AlertDemos/AlertDemo1.vue?raw'
import AlertDemo2 from './AlertDemos/AlertDemo2.vue'
import AlertDemoRaw2 from './AlertDemos/AlertDemo2.vue?raw'
import AlertDemo3 from './AlertDemos/AlertDemo3.vue'
import AlertDemoRaw3 from './AlertDemos/AlertDemo3.vue?raw'
import AlertDemo4 from './AlertDemos/AlertDemo4.vue'
import AlertDemoRaw4 from './AlertDemos/AlertDemo4.vue?raw'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      AlertDemo1,
      AlertDemoRaw1,
      AlertDemo2,
      AlertDemoRaw2,
      AlertDemo3,
      AlertDemoRaw3,
      AlertDemo4,
      AlertDemoRaw4
    }
  }
}
</script>
