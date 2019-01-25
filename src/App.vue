<template>
  <div id="app">
    <side-bar />
    <main-component />
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar'
import MainComponent from './components/layout/MainComponent'

export default {
  name: 'App',
  components: {
    'side-bar': SideBar,
    'main-component': MainComponent
  }
}
</script>

<style lang="sass">
#app
  height: 100vh
  width: 100vw
  overflow: hidden
  font-family: $font-family
  color: $font-color
</style>
