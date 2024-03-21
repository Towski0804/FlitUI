<template>
  <h1>Switch Examples</h1>
  <Demo
    title="Basic Usage"
    description="
    <p>Simply import the component and bind a <strong>ref</strong> object of type boolean to the <strong>v-model</strong> directive.
    </p>"
    :component="SwitchDemo1"
    :raw-code="SwitchDemo1Raw"
  ></Demo>
  <Demo
    title="Disabled"
    description="You can disable the switch by simply adding the <strong>disabled</strong> attribute to the component."
    :component="SwitchDemo2"
    :raw-code="SwitchDemo2Raw"
  ></Demo>
</template>

<script lang="ts">
import SwitchDemo1 from './SwitchDemos/SwitchDemo1.vue'
import SwitchDemo2 from './SwitchDemos/SwitchDemo2.vue'
import SwitchDemo1Raw from './SwitchDemos/SwitchDemo1.vue?raw'
import SwitchDemo2Raw from './SwitchDemos/SwitchDemo2.vue?raw'
import Demo from './Demo.vue'

export default {
  components: { Demo },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
      SwitchDemo1Raw,
      SwitchDemo2Raw
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
</style>
