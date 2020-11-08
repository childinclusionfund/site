<template>
  <div class="main">
    <Header />
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
        'Child Inclusion Fund teams up with schools who identify children in need of financial assistance, providing funding for expenses not traditionally covered by existing financial assistance programs.',
      ]"
    />
    <hr>
    <Chunk 
      overview="What sort of expenses are covered?"
      v-bind:list="[
        {icon: 'fas fa-camera', text: 'Picture Day'},
        {icon: 'fas fa-bus', text: 'Field Trips'},
        {icon: 'fas fa-book', text: 'Book Fairs'},
        {icon: 'fas fa-bed', text: 'Pajama Day'},
        {icon: 'fas fa-tshirt', text: 'Spirit Wear'},
        {icon: 'fas fa-gift', text: 'Holiday Gift Shop'},
        {icon: 'fas fa-ellipsis-h', text: 'Other activites'},
      ]"
    />
    <hr>
    <Chunk 
      class="last"
      overview="Our Reasoning"
      v-bind:text="[
        'Many students in our schools are left out of activities and experiences due to financial hardships their families face.',
        'Child Inclusion Fund helps to alleviate some of the difficult decisions families have to make: money toward food or money for a school trip? While this dilemma may be an easy one when prioritizing needs, often times it leaves children left out or stigmatized. Child Inclusion Fund helps by aiding the family to obtain both.',
        'Child Inclusion Fund believes that children deserve an equalized opportunity to enriched and enhanced academic experiences.',
      ]"
    />
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
body {
  --bg-color-main: #FAF3DD;
  --bg-color-secondary: #0ABAB5;
  --color-1: #B8F2E6;
  --color-2: #AED9E0;
  --text-color: #5E6472;
  --text-color-secondary: #fefefe;
  background-color: var(--bg-color-main);
  color:var(--text-color);
}
.main {
  --bg-color-main: #FAF3DD;
  --color-1: #B8F2E6;
  --color-2: #AED9E0;
  --bg-color-secondary: #0ABAB5;
  --text-color: #5E6472;
  --text-color-secondary: #fefefe;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  font-family: 'Rubik', sans-serif; 
  font-size: 2.5rem;

  background-color: var(--bg-color-main);
  color:var(--text-color);
  .last {
    padding-bottom: 15rem;
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