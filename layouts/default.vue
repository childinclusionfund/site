<template>
  <div class="app">
    <Header />
    <Nuxt />
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
  },
}
</script>

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
.app {
  max-width: 100%;

  font-family: 'Barlow', sans-serif; 
  font-size: 2.5rem;

  padding-bottom: 15rem;
  @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
    padding-bottom: 5rem;
  }
}
a {
  color: var(--text-color);
}
</style>