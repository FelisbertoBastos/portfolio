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
        {
          src: require('@/assets/Whatsapp.svg'),
          href: 'http://api.whatsapp.com/send?1=pt_BR&phone=5586995456429',
          alt: 'Whatsapp',
          newPage: true
        },
        {
          src: require('@/assets/Google.svg'),
          href: 'mailto:felisbertobastos22@gmail.com',
          alt: 'Google',
          newPage: false
        },
        {
          src: require('@/assets/Github.svg'),
          href: 'https://github.com/FelisbertoBastos',
          alt: 'Github',
          newPage: true
        }
      ]
    }
  }
}
</script>

<style lang="sass">
div#sidebar
  background: $sidebar-background-color
  height: 100vh
  width: $sidebar-width
  position: fixed
  box-shadow: $sidebar-shadow
  animation-name: sidebarInitialAnimation
  animation-duration: $sidebar-initial-animation-duration
  animation-fill-mode: both

@keyframes sidebarInitialAnimation
  from
    left: -$sidebar-width
  to
    left: 0
</style>
