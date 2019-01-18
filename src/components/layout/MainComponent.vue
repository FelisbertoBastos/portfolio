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
      <circuit-tree
        v-width:full
      />
    </template>
  </main-template>
</template>

<script>
import MainTemplate from './MainTemplate'
import NavBar from './NavBar'
import CircuitTree from './CircuitTree'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate,
    'navbar': NavBar,
    'circuit-tree': CircuitTree
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
