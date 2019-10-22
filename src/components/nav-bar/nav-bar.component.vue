<template>
  <div class="nav-bar">

    <div class="nav-bar__logo">
      <img src="@/assets/icons/monster/monster.png"
           alt="monster logo">

    </div>
    <ul class="nav-bar__menu indicator">
      <router-link to="/"
                   tag="li"
                   class="nav-bar__menu-item"
                   active-class="nav-bar__menu-item--active"
                   exact>

        Character
      </router-link>
      <router-link to="/character-details"
                   tag="li"
                   class="nav-bar__menu-item"
                   active-class="nav-bar__menu-item--active">

        Character Details
      </router-link>
      <li class="nav-bar__menu-item">

        Roll a die
      </li>
      <li class="nav-bar__menu-item">

        Game map
      </li>
      <li class="nav-bar__menu-item">

        Account settings
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 6rem;
  display: flex;
  background-color: $white;
  border: $primary-border;
  border-radius: 0.4rem;
  letter-spacing: $primary-spacing;
  margin-bottom: 5rem;

  &__logo {
    width: 5rem;
    align-self: flex-end;
    margin: 0 5rem;

    img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }

  &__menu {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
  }

  &__menu-item {
    font-size: 1.4rem;
    width: $width;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s;
    position: relative;

    &--active {
      color: $red;
      background-color: $grey-300;
    }

    &::after {
      content: '';
      display: block;
      background-image: url("../../assets/icons/sword/sword.png");
      background-size: cover;
      transform: rotate(-45deg) translateY(-50%);
      transition: .4s ease-in-out;
      width: 3rem;
      height: 3rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: -1;
    }

    &:not(&--active):hover {
      background-color: $grey-100;

      &::after {
        bottom: -5rem;
      }
    }
  }
}
</style>
