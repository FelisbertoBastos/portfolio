<template>
  <main-template>
    <template slot="header">
      <navbar
        :items="navItems"
      />
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
import NavBar from './NavBar'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate,
    'navbar': NavBar
  },
  data () {
    return {
      navItems: [
        { name: 'Início' },
        { name: 'Habilidades' },
        { name: 'Contato' }
      ]
    }
  }
}
</script>
