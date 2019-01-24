<template>
  <div id="scroll-bar" class="scroll-bar">
    <div class="scroll-path"></div>
    <div id="scroll-control" class="scroll-control"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar',
  mounted () {
    var scrollControl = document.getElementById('scroll-control')
    var scrollBar = document.getElementById('scroll-bar')

    const steps = 3
    const min = 0
    const max = 200 - 60
    const stepsArray = []
    for (var i = 0; i < steps - 1; i++) {
      stepsArray.push(Math.round(i * max / (steps - 1)))
    }
    stepsArray.push(max)

    var active = false
    var currentY = 0
    var initialY = 0
    var yOffset = 0

    scrollBar.addEventListener('touchstart', dragStart, false)
    scrollBar.addEventListener('touchend', dragEnd, false)
    scrollBar.addEventListener('touchmove', drag, false)

    scrollBar.addEventListener('mousedown', dragStart, false)
    scrollBar.addEventListener('mouseup', dragEnd, false)
    scrollBar.addEventListener('mousemove', drag, false)

    function dragStart (e) {
      if (e.type === 'touchstart') {
        initialY = e.touches[0].clientY - yOffset
      } else {
        initialY = e.clientY - yOffset
      }

      if (e.target === scrollControl) {
        scrollControl.classList.remove('scroll-transition')
        active = true
      }
    }

    function dragEnd (e) {
      initialY = currentY

      active = false

      var closest = Number.MAX_SAFE_INTEGER
      var index = 0
      stepsArray.forEach((num, i) => {
        var dist = Math.abs(currentY - num)
        if (dist < closest) {
          index = i
          closest = dist
        }
      })
      yOffset = stepsArray[index]

      scrollControl.classList.add('scroll-transition')
      setTranslate(yOffset, scrollControl)
    }

    function drag (e) {
      if (active) {
        e.preventDefault()

        if (e.type === 'touchmove') {
          currentY = e.touches[0].clientY - initialY
        } else {
          currentY = e.clientY - initialY
        }

        yOffset = currentY

        if (currentY >= min && currentY <= max) {
          setTranslate(currentY, scrollControl)
        }
      }
    }

    function setTranslate (yPos, el) {
      el.style.transform = 'translate3d(0, ' + yPos + 'px, 0)'
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

  .scroll-transition
    transition: transform 0.5s
</style>
