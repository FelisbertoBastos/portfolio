<template>
  <div id="sidebar">
    <flex-container
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
      wrap="nowrap"
      alignContent="stretch"
      fullHeight
      v-padding:all=8
    >
      <social-menu />
    </flex-container>
  </div>
</template>

<script>
import FlexContainer from '../../modules/FlexContainer'
import SocialMenu from './SocialMenu'

export default {
  name: 'SideBar',
  components: {
    'flex-container': FlexContainer,
    'social-menu': SocialMenu
  }
}
</script>
