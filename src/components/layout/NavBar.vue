<template>
  <nav
    id="navbar"
    ref="navbar"
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
  methods: {
    indicatorPositioning (left, width) {
      this.$refs.indicator.style.left = left
      this.$refs.indicator.style.width = width
    },
    itemSelect (event) {
      if (event.target.tagName === 'A') {
        const item = this.items.find(item => item.active && item.name !== event.target.innerText)
        if (item) {
          item.active = false
          this.items.find(item => item.name === event.target.innerText).active = true
          this.indicatorPositioning(
            event.target.offsetLeft + 'px',
            event.target.offsetWidth + 'px'
          )
        }
      }
    }
  },
  mounted () {
    this.indicatorPositioning(
      this.$refs.navbar.firstElementChild.offsetLeft + 'px',
      this.$refs.navbar.firstElementChild.offsetWidth + 'px'
    )
  }
}
</script>
