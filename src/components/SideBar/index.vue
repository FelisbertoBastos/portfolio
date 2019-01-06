<template>
  <div id="sidebar">
    <div class="container">
      <social-menu/>
    </div>
  </div>
</template>

<script>
import SocialMenu from './SocialMenu'

export default {
  name: 'SideBar',
  components: {
    'social-menu': SocialMenu
  }
}
</script>
