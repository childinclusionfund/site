<template>
  <div class="chunk">
    <div class="chunk__overview">
      {{ overview }}
    </div>
    <div class="chunk__text" v-for="t in text" :key="t">
      {{ t }}
    </div>
    <div class="chunk__text chunk__list list" v-if="list">
      <ul>
        <li v-for="value in list" :key="value">
          <div class="list__item item">
            <div class="item__icon">
              <i :class="value.icon" />
            </div>
            <div class="item__text">
              {{ value.text }}
            </div>
          </div>
        </li>
      </ul>
    </div>
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
    }
  }
}
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
  }
  &__text {
    flex: 2;
    padding: 1rem;
  }
  &__list {
    flex: 1;
    li {
      list-style-type: none;
    }
    .item {
      display: flex;
      flex-direction: row;
      padding-bottom: 1rem;
      &__icon {
        align-self: right;
      }
      &__text {
        text-align: left;
        padding-left: 1rem;
      }
    }
  }
}
</style>
