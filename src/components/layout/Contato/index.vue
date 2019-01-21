<template>
  <contato-list
    :items=contatos
  />
</template>

<script>
import ContatoList from './ContatoList'

export default {
  name: 'Contato',
  components: {
    'contato-list': ContatoList
  },
  data () {
    return {
      contatos: [
        {
          icon: require('@/assets/Github.svg'),
          link: 'https://github.com/FelisbertoBastos',
          altText: 'Github'
        },
        {
          icon: require('@/assets/Google.svg'),
          link: 'felisbertobastos22@gmail.com',
          altText: 'Google'
        },
        {
          icon: require('@/assets/Whatsapp.svg'),
          link: '+55 086 99545-6429',
          altText: 'Whatsapp'
        }
      ]
    }
  }
}
</script>
