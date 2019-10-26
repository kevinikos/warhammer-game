<template>
  <div id="app">
    <nav-bar />
    <div class="main-content">
      <transition name="fade"
                  mode="out-in">

        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/nav-bar.component.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  max-width: 1200px;
  padding: 2.5rem 5rem;
  margin: 0 auto;

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .main-content {
    min-height: 30vh;
    background-color: $white;
    border-radius: 0.4rem;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 20rem solid $blue;
    border-right: 24rem solid transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-bottom: 20rem solid $red;
    border-left: 24rem solid transparent;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
}

</style>
