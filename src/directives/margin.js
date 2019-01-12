import Vue from 'vue'

Vue.directive('margin', {
  bind (el, binding) {
    const arg = binding.arg
    const value = binding.value

    switch (value) {
      case 4:
      case 8:
      case 16:
        switch (arg) {
          case 'all': case 'top': case 'bottom': case 'left': case 'right':
            el.classList.add(`margin-${arg}-${value}`)
            break
          case 'vertical':
            el.classList.add(`margin-top-${value}`)
            el.classList.add(`margin-bottom-${value}`)
            break
          case 'horizontal':
            el.classList.add(`margin-left-${value}`)
            el.classList.add(`margin-right-${value}`)
            break
        }
        break
      default:
        switch (arg) {
          case 'all':
            el.style.margin = value
            break
          case 'top': case 'bottom': case 'left': case 'right':
            el.style['margin' + arg.charAt(0).toUpperCase() + arg.slice(1)] = value
            break
          case 'vertical':
            el.style.marginTop = value
            el.style.marginBottom = value
            break
          case 'horizontal':
            el.style.marginLeft = value
            el.style.marginRight = value
            break
        }
    }
  }
})
