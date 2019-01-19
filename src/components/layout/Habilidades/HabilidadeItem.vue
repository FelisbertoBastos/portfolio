<template>
  <flex-item
    v-width="'calc(100% / 3)'"
    v-padding:all=8
  >
    <slot></slot>
    <div
      v-padding:all=8
      style="text-align: center;"
    >
      {{ name }}
    </div>
  </flex-item>
</template>

<script>
import FlexItem from '@/components/modules/FlexItem'

export default {
  name: 'HabilidadeItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    'flex-item': FlexItem
  }
}
</script>
