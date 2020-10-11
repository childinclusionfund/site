<template>
  <div class="footer">
    <div class="footer__contact-info contact-info">
      <div class="contact-info__item facebook">
        <a
          class="facebook__link"
          aria-label="Connect with Child Inclusion Fund via Facebook"
          href="https://www.facebook.com/childinclusionfund"
        >
          <i class="fab fa-facebook-f fa-2x"></i>
        </a>
      </div>
      <div class="contact-info__item fundly">
        <a
          class="fundly__link"
          aria-label="Link to donate to Child Inclusion Fund via Fundly"
          href="https://fundly.com/child-inclusion-fund-2020"
        >
          <i class="fas fa-donate fa-2x"></i>
        </a>
      </div>
      <div class="contact-info__item email">
        <a
          class="email__link"
          aria-label="Connect with Child Inclusion Fund via E-mail"
          href="mailto:childinclusionfund@gmail.com"
        >
          <i class="far fa-envelope fa-2x"></i>
        </a>
      </div>
    </div>
    <div class="footer__legal">
      <div class="copyright">Child Inclusion Fund &#169;2020</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color-secondary);
  width: 100%;
  color: var(--text-color-secondary);
  &__contact-info {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  &__legal {
    display: flex;
    align-items: center;
    justify-content: center;

    display: flex;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  i {
    color: var(--text-color-secondary);
  }
  @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-start;
    &__legal {
      margin-top: 0;
      margin-left: auto;
      padding-right: 2rem;
    }
    .contact-info__item {
      font-size: 1rem;
      padding: 0 2rem;
    }
    .contact-info__item:first-child {
      padding-left: 3rem;
    }
  }
}
</style>