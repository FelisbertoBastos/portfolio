<template>
  <master-logo>
    <svg
      v-height:full
      id="javascript-logo"
      width="136.863"
      height="136.862"
      viewBox="0 0 136.863 136.862"
    >
      <path id="Shield" d="M136.862,0,123.176,123.176,68.431,136.862,13.686,123.176,0,0Z" fill="#eae309"/>
      <path id="Reflex" d="M103.39,10H50V119.49L89.69,105.8a1.766,1.766,0,0,0,1.369-1.341c.151-.931,13.686-92.191,13.686-93.094Q104.745,10.465,103.39,10Z" transform="translate(18.431 3.686)" fill="rgba(255,255,255,0.4)"/>
    </svg>
    <svg
      v-height:full
      id="javascript-logo"
      width="136.863"
      height="136.862"
      viewBox="0 0 136.863 136.862"
    >
      <path id="S" d="M53,18V67.271L74.9,65.9V79.588L53,82.325V96.012l30.11-5.474,4.106-36.953L63.949,56.321V28.949h26L91.322,18Z" transform="translate(19.537 6.635)" fill="#fff"/>
      <path id="J" d="M55.847,18H42.161V82.325L24,78.219l1.737,12.318,30.11,5.474Z" transform="translate(8.478 6.635)" fill="#fff"/>
    </svg>
  </master-logo>
</template>

<script>
import MasterLogo from './MasterLogo'

export default {
  name: 'JavascriptLogo',
  components: {
    'master-logo': MasterLogo
  }
}
</script>
