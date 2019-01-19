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
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import HabilidadeItem from './HabilidadeItem'
import HtmlLogo from './HtmlLogo'

export default {
  name: 'Habilidades',
  components: {
    'flex-container': FlexContainer,
    'habilidade-item': HabilidadeItem,
    'htmllogo': HtmlLogo
  }
}
</script>
