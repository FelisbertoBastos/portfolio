<template>
  <div
    ref="scrollBar"
    class="scroll-bar"
  >
    <div
      class="scroll-path"
      :style="scrollPathStyleObject"
    ></div>
    <div
      ref="scrollControl"
      class="scroll-control"
      :style="scrollControlStyleObject"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar',
  props: {
    pathHeight: {
      type: Number,
      required: true
    },
    controlHeight: {
      type: Number,
      required: true
    },
    items: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      max: this.pathHeight - this.controlHeight,
      positions: [],
      active: false,
      currentY: 0,
      initialY: 0,
      yOffset: 0,
      scrollControl: null,
      scrollBar: null
    }
  },
  mounted () {
    this.setScroll(this.items.options.length, this.max)
  },
  methods: {
    setScroll (steps, max) {
      this.scrollControl = this.$refs.scrollControl
      this.scrollBar = this.$refs.scrollBar

      for (var i = 0; i < steps - 1; i++) {
        this.positions.push(Math.round(i * max / (steps - 1)))
      }
      this.positions.push(max)

      this.scrollBar.addEventListener('touchstart', this.dragStart, false)
      this.scrollBar.addEventListener('touchend', this.dragEnd, false)
      this.scrollBar.addEventListener('touchmove', this.drag, false)

      this.scrollBar.addEventListener('mousedown', this.dragStart, false)
      this.scrollBar.addEventListener('mouseup', this.dragEnd, false)
      this.scrollBar.addEventListener('mousemove', this.drag, false)
    },
    dragStart (e) {
      if (e.type === 'touchstart') {
        this.initialY = e.touches[0].clientY - this.yOffset
      } else {
        this.initialY = e.clientY - this.yOffset
      }

      if (e.target === this.scrollControl) {
        this.scrollControl.classList.remove('scroll-transition')
        this.active = true
      }
    },
    dragEnd (e) {
      this.initialY = this.currentY

      this.active = false

      var closest = Number.MAX_SAFE_INTEGER
      var index = 0
      this.positions.forEach((num, i) => {
        var dist = Math.abs(this.currentY - num)
        if (dist < closest) {
          index = i
          closest = dist
        }
      })
      this.yOffset = this.positions[index]

      if (this.items.active !== index) {
        this.items.active = index
        return
      }

      this.setTranslate(this.yOffset, this.scrollControl, true)
    },
    drag (e) {
      if (this.active) {
        e.preventDefault()

        if (e.type === 'touchmove') {
          this.currentY = e.touches[0].clientY - this.initialY
        } else {
          this.currentY = e.clientY - this.initialY
        }

        this.yOffset = this.currentY

        if (this.currentY >= 0 && this.currentY <= this.max) {
          this.setTranslate(this.currentY, this.scrollControl)
        }
      }
    },
    setTranslate (yPos, el, withTransition) {
      if (withTransition) {
        el.classList.add('scroll-transition')
      }
      el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)'
    }
  },
  computed: {
    scrollPathStyleObject () {
      return {
        height: this.pathHeight + 'px'
      }
    },
    scrollControlStyleObject () {
      return {
        height: this.controlHeight + 'px'
      }
    }
  },
  watch: {
    'items.active': {
      handler (newValue) {
        this.yOffset = this.positions[newValue]
        this.setTranslate(this.positions[newValue], this.scrollControl, true)
      }
    }
  }
}
</script>

<style lang="sass">
.scroll-bar
  position: relative
  width: 100%

  .scroll-path
    width: 2px
    margin: auto
    background: #707070

  .scroll-control
    position: absolute
    top: 0
    left: 50%
    margin-left: -10px
    width: 20px
    background: #35313F
    border: 2px solid #707070
    border-radius: 50% / 10px
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.9)

  .scroll-transition
    transition: transform 0.5s
</style>
