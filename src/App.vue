<template>
  <div id="app">
    <side-bar />
    <content-area />
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar'
import ContentArea from './components/layout/ContentArea'

export default {
  name: 'App',
  components: {
    'side-bar': SideBar,
    'content-area': ContentArea
  }
}
</script>
