<template>
  <master-logo>
    <svg
      v-height:full
      id="css-logo"
      width="136.863"
      height="136.863"
      viewBox="0 0 136.863 136.863"
    >
      <path id="Shield" d="M136.863,0,123.176,123.176,68.431,136.863,13.686,123.176,0,0Z" fill="#4f4fe9"/>
      <path id="Reflex" d="M103.39,10H50V119.49L89.69,105.8a1.766,1.766,0,0,0,1.369-1.341c.151-.931,13.686-92.191,13.686-93.094Q104.745,10.465,103.39,10Z" transform="translate(18.431 3.686)" fill="rgba(255,255,255,0.2)"/>
    </svg>
    <svg
      v-height:full
      id="css-logo"
      width="136.863"
      height="136.863"
      viewBox="0 0 136.863 136.863"
    >
      <path id="Three" d="M20,20h82.118L91.169,88.431l-30.11,13.686L29.58,88.431,26.843,72.008H40.529l2.737,10.949,17.792,5.475L78.851,80.22l2.737-19.161H25.475L24.106,47.373h60.22l1.369-13.686H21.369Z" transform="translate(7.373 7.373)" fill="#fff"/>
    </svg>
  </master-logo>
</template>

<script>
import MasterLogo from './MasterLogo'

export default {
  name: 'CssLogo',
  components: {
    'master-logo': MasterLogo
  }
}
</script>
