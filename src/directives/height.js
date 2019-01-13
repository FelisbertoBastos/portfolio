import Vue from 'vue'

Vue.directive('height', {
  bind (el, binding) {
    switch (binding.arg) {
      case 'full':
        el.classList.add('full-height')
        break
      case 'max':
        el.style.maxHeight = binding.value
        break
      case 'min':
        el.style.minHeight = binding.value
        break
      case undefined:
        el.style.height = binding.value
        break
    }
  }
})
