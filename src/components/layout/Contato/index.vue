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
          text: 'https://github.com/FelisbertoBastos',
          link: 'https://github.com/FelisbertoBastos',
          altText: 'Github',
          newPage: true
        },
        {
          icon: require('@/assets/Google.svg'),
          text: 'felisbertobastos22@gmail.com',
          link: 'mailto:felisbertobastos22@gmail.com',
          altText: 'Google',
          newPage: false
        },
        {
          icon: require('@/assets/Whatsapp.svg'),
          text: '+55 86 99545-6429',
          link: 'http://api.whatsapp.com/send?1=pt_BR&phone=5586995456429',
          altText: 'Whatsapp',
          newPage: true
        }
      ]
    }
  }
}
</script>
