<template>
  <a
    class="contato-item"
    :target="newPage ? '_blank' : '_self'"
    :href="link"
  >
    <flex-container
      alignItems=center
    >
      <img :src="icon" :alt="altText">
      <p>{{ text }}</p>
    </flex-container>
  </a>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'

export default {
  name: 'ContatoItem',
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    },
    link: {
      type: String
    },
    altText: {
      type: String
    },
    newPage: {
      type: Boolean
    }
  },
  components: {
    'flex-container': FlexContainer
  }
}
</script>

<style lang="sass">
.contato-item

  *
    pointer-events: none

  div
    padding: 8px

  p
    margin: 8px
</style>
