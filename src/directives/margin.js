import Vue from 'vue'

Vue.directive('margin', {
  bind (el, binding) {
    el.classList.add(`margin-${binding.arg}-${binding.value}`)
  }
})
