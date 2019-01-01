<template>
  <div id="app">
    <side-bar/>
  </div>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: 'app',
  components: {
    'side-bar': SideBar
  }
}
</script>
