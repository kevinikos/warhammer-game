<template>
  <div class="character">
    <ul class="character__list">
      <character-card v-for="(character, i) in characters"
                      :character="character"
                      :key="i" />

      <creator-card />
    </ul>
  </div>
</template>

<script>
import { db }        from '@/main';
import CharacterCard from '@/views/character/components/character-card.component.vue';
import CreatorCard   from '@/views/character/components/creator-card.component.vue';

export default {
  name: 'character',
  components:
    {
      CharacterCard,
      CreatorCard,
    },
  data() {
    return {
      characters: [],
    };
  },
  firestore() {
    return {
      characters: db.collection('characters'),
    };
  },
};
</script>

<style lang="scss" scoped>
.character {
  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;

    .character-card,
    .creator-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 25rem;
      border: 0.1rem solid $grey-300;
      cursor: pointer;
      transition: .4s;
      position: relative;
      overflow: hidden;
      padding-right: 8rem;

      &:not(.creator-card):hover {
        background-color: $grey-300;
      }
    }
  }
}
</style>
