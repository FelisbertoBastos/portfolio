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

<style lang="sass">
div.flex-container
  .flex-item

    &.align-self

      &-auto
        align-self: auto

      &-center
        align-self: center

      &-flex-start
        align-self: flex-start

      &-flex-end
        align-self: flex-end
</style>
