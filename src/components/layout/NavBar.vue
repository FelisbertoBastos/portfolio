<template>
  <nav
    ref="navbar"
    class="navbar"
    v-on:click="itemSelect"
  >
    <a
      v-for="(item, key) in items.options"
      :key="key"
      href="#"
    >
      {{ item }}
    </a>
    <div ref="indicator" class="indicator"></div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Object,
      required: true
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
      this.indicatorPositioning(this.positions[this.items.active])
    },
    indicatorPositioning (position) {
      const indicator = this.$refs.indicator
      indicator.style.left = position.offsetLeft + 'px'
      indicator.style.width = position.offsetWidth + 'px'
    },
    itemSelect (event) {
      if (event.target.tagName === 'A') {
        this.items.active =
          this.items.options
            .findIndex(option => option === event.target.innerText.trim())
      }
    }
  },
  watch: {
    'items.active': {
      handler (newValue) {
        this.indicatorPositioning(this.positions[newValue])
      }
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
