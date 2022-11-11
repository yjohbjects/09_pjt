<template>
  <div id="app" class="">

  <div style="text-align: right" class="mx-5 bg-light">
    <router-link class="mx-2" style="text-decoration: none; color: inherit;" :to="{name: 'movies'}">Movies</router-link>
    <router-link class="mx-2" style="text-decoration: none; color: inherit;" :to="{name: 'random'}">Random</router-link>
    <router-link class="mx-2" style="text-decoration: none; color: inherit;" :to="{name: 'watchList'}">WatchList</router-link>
  </div>
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

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

section,
header {
  /* 전체 너비의 80% */
  width: 80%;      
  /* 양 옆 margin을 균등하게 배분 */
  margin: 0 auto;   
  /* 위, 아래 padding */
  padding: 1rem 0;  
}


</style>
