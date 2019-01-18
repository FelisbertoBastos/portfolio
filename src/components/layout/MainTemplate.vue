<template>
  <flex-container
    direction=column
    v-height:full
    v-padding:all=8
    v-margin:left="contentAreaMarginLeft"
  >
    <flex-container
      justifyContent=center
      alignItems=center
      v-padding:all=8
    >
      <slot name="header"></slot>
    </flex-container>
    <flex-container
      :flexGrow=1
      v-height="'0'"
    >
      <flex-container
        v-width="titleWidth"
        justifyContent=center
        alignItems=center
      >
        <slot name="title"></slot>
      </flex-container>
      <flex-container
        v-width="contentWidth"
        justifyContent=center
        alignItems=center
      >
        <slot name="content"></slot>
      </flex-container>
    </flex-container>
  </flex-container>
</template>

<script>
import FlexContainer from '@/components/modules/FlexContainer'

export default {
  name: 'MainTemplate',
  components: {
    'flex-container': FlexContainer
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
