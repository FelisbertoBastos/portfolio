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
      <habilidades
        v-if="checkNavOption('Habilidades')"
      />
      <contato
        v-else-if="checkNavOption('Contato')"
      />
      <circuit-tree
        v-else
      />
    </template>
  </main-template>
</template>

<script>
import MainTemplate from './MainTemplate'
import NavBar from './NavBar'
import Headline from './Headline'
import CircuitTree from './CircuitTree'
import Habilidades from './Habilidades'
import Contato from './Contato'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate,
    'navbar': NavBar,
    'headline': Headline,
    'circuit-tree': CircuitTree,
    'habilidades': Habilidades,
    'contato': Contato
  },
  data () {
    return {
      navItems: [
        { name: 'Início', active: true },
        { name: 'Habilidades', active: false },
        { name: 'Contato', active: false }
      ]
    }
  },
  methods: {
    checkNavOption: function (testName) {
      return this.navItems.some(item => {
        return item.name === testName && item.active === true
      })
    }
  }
}
</script>
