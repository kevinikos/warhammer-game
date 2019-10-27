<template>
  <router-link tag="li"
               :to="{
               name: 'character-details',
               params: { id: character.id, character }}"
               class="character-card">

    <div class="character-card__character-details">
      <div class="character-details__description">
        <span class="character-details__name">
          {{ character.name }}
        </span>

        <span class="character-details__race">
          {{ character.race }}
        </span>
      </div>

      <character-statistics :character="character" />
    </div>
    <img class="character-card__avatar"
         :src="character.avatar"
         alt="character">

    <img class="character-card__grave"
         src="@/assets/icons/tombstone/tombstone.svg"
         alt="tombstone">

    <span class="character-card__btn-delete"
          @click.prevent.stop="deleteCharacter(character.id)">
          +
        </span>
  </router-link>
</template>

<script>
import { db }              from '@/main';
import CharacterStatistics from '@/views/character/components/character-statistics.component.vue';

export default {
  name: 'character-card',
  components:
    { CharacterStatistics },
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
