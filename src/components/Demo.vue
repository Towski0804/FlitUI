<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCodeVisible">View Code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible" ref="codeBlock">
      <pre><code class="language-html" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import Button from '../lib/Button.vue'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-ghcolors.css'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    component: {
      type: Object,
      required: true
    },
    rawCode: {
      type: String,
      required: true
    }
  },
  components: { Button },
  setup(props) {
    const codeVisible = ref(false)
    const active = ref(true)
    const codeBlock = ref(null)
    // this is to color the code
    const highlightedCode = computed(() => {
      return Prism.highlight(props.rawCode, Prism.languages.html, 'html')
    })

    const toggleCodeVisible = () => {
      codeVisible.value = !codeVisible.value
    }

    watch(codeVisible, async (newVal) => {
      if (newVal) {
        await nextTick()
        // this is to color the code section
        Prism.highlightElement(codeBlock.value.querySelector('code'))
      }
    })

    return {
      active,
      codeVisible,
      toggleCodeVisible,
      highlightedCode,
      codeBlock
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  max-width: 92vw;
  margin: 10px auto;
  border: 1px solid $border-color;
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