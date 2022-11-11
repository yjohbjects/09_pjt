<template>
<div>
  <button @click="getRandomMovie" class="w-25">PICK</button>
  <div class="d-flex justify-content-center">
    <div class="card my-5 w-25">
      <div v-if="gottenRandomMovie">
        <img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${gottenRandomMovie.poster_path}`"><br>
        
        <div class="mt-4">
          <h3>{{ gottenRandomMovie.title }}</h3>
        </div>
        <br>

        <div class="mx-3 my-3" v-if="gottenRandomMovie.overview">
          {{ gottenRandomMovie.overview }}
        </div>
        <div v-else class="my-3">
          <span>영화 정보가 아직 업데이트 되지 않았떠요</span>
        </div>
      </div>

      <div v-else>
        <img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`"><br>
        <div class="mt-4">
          <h3>{{ randomMovie.title }}</h3>
        </div><br>

        <div class="mx-3 my-3" v-if="randomMovie.overview">
          {{ randomMovie.overview }}
        </div>
        <div v-else class="my-3">
          <span>영화 정보가 아직 업데이트 되지 않았떠요</span>
        </div>
      </div>

    </div>
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