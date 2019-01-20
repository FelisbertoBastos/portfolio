<template>
  <flex-container
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
