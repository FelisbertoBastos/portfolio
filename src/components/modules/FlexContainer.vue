<template>
  <div
    class="flex-container"
    :class="classArray"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexContainer',
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    alignItems: {
      type: String,
      default: 'stretch'
    },
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    wrap: {
      type: String,
      default: 'nowrap'
    },
    alignContent: {
      type: String,
      default: 'stretch'
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
        `direction-${this.direction}`,
        `align-items-${this.alignItems}`,
        `justify-content-${this.justifyContent}`,
        `wrap-${this.wrap}`,
        `content-${this.alignContent}`,
        { 'full-height': this.fullHeight },
        { 'full-width': this.fullWidth }
      ]
    }
  }
}
</script>
