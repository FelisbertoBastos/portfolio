<template>
  <nav
    ref="navbar"
    class="navbar"
    v-on:click="itemSelect"
  >
    <a
      v-for="(item, key) in items"
      :key="key"
      href="#"
    >
      {{ item.name }}
    </a>
    <div ref="indicator" class="indicator"></div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      positions: []
    }
  },
  methods: {
    setNavBar () {
      this.$refs.navbar.childNodes
        .forEach(element => {
          if (element.tagName === 'A') {
            this.positions.push({
              offsetLeft: element.offsetLeft,
              offsetWidth: element.offsetWidth
            })
          }
        })
      this.indicatorPositioning(this.positions[0])
    },
    indicatorPositioning (position) {
      const indicator = this.$refs.indicator
      indicator.style.left = position.offsetLeft + 'px'
      indicator.style.width = position.offsetWidth + 'px'
    },
    itemSelect (event) {
      if (event.target.tagName === 'A') {
        const item = this.items.find(item => item.active && item.name !== event.target.innerText)
        if (item) {
          item.active = false
          this.items.find(item => item.name === event.target.innerText).active = true
        }
      }
    }
  },
  watch: {
    items: {
      handler (newValue) {
        const index = newValue.findIndex(item => item.active)
        if (index >= 0) {
          this.indicatorPositioning(this.positions[index])
        }
      },
      deep: true
    }
  },
  mounted () {
    this.setNavBar()
  }
}
</script>

<style lang="sass">
nav.navbar
  position: relative

  a
    display: inline-block
    font-size: $navbar-font-size
    font-weight: bold
    margin-left: 8px
    margin-right: 8px
    height: $navbar-font-size

    &:hover
      border-bottom: 2px solid $navbar-inactive-indicator
  
  .indicator
    position: absolute
    bottom: 0
    left: 0
    background: $font-color
    height: 2px
    transition: all $navbar-indicator-transition-duration
</style>
