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
