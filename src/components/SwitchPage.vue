<template>
  <div>
    <h1>Switch Component Example</h1>
    <div class="demo">
      <h2>Basic Usage</h2>
      <div class="demo-component">
        <component :is="SwitchDemo1"></component>
      </div>
      <div class="demo-actions">
        <Button>View Code</Button>
      </div>
      <div class="demo-code">
        <pre v-text="SwitchDemo1Raw"></pre>
      </div>
    </div>
    <div class="demo">
      <h2>Supports Disabled</h2>
      <div class="demo-component">
        <component :is="SwitchDemo2"></component>
      </div>
      <div class="demo-actions">
        <Button>View Code</Button>
      </div>
      <div class="demo-code">
        <pre v-text="SwitchDemo2Raw"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import SwitchDemo1 from './SwitchDemos/SwitchDemo1.vue'
import SwitchDemo2 from './SwitchDemos/SwitchDemo2.vue'
import SwitchDemo1Raw from './SwitchDemos/SwitchDemo1.vue?raw'
import SwitchDemo2Raw from './SwitchDemos/SwitchDemo2.vue?raw'

export default {
  components: { Switch, Button },
  setup() {
    const active = ref(true)
    return {
      active,
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
