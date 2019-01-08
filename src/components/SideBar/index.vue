<template>
  <div id="sidebar">
    <div
      class="
        flex-container
        padding-all-8
        flex-direction-column
        flex-align-items-center
        flex-justify-content-end
        flex-align-content-stretch
        flex-nowrap
      "
    >
      <social-menu />
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
