<template>
  <li class="creator-card">
    <input class="creator-card__name-input"
           type="text"
           placeholder="Character Name"
           v-model="character.name">

    <select class="creator-card__race-select"
            v-model="character.race">

      <option v-for="(race, i) in races"
              :value="race"
              :key="i">

        {{ race.name }}
      </option>
    </select>

    <button class="creator-card__btn-create"
            @click="addCharacter(character.name, character.race.name, character.race.avatar)">

      Create New Character
    </button>

    <img class="creator-card__mummy"
         src="@/assets/icons/mummy/mummy.png"
         alt="mummy">
  </li>
</template>

<script>
import { db } from '@/main';

export default {
  name: 'creator-card',
  data() {
    return {
      races: [
        {
          name: 'elf',
          avatar: 'https://vignette.wikia.nocookie.net/elderscrolls/images/8/87/WoodElf.png/revision/latest/scale-to-width-down/200?cb=20160915175759',
          statistics:
            {

            },
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
.creator-card {

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

  &__btn-create {
    background-color: $white;
    transition: .4s;
    cursor: cell;

    &:hover {
      background-color: #3D9970;
      color: $white;

      ~ .creator-card__mummy {
        transform: rotate(-50deg);
      }
    }
  }

  &__race-select {
    padding-left: 8rem;
  }

  &__mummy {
    width: 20%;
    position: absolute;
    top: 40%;
    right: -7rem;
    transform-origin: bottom left;
    transition: .6s ease-in-out;
  }
}
</style>
