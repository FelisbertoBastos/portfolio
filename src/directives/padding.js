import Vue from 'vue'

Vue.directive('padding', {
  bind (el, binding) {
    const arg = binding.arg
    const value = binding.value

    switch (value) {
      case 4:
      case 8:
      case 16:
        switch (arg) {
          case 'all': case 'top': case 'bottom': case 'left': case 'right':
            el.classList.add(`padding-${arg}-${value}`)
            break
          case 'vertical':
            el.classList.add(`padding-top-${value}`)
            el.classList.add(`padding-bottom-${value}`)
            break
          case 'horizontal':
            el.classList.add(`padding-left-${value}`)
            el.classList.add(`padding-right-${value}`)
            break
        }
        break
      default:
        switch (arg) {
          case 'all':
            el.style.padding = value
            break
          case 'top': case 'bottom': case 'left': case 'right':
            el.style['padding' + arg.charAt(0).toUpperCase() + arg.slice(1)] = value
            break
          case 'vertical':
            el.style.paddingTop = value
            el.style.paddingBottom = value
            break
          case 'horizontal':
            el.style.paddingLeft = value
            el.style.paddingRight = value
            break
        }
    }
  }
})
