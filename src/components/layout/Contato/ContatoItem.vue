<template>
  <flex-container
    alignItems=center
    class="contato-item"
  >
    <img :src="icon" :alt="altText">
    <p>{{ link }}</p>
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'

export default {
  name: 'ContatoItem',
  props: {
    icon: {
      type: String
    },
    link: {
      type: String
    },
    altText: {
      type: String
    }
  },
  components: {
    'flex-container': FlexContainer
  }
}
</script>

<style lang="sass">
.contato-item
  padding: 8px

  p
    margin: 8px
</style>
