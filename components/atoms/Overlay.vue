<template>
  <div click="toggleModal">
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal() {
      console.log('click')
      this.$store.commit('modal/toggle')
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  opacity: .8;
  z-index: 4;
}

</style>
<style lang="scss">
  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden
  }
</style>