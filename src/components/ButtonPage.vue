<template>
  <h1>Button Examples</h1>
  <Demo
    title="Kind"
    description="There are 3 kinds of buttons: <strong>button</strong>, <strong>link</strong>, and <strong>text</strong>. The default kind is <strong>button</strong>."
    :component="ButtonDemo1"
    :rawCode="ButtonDemo1Raw"
  ></Demo>
  <Demo
    title="Size"
    description="There are 3 sizes of buttons: <strong>small</strong>, <strong>medium</strong>, and <strong>large</strong>. The default size is <strong>medium</strong>."
    :component="ButtonDemo2"
    :rawCode="ButtonDemo2Raw"
  ></Demo>
  <Demo
    title="Level"
    description="There are 3 levels of buttons: <strong>main</strong>, <strong>normal</strong>, and <strong>danger</strong>. The default level is <strong>normal</strong>."
    :component="ButtonDemo3"
    :rawCode="ButtonDemo3Raw"
  ></Demo>
  <Demo
    title="Disabled"
    description="You can disable a button by adding the <strong>disabled</strong> attribute to the component."
    :component="ButtonDemo4"
    :rawCode="ButtonDemo4Raw"
  ></Demo>
  <Demo
    title="Loading"
    description="You can show a loading spinner by adding the <strong>loading</strong> attribute to the component."
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

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
</style>
