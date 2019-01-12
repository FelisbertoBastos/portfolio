import Vue from 'vue'

Vue.directive('width', {
  bind (el, binding) {
    switch (binding.arg) {
      case 'max':
        el.style.maxWidth = binding.value
        break
      case 'min':
        el.style.minWidth = binding.value
        break
      case undefined:
        el.style.width = binding.value
        break
    }
  }
})
