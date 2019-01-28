import Vue from 'vue'
import App from './App.vue'
import './directives'
import './styles/main.sass'

import JQuery from 'jquery'
window.$ = JQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
