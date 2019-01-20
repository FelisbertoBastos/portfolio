<template>
  <flex-container
    class="skills"
    v-width:full
    v-margin:all="'auto'"
    justifyContent=center
    alignItems=center
    wrap=wrap
  >
    <habilidade-item
      name=html
    >
      <htmllogo />
    </habilidade-item>
    <habilidade-item
      name=css
    >
      <csslogo />
    </habilidade-item>
    <habilidade-item
      name=javascript
    >
      <javascriptlogo />
    </habilidade-item>
    <habilidade-item
      name=vue
    >
      <vuelogo />
    </habilidade-item>
    <habilidade-item
      name=sass
    >
      <sasslogo />
    </habilidade-item>
    <habilidade-item
      name=svg
    >
      <svglogo />
    </habilidade-item>
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import HabilidadeItem from './HabilidadeItem'
import HtmlLogo from './HtmlLogo'
import CssLogo from './CssLogo'
import JavascriptLogo from './JavascriptLogo'
import VueLogo from './VueLogo'
import SassLogo from './SassLogo'
import SvgLogo from './SvgLogo'

export default {
  name: 'Habilidades',
  components: {
    'flex-container': FlexContainer,
    'habilidade-item': HabilidadeItem,
    'htmllogo': HtmlLogo,
    'csslogo': CssLogo,
    'javascriptlogo': JavascriptLogo,
    'vuelogo': VueLogo,
    'sasslogo': SassLogo,
    'svglogo': SvgLogo
  }
}
</script>

<style lang="sass" scoped>
.skills

  > div
    animation: habilidadeItemInitialAnimation 0.5s both

  @for $i from 1 through 6
    > div:nth-child(#{$i})
      animation-delay: #{$i * 0.1}s

@keyframes habilidadeItemInitialAnimation
  from
    opacity: 0
    transform: translateY(-20px)
  to
    opacity: 1
    transform: translateY(0)
</style>
