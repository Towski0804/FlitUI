<template>
  <h1>the demo of Button</h1>
  <h2>Button Kind</h2>
  <div>
    <Button>default kind</Button>
    <Button kind="button">button</Button>
    <Button kind="link">link</Button>
    <Button kind="text">text</Button>
  </div>
  <hr />
  <h2>Button Size</h2>
  <div>
    <h3>kind=button(default)</h3>
    <Button size="big">Big</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <h3>kind=link</h3>
    <Button kind="link" size="big">Big</Button>
    <Button kind="link">Normal</Button>
    <Button size="small" kind="link">Small</Button>
  </div>
  <div>
    <h3>kind=text</h3>
    <Button size="big" kind="text">Big</Button>
    <Button kind="text">Normal</Button>
    <Button size="small" kind="text">Small</Button>
  </div>
  <hr />
  <h2>Button Level</h2>
  <div>
    <div>
      <h3>kind=button(default)</h3>
      <Button level="main">Main Button</Button>
      <Button>Normal Button</Button>
      <Button level="danger">Danger Button</Button>
    </div>
    <div>
      <h3>kind=link</h3>
      <Button kind="link" level="main">Main Link</Button>
      <Button kind="link">Normal Link</Button>
      <Button kind="link" level="danger">Danger Link</Button>
    </div>
    <div>
      <h3>kind=text</h3>
      <Button kind="text" level="main">Main Text</Button>
      <Button kind="text">Normal Text</Button>
      <Button kind="text" level="danger">Danger Text</Button>
    </div>
  </div>
  <hr />
  <h2>Button Disabled</h2>
  <div>
    <Button disabled>Disabled Button</Button>
    <Button kind="link" disabled>Disabled Link</Button>
    <Button kind="text" disabled>Disabled Text</Button>
  </div>
  <hr />
  <div>
    <h2>Loading</h2>
    <Button loading>loading</Button>
    <Button>loading complete</Button>
  </div>
</template>
<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss"></style>
