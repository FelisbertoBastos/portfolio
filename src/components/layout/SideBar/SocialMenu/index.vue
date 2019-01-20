<template>
  <ul>
    <li
      v-for="(item, key) in items"
      :key="key"
      v-margin:vertical="8"
    >
      <hover-effect>
        <img
          :src="item.src"
          :alt="item.alt"
        />
      </hover-effect>
    </li>
  </ul>
</template>

<script>
import HoverEffect from './HoverEffect'

export default {
  name: 'SocialMenu',
  components: {
    'hover-effect': HoverEffect
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
