<template>
<div>
  <button @click="getRandomMovie">RandomView</button>
  <div v-if="gottenRandomMovie">
    {{ gottenRandomMovie.title }}<br>
    <img :src="`https://image.tmdb.org/t/p/original${gottenRandomMovie.poster_path}`" height="280" width="180">
  </div>
  <div v-else>
    {{ randomMovie.title }}<br>
    <img :src="`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`" height="280" width="180">
  </div>

</div>
</template>

<script>
import _ from 'lodash'


export default {
  name: 'RandomView',
  data() {
    return  {
      default_path: 'https://image.tmdb.org/t/p/original',
      gottenRandomMovie: null
    }
  },
  computed: {
    randomMovie() {
      return _.sample(this.$store.state.movies)
    },
  },
  methods: {
    getRandomMovie() {
      this.gottenRandomMovie = _.sample(this.$store.state.movies)
    },
  },
}
</script>

<style>

</style>