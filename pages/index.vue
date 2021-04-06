<template>
  <div>
    <Chunk 
      overview="Our Purpose"
      v-bind:text="[
        'To enhance the academic experience by equalizing opportunities for children in the school setting.'
      ]"
    />
    <hr>
    <Chunk
      overview="How does it work?"
      v-bind:text="[
        'Child Inclusion Fund teams up with schools who identify children in need of financial assistance, providing funding for expenses not traditionally covered, such as:',
      ]"
      v-bind:list="[
        {icon: 'fas fa-camera', text: 'Picture Day'},
        {icon: 'fas fa-bus', text: 'Field Trips'},
        {icon: 'fas fa-book', text: 'Book Fairs'},
        {icon: 'fas fa-bed', text: 'Pajama Day'},
        {icon: 'fas fa-tshirt', text: 'Spirit Wear'},
        {icon: 'fas fa-gift', text: 'Holiday Gift Shop'},
      ]"
    />
    <hr>
    <Chunk 
      overview="Our Reasoning"
      v-bind:text="[
        'Family income has a varied impact on a child’s well-being. While many government and community-run programs assist with basic necessities, not many are available to fund extra experiences in the school setting. Some families are forced to choose between purchasing school pictures or buying groceries.',
        'Child Inclusion Fund helps alleviate some of the difficult decisions families have to make.',
        'Stigmas associated with low income decreases self-esteem and peer acceptance. Research suggests that interventions during early childhood may be most important in reducing this impact on children. Child Inclusion Fund believes that children will better thrive in the school setting when stigmas are decreased and experiences are enhanced. ',
      ]"
    />
    <hr>
    <Chunk 
      class="last"
      overview="About Us"
      v-bind:text="[
        'Child Inclusion Fund is a registered 501 (c) (3) organization.',
      ]"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date())
    gtag('config', 'UA-180193814-1')
  },
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
