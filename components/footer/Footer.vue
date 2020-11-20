<template>
  <div class="footer">
    <div class="footer__contact-info contact-info">
      <Icon
        class="contact-info__item"
        linkUrl="https://www.facebook.com/childinclusionfund"
        linkLabel="Connect with Child Inclusion Fund via Facebook"
        iconClass="fab fa-facebook-f fa-2x"
        label="facebook"
        />
      <Icon
        class="contact-info__item"
        linkUrl="https://paypal.me/childinclusionfund"
        linkLabel="Donate to Child Inclusion Fund via Paypal"
        iconClass="fas fa-donate fa-2x"
        label="donate"
        />
      <Icon
        class="contact-info__item"
        linkUrl="mailto:childinclusionfund@gmail.com"
        linkLabel="Connect with Child Inclusion Fund via email"
        iconClass="far fa-envelope fa-2x"
        label="email"
        />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background: rgb(49,44,121);
  background: linear-gradient( 0deg,
    rgba(49,44,121,1) 0%,
    rgba(87,87,175,1) 51%,
    rgba(0,150,220,1) 100%);
  width: 100%;
  padding: 1rem 0;
  color: var(--text-color-footer);
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
  @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-end;
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