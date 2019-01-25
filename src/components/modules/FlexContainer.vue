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
        `align-content-${this.alignContent}`
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
  display: flex

  &.direction
    
    &-column
      flex-direction: column

    &-column-reverse
      flex-direction: column-reverse
    
    &-row
      flex-direction: row
    
    &-row-reverse
      flex-direction: row-reverse
  
  &.align-items

    &-center
      align-items: center
    
    &-flex-start
      align-items: flex-start

    &-flex-end
      align-items: flex-end

    &-stretch
      align-items: stretch
    
    &-baseline
      align-items: baseline

  &.justify-content
    
    &-center
      justify-content: center

    &-flex-start
      justify-content: flex-start

    &-flex-end
      justify-content: flex-end
    
    &-space-around
      justify-content: space-around
    
    &-space-between
      justify-content: space-between

  &.wrap

    &-wrap
      flex-wrap: wrap

    &-nowrap
      flex-wrap: nowrap
    
    &-wrap-reverse
      flex-wrap: wrap-reverse

  &.align-content

    &-space-between
      align-content: space-between
    
    &-space-around
      align-content: space-around

    &-stretch
      align-content: stretch

    &-center
      align-content: center

    &-flex-start
      align-content: flex-start

    &-flex-end
      align-content: flex-end
</style>
