<template>
  <div>
    <Overlay />
    <div class="modal">
      <div class="modal__content">
        Thank you for donating!
        <Logo class="logo" />
          <div id="fb-root">
            <div class="fb-share-button" 
              data-href="https://childinclusionfund.com"
              data-layout="button" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
  z-index: 5;
  background-color: lightsteelblue;
  border-radius: 10px;
  font-size: 3rem;
  &__content {
    position: relative;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    z-index: 6;
    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.logo {
  width: auto;
  height: 60%;
}
.fb-share-button {
  padding-top: 3rem;
}
</style>