<template>
  <div
    class="VueLogo"
  >
    <svg
      v-height:full
      width="171.078"
      height="136.863"
      viewBox="0 0 171.078 136.863"
    >
      <g id="vue-logo" transform="translate(0 -10)">
        <path id="v-2" d="M0,10,85.539,146.862,171.078,10H136.863L85.539,95.539,34.216,10Z" fill="#70b367"/>
      </g>
    </svg>
    <svg
      v-height:full
      width="171.078"
      height="136.863"
      viewBox="0 0 171.078 136.863"
    >
      <g id="vue-logo" transform="translate(0 -10)">
        <path id="v-1" d="M20,10H54.216L71.323,44.216,88.431,10h34.216L71.323,95.539Z" transform="translate(14.216)" fill="#434255"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'VueLogo'
}
</script>

<style lang="sass" scoped>
.VueLogo
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
