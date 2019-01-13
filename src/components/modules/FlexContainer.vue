<template>
  <div
    class="flex-container"
    :class="classArray"
    :style="styleObject"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexContainer',
  props: {
    // Container Attributes
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
    // Item Attributes
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
    }
  },
  computed: {
    classArray () {
      return [
        `direction-${this.direction}`,
        `align-items-${this.alignItems}`,
        `justify-content-${this.justifyContent}`,
        `wrap-${this.wrap}`,
        `content-${this.alignContent}`
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
