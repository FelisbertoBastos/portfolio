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
      <headline />
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
import Headline from './Headline'
import CircuitTree from './CircuitTree'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate,
    'navbar': NavBar,
    'headline': Headline,
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
