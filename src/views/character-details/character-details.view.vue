<template>
  <div class="character-details">
    <div class="character-details__personal-data"></div>
    <div class="character-details__wrapper">
      <div class="character-details__statistics">1</div>
      <div class="character-details__armor">
        <img class="character-details__character-contour"
             src="@/assets/icons/body/body.jpg"
             alt="character body">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character-details',
  props:
    { character: Object },
};
</script>

<style lang="scss" scoped>
.character-details {

  &__personal-data {
    width: 100%;
    height: 20rem;
    border: 1px solid red;
  }

  &__wrapper {
    display: flex;
  }

  &__statistics,
  &__armor {
    height: 60rem;
    width: 100%;
    border: 1px solid blue;
  }

  &__armor {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__character-contour {
    width: 80%;
  }
}
</style>
