<template>
  <div class="header">
    <div id="header" class="header__text">
      <h1>Child Inclusion Fund</h1>
    </div>
    <div class="header__sub-text">
      Enhancing and equalizing the academic experience.
    </div>
    <div class="header__logo">
    </div>
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
    white-space: nowrap;
    overflow: hidden;
  }

  &__sub-text {
    font-family: "Satisfy";
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
  }
  h1 { 
    padding: 1rem 0;
    margin: 0;
  }
  @media only screen  and (min-width : 1000px) {
    font-size: 2rem;
    flex-direction: row;
    &__text {
      padding-left: 2rem;
    }
    &__sub-text {
      padding-left: 5rem;
    }
  }
}
</style>