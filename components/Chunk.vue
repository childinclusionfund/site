<template>
  <div class="chunk">
    <div class="chunk__overview">
      {{ overview }}
    </div>
    <div class="chunk__text" v-for="t in text" :key="t">
      {{ t }}
    </div>
    <ul class="fa-ul" v-if="list">
      <li v-for="value in list" :key="value">
        <span class="fa">
          <i class="icon" :class="value.icon" />
          <span class="icon__text">
          {{ value.text }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    overview: {
      type: String,
      required: true,
    },
    text: {
      type: Array,
      required: false,
    },
    list: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.chunk {
  display: flex;
  flex-direction: column;

  align-items: left;
  justify-content: left;
  font-size: 3rem;
  padding: 1rem;
  padding-top: 3rem;
  margin-top: 2rem;
  padding-left: 3rem;
  &__overview {
    flex: 1;
    font-weight: 700;

    align-items: left;
    justify-content: left;
    justify-self: left;
    text-align: left;
    padding-right: 1rem;
    @media only screen and (min-width : 1000px), only screen and (orientation: landscape) {
      font-size: 1.5rem;
    }
  }
  &__text {
    flex: 2;
    padding: 1rem;
    @media only screen and (min-width : 1000px), only screen and (orientation: landscape) {
      padding: 0 1rem;
    }
  }
  ul {
    margin-left: 4rem;
  }
  li {
    padding-bottom: 1rem;
  }
  li:last-child {
    padding-bottom: 0;
  }
  @media only screen and (min-width : 1000px), only screen and (orientation: landscape) {
    font-size: 1rem;
    padding-top: 1rem;
    margin-top: 0;
  }
}
.icon__text {
  font-family: 'Barlow', sans-serif;
  font-size: 2.5rem;
  @media only screen and (min-width : 1000px), only screen and (orientation: landscape) {
    font-size: 1rem;
  }
}
</style>
