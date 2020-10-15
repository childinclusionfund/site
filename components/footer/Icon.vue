<template>
  <div class="icon">
    <a class="icon__link" aria-label="linkLabel" href="linkUrl" >
      <i :class="iconClass" class="icon__img"></i>
    </a>
    <div class="icon__label">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkUrl: {
      required: true,
      type: String,
    },
    linkLabel: {
      required: true,
      type: String,
    },
    iconClass: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  color: var(--text-color-secondary);
}
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__label {
    padding-top: .25rem;
    font-size: 1.25rem;
  }
  @media only screen  and (min-width : 1000px), only screen and (orientation: landscape) {
    flex-direction: row;
    &__label {
      padding-left: .5rem;
    }
  }
}
</style>