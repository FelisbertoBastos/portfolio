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
    <template slot="scrollbar">
      <scroll-bar
        :pathHeight=200
        :controlHeight=60
        :items=navItems
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
import ScrollBar from './ScrollBar'

export default {
  name: 'MainComponent',
  components: {
    'main-template': MainTemplate,
    'navbar': NavBar,
    'headline': Headline,
    'circuit-tree': CircuitTree,
    'habilidades': Habilidades,
    'contato': Contato,
    'scroll-bar': ScrollBar
  },
  data () {
    return {
      navItems: {
        active: 0,
        options: ['Início', 'Habilidades', 'Contato']
      }
    }
  },
  methods: {
    checkNavOption: function (testName) {
      return this.navItems.options[this.navItems.active] === testName
    }
  }
}
</script>
