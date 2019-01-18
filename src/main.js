import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './directives'
import './styles/main.sass'

import JQuery from 'jquery'
window.$ = JQuery

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
