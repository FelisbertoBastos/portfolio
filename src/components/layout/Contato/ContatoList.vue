<template>
  <flex-container
    class="contato-list"
    direction=column
  >
    <div ref="indicator" class="indicator"></div>
    <contato-item
      v-on:mouseover.native.self="itemHover"
      class="contato-item"
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
  },
  methods: {
    indicatorPositioning (top) {
      this.$refs.indicator.style.top = top
    },
    itemHover (event) {
      this.indicatorPositioning(event.target.offsetTop + 'px')
    }
  }
}
</script>

<style lang="sass">
.contato-list
  position: relative

  .indicator
    z-index: -1
    position: absolute
    background: #171717
    border-radius: 8px
    opacity: 0
    width: 100%
    height: calc(100% / 3)
    transition: opacity 0.5s, top 0.5s

  &:hover .indicator
    opacity: 0.3
</style>
