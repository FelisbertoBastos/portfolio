<template>
  <master-logo>
    <svg
      v-height:full
      id="html-shield"
      width="136.863"
      height="136.862"
      viewBox="0 0 136.863 136.862"
    >
      <path id="Shield" d="M136.862,0,123.176,123.176,68.431,136.862,13.686,123.176,0,0Z" fill="#ff6131"/>
      <path id="Reflex" d="M103.39,10H50V119.49L89.69,105.8a1.766,1.766,0,0,0,1.369-1.341c.151-.931,13.686-92.191,13.686-93.094Q104.745,10.465,103.39,10Z" transform="translate(18.431 3.686)" fill="rgba(255,255,255,0.2)"/>
    </svg>
    <svg
      v-height:full
      id="html-five"
      width="136.863"
      height="136.862"
      viewBox="0 0 136.863 136.862"
    >
      <path id="Five" d="M102.118,16,99.38,31.055H39.161l1.369,16.424H96.643l-5.475,43.8-30.11,9.58-30.11-9.58L28.212,68.008H44.635L46,80.325l15.055,4.106,16.424-4.106,1.369-17.792H26.843L20,16Z" transform="translate(7.372 5.898)" fill="#fff"/>
    </svg>
  </master-logo>
</template>

<script>
import MasterLogo from './MasterLogo'

export default {
  name: 'HtmlLogo',
  components: {
    'master-logo': MasterLogo
  }
}
</script>
