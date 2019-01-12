<template>
  <div id="sidebar">
    <flex-container
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
      wrap="nowrap"
      alignContent="stretch"
      fullHeight
      v-padding:all="8"
    >
      <flex-item
        fullWidth
        v-width:max="socialMenuMaxWidth"
      >
        <social-menu />
      </flex-item>
    </flex-container>
  </div>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import FlexItem from '@/components/modules/FlexItem'
import SocialMenu from './SocialMenu'

export default {
  name: 'SideBar',
  components: {
    'flex-container': FlexContainer,
    'flex-item': FlexItem,
    'social-menu': SocialMenu
  },
  data () {
    return {
      socialMenuMaxWidth: '60px'
    }
  }
}
</script>
