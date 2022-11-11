<template>
  <div v-if="randomMovie">
    <h1 @click="getRandomMovie">RandomView</h1>
    {{ randomMovie.title }}<br>
    <img :src="`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`" height="280" width="180">
  </div>
</template>

<script>
import _ from 'lodash'


export default {
  name: 'RandomView',
  data() {
    return  {
      default_path: 'https://image.tmdb.org/t/p/original',
    }
  },
  computed: {
    randomMovie() {
      return _.sample(this.$store.state.movies)
    },
  },
  methods: {
    getRandomMovie() {
      this.randomMovie = _.sample(this.movies)
    },
  },
  // created() {
  //     this.getRandomMovie()
  //   },
}
</script>

<style>

</style>