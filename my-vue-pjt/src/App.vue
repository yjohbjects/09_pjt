<template>
  <div id="app">
    <router-link :to="{ name: 'movies' }">Movie</router-link> |
    <router-link :to="{ name: 'random' }">Random</router-link> |
    <router-link :to="{ name: 'watchList' }">WatchList</router-link>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_TMBD_API_KEY
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?'

export default {
  methods: {
    loadMovie() {
      // api url에 들어갈 인자들을 axios 밖에서 설정
      const params = {
        api_key: API_KEY,
        language: 'ko-KR',
      }

      axios({
        method: 'get',
        url: API_URL,
        params: params,
      })

      .then((response) => {
        // console.log(response)
        // this.movies = response.data
        // console.log(response.data.results[0])
        const movieData = response.data.results
        this.$store.commit('GET_MOVIE_DATA', movieData)
      })

      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.loadMovie()
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
