<template>
  <h1>Button Examples</h1>
  <Demo title="Kind" :component="ButtonDemo1" :rawCode="ButtonDemo1Raw"></Demo>
  <Demo title="Size" :component="ButtonDemo2" :rawCode="ButtonDemo2Raw"></Demo>
  <Demo title="Level" :component="ButtonDemo3" :rawCode="ButtonDemo3Raw"></Demo>
  <Demo
    title="Disabled"
    :component="ButtonDemo4"
    :rawCode="ButtonDemo4Raw"
  ></Demo>
  <Demo
    title="Loading"
    :component="ButtonDemo5"
    :rawCode="ButtonDemo5Raw"
  ></Demo>
</template>
<script>
import Demo from './Demo.vue'
import ButtonDemo1 from './ButtonDemos/ButtonDemo1.vue'
import ButtonDemo1Raw from './ButtonDemos/ButtonDemo1.vue?raw'
import ButtonDemo2 from './ButtonDemos/ButtonDemo2.vue'
import ButtonDemo2Raw from './ButtonDemos/ButtonDemo2.vue?raw'
import ButtonDemo3 from './ButtonDemos/ButtonDemo3.vue'
import ButtonDemo3Raw from './ButtonDemos/ButtonDemo3.vue?raw'
import ButtonDemo4 from './ButtonDemos/ButtonDemo4.vue'
import ButtonDemo4Raw from './ButtonDemos/ButtonDemo4.vue?raw'
import ButtonDemo5 from './ButtonDemos/ButtonDemo5.vue'
import ButtonDemo5Raw from './ButtonDemos/ButtonDemo5.vue?raw'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo1Raw,
      ButtonDemo2,
      ButtonDemo2Raw,
      ButtonDemo3,
      ButtonDemo3Raw,
      ButtonDemo4,
      ButtonDemo4Raw,
      ButtonDemo5,
      ButtonDemo5Raw
    }
  }
}
</script>
<style lang="scss"></style>
