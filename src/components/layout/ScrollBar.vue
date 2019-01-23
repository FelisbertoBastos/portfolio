<template>
  <div class="scroll-bar">
    <div class="scroll-path"></div>
    <div class="scroll-control"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar'
}
</script>

<style lang="sass">
.scroll-bar
  position: relative
  width: 100%

  .scroll-path
    width: 2px
    height: 200px
    margin: auto
    background: #707070

  .scroll-control
    position: absolute
    top: 0
    left: 50%
    margin-left: -10px
    width: 20px
    height: 60px
    background: #35313F
    border: 2px solid #707070
    border-radius: 50% / 10px
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.9)
</style>
