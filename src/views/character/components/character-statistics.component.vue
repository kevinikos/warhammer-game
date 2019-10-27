<template>
  <ul class="character-statistics">
    <li>ATC: 0</li>
    <li>DEF: 10</li>
    <li>MAG: 1</li>
    <li>WIT: 5</li>
  </ul>
</template>

<script>
export default {
  name: 'character-statistics',
  props:
    { character: Object },
};
</script>

<style lang="scss" scoped>
.character-statistics {
  list-style: none;
  font-size: 1.2rem;
  margin-top: 0.4rem;
}
</style>
