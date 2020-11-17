<template>
  <div class="header">
    <Logo class="header__logo" />
    <div class="header__sub-text">
      Enhancing and Equalizing the Academic Experience
    </div>
    <hr>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--bg-color-secondary);
  color: var(--text-color-secondary);
  width: 100%;
  padding: 0;
  margin: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;
  
  &__text {
    font-family: "Montserrat";
    font-weight: 500;
  }

  &__logo {
    padding: 1rem;
    width: auto;
    @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
      padding: 2rem;
      height: 6.5rem;
    }
  }

  &__sub-text {
    padding-top: 1rem;
    font-family: "Satisfy";
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
  }
  
  @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: left;
  }
}
</style>