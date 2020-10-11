<template>
  <div class="header">
    <div id="header" class="header__text">
      <h1>Child Inclusion Fund</h1>
    </div>
    <div class="header__sub-text">
      Enhancing and equalizing the academic experience
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
  
  &__text {
  flex: 8;

  font-family: "Montserrat";
  font-weight: 500;
  }

  &__sub-text {
  flex: 3;

  font-family: "Satisfy";
  font-weight: 300;
  }

  &--sticky {
  position: fixed;
  background-color: var(--bg-color-secondary);
  color: var(--bg-color-main);
  width: 100%;
  top: 0;
  }

  @media only screen  and (min-width : 1000px) {
    flex-direction: row;
    &__text {
      padding-left: 2rem;
    }
  }
}
</style>