<template>
  <li class="character-card">
    <div class="character-card__character-details">
      <div class="character-details__description">
            <span class="character-details__name">
              {{ character.name }}
            </span>

        <span class="character-details__race">
              {{ character.race }}
            </span>
      </div>

      <ul class="character-details__statistics">
        <li>ATC: 0</li>
        <li>DEF: 10</li>
        <li>MAG: 1</li>
        <li>WIT: 5</li>
      </ul>
    </div>
    <img class="character-card__avatar"
         :src="character.avatar"
         alt="character">

    <img class="character-card__grave"
         src="@/assets/icons/tombstone/tombstone.svg"
         alt="tombstone">

    <span class="character-card__btn-delete"
          @click="deleteCharacter(character.id)">
          +
        </span>
  </li>
</template>

<script>
import { db } from '@/main';

export default {
  name: 'character-card',
  props:
    { character: Object },
  methods: {
    deleteCharacter(id) {
      db.collection('characters')
        .doc(id)
        .delete();
    },
  },
};
</script>

<style lang="scss" scoped>
.character-card {

  &__character-details {

    .character-details {

      &__description {
        display: flex;
        flex-direction: column;
      }

      &__name {
        font-size: 2.2rem;
      }

      &__race {
        font-size: 1.8rem;
      }

      &__statistics {
        list-style: none;
        font-size: 1.2rem;
        margin-top: 0.4rem;
      }
    }
  }

  &__avatar {
    width: 50%;
    position: absolute;
    top: 2rem;
    left: 1rem;
    opacity: 0.6;
  }

  &__grave {
    width: 15%;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: -0.5rem;
    right: 2rem;
  }

  &__btn-delete {
    font-size: 3.4rem;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    right: 1rem;
    transition: .4s;

    &:hover {
      color: $red
    }
  }
}
</style>
