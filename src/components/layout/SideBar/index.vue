<template>
  <div id="sidebar">
    <flex-container
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
      wrap="nowrap"
      alignContent="stretch"
      v-height:full
      v-padding:all="8"
    >
      <flex-item
        v-width:full
        v-width:max="socialMenuMaxWidth"
      >
        <social-menu
          :items="iconItems"
        />
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
      socialMenuMaxWidth: '60px',
      iconItems: [
        { src: require('@/assets/Linkedin.svg'), alt: 'Linkedin' },
        { src: require('@/assets/Google.svg'), alt: 'Google' },
        { src: require('@/assets/Whatsapp.svg'), alt: 'Whatsapp' }
      ]
    }
  }
}
</script>
