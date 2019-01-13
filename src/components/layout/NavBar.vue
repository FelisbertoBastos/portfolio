<template>
  <nav
    id="navbar"
  >
    <a
      v-for="(item, key) in items"
      :key="key"
      href="#"
    >
      {{ item.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
