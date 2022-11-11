<template>
  <div id="app">
    <router-link :to="{ name: 'movies' }">Movie</router-link> |
    <router-link :to="{ name: 'random' }">Random</router-link> |
    <router-link :to="{ name: 'watchList' }">WatchList</router-link>
    <router-view/>
  </div>
</template>

<script>
// const API_KEY = process.env.VUE_APP_TMBD_API_KEY
// const API_REQUEST = 'https://api.themoviedb.org/3/movie/550?api_key=1958506c8d7b614bc3e3028c518b16fb'

export default {
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
