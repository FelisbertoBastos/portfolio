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
      type: Number,
      default: 0
    },
    flexGrow: {
      type: Number,
      default: 0
    },
    flexShrink: {
      type: Number,
      default: 1
    },
    flexBasis: {
      type: String,
      default: 'auto'
    },
    alignSelf: {
      type: String,
      default: 'auto'
    },
    fullHeight: {
      type: Boolean
    },
    fullWidth: {
      type: Boolean
    }
  },
  computed: {
    classArray () {
      return [
        `align-self-${this.alignSelf}`,
        { 'full-height': this.fullHeight },
        { 'full-width': this.fullWidth }
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
