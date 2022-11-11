<template>
  <div> 
    <h3>{{ movie.title }}</h3><br>
    <img :src="poster_path" height="280" width="180"/>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  data() {
    return {
      default_path: 'https://image.tmdb.org/t/p/original',
    }
  },
  computed: {
    poster_path() {
      return this.default_path + this.movie.poster_path
    }
  }
}
</script>

<style>

</style>