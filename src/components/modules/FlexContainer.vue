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
      type: String
    },
    alignItems: {
      type: String
    },
    justifyContent: {
      type: String
    },
    wrap: {
      type: String
    },
    alignContent: {
      type: String
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
