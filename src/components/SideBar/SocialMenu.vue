<template>
  <ul id="social-menu">
    <li>
      <linkedin-icon />
    </li>
    <li>
      <google-icon />
    </li>
    <li>
      <whatsapp-icon />
    </li>
  </ul>
</template>

<script>
import LinkedinIcon from './SocialIcons/LinkedinIcon'
import GoogleIcon from './SocialIcons/GoogleIcon'
import WhatsappIcon from './SocialIcons/WhatsappIcon'

export default {
  components: {
    'linkedin-icon': LinkedinIcon,
    'google-icon': GoogleIcon,
    'whatsapp-icon': WhatsappIcon
  },
  name: 'SocialMenu'
}
</script>
