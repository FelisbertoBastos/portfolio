<template>
  <flex-container
    class="contato-list"
    direction=column
  >
    <contato-item
      v-on:mouseover.native.self="itemHover"
      class="contato-item"
      v-for="(contato, key) in items"
      :key="key"
      :icon=contato.icon
      :link=contato.link
      :altText=contato.altText
    />
    <div ref="indicator" class="indicator"></div>
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

  .contato-item
    animation: ContatoItemInitialAnimation 0.5s both

    @for $i from 1 through 3
      &:nth-of-type(#{$i})
        animation-delay: #{$i * 0.1}s

@keyframes ContatoItemInitialAnimation
  from
    opacity: 0
    transform: translateX(-20px)
  to
    opacity: 1
    transform: translateX(0)
</style>
