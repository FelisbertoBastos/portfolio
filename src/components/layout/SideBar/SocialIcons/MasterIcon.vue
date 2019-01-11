<template>
  <div>
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
  name: 'MasterIcon'
}
</script>

<style lang="sass" scoped>

div
  position: relative
  overflow: hidden
  width: 100%
  height: auto
  cursor: pointer

  &:before
    content: ""
    position: absolute
    left: -20%
    top: 0
    width: 50%
    height: 100%
    transform: skewX(-20deg)
    background: white
    opacity: 0.0
    transition: all 0.8s

  &:hover:before
    opacity: 0.1
    left: 40%

svg
  position: absolute
  width: 100%
  height: auto

  > #square
    opacity: 0.0
    stroke-dasharray: 70
    stroke-dashoffset: 70
    transition: opacity 1s, stroke-dashoffset 2s

  &:hover #square
    opacity: 1.0
    stroke-dashoffset: 0

img
  width: 100%

</style>
