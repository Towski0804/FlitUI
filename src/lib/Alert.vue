<template>
  <div
    :class="['flit-alert', typeClass, { top }, { autoClose }, { isClosing }]"
    v-if="modelValue"
  >
    <span class="message">{{ message }}</span>
    <span @click="close()" class="flit-alert-close" v-if="closable"></span>
    <div class="timer-line" v-if="autoClose"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) =>
        ['success', 'info', 'warning', 'error'].includes(value)
    },
    closable: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClosing: false
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue && this.autoClose) {
        setTimeout(() => {
          this.close()
        }, 5000)
      }
    }
  },
  computed: {
    typeClass() {
      return `${this.type}`
    }
  },
  methods: {
    close() {
      this.isClosing = true
      setTimeout(() => {
        this.$emit('update:modelValue', false)
        this.isClosing = false
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.flit-alert {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.success {
    background-color: #f8ffef;
    border: 1px solid #c2e999;
    color: darkgreen;
    > .timer-line {
      background-color: #82c03f;
    }
  }

  &.info {
    background-color: #e9f4fe;
    border: 1px solid #9ccafa;
    color: darkblue;
    > .timer-line {
      background-color: #3f82c0;
    }
  }

  &.warning {
    background-color: #fffbe8;
    border: 1px solid #fbe59a;
    color: darkgoldenrod;
    > .timer-line {
      background-color: #c0a23f;
    }
  }

  &.error {
    background-color: #fdf3f1;
    border: 1px solid #f7cec9;
    color: darkred;
    > .timer-line {
      background-color: #c03f3f;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  &.top {
    position: fixed;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    animation: slideDown 0.3s ease-in-out both;
    &.isClosing {
      animation: slideOut 0.3s ease-in-out both;
    }
  }
  .timer-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    animation: shrink 5s linear forwards;
  }
  @keyframes slideDown {
    0% {
      top: -2%;
    }
    100% {
      top: 2%;
    }
  }
  @keyframes shrink {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
  }
}

.message {
  margin-right: 10px;
}
</style>
