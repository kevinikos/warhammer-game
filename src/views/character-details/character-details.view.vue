<template>
  <div class="character-details">
    <div class="character-details__wrapper">
      <div class="character-details__character-description">
        <div class="character-description__title">
          Character
        </div>

        <div class="character-description__name">
          Name: {{ character.name }}
        </div>

        <div class="character-description__race">
          Race: {{ character.race }}
        </div>

        <div class="character-description__profession">
          Profession:
        </div>

        <div class="character-description__previous-profession">
          Previous profession:
        </div>
      </div>
      <div class="character-details__player-description">
        Player
      </div>
    </div>
    <div class="character-details__wrapper">
      <div class="character-details__statistics"></div>
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
  font-size: 1.4rem;

  &__wrapper {
    display: flex;
  }

  &__character-description,
  &__player-description,
  &__statistics,
  &__armor {
    width: 100%;
    border: 0.1rem solid $grey-300;
  }

  &__character-description,
  &__player-description {

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
