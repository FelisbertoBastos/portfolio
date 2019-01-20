<template>
  <div
    class="logo"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MasterLogo'
}
</script>

<style lang="sass" scoped>
.logo
  position: relative
  height: 120px
  width: 120px
  max-width: 100%
  margin: auto

  svg
    max-width: 100%
    position: absolute
    transition: all 0.2s

  &:hover svg
    // -webkit-filter: drop-shadow(0 8px 7px rgba(0,0,0,0.5))
    filter: drop-shadow(0 8px 7px rgba(0,0,0,0.5))
</style>
