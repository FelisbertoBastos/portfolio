import Vue from 'vue'

const bind = sizeType => (el, binding) => {
  const arg = binding.arg
  const value = binding.value

  switch (arg) {
    case 'full':
      el.classList.add(`full-${sizeType}`)
      break
    case 'max':
      el.style['max' + sizeType.charAt(0).toUpperCase() + sizeType.slice(1)] = value
      break
    case 'min':
      el.style['min' + sizeType.charAt(0).toUpperCase() + sizeType.slice(1)] = value
      break
    case undefined:
      el.style[sizeType] = value
      break
  }
}

Vue.directive('width', {
  bind: bind('width')
})

Vue.directive('height', {
  bind: bind('height')
})
