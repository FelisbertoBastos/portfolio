<template>
  <div
    class="hover-effect"
  >
    <svg width="60" height="60" viewBox="0 0 60 60">
      <path
        id="square"
        d=" M 4 1 L 56 1 C 57.66 1 59 2.34 59 4 L 59 56 C 59 57.66 57.66 59 56 59 L 4 59 C 2.34 59 1 57.66 1 56 L 1 4 C 1 2.34 2.34 1 4 1 Z "
        fill="none"
        stroke="#b8b8b8"
        stroke-linejoin="round"
        stroke-width="2"
        fill-rule="evenodd"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HoverEffect'
}
</script>

<style lang="sass" scoped>
div.hover-effect
  position: relative
  overflow: hidden
  width: 100%
  height: auto
  cursor: pointer

svg
  position: absolute
  width: 100%
  height: auto

  > #square
    opacity: 0.0
    stroke-dasharray: 226.857
    stroke-dashoffset: 226.857
    transition: all 1s

  &:hover #square
    opacity: 1.0
    stroke-dashoffset: 0

img
  width: 100%
</style>
