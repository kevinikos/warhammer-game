<template>
  <div class="character">
    <ul class="character__list">
      <li class="character__list-item"
          v-for="(character, i) in characters"
          :key="i">

        <div class="character__character-details">
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
        <img class="character__avatar"
             :src="character.avatar"
             alt="character">
      </li>

      <li class="character__list-item character__list-item--creator">
        <input class="character__name-input"
               type="text"
               placeholder="Character Name"
               v-model="character.name">

        <select class="character__race-select"
                v-model="character.race">

          <option v-for="(race, i) in races"
                  :value="race"
                  :key="i">

            {{ race.name }}
          </option>
        </select>

        <button class="character__btn-create"
                @click="addCharacter(character.name, character.race.name, character.race.avatar)">

          Create New Character
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/main';

export default {
  name: 'character',
  data() {
    return {
      characters: [],
      races: [
        {
          name: 'elf',
          avatar: 'https://vignette.wikia.nocookie.net/elderscrolls/images/8/87/WoodElf.png/revision/latest/scale-to-width-down/200?cb=20160915175759',
        },
        {
          name: 'human',
          avatar: 'https://vignette.wikia.nocookie.net/elderscrolls/images/2/24/Nord.png/revision/latest/scale-to-width-down/200?cb=20160915171049',
        },
        {
          name: 'khajit',
          avatar: 'https://vignette.wikia.nocookie.net/elderscrolls/images/c/c9/Khajiit1.png/revision/latest?cb=20160915180153',
        },
        {
          name: 'ork',
          avatar: 'https://vignette.wikia.nocookie.net/elderscrolls/images/3/3e/Lore-race-Orsimer.png/revision/latest?cb=20160915173320',
        },
      ],
      character: {
        name: '',
        race:
          {
            name: '',
            avatar: '',
          },
      },
    };
  },
  firestore() {
    return {
      characters: db.collection('characters'),
    };
  },
  methods: {
    addCharacter(name, race, avatar) {
      db.collection('characters')
        .add({
          name,
          race,
          avatar,
        });
    },
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
  }

  &__list-item {
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

    &--creator {
      background-color: $green;
    }

    &:not(&--creator):hover {
      background-color: $grey-300;
    }
  }

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

  &__name-input,
  &__btn-create,
  &__race-select {
    font-size: 1.4rem;
    text-align: center;
    width: 20rem;
    height: 4rem;

    &:focus {
      outline: none;
    }
  }

  &__race-select {
    padding-left: 8rem;
  }
}
</style>
