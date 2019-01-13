<template>
  <flex-container
    direction=column
    v-height:full
    v-padding:all=8
    v-margin:left="contentAreaMarginLeft"
  >
    <flex-item
      style="height: 100px; background: rgba(255, 0, 0, 0.1)"
    >
      <slot name="header"></slot>
    </flex-item>
    <flex-container
      :flexGrow=1
    >
      <flex-container
        v-width="titleWidth"
        justifyContent=center
        alignItems=center
      >
        <slot name="title"></slot>
      </flex-container>
      <flex-item
        v-width="contentWidth"
        style="background: rgba(0, 255, 0, 0.1)"
      >
        <slot name="content"></slot>
      </flex-item>
    </flex-container>
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'
import FlexItem from '@/components/modules/FlexItem'

export default {
  name: 'MainTemplate',
  components: {
    'flex-container': FlexContainer,
    'flex-item': FlexItem
  },
  data () {
    return {
      contentAreaMarginLeft: '60px',
      titleWidth: '40%',
      contentWidth: '60%'
    }
  }
}
</script>
