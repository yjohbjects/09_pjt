<template>
  <li @click="updateMovie">
    <span :class="{ isWatched: wishMovie.isWatched }">{{ wishMovie.title }}</span>
  </li>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    wishMovie: Object,
  },
  methods: {
    updateMovie() {
      this.$store.commit('UPDATE_MOVIE', this.wishMovie)
    }
  },
  
}
</script>

<style>
  .isWatched {
    text-decoration: line-through;
  }

</style>