import Vue from 'vue'

Vue.directive('padding', {
  bind (el, binding) {
    el.classList.add(`padding-${binding.arg}-${binding.value}`)
  }
})
