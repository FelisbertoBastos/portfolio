<template>
  <div
    id="headline"
    v-width:full
    v-height:full
  >
    <svg
      v-width:full
      v-height:full
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 469 680"
    >
      <g id="Logo" transform="translate(-118 -213)">
        <text id="Front-end_Developer" transform="translate(226 399)" fill="#3cd32b" font-size="60" font-family="CourierNewPSMT, Courier New"><tspan x="0" y="0">Front-end</tspan><tspan x="0" y="68">Developer</tspan></text>
        <text id="Felisberto_Bastos" transform="translate(226 671)" fill="#3cd32b" font-size="60" font-family="CourierNewPSMT, Courier New"><tspan x="0" y="0">Felisberto</tspan><tspan x="0" y="68">Bastos</tspan></text>
      </g>
    </svg>
    <img
      v-width:full
      v-height:full
      src="@/assets/Logo.svg"
      alt="Logo"
    />
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="sass">
div#headline
  position: relative
  max-width: 300px

  svg
    position: absolute
    max-width: 300px

    #Front-end_Developer
      opacity: 0
      animation: headlineInitialAnimation 1s ease forwards, upToDown 1s ease forwards

    #Felisberto_Bastos
      opacity: 0
      animation: headlineInitialAnimation 1s linear forwards, downToUp 1s ease forwards

  img
    max-width: 300px

@keyframes headlineInitialAnimation
  from
    opacity: 0
  to
    opacity: 1

@keyframes upToDown
  from
    transform: translate(226px, 349px)
  to
    transform: translate(226px, 399px)

@keyframes downToUp
  from
    transform: translate(226px, 721px)
  to
    transform: translate(226px, 671px)
</style>
