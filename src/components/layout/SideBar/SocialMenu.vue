<template>
  <ul id="social-menu">
    <li class="margin-top-8 margin-bottom-8">
      <linkedin-icon />
    </li>
    <li class="margin-top-8 margin-bottom-8">
      <google-icon />
    </li>
    <li class="margin-top-8 margin-bottom-8">
      <whatsapp-icon />
    </li>
  </ul>
</template>

<script>
import LinkedinIcon from './SocialIcons/LinkedinIcon'
import GoogleIcon from './SocialIcons/GoogleIcon'
import WhatsappIcon from './SocialIcons/WhatsappIcon'

export default {
  name: 'SocialMenu',
  components: {
    'linkedin-icon': LinkedinIcon,
    'google-icon': GoogleIcon,
    'whatsapp-icon': WhatsappIcon
  }
}
</script>
