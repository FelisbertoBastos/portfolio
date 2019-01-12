import Vue from 'vue'

const bind = spaceType => (el, binding) => {
  const arg = binding.arg
  const value = binding.value

  switch (value) {
    case 4:
    case 8:
    case 16:
      switch (arg) {
        case 'all': case 'top': case 'bottom': case 'left': case 'right':
          el.classList.add(`${spaceType}-${arg}-${value}`)
          break
        case 'vertical':
          el.classList.add(`${spaceType}-top-${value}`)
          el.classList.add(`${spaceType}-bottom-${value}`)
          break
        case 'horizontal':
          el.classList.add(`${spaceType}-left-${value}`)
          el.classList.add(`${spaceType}-right-${value}`)
          break
      }
      break
    default:
      switch (arg) {
        case 'all':
          el.style[spaceType] = value
          break
        case 'top': case 'bottom': case 'left': case 'right':
          el.style[spaceType + arg.charAt(0).toUpperCase() + arg.slice(1)] = value
          break
        case 'vertical':
          el.style[spaceType + 'Top'] = value
          el.style[spaceType + 'Bottom'] = value
          break
        case 'horizontal':
          el.style[spaceType + 'Left'] = value
          el.style[spaceType + 'Right'] = value
          break
      }
  }
}

Vue.directive('margin', {
  bind: bind('margin')
})

Vue.directive('padding', {
  bind: bind('padding')
})
