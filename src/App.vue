<template>
  <div id="app">
    <side-bar/>
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar'

export default {
  name: 'App',
  components: {
    'side-bar': SideBar
  }
}
</script>
