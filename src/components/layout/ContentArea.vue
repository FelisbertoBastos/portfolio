<template>
  <flex-container
    direction=column
    fullHeight
    v-padding:all=8
    style="background: blue;"
    v-margin:left="contentAreaMarginLeft"
  >
    <flex-item
      style="background: red"
    >
      Header
      <slot name="header"></slot>
    </flex-item>
    <flex-container
      :flexGrow=1
      style="background: black;"
    >
      <flex-item
        :flexGrow=2
        style="background: yellow;"
      >
        Title
        <slot name="title"></slot>
      </flex-item>
      <flex-item
        :flexGrow=3
        style="background: violet;"
      >
        Content
        <slot name="content"></slot>
      </flex-item>
    </flex-container>
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import FlexItem from '@/components/modules/FlexItem'

export default {
  name: 'ContentArea',
  components: {
    'flex-container': FlexContainer,
    'flex-item': FlexItem
  },
  data () {
    return {
      contentAreaMarginLeft: '60px'
    }
  }
}
</script>
