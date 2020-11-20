<template>
  <div>
    <ThankYouModal :v-show="showModal"/>
    <OurPurpose />
    <hr>
    <HowDoesItWork />
    <hr>
    <OurReasoning />
  </div>
</template>

<script>
export default {
  computed: {
    showModal() {
      setTimeout(() => {
        'toggle'
        this.$store.commit('modal/toggle')
      }, 2000)
      return this.$store.state.modal.show
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}
hr {
  border-radius: 5px;
  width: 70%;
}
</style>