<template>
  <div
    class="flex-item"
    :class="classArray"
    :style="styleObject"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexItem',
  props: {
    order: {
      type: Number
    },
    flexGrow: {
      type: Number
    },
    flexShrink: {
      type: Number
    },
    flexBasis: {
      type: String
    },
    alignSelf: {
      type: String
    }
  },
  computed: {
    classArray () {
      return [
        `align-self-${this.alignSelf}`
      ]
    },
    styleObject () {
      return {
        order: this.order,
        flexGrow: this.flexGrow,
        flexShrink: this.flexShrink,
        flexBasis: this.flexBasis
      }
    }
  }
}
</script>
