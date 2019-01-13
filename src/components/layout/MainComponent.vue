<template>
  <main-template>
    <template slot="header">
      1
    </template>
    <template
      slot="title"
    >
      <img
        v-width:full
        v-height:full
        v-width:max="'300px'"
        src="@/assets/Logo.svg"
        alt="Logo"
      />
    </template>
    <template slot="content">
      3
    </template>
  </main-template>
</template>

<script>
import MainTemplate from './MainTemplate'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate
  }
}
</script>
