<template>
  <flex-container
    direction=column
  >
    <contato-item
      v-for="(contato, key) in items"
      :key="key"
      :icon=contato.icon
      :link=contato.link
      :altText=contato.altText
    />
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import ContatoItem from './ContatoItem'

export default {
  name: 'ContatoList',
  props: {
    items: {
      type: Array
    }
  },
  components: {
    'flex-container': FlexContainer,
    'contato-item': ContatoItem
  }
}
</script>
