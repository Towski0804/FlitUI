<template>
  <div>
    <h1>Switch Examples</h1>
    <Demo
      title="Basic Usage"
      :component="SwitchDemo1"
      :raw-code="SwitchDemo1Raw"
    ></Demo>
    <Demo
      title="Disabled"
      :component="SwitchDemo2"
      :raw-code="SwitchDemo2Raw"
    ></Demo>
  </div>
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
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
