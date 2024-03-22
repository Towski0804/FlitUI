<template>
  <h2>{{ title }}</h2>
  <div class="description" v-html="description"></div>
  <div class="demo">
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
    description: {
      type: String,
      default: ''
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
        if (codeBlock.value) {
          const codeElement = (codeBlock.value as HTMLElement)?.querySelector(
            'code'
          )
          if (codeElement) {
            Prism.highlightElement(codeElement)
          }
        }
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

<style lang="scss">
$border-color: #d9d9d9;
.description {
  margin: 10px 0;
  font-size: 1.1em;
}
.demo {
  max-width: 91vw;
  margin: 10px auto 30px;
  box-shadow: 0 0 5px $border-color;
  &-component {
    padding: 16px;
    > div {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      margin-bottom: 20px;
    }
    > div:last-of-type {
      margin-bottom: 0;
    }
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
