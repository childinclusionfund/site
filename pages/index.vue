<template>
  <div class="main">
    <Header />
    <div class="chunks">
      <Chunk 
        overview="Our Purpose"
        v-bind:text="[
          'Enhancing the academic & childhood experience through inclusion while decreasing stigmatization.'
        ]"
      />
      <hr>
      <Chunk
        overview="How does it work?"
        v-bind:text="[
          'Child Inclusion Fund teams up with schools who identify children in need of financial assistance, providing funding for expensee not traditionally covered, such as:',
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
        class="last"
        overview="Our Reasoning"
        v-bind:text="[
          'Family income has a varied impact on a child’s well-being. While many government and community-ran programs assist with basic necessities, not many are available to fund extra experiences in the school setting.',
          'Stigmas associated with low income decreases self-esteem and peer acceptance. Research suggests that interventions during early childhood may be most important in reducing this impact on children.',
          'Child Inclusion Fund helps alleviate some of the difficult decisions that families have to make.',
          'For example: families are forced to choose between purchasing school pictures or buying groceries.',
          'Child Inclusion Fund believes that children deserve an equalized opportunity to enriched academic experiences.',
        ]"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date())
    gtag('config', 'UA-180193814-1')
    console.log(gtag)
  },
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Barlow', sans-serif; 
  font-size: 2.5rem;

  .last {
    padding-bottom: 15rem;
    @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
      padding-bottom: 5rem;
    }
  }
}
a {
  color: var(--text-color);
}
hr {
  border-radius: 5px;
  width: 70%;
}
</style>

<style lang="scss">
body {
  --bg-color-main: #FAF3DD;
  --bg-color-secondary: #0ABAB5;
  --color-1: #B8F2E6;
  --color-2: #AED9E0;
  --text-color: #5E6472;
  --text-color-secondary: #555555;
  background-color: var(--bg-color-main);
  color:var(--text-color);
  padding: 0;
  margin: 0;
  --bg-color-footer: #0ABAB5;
  --bg-color-footer: #023B74;
  --text-color-footer: white;
  --bg-color-secondary: white;
  --bg-color-main: white;
}
</style>