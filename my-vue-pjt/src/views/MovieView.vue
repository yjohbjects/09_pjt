<template>
  <div>
    <h1>MovieView</h1>
    <MovieCard 
    v-for="(movie, id) in movies"
    :key="id"
    :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard'
// import axios from 'axios'

// const API_KEY = process.env.VUE_APP_TMBD_API_KEY
// const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?'

export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  // data() {
  //   return {
  //     movies: [],
  //   }
  // },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  // methods: {
  //   loadMovie() {
  //     // api url에 들어갈 인자들을 axios 밖에서 설정
  //     const params = {
  //       api_key: API_KEY,
  //       language: 'ko-KR',
  //     }

  //     axios({
  //       method: 'get',
  //       url: API_URL,
  //       params: params,
  //     })

  //     .then((response) => {
  //       // console.log(response)
  //       // this.movies = response.data
  //       // console.log(response.data.results[0])
  //       const movieData = response.data.results
  //       this.$store.commit('GET_MOVIE_DATA', movieData)
  //     })

  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // },
  // created() {
  //   console.log(this.movies)
  //   this.loadMovie()
  //   console.log(this.movies)
  // }
}

</script>

<style>

</style>